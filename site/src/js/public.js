
function ajax(param) {
	var dtd = $.Deferred();
	Ember.$.ajax({
		url: "json/" + param.url,
		dataType: 'jsonp',
		data: param.data,
		jsonpCallback: "callback",
		success: function(result) {
			if (result.state) {
				dtd.resolve(result.content);
			} else {
				alert(result.msg);
				dtd.reject(result);
			}
		}
	});
	return dtd.promise();
};
function alert(){
	$.alert.apply(null,Array.prototype.slice.call(arguments))
}
window.alert=alert;

var LocalStorage = {
	add:function(key,value){
		localStorage[key]=value;
	},remove:function(key){
		localStorage.removeItem(key);
	}
}