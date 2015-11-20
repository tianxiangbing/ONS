App.EditView = Ember.View.extend({
	didInsertElement: function() {
		var upload = new Mobile_upload();
		var img = $('#editAvatar>img');
		upload.init({
			target: $('#editAvatar'),
			callback: function(result, name, postName) {
				img.attr('src', result)
			}
		});

		var selectArea = new MobileSelectArea();
		selectArea.init({
			trigger: $('#txt_area'),
			value: $('#txt_area').data('value'),
			data: 'json/area.json'
		});
	}
});
var View ={
	didInsertElement: function() {
		this._childViews.length = 0;
		var that = this;
		this._scroll = function(e) {
			that.scroll(e);
		}
		var view = this;
		Ember.$(document).on('scroll', this._scroll)
	},
	willDestroyElement: function() {
		Ember.$(document).off('scroll', this._scroll);
	},
	scrollTop:function(){
		return Ember.$(document).scrollTop();
	},
	scroll: function(e) {
		var ready = this.controller.ready;
		var scrollTop = this.scrollTop();
		//console.log('scroll',scrollTop);
		if (ready &&scrollTop) {
			var clientHeight = document.documentElement.clientHeight;
			if(scrollTop + clientHeight == $(document).height()){
				//console.log('request')
				this.controller.send('go')
			}
		}
	}
};
App.FriendIndexView = Ember.View.extend(View);

App.ListIndexView = Ember.View.extend(View);