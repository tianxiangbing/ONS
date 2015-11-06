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