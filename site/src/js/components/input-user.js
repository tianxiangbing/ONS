App.InputUserComponent = Ember.Component.extend({
	islook:false,
	actions:{
		lookpwd:function(){
			this.set("islook",!this.get('islook'));
		},
		click:function(){
			this.sendAction('action',this.get('username'),this.get('password'))
		}
	}
});