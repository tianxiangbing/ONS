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
App.FriendView = Ember.View.extend({
	didInsertElement: function() {
		/*
		var view = this;
		var scroll = new ScrollLoad();
		var options = {
			container: $('.mem-list'),
			url: ajax('list'),
			format: function() {
				Ember.tryInvoke(view.get('controller'), 'loadMore');
			}
		};
		scroll.init(options);
		this.$().bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
			debugger;
			if (isInView) {
				Ember.tryInvoke(view.get('controller'), 'loadMore');
			}
		});
		 */
	}
});

App.ListView = Ember.View.extend({
	didInsertElement: function() {
		//debugger;
	}
});