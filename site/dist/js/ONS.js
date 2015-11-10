/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-11-10
 * Time: 16:51:35
 * Contact: 55342775@qq.com  http://www.lovewebgames.com/
 */
var App = Ember.Application.create();
/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-11-10
 * Time: 16:51:59
 * Contact: 55342775@qq.com  http://www.lovewebgames.com/
 */
App.InputUserComponent = Ember.Component.extend({
	islook: false,
	isReadOnly: function() {
		return this.get('param')=='change'
	}.property('param'),
	classname: function() {
		return 'btn btn-big mt20 ' + this.get('btnClass')
	}.property("btnClass"),
	actions: {
		lookpwd: function() {
			//this.set("islook", !this.get('islook'));
			this.toggleProperty('islook');
		},
		click: function() {
			this.sendAction('action', this.get('username'), this.get('password'))
		}
	}
});
/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-11-10
 * Time: 16:51:07
 * Contact: 55342775@qq.com  http://www.lovewebgames.com/
 */
App.LoginController = Ember.Controller.extend({
	password: '',
	username: '',
	actions: {
		login: function() {
			console.log(arguments)
			var _this = this;
			var uname = this.get('username') || '';
			var pwd = this.get('password') || '';
			if (!(/^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(uname) || /^1[3|5|7|8|][0-9]{9}$/.test(uname))) {
				alert('用户名必须为手机号或邮箱.');
				return false;
			}
			if (pwd.length < 6 || pwd.length > 18) {
				alert('密码必须在6-18个字之间');
				return false;
			}
			App.User.login(uname, pwd).done(function(data) {
				LocalStorageCache.add('userinfo', data);
				LocalStorageCache.add('username', uname);
				LocalStorageCache.add('token', data.token);
				if (!data.sex || !data.area) {
					alert('请先完善资料！');
					_this.transitionToRoute('info');
				}else{
					_this.transitionToRoute('index');
				}
			})
		}
	}
});
App.RegistController = Ember.Controller.extend({
	actions: {
		regist: function(username, password) {
			log(arguments)
		}
	}
});
App.ChangepwdController = Ember.Controller.extend({
	actions: {
		changepwd: function(username,password) {
			var _this = this;
			UserInfo.username= username;
			UserInfo.password = password;
			App.User.changepwd(UserInfo).done(function() {
				alert('修改成功', null, function() {
					_this.transitionToRoute('info');
				});
			});
		}
	}
});

App.IndexController = Ember.Controller.extend({
	classname: '',
	actions: {
		toggleMenu: function() {
			var cls = this.get('classname');
			if (!cls) {
				this.set('classname', 'hide');
			} else {
				this.set('classname', '');
			}
		}
	}
})
/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-11-10
 * Time: 16:51:49
 * Contact: 55342775@qq.com  http://www.lovewebgames.com/
 */
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
		});
	},
	logout:function(){
		LocalStorageCache.clear();
	},
	changepwd:function(user){
		return ajax({
			url:'changepwd',
			data:user
		})
	}
});

var UserInfo={};
/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-11-10
 * Time: 16:51:53
 * Contact: 55342775@qq.com  http://www.lovewebgames.com/
 */
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

function log(msg) {
	console && console.log(msg);
}

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
initFontSize();
$(window).on('orientationchange resize', initFontSize);
Ember.Handlebars.helper('equal', function(v1, v2, options) {
	if (v1 == v2) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});
/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-11-10
 * Time: 16:51:56
 * Contact: 55342775@qq.com  http://www.lovewebgames.com/
 */
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
		this.resource('write');
		this.resource('friend');
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
		//
	}
});
App.LoginRoute = Ember.Route.extend({
	model: function() {
		return {};
	},
	setupController:function(c,m){
		LocalStorageCache.get('username').done(function(r){
			c.set('username',r)
		});
	}
});
App.InfoRoute = Ember.Route.extend({
	model: function() {
		return LocalStorageCache.get('userinfo');
	}
});
App.LogoutRoute = Ember.Route.extend({
	redirect: function() {
		App.User.logout();
		this.transitionTo('login');
	}
});
App.ChangepwdRoute = Ember.Route.extend({
	model: function() {
		console.log('change')
		//return LocalStorageCache.get('userinfo');
	},
	setupController:function(c,m){
		LocalStorageCache.get('username').done(function(r){
			c.set('username',r);
		});
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
		return [{
			test: 2222
		}]
	},
	renderTemplate: function(controller, model) {
		this.render('list', {
			model: [{
				test: 2222222
			}]
		});
	}
});
