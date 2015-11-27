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
var View = {
	didInsertElement: function() {
		var that = this;
		this._scroll = function(e) {
			that.scroll(e);
		}
		var view = this;
		if (this._childViews[0]._childViews.length == 0 || this._childViews[0]._childViews[0]._childViews.length == 0) {
			this.controller.send('go')
		}
		Ember.$(document).on('scroll', this._scroll)
	},
	willDestroyElement: function() {
		Ember.$(document).off('scroll', this._scroll);
	},
	scrollTop: function() {
		return Ember.$(document).scrollTop();
	},
	scroll: function(e) {
		var ready = this.controller.ready;
		var scrollTop = this.scrollTop();
		//console.log('scroll',scrollTop);
		if (ready && scrollTop) {
			var clientHeight = document.documentElement.clientHeight;
			if (scrollTop + clientHeight == $(document).height()) {
				//console.log('request')
				this.controller.send('go')
			}
		}
	}
};
App.FriendIndexView = Ember.View.extend(View);

App.ListIndexView = Ember.View.extend(View);

App.WriteView = Ember.View.extend({
	uploaded: true,
	didInsertElement: function() {
		var that = this;

		$('.txt-content').WordCount({
			max: 300,
			isOverflowCut: false,
			overClass: "over-number",
			num: $(" .counter em"),
			withButton: ".click",
			minHeight: 40,
			overflowCallback: function() {
				//this.textBox.addClass('over-number');
				//$(".counter em").addClass('over-number');
			},
			changeCallback: function(num) {
				//var n = this.max - num;
				//$(" .counter em").html(n);
			},
			passClallback: function() {
				//this.textBox.removeClass('over-number');
				//$(".counter em").removeClass('over-number');
			},
			isByte: true //字节
		});

		var upload = new Mobile_upload();
		upload.init({
			target: $('.upload-img'),
			callback: function(result, name, postName) {
				that.controller.send('bindImg',result);
			}
		});

	}
});
