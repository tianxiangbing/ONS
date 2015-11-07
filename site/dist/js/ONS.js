var App = Ember.Application.create();
App.InputUserComponent = Ember.Component.extend({
});
App.LoginController = Ember.Controller.extend({
	username: '',
	password: '',
	actions: {
		login: function() {
			var _this = this;
			App.User.login(this.get('username'), this.get('password')).done(function(data) {
				if (!data.sex || !data.area) {
					alert('请先完善资料！');
					_this.transitionToRoute('info');
				}
			})
		}
	}
});
App.ChangepwdController = Ember.Controller.extend({
	actions:{
		changepwd:function(){
			var _this = this;
			var model  = this.get('model');
			UserInfo.username = model.username;
			UserInfo.password = model.password;
			App.User.changepwd(UserInfo).done(function(){
				alert('修改成功',null,function(){
					_this.transitionToRoute('info');
				});
			});
		}
	}
});
App.Model = Ember.Object.extend();
App.Model.reopenClass({
	find: function(id, type) {
		var foundItem = this.contentArrayContains(id, type);
		if (!foundItem) {
			foundItem = type.create({
				id: id,
				isLoaded: false
			});
			Ember.get(type, 'collection').pushObject(foundItem);
		}
		return foundItem
	},
	contentArrayContains: function(id, type) {
		var arr = Ember.get(type, 'collection');
		var obj = null;
		arr.forEach(function(item) {
			if (item.id == id) {
				obj = item;
				return;
			}
		});
		return obj;
	},
	findAll: function(url, type, key) {
		var collection = this;
		ajax({
			url: url
		}).done(function(data) {
			$.each(data[key], function(i, row) {
				var item = collection.contentArrayContains(row.id, type);
				if (!item) {
					item = type.create();
					Ember.get(type, 'collection').pushObject(item);
				}
				item.setProperties(row);
				item.set('isLoaded', true);
			});
		});
		return Ember.get(type, 'collection')
	}
});

App.User = App.Model.extend();
App.User.reopenClass({
	collection: Ember.A(),
	find: function(id) {
		return App.Model.find(id, App.User)
	},
	findAll: function() {
		return App.Model.findAll('user', App.User, 'users');
	},
	checkToken: function() {
		/*
			return ajax({
				url: 'checkToken',
				data: {
					token: localStorage['token']
				}
			}).promise();
			*/
		var dtd= $.Deferred();
		LocalStorageCache.get('token').done(function(){
			dtd.resolve();
		}).fail(function(){
			dtd.reject();
		})
		return dtd.promise();
	},
	login: function(user) {
		return ajax({
			url: 'login',
			data: user
		}).done(function(data){
			LocalStorageCache.add('userinfo' , data);
			LocalStorageCache.add('token',data.token,1111110);
		});
	},
	logout:function(){
		//LocalStorageCache.remove('token');
	},
	changepwd:function(user){
		return ajax({
			url:'changepwd',
			data:user
		})
	}
});

var UserInfo={};
function ajax(param) {
	var dtd = $.Deferred();
	Ember.$.ajax({
		url: "json/" + param.url,
		dataType: 'jsonp',
		data: param.data,
		jsonpCallback: "callback",
		success: function(result) {
			if (result.state) {
				dtd.resolve(result.content);
			} else {
				alert(result.msg);
				dtd.reject(result);
			}
		}
	});
	return dtd.promise();
};

function alert() {
	$.alert.apply(null, Array.prototype.slice.call(arguments))
}
window.alert = alert;
var LocalStorage = {
	add: function(key, value) {
		localStorage[key] = value;
	},
	remove: function(key) {
		localStorage.removeItem(key);
	}
}
function initFontSize() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
initFontSize()
$(window).on('orientationchange resize', initFontSize);
Ember.Router.map(function() {
	this.resource('index', {
		path: "/"
	}, function() {
		this.resource('info');
		this.resource('list', {
			path: "list"
		}, function() {
			this.resource('follow');
			this.resource('dynamic');
		});
		this.resource('logout');
		this.resource('changepwd');
	});
	this.resource('test', {
		path: 'test'
	}, function() {
		this.resource('das');
	});
	this.route('login', {
		path: 'login'
	});
	this.resource('personal-data', {
		path: 'personal-data/:id'
	});
	this.resource('regist',{path:'regist'});
});
App.IndexRoute = Ember.Route.extend({
	beforeModel: function() {
		var _this = this;
		App.User.checkToken().fail(function(r) {
			console.log("error")
			_this.transitionTo('login')
		}).done(function() {
			console.log(11)
		});
		console.log(1)
	},
	deactivate: function() {
		App.User.logout();
	}
});
App.LoginRoute = Ember.Route.extend({
	model: function() {}
});
App.InfoRoute = Ember.Route.extend({
	model: function() {
		return LocalStorageCache.get('userinfo');
	}
});
App.LogoutRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('login');
	}
});
App.ChangepwdRoute = Ember.Route.extend({
	model: function() {
		console.log('change')
		return LocalStorageCache.get('userinfo');
	}
});
App.ListRoute = Ember.Route.extend({
	model: function() {
		return  App.User.findAll();
	}
});
App.DynamicRoute = Ember.Route.extend({
	model: function() {
		console.log('dynamic');
		return {
			test: 2222
		}
	},
	renderTemplate: function(controller, model) {
		this.render('list', {
			model: {
				test: 2222222
			}
		});
	}
});
