App.InputUserComponent = Ember.Component.extend({
	islook: false,
	classname: function() {
		return 'btn btn-big mt20 '+this.get('btnClass')
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