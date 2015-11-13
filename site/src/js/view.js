App.EditView = Ember.View.extend({
	didInsertElement:function(){
		var upload = new Mobile_upload();
		var img = $('#editAvatar>img');
		upload.init({target:$('#editAvatar'),callback:function(result,name,postName){
			img.attr('src',result)
		}});

		var selectArea = new MobileSelectArea();
		selectArea.init({trigger:$('#txt_area'),value:$('#txt_area').data('value'),data:'json/area.json'});
	}
});