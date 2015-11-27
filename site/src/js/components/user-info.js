/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-11-26
 * Time: 11:16:56
 * Contact: 55342775@qq.com  http://www.lovewebgames.com/
 */
App.UserInfoComponent = Ember.Component.extend({
	actions: {
		linkInfo: function(item) {
			//this.transitionToRoute('personal-data',item);
			this.sendAction('action', item);
		},
		like: function() {
			var that = this;
			var id = +new Date();
			if (!this.get('item.likeCollection')) {
				this.set('item.likeCollection', Ember.A());
			}
			this.get('item.likeCollection').pushObject({
				id: id
			});
			setTimeout(function() {
				(that.get('item.likeCollection')||[]).forEach(function(item){
					if(item.id == id){
						that.get('item.likeCollection').removeObject(item);
					}
				})
			}, 3000);
			var praises = this.controller.get('item.publish.praises') + 1;
			this.controller.set('item.publish.praises', praises);
		}
	}
})