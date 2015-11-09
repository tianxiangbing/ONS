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
		changepwd: function() {
			var _this = this;
			var model = this.get('model');
			UserInfo.username = model.username;
			UserInfo.password = model.password;
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