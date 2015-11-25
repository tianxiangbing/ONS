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
			this.route('personal-data', {
				path: 'personal-data/:id'
			}, function() {
				this.route('single', {
					path: 'single/:id'
				});
			});
		});
		this.resource('logout');
		this.resource('changepwd');
		this.resource('write');
		this.resource('edit');
		this.resource('friend', {
			path: 'friend'
		}, function() {
			this.route('personal-data', {
				path: 'personal-data/:id'
			});
		});
	});
	this.route('login', {
		path: 'login'
	});
	this.resource('regist', {
		path: 'regist'
	});
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
	setupController: function(c, m) {
		LocalStorageCache.get('username').done(function(r) {
			c.set('username', r)
		});
	}
});
App.InfoRoute = Ember.Route.extend({
	model: function() {
		return LocalStorageCache.get('userinfo');
	}
});
App.EditRoute = Ember.Route.extend({
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
	setupController: function(c, m) {
		LocalStorageCache.get('username').done(function(r) {
			c.set('username', r);
		});
	}
});
App.ListIndexRoute = Ember.Route.extend({
	model: function() {
		return [];
	},
	setupController: function(c, m) {
		//c.send('go');
	}
});
App.FriendIndexRoute = Ember.Route.extend({
	model: function() {
		//return App.User.findAll();
		return [];
	},
	setupController: function(c, m) {
		//c.send('go');
		/*
			var that = this;
			App.User.findAll().done(function(r) {
				c.set("model", r.users);
				c.set('ready',true)
			});
			//c.send('start')
		 */
	}
});
App.ListPersonalDataSingleRoute = Ember.Route.extend({
	model: function() {
		this.transitionTo('list.personal-data');
	}
})