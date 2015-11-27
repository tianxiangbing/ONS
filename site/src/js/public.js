/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-11-10
 * Time: 16:51:53
 * Contact: 55342775@qq.com  http://www.lovewebgames.com/
 */
function ajax(param) {
	var dtd = $.Deferred();
	Ember.$.ajax({
		url: "json/" + param.url+".json",
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

function log(msg) {
	console && console.log(msg);
}

function alert() {
	$.alert.apply(null, Array.prototype.slice.call(arguments))
}
window.alert = alert;
var LocalStorage = {
	add: function(key, value) {
		localStorage[key] = value;
	},
	remove: function(key) {
		localStorage.removeItem(key);
	}
}

function initFontSize() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
initFontSize();
$(window).on('orientationchange resize', initFontSize);
Ember.Handlebars.helper('equal', function(v1, v2, options) {
	if (v1 == v2) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});