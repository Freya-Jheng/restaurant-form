(function(e){function t(t){for(var r,n,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-06071ad1":"0674e332","chunk-1b7d9635":"85150a3d","chunk-1ea3f758":"6a5747ae","chunk-24f542c2":"db829ef9","chunk-66d46554":"eb20b443","chunk-dfb534de":"b3f23a6f","chunk-206c74ea":"75199d5a","chunk-2d0b2ec8":"1483cc43","chunk-55a7a19d":"022f1d00","chunk-57ef77d8":"22591aa2","chunk-452696c7":"92c6f09f","chunk-454bf178":"63a6082e","chunk-84cc821a":"2a8e1672","chunk-71c50812":"09746be3","chunk-958bdcfa":"3815b0ee"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-06071ad1":1,"chunk-dfb534de":1,"chunk-206c74ea":1,"chunk-55a7a19d":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-06071ad1":"ffcfd876","chunk-1b7d9635":"31d6cfe0","chunk-1ea3f758":"31d6cfe0","chunk-24f542c2":"31d6cfe0","chunk-66d46554":"31d6cfe0","chunk-dfb534de":"1f9e352d","chunk-206c74ea":"147daffd","chunk-2d0b2ec8":"31d6cfe0","chunk-55a7a19d":"8a51864b","chunk-57ef77d8":"31d6cfe0","chunk-452696c7":"31d6cfe0","chunk-454bf178":"31d6cfe0","chunk-84cc821a":"31d6cfe0","chunk-71c50812":"31d6cfe0","chunk-958bdcfa":"31d6cfe0"}[e]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],p.parentNode.removeChild(p),a(o)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/restaurant-form/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"4cce":function(e,t,a){"use strict";var r=a("6b27"),n=function(){return localStorage.getItem("token")};t["a"]={getCurrentUser:function(){return r["b"].get("/get_current_user",{headers:{Authorization:"Bearer ".concat(n())}})},get:function(e){var t=e.userId;return r["b"].get("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},addFavorite:function(e){var t=e.restaurantId;return r["b"].post("/favorite/".concat(t),null,{headers:{Authorization:"Bearer ".concat(n())}})},deleteFavorite:function(e){var t=e.restaurantId;return r["b"].delete("/favorite/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},addLiked:function(e){var t=e.restaurantId;return r["b"].post("/like/".concat(t),null,{headers:{Authorization:"Bearer ".concat(n())}})},deleteLiked:function(e){var t=e.restaurantId;return r["b"].delete("/like/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},getTopUsers:function(){return r["b"].get("/users/top",{headers:{Authorization:"Bearer ".concat(n())}})},followingUsers:function(e){var t=e.userId;return r["b"].post("/following/".concat(t),null,{headers:{Authorization:"Bearer ".concat(n())}})},notFollowingUsers:function(e){var t=e.userId;return r["b"].delete("/following/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})}}},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"restaurant-forum"}},[a("Navbar"),a("main",{staticClass:"mt-5 bg-white",attrs:{role:"main"}},[a("router-view")],1)],1)},s=[],o=(a("4989"),a("ab8b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v(" 餐廳評論網 ")]),e._m(0),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[a("div",{staticClass:"ml-auto d-flex align-items-center"},[e.currentUser.isAdmin?a("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin"}},[e._v(" 管理員後台 ")]):e._e(),e.isAuthenticated?[a("router-link",{staticClass:"text-white mr-3",attrs:{to:"#"}},[e._v(" "+e._s(e.currentUser.name||"使用者")+"您好 ")]),a("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"}},[e._v(" 登出 ")])]:e._e()],2)])],1)}),i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("5530"),u=a("2f62"),l={computed:Object(c["a"])({},Object(u["b"])(["currentUser","isAuthenticated"]))},d=l,p=a("2877"),m=Object(p["a"])(d,o,i,!1,null,null,null),f=m.exports,h={components:{Navbar:f}},b=h,g=Object(p["a"])(b,n,s,!1,null,null,null),v=g.exports,k=a("1da1"),w=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v(" 404 Page Not Found ")])},C=[],x={},_=Object(p["a"])(x,y,C,!1,null,null,null),P=_.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign In")])])}],I=a("6b27"),R={signIn:function(e){var t=e.email,a=e.password;return I["b"].post("./signin",{email:t,password:a})},signUP:function(e){return I["b"].post("./signup",Object(c["a"])({},e))}},A={data:function(){return{email:"",password:"",isProcessing:!1,isAuthorized:!1}},methods:{handleSubmit:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.email&&e.password){t.next=4;break}return I["a"].fire({icon:"warning",title:"Wrong email and password !"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,R.signIn({email:e.email,password:e.password});case 7:if(a=t.sent,r=a.data,"success"==r.status){t.next=11;break}throw new Error(r.message);case 11:e.isAuthorized=!0,localStorage.setItem("token",r.token),e.$store.commit("setCurrentUser",r.user),e.$router.push("/restaurants"),t.next=24;break;case 17:t.prev=17,t.t0=t["catch"](0),e.isAuthorized=!1,e.password="",e.isProcessing=!1,I["a"].fire({icon:"warning",title:"Wrong email and password !"}),console.log("error",t.t0);case 24:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}},E=A,S=Object(p["a"])(E,O,j,!1,null,null,null),N=S.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.passwordCheck},on:{input:function(t){t.target.composing||(e.passwordCheck=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit"}},[e._v(" Submit ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signin"}},[e._v(" Sign In ")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},U=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign Up")])])}],L=(a("b0c0"),{data:function(){return{name:"",email:"",password:"",passwordCheck:""}},methods:{handleSubmit:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.name&&e.password&&e.email&&e.passwordCheck){t.next=4;break}return I["a"].fire({icon:"warning",title:"請確認資料皆已填寫"}),t.abrupt("return");case 4:if(e.password===e.passwordCheck){t.next=8;break}return I["a"].fire({icon:"warning",title:"確認密碼不符合！"}),e.passwordCheck="",t.abrupt("return");case 8:return t.next=10,R.signUP({name:e.name,email:e.email,password:e.password,passwordCheck:e.passwordCheck});case 10:if(a=t.sent,r=a.data,"error"!==r.status){t.next=14;break}throw new Error(r.message);case 14:t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0),I["a"].fire({icon:"error",title:"無法成功建立帳號"});case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}}),B=L,z=Object(p["a"])(B,q,U,!1,null,null,null),$=z.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("NavTabs"),a("RestaurantsNavPills",{attrs:{categories:e.categories}}),a("div",{staticClass:"row"},e._l(e.restaurants,(function(e){return a("RestaurantCard",{key:e.id,attrs:{"initial-restaurant":e}})})),1),e.totalPage.length>1?a("RestaurantsPagination",{attrs:{"current-page":e.currentPage,"total-page":e.totalPage,"category-id":e.categoryId,"previous-page":e.previousPage,"next-page":e.nextPage}}):e._e()],1)},T=[],D=a("8bb1"),M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-lg-4"},[a("div",{staticClass:"card mb-4"},[a("img",{staticClass:"card-img-top",attrs:{src:e.restaurant.image,alt:"Card image cap",width:"286px",height:"180px"}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text title-wrap"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.restaurant.id}}}},[e._v(" "+e._s(e.restaurant.name)+" ")])],1),a("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.restaurant.Category.name))]),a("p",{staticClass:"card-text text-truncate"},[e._v(" "+e._s(e.restaurant.description)+" ")])]),a("div",{staticClass:"card-footer"},[e.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger btn-border favorite mr-2",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFavorite(e.restaurant.id)}}},[e._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary btn-border favorite mr-2",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFavorite(e.restaurant.id)}}},[e._v(" 加到最愛 ")]),e.restaurant.isLiked?a("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteLike(e.restaurant.id)}}},[e._v(" Unlike ")]):a("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addLike(e.restaurant.id)}}},[e._v(" Like ")])])])])},J=[],W=a("4cce"),H={props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},methods:{addFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,W["a"].addFavorite({restaurantId:e});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(c["a"])(Object(c["a"])({},t.restaurant),{},{isFavorited:!0}),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),I["a"].fire({icon:"error",title:"無法將餐廳加入我的最愛，請稍候！"}),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},deleteFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,W["a"].deleteFavorite({restaurantId:e});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(c["a"])(Object(c["a"])({},t.restaurant),{},{isFavorited:!1}),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),I["a"].fire({icon:"error",title:"無法將餐廳從我的最愛移除，請稍候！"}),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},addLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,W["a"].addLiked({restaurantId:e});case 3:if(r=a.sent,n=r.data,console.log(n),"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(c["a"])(Object(c["a"])({},t.restaurant),{},{isLiked:!0}),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),I["a"].fire({icon:"error",title:"無法成功按讚，請稍後再試！"}),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()},deleteLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,W["a"].deleteLiked({restaurantId:e});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(c["a"])(Object(c["a"])({},t.restaurant),{},{isLiked:!1}),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),I["a"].fire({icon:"error",title:"無法成功移除讚，請稍候再試！"}),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},K=H,G=Object(p["a"])(K,M,J,!1,null,null,null),Q=G.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-pills mb-4"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants"}}},[e._v(" 全部 ")])],1),e._l(e.categories,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)},X=[],Y={props:{categories:{type:Array,required:!0}}},Z=Y,ee=Object(p["a"])(Z,V,X,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.previousPage,expression:"previousPage"}],class:["page-item",{disabled:1===e.currentPage}]},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Previous",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.previousPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])],1),e._l(e.totalPage,(function(t){return a("li",{key:t,class:["page-item",{active:e.currentPage===t}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),a("li",{directives:[{name:"show",rawName:"v-show",value:e.nextPage,expression:"nextPage"}],class:["page-item",{disabled:e.currentPage===e.totalPage.length}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.nextPage}},"aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])],1)],2)])},re=[],ne=(a("a9e3"),{props:{categoryId:{type:[String,Number],default:""},currentPage:{type:Number,default:1},totalPage:{type:Array,required:!0},previousPage:{type:Number,required:!0},nextPage:{type:Number,required:!0}}}),se=ne,oe=Object(p["a"])(se,ae,re,!1,null,null,null),ie=oe.exports,ce=a("c4c3"),ue={components:{NavTabs:D["a"],RestaurantCard:Q,RestaurantsNavPills:te,RestaurantsPagination:ie},data:function(){return{restaurants:[],categories:[],categoryId:-1,currentPage:1,totalPage:[],previousPage:-1,nextPage:-1}},created:function(){var e=this.$route.query,t=e.page,a=void 0===t?"":t,r=e.categoryId,n=void 0===r?"":r;this.fetchRestaurants({queryPage:a,queryCategoryId:n})},beforeRouteUpdate:function(e,t,a){console.log(t);var r=e.query,n=r.page,s=void 0===n?"":n,o=r.categoryId,i=void 0===o?"":o;this.fetchRestaurants({queryPage:s,queryCategoryId:i}),a()},methods:{fetchRestaurants:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n,s,o,i,c,u,l,d,p,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.queryPage,n=e.queryCategoryId,a.prev=1,a.next=4,ce["a"].getRestaurants({page:r,categoryId:n});case 4:s=a.sent,o=s.data,i=o.restaurants,c=o.categories,u=o.categoryId,l=o.page,d=o.totalPage,p=o.prev,m=o.next,t.restaurants=i,t.categories=c,t.categoryId=u,t.currentPage=l,t.totalPage=d,t.previousPage=p,t.nextPage=m,a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](1),I["a"].fire({type:"error",title:"無法取得餐廳資料，請稍後再試"});case 18:case"end":return a.stop()}}),a,null,[[1,15]])})))()}}},le=ue,de=Object(p["a"])(le,F,T,!1,null,null,null),pe=de.exports;r["a"].use(u["a"]);var me=new u["a"].Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(c["a"])(Object(c["a"])({},e.currentUser),t),e.isAuthenticated=!0}},actions:{fetchCurrentUser:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,o,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,W["a"].getCurrentUser();case 4:r=t.sent,n=r.data,s=n.id,o=n.name,i=n.email,c=n.image,u=n.isAdmin,a("setCurrentUser",{id:s,name:o,email:i,image:c,isAdmin:u}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},modules:{}});r["a"].use(w["a"]);var fe=[{path:"/",name:"root",redirect:"/signin"},{path:"/signin",name:"sign-in",component:N},{path:"/signup",name:"sign-up",component:$},{path:"/restaurants",name:"restaurants",component:pe},{path:"/restaurants/:id/dashboard",name:"restaurant-dashboard",component:function(){return a.e("chunk-2d0b2ec8").then(a.bind(null,"25d3"))}},{path:"/restaurants/feeds",name:"restaurants-feeds",component:function(){return Promise.all([a.e("chunk-1ea3f758"),a.e("chunk-dfb534de")]).then(a.bind(null,"9cab"))}},{path:"/restaurants/top",name:"restaurants-top",component:function(){return a.e("chunk-1b7d9635").then(a.bind(null,"571a"))}},{path:"/restaurants/:id",name:"restaurant",component:function(){return Promise.all([a.e("chunk-1ea3f758"),a.e("chunk-24f542c2")]).then(a.bind(null,"ad68"))}},{path:"/user/:id",name:"user",component:function(){return a.e("chunk-206c74ea").then(a.bind(null,"1511"))}},{path:"/users/top",name:"users-top",component:function(){return a.e("chunk-55a7a19d").then(a.bind(null,"22ab"))}},{path:"/admin",exact:!0,redirect:"/admin/restaurants"},{path:"/admin/restaurants",name:"admin-restaurants",component:function(){return a.e("chunk-71c50812").then(a.bind(null,"73a3"))}},{path:"/admin/restaurants/new",name:"admin-restaurant-new",component:function(){return Promise.all([a.e("chunk-57ef77d8"),a.e("chunk-84cc821a")]).then(a.bind(null,"2743"))}},{path:"/admin/categories",name:"admin-categories",component:function(){return a.e("chunk-06071ad1").then(a.bind(null,"5652"))}},{path:"/admin/users",name:"admin-users",component:function(){return a.e("chunk-958bdcfa").then(a.bind(null,"6135"))}},{path:"/admin/user/:id/edit",name:"admin-user-edit",component:function(){return Promise.all([a.e("chunk-57ef77d8"),a.e("chunk-454bf178")]).then(a.bind(null,"b7c9"))}},{path:"/admin/restaurants/:id/edit",name:"admin-restaurant-edit",component:function(){return Promise.all([a.e("chunk-57ef77d8"),a.e("chunk-452696c7")]).then(a.bind(null,"6945"))}},{path:"/admin/restaurants/:id",name:"admin-restaurant",component:function(){return Promise.all([a.e("chunk-1ea3f758"),a.e("chunk-66d46554")]).then(a.bind(null,"89e9"))}},{path:"*",name:"not-found",component:P}],he=new w["a"]({linkExactActiveClass:"active",routes:fe});he.beforeEach(function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,a,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:me.dispatch("fetchCurrentUser"),r();case 2:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}());var be=he;r["a"].config.productionTip=!1,new r["a"]({router:be,store:me,render:function(e){return e(v)}}).$mount("#app")},"6b27":function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return u}));var r=a("bc3a"),n=a.n(r),s=a("3d20"),o=a.n(s),i="http://localhost:3000/api",c=n.a.create({baseURL:i}),u=o.a.mixin({toast:!0,position:"top-end",showCancelButton:!1,timer:3e3})},"8bb1":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)},n=[],s=a("ec26"),o={data:function(){return{tabs:[{id:Object(s["a"])(),title:"首頁",path:"/restaurants"},{id:Object(s["a"])(),title:"最新動態",path:"/restaurants/feeds"},{id:Object(s["a"])(),title:"TOP 10 人氣餐廳",path:"/restaurants/top"},{id:Object(s["a"])(),title:"美食達人",path:"/users/top"}]}}},i=o,c=a("2877"),u=Object(c["a"])(i,r,n,!1,null,null,null);t["a"]=u.exports},c4c3:function(e,t,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0"),a("9861"),a("25f0");var r=a("6b27"),n=function(){return localStorage.getItem("token")};t["a"]={getRestaurant:function(e){var t=e.restaurantId;return r["b"].get("/restaurants/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},getRestaurants:function(e){var t=e.page,a=e.categoryId,s=new URLSearchParams({page:t,categoryId:a});return r["b"].get("/restaurants?".concat(s.toString()),{headers:{Authorization:"Bearer ".concat(n())}})},getFeeds:function(){return r["b"].get("restaurants/feeds",{headers:{Authorization:"Bearer ".concat(n())}})},getTopRestaurant:function(){return r["b"].get("/restaurants/top",{headers:{Authorization:"Bearer ".concat(n())}})},createComments:function(e){var t=e.restaurantId,a=e.text;return r["b"].post("/comments",{restaurantId:t,text:a})},deleteComments:function(e){return r["b"].delete("/comments/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})}}}});
//# sourceMappingURL=app.09f58459.js.map