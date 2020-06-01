(function(t){function n(n){for(var r,i,s=n[0],c=n[1],u=n[2],d=0,l=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(n);while(l.length)l.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,i=1;i<e.length;i++){var s=e[i];0!==a[s]&&(r=!1)}r&&(o.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},i={app:0},a={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-5749dadf":"e938d6ba"}[t]+".js"}function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var n=[],e={"chunk-5749dadf":1};i[t]?n.push(i[t]):0!==i[t]&&e[t]&&n.push(i[t]=new Promise((function(n,e){for(var r="css/"+({}[t]||t)+"."+{"chunk-5749dadf":"38a4ddfe"}[t]+".css",a=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return n()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===r||d===a)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[t],p.parentNode.removeChild(p),e(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[t]=0})));var r=a[t];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,e){r=a[t]=[n,e]}));n.push(r[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t);var l=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(p);var e=a[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,e[1](l)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var p=d;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("85ec"),i=e.n(r);i.a},"04e8":function(t,n,e){"use strict";var r=e("c154"),i=e.n(r);i.a},"41cb":function(t,n,e){"use strict";e("b0c0"),e("d3b7");var r=e("2b0e"),i=e("8c4f"),a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"form-wrapper"},[r("form",{staticClass:"form"},[r("img",{attrs:{src:e("d503"),alt:"logo",id:"logo"}}),r("h1",{staticClass:"form_title"},[t._v(t._s(t.mainAction))]),r("div",{staticClass:"form_group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form_input",attrs:{type:"text",placeholder:" "},domProps:{value:t.username},on:{input:[function(n){n.target.composing||(t.username=n.target.value)},function(n){t.isUsernameTipHilighted=!1,t.isInvalidPwdOrUn=!1,t.isInvalidRegister=!1}]}}),r("label",{staticClass:"form_label"},[t._v("Username")]),this.isSignIn?t._e():r("div",{staticClass:"input-tip",class:{hilighted:t.isUsernameTipHilighted}},[t._v(" Username length must be more than 2 and less than 20 characters ")])]),r("div",{staticClass:"form_group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form_input",attrs:{type:"password",placeholder:" "},domProps:{value:t.password},on:{input:[function(n){n.target.composing||(t.password=n.target.value)},function(n){t.isPasswordTipHilighted=!1,t.isInvalidPwdOrUn=!1}]}}),r("label",{staticClass:"form_label"},[t._v("Password")]),this.isSignIn?t._e():r("div",{staticClass:"input-tip",class:{hilighted:t.isPasswordTipHilighted}},[t._v(" Password length must be more than 6 and less than 100 characters ")]),this.isSignIn&&t.isInvalidPwdOrUn?r("div",{staticClass:"input-tip hilighted"},[t._v(" Invalid username or password ")]):t._e(),!this.isSignIn&&t.isInvalidRegister?r("div",{staticClass:"input-tip hilighted"},[t._v(" Try another username ")]):t._e()]),r("div",{attrs:{id:"button-container"}},[r("button",{staticClass:"form_button",class:{disabled:t.btnDisabled},on:{click:function(n){return n.preventDefault(),t.processClick(n)}}},[t._v(t._s(t.mainAction))]),r("p",{attrs:{id:"another-option"},on:{click:function(n){t.isSignIn=!t.isSignIn}}},[t._v(t._s(t.optionAction))])])])])},o=[],s=e("c758"),c={data:function(){return{isSignIn:!0,username:"",password:"",isUsernameTipHilighted:!1,isPasswordTipHilighted:!1,isInvalidPwdOrUn:!1,isInvalidRegister:!1}},computed:{mainAction:function(){return this.isSignIn?"Sign in":"Sign up"},optionAction:function(){return this.isSignIn?"Sign up":"Sign in"},regPwdCorrect:function(){return this.password.length>=6&&this.password.length<=100},regUsernameCorrect:function(){return this.username.length>=2&&this.username.length<=20},btnDisabled:function(){return 0===this.username.length||0===this.password.length}},methods:{processClick:function(){var t=this;if(!this.btnDisabled&&(this.isUsernameTipHilighted=!this.regUsernameCorrect,this.isPasswordTipHilighted=!this.regPwdCorrect,this.isSignIn||this.regUsernameCorrect&&this.regPwdCorrect)){var n={username:this.username,password:this.password},e=function(){return t.$router.push({name:"board"})};this.isSignIn?s["a"].login(n,e,(function(){return t.isInvalidPwdOrUn=!0})):s["a"].register(n,e,(function(){return t.isInvalidRegister=!0}))}}}},u=c,d=(e("04e8"),e("2877")),l=Object(d["a"])(u,a,o,!1,null,"f9d46ce2",null),p=l.exports;r["a"].use(i["a"]);var f=new i["a"]({routes:[{path:"/login",name:"login",component:p},{path:"*",name:"board",component:function(){return e.e("chunk-5749dadf").then(e.bind(null,"427d"))}}]});f.beforeEach((function(t,n,e){s["a"].checkLogin((function(n){n.data.isLogged?"board"===t.name?e():e({name:"board"}):"login"===t.name?e():e({name:"login"})}))}));n["a"]=f},"56d7":function(t,n,e){"use strict";e.r(n),e.d(n,"eventBus",(function(){return l}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],o=(e("034f"),e("2877")),s={},c=Object(o["a"])(s,i,a,!1,null,null,null),u=c.exports,d=e("41cb");r["a"].config.productionTip=!1;var l=new r["a"];new r["a"]({router:d["a"],render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,n,e){},c154:function(t,n,e){},c758:function(t,n,e){"use strict";e("b0c0");var r=e("bc3a"),i=e.n(r),a=e("41cb"),o=i.a.create({baseURL:"https://bkabanjava.azurewebsites.net",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});function s(t){t.response&&401===t.response.status?a["a"].push({name:"login"}):(alert("API ERROR: "+t.message),console.log("API ERROR: "+t.message))}n["a"]={getUserData:function(t){o.get("api/userData").then((function(n){return t(n)})).catch((function(t){return s(t)}))},createBoard:function(t,n){o.post("api/board",{id:t.id,name:t.name}).then((function(t){return n(t)})).catch((function(t){return s(t)}))},getBoard:function(t,n){o.get("/api/board/".concat(t.id)).then((function(t){return n(t)})).catch((function(t){return s(t)}))},updateBoardName:function(t){o.put("/api/board",{name:t.name,id:t.id}).catch((function(t){return s(t)}))},updateBoardOrder:function(t,n){o.put("/api/board/reorder",{id:t.id,position:n}).catch((function(t){return s(t)}))},deleteBoard:function(t){o.delete("/api/board/".concat(t.id)).catch((function(t){return s(t)}))},createTask:function(t,n,e){o.post("/api/task",{name:t.name,columnId:n}).then((function(n){t.id=n.data.id,e(n)})).catch((function(t){return s(t)}))},updateTask:function(t){o.put("/api/task",t).catch((function(t){return s(t)}))},updateTaskOrder:function(t,n,e){o.put("/api/task/reorder",{id:t.id,position:n,newColumnId:e}).catch((function(t){return s(t)}))},deleteTask:function(t){o.delete("/api/task/".concat(t.id)).catch((function(t){return s(t)}))},createColumn:function(t,n,e){o.post("/api/column",{name:t.name,boardId:n}).then((function(n){t.id=n.data.id,e(n)})).catch((function(t){return s(t)}))},updateColumn:function(t){o.put("/api/column",t).catch((function(t){return s(t)}))},updateColumnOrder:function(t,n){o.put("/api/column/reorder",{id:t.id,position:n}).catch((function(t){return s(t)}))},deleteColumn:function(t){o.delete("/api/column/".concat(t.id)).catch((function(t){return s(t)}))},checkLogin:function(t){o.get("api/isLogged").then((function(n){return t(n)})).catch((function(t){return s(t)}))},login:function(t,n,e){o.post("api/login",t).then((function(t){return n(t)})).catch((function(t){e(t)}))},logout:function(t){o.delete("api/logout").then((function(n){return t(n)})).catch((function(t){return s(t)}))},register:function(t,n,e){o.post("api/register",t).then((function(t){return n(t)})).catch((function(t){e(t)}))}}},d503:function(t,n,e){t.exports=e.p+"img/kaban-logo.a33bccf3.png"}});
//# sourceMappingURL=app.8fd9eb85.js.map