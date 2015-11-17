Ember.TEMPLATES["changepwd"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"login changepwd\">\r\n");
  data.buffer.push(escapeExpression((helper = helpers['input-user'] || (depth0 && depth0['input-user']),options={hash:{
    'username': ("username"),
    'password': ("password"),
    'userable': (true),
    'param': ("change"),
    'btnClass': ("btn-green"),
    'action': ("changepwd"),
    'btnText': ("修改密码")
  },hashTypes:{'username': "ID",'password': "ID",'userable': "BOOLEAN",'param': "STRING",'btnClass': "STRING",'action': "STRING",'btnText': "STRING"},hashContexts:{'username': depth0,'password': depth0,'userable': depth0,'param': depth0,'btnClass': depth0,'action': depth0,'btnText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-user", options))));
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/input-user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("username"),
    'readonly': ("readonly"),
    'class': ("txt-input"),
    'placeholder': ("邮箱/手机号码")
  },hashTypes:{'value': "ID",'readonly': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'readonly': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("username"),
    'class': ("txt-input"),
    'placeholder': ("邮箱/手机号码")
  },hashTypes:{'value': "ID",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n<i class=\"iconfont pwd-look acitve\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "lookpwd", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&#xe616;</i>\r\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("password"),
    'class': ("txt-input"),
    'placeholder': ("6-18位密码")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n<i class=\"iconfont pwd-look\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "lookpwd", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&#xe617;</i>\r\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("password"),
    'class': ("txt-input"),
    'placeholder': ("6-18位密码")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

  data.buffer.push("<div class=\"input-uname\">\r\n<i class=\"iconfont\">&#xe61b;</i>\r\n");
  stack1 = helpers['if'].call(depth0, "isReadOnly", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n<div class=\"input-pwd\">\r\n<i class=\"iconfont\">&#xe60e;</i>\r\n");
  stack1 = helpers['if'].call(depth0, "islook", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n<button  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("classname")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "click", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "btnText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>");
  return buffer;
  
});

Ember.TEMPLATES["components/user-info"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n	<div class=\"item\">\r\n		<div class=\"head\">\r\n			<div class=\"avatar\">\r\n				<img  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("item.avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n			</div>\r\n			<div class=\"mem-desc\">\r\n				<div class=\"nickname\">\r\n				");
  stack1 = helpers._triageMustache.call(depth0, "item.nickname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				</div>\r\n				<div class=\"time\">");
  stack1 = helpers._triageMustache.call(depth0, "item.publish.date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"pub-content\">\r\n			<div class=\"pub-img\">\r\n				<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("item.publish.img")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n			</div>\r\n			<div class=\"pub-desc\">\r\n				");
  stack1 = helpers._triageMustache.call(depth0, "item.publish.desc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			</div>\r\n			<div class=\"pub-praises\">\r\n				");
  stack1 = helpers._triageMustache.call(depth0, "item.publish.praises", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" 个赞\r\n			</div>\r\n		</div>\r\n	</div>\r\n	");
  return buffer;
  }

  data.buffer.push("<div class=\"mem-list\">\r\n	");
  stack1 = helpers.each.call(depth0, "item", "in", "data", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n<div class=\"edit\">\r\n	<div class=\"row\">\r\n		<div class=\"label\">头像</div>\r\n		<div class=\"edit-info\" id=\"editAvatar\">\r\n			<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n		</div>\r\n	</div>\r\n	<div class=\"row\">\r\n		<div class=\"label\">昵称</div>\r\n		<div class=\"edit-info\">\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("nickname")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"row\">\r\n		<div class=\"label\">账号</div>\r\n		<div class=\"edit-info\">\r\n			");
  stack1 = helpers._triageMustache.call(depth0, "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class=\"edit\">\r\n	<div class=\"row\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showSex", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n		<div class=\"label\">性别</div>\r\n		<div class=\"edit-info\">\r\n			");
  stack1 = helpers._triageMustache.call(depth0, "sex", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"row\">\r\n		<div class=\"label\">地区</div>\r\n		<div class=\"edit-info\">\r\n			<input type=\"text\" id=\"txt_area\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("area"),
    'data-value': ("areaid")
  },hashTypes:{'value': "STRING",'data-value': "ID"},hashContexts:{'value': depth0,'data-value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\r\n		</div>\r\n	</div>\r\n	<div class=\"row\">\r\n		<div class=\"label\">个性签名</div>\r\n		<div class=\"edit-info\">\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("autograph")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n</div>\r\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n<div class=\"mask\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n</div>\r\n<div class=\"box sex-box\">\r\n	<div class=\"item\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSex", "男", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n		男\r\n	</div>\r\n	<div class=\"item\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSex", "女", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n		女\r\n	</div>\r\n</div>\r\n");
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "isShowSex", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["friend"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['user-info'] || (depth0 && depth0['user-info']),options={hash:{
    'data': ("model")
  },hashTypes:{'data': "ID"},hashContexts:{'data': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-info", options))));
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("&#xe61a;");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("&#xe622;");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("&#xe60b;");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("&#xe61d;");
  }

  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<div class=\"menu\">\r\n	<div class=\"menu-container\">\r\n		<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("classname")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("members iconfont menu-child"),
    'activeClass': ("actived")
  },hashTypes:{'class': "STRING",'activeClass': "STRING"},hashContexts:{'class': depth0,'activeClass': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "list", options) : helperMissing.call(depth0, "link-to", "list", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("write iconfont menu-child"),
    'activeClass': ("actived")
  },hashTypes:{'class': "STRING",'activeClass': "STRING"},hashContexts:{'class': depth0,'activeClass': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "write", options) : helperMissing.call(depth0, "link-to", "write", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("home iconfont menu-child"),
    'activeClass': ("actived")
  },hashTypes:{'class': "STRING",'activeClass': "STRING"},hashContexts:{'class': depth0,'activeClass': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "friend", options) : helperMissing.call(depth0, "link-to", "friend", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("user-center iconfont menu-child"),
    'activeClass': ("actived")
  },hashTypes:{'class': "STRING",'activeClass': "STRING"},hashContexts:{'class': depth0,'activeClass': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "info", options) : helperMissing.call(depth0, "link-to", "info", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</div>\r\n		<a class=\"select-menu iconfont\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMenu", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&#xe621;</a>\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["info"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n	<div class=\"user-desc\">\r\n		<div class=\"nickname\">");
  stack1 = helpers._triageMustache.call(depth0, "nickname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n		<div class=\"username\">");
  stack1 = helpers._triageMustache.call(depth0, "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n	</div>\r\n	<div class=\"go iconfont\">&#xe608;</div>\r\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"iconfont f16 mr10\">&#xe60e;</i>修改密码\r\n	<div class=\"go iconfont\">&#xe608;</div>");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<i class=\"iconfont f16 mr10\">&#xe624;</i>退出\r\n	<div class=\"go iconfont\">&#xe608;</div>");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("user-info toolbar")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "edit", options) : helperMissing.call(depth0, "link-to", "edit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("toolbar p2")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "changepwd", options) : helperMissing.call(depth0, "link-to", "changepwd", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("toolbar p2")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logout", options) : helperMissing.call(depth0, "link-to", "logout", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n	<div class=\"item\">\r\n		<div class=\"head\">\r\n			<div class=\"avatar\">\r\n				<img  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("item.avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n			</div>\r\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "personal-data", "item", options) : helperMissing.call(depth0, "link-to", "personal-data", "item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			");
  stack1 = helpers['if'].call(depth0, "item.isFollow", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</div>\r\n		<div class=\"pub-content\">\r\n			<div class=\"pub-imgs\">\r\n				<div class=\"pub-img\">\r\n					<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("item.publish.img")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				</div>\r\n				<div class=\"pub-img\">\r\n					<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("item.publish.img")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				</div>\r\n				<div class=\"pub-img\">\r\n					<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("item.publish.img")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n			<div class=\"mem-desc\">\r\n				<div class=\"nickname\">\r\n				");
  stack1 = helpers._triageMustache.call(depth0, "item.nickname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				</div>\r\n				<div class=\"time\">");
  stack1 = helpers._triageMustache.call(depth0, "item.autograph", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n			</div>\r\n			");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n			<span class=\"follow ed\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", "item", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">已关注</span>\r\n			");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n			<span class=\"follow\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "follow", "item", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">+关注</span>\r\n			");
  return buffer;
  }

  data.buffer.push("<div class=\"mem-list\">\r\n	");
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("没有账号？点击注册.");
  }

  data.buffer.push("<div class=\"login\">\r\n		");
  data.buffer.push(escapeExpression((helper = helpers['input-user'] || (depth0 && depth0['input-user']),options={hash:{
    'username': ("username"),
    'password': ("password"),
    'param': ("login"),
    'action': ("login"),
    'btnText': ("登录"),
    'btnClass': ("btn-green")
  },hashTypes:{'username': "ID",'password': "ID",'param': "STRING",'action': "STRING",'btnText': "STRING",'btnClass': "STRING"},hashContexts:{'username': depth0,'password': depth0,'param': depth0,'action': depth0,'btnText': depth0,'btnClass': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-user", options))));
  data.buffer.push("\r\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("reg-tip")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "regist", options) : helperMissing.call(depth0, "link-to", "regist", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["personal-data"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("personal-data");
  
});

Ember.TEMPLATES["regist"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("已有账号？立即登录.");
  }

  data.buffer.push("<div class=\"regist\">\r\n		");
  data.buffer.push(escapeExpression((helper = helpers['input-user'] || (depth0 && depth0['input-user']),options={hash:{
    'username': ("username"),
    'password': ("password"),
    'param': ("regist"),
    'action': ("regist"),
    'btnText': ("注册"),
    'btnClass': ("btn-gray")
  },hashTypes:{'username': "ID",'password': "ID",'param': "STRING",'action': "STRING",'btnText': "STRING",'btnClass': "STRING"},hashContexts:{'username': depth0,'password': depth0,'param': depth0,'action': depth0,'btnText': depth0,'btnClass': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-user", options))));
  data.buffer.push("\r\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("reg-tip")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});