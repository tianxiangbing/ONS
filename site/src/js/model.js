App.Model = Ember.Object.extend();
App.Model.reopenClass({
	find: function(id, type) {
		var foundItem = this.contentArrayContains(id, type);
		if (!foundItem) {
			foundItem = type.create({
				id: id,
				isLoaded: false
			});
			Ember.get(type, 'collection').pushObject(foundItem);
		}
		return foundItem
	},
	contentArrayContains: function(id, type) {
		var arr = Ember.get(type, 'collection');
		var obj = null;
		arr.forEach(function(item) {
			if (item.id == id) {
				obj = item;
				return;
			}
		});
		return obj;
	},
	findAll: function(url, type, key) {
		var collection = this;
		ajax({
			url: url
		}).done(function(data) {
			$.each(data[key], function(i, row) {
				var item = collection.contentArrayContains(row.id, type);
				if (!item) {
					item = type.create();
					Ember.get(type, 'collection').pushObject(item);
				}
				item.setProperties(row);
				item.set('isLoaded', true);
			});
		});
		return Ember.get(type, 'collection')
	}
});

App.User = App.Model.extend();
App.User.reopenClass({
	collection: Ember.A(),
	find: function(id) {
		return App.Model.find(id, App.User)
	},
	findAll: function() {
		return App.Model.findAll('user', App.User, 'users');
	},
	checkToken: function() {
		/*
			return ajax({
				url: 'checkToken',
				data: {
					token: localStorage['token']
				}
			}).promise();
			*/
		var dtd= $.Deferred();
		LocalStorageCache.get('token').done(function(){
			dtd.resolve();
		}).fail(function(){
			dtd.reject();
		})
		return dtd.promise();
	},
	login: function(user) {
		return ajax({
			url: 'login',
			data: user
		}).done(function(data){
			LocalStorageCache.add('userinfo' , data);
			LocalStorageCache.add('token',data.token,1111110);
		});
	},
	logout:function(){
		//LocalStorageCache.remove('token');
	},
	changepwd:function(user){
		return ajax({
			url:'changepwd',
			data:user
		})
	}
});

var UserInfo={};