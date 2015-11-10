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