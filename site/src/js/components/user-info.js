/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-11-26
 * Time: 11:16:56
 * Contact: 55342775@qq.com  http://www.lovewebgames.com/
 */
App.UserInfoComponent = Ember.Component.extend({
	actions:{
		linkInfo:function(item){
			//this.transitionToRoute('personal-data',item);
			this.sendAction('action',item);
		}
	}
})