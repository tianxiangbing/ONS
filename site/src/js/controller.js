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
				} else {
					_this.transitionToRoute('friend');
				}
			});
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
		changepwd: function(username, password) {
			var _this = this;
			UserInfo.username = username;
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
});

App.EditController = Ember.Controller.extend({
	isShowSex: false,
	actions: {
		showSex: function() {
			this.set('isShowSex', true);
		},
		setSex: function(arg) {
			this.set('model.sex', arg);
			this.set('isShowSex', false);
		},
		cancel: function() {
			this.set('isShowSex', false);
		}
	}
});
App.ListIndexController = Ember.ArrayController.extend({
	canLoadMore: true,
	ready: false,
	isload: false,
	pageIndex: 0,
	List: [],
	actions: {
		start: function() {
			this.set("isload", true);
			console.log('start')
		},
		follow: function(item) {
			//var d = this.get('model');
			//var item = d.findBy('id',item.id);
			//item.set('isFollow', true);
			Ember.set(item,"isFollow",true)
		},
		cancel: function(item) {
			//item.set('isFollow', false);
			Ember.set(item,"isFollow",false)
		},
		go: function() {
			var pageIndex = this.get('pageIndex');
			pageIndex++;
			this.set('ready', false);
			var that = this;
			this.set('pageIndex', pageIndex);
			App.User.findList(pageIndex).done(function(r) {
				var list = that.get('List').concat(r.users);
				that.set('List', list)
				that.set("content", that.get('List'));
				that.set('ready', true)
			});
		}
	}
});
App.FriendIndexController = Ember.Controller.extend({
	ready: false,
	isload: false,
	pageIndex: 0,
	List: [],
	readyObserver: function() {
		console.log('change');
		this.set("isload", true);
	}.observes('ready'),
	actions: {
		start: function() {
			this.set("isload", true);
			console.log('start')
		},
		go: function() {
			var pageIndex = this.get('pageIndex');
			pageIndex++;
			//this.set('ready',false);
			var that = this;
			this.set('pageIndex', pageIndex);
			App.User.findAll(pageIndex).done(function(r) {
				var list = that.get('List').concat(r.users);
				that.set('List', list)
				that.set("model", that.get('List'));
				that.set('ready', true)
			});
		}
	}
});


App.ListPersonalDataIndexController = Ember.ObjectController.extend({
	ispraises: false,
	contentObserver: function() {
		//console.log('controller')
		//console.log('Blog.BlogPostController contentObserver: ' + this.get('content.id'));
		if (this.get('content')) {
			var page = this.get('content');
			var that = this;
			App.User.findInfo(this.get('content.id')).done(function(result) {
				console.log(result)
				that.set('userInfo', result);
				that.set('ispraises', result.ispraises);
			})
		}
	}.observes('content'),
	actions: {
		changePraises: function() {
			this.toggleProperty('ispraises');
		},
		linkSingle:function(param){
			console.log(param)
			this.transitionToRoute('list.personal-data.single',param);
		}
	}
});
App.ListPersonalDataSingleController = Ember.ObjectController.extend({
	needs:['ListPersonalDataIndex'],
	nickname:null,
	avatar:null,
	contentObserver: function() {
		var m = this.get('model');
		this.set('item', {
			avatar:this.get('avatar'),
			nickname: this.get('nickname'),
			id: m.id,
			publish: {
				img: this.get('img'),
				desc: this.get('desc'),
				date: this.get('date'),
				praises: this.get('praises')
			}
		});
	}.observes('model'),
});

App.FriendPersonalDataIndexController = Ember.ObjectController.extend({
	ispraises: false,
	nickname:null,
	avatar:null,
	contentObserver: function() {
		//console.log('controller')
		//console.log('Blog.BlogPostController contentObserver: ' + this.get('content.id'));
		if (this.get('content')) {
			var page = this.get('content');
			var that = this;
			App.User.findInfo(this.get('content.id')).done(function(result) {
				console.log(result)
				that.set('userInfo', result);
				that.set('ispraises', result.ispraises);
			})
		}
	}.observes('content'),
	actions: {
		changePraises: function() {
			this.toggleProperty('ispraises');
		},
		linkSingle:function(param){
			console.log(param)
			this.transitionToRoute('friend.personal-data.single',param);
		}
	}
});
App.FriendPersonalDataSingleController = Ember.ObjectController.extend({
	needs:['FriendPersonalDataIndex'],
	nickname:null,
	avatar:null,
	contentObserver: function() {
		var m = this.get('model');
		this.set('item', {
			avatar:this.get('avatar'),
			nickname: this.get('nickname'),
			id: m.id,
			publish: {
				img: this.get('img'),
				desc: this.get('desc'),
				date: this.get('date'),
				praises: this.get('praises')
			}
		});
	}.observes('model'),
});
