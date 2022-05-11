(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-452696c7"],{"12b2":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:e.restaurant.name},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"categoryId"}},[e._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.restaurant,"categoryId",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--請選擇--")]),e._l(e.categories,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[e._v("Tel")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:e.restaurant.tel},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"tel",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[e._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:e.restaurant.address},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"address",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"opening-hours"}},[e._v("Opening Hours")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:e.restaurant.openingHours},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"openingHours",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[e._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:e.restaurant.description},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"description",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[e._v("Image")]),e.restaurant.image?a("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.restaurant.image,width:"200",height:"200"}}):e._e(),a("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中...":"送出")+" ")])])},n=[],s=a("1da1"),i=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("b0c0"),a("96cf"),a("6b27")),u=a("be6c"),c={props:{initialRestaurant:{type:Object,default:function(){return{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{restaurant:{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},categories:[],isLoading:!0}},watch:{initialRestaurant:function(e){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),e)}},created:function(){this.fetchRestaurant()},methods:{fetchRestaurant:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].categories.get();case 3:if(a=t.sent,r=a.data,console.log("categories",e.dummyData,r),"error"!==r.status){t.next=8;break}throw new Error(r.message);case 8:e.categories=r.categories,e.isLoading=!1,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0),e.isLoading=!0,o["a"].fire({icon:"error",title:"無法成功取得餐廳類別，請稍等！"});case 17:case"end":return t.stop()}}),t,null,[[0,12]])})))()},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.restaurant.image="";else if(t.length>0){var a=window.URL.createObjectURL(t[0]);this.restaurant.image=a}},handleSubmit:function(e){if(this.restaurant.name)if(this.restaurant.categoryId){var t=e.target,a=new FormData(t);console.log("data from AdminRestForm",a),this.$emit("after-submit",a)}else o["a"].fire({icon:"warning",title:"請選擇餐廳類別！"});else o["a"].fire({icon:"warning",title:"請填寫餐廳名稱！"})}}},d=c,l=a("2877"),m=Object(l["a"])(d,r,n,!1,null,null,null);t["a"]=m.exports},6945:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("AdminRestaurantForm",{attrs:{"initial-restaurant":e.restaurant,"is-processing":e.isProcessing},on:{"after-submit":e.handleAfterSubmit}})],1)},n=[],s=a("5530"),i=a("1da1"),o=(a("96cf"),a("b0c0"),a("a4d3"),a("e01a"),a("12b2")),u=a("6b27"),c=a("be6c"),d={data:function(){return{restaurant:{id:-1,name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},isProcessing:!1}},components:{AdminRestaurantForm:o["a"]},created:function(){var e=this.$route.params.id;this.fetchRestaurant(e)},beforeRouteUpdate:function(e,t,a){console.log(t);var r=e.params.id;this.fetchRestaurant(r),a()},methods:{fetchRestaurant:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,i,o,d,l,m,g,p,f,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].restaurants.getDetail({restaurantId:e});case 3:if(r=a.sent,n=r.data,"error"!==n.status){a.next=7;break}throw new Error(n.message);case 7:i=n.restaurant,o=i.id,d=i.name,l=i.CategoryId,m=i.tel,g=i.address,p=i.description,f=i.image,v=i.opening_hours,t.restaurant=Object(s["a"])(Object(s["a"])({},t.restaurant),{},{id:o,name:d,categoryId:l,tel:m,address:g,description:p,image:f,openingHours:v}),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),console.log(a.t0),u["a"].fire({icon:"error",title:"無法成功修改資料"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()},handleAfterSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,c["a"].restaurants.update({restaurantId:t.restaurant.id,formData:e});case 4:if(r=a.sent,n=r.data,"error"!==n.status){a.next=8;break}throw new Error(n.message);case 8:t.$router.push({name:"admin-restaurants"}),u["a"].fire({icon:"success",title:"成功修改資料"}),a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log(a.t0),u["a"].fire({icon:"error",title:"無法成功修改資料！"});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()}}},l=d,m=a("2877"),g=Object(m["a"])(l,r,n,!1,null,null,null);t["default"]=g.exports},be6c:function(e,t,a){"use strict";a("b0c0");var r=a("6b27"),n=function(){return localStorage.getItem("token")};t["a"]={categories:{get:function(){return r["b"].get("/admin/categories",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(e){var t=e.name;return r["b"].post("/admin/categories",{name:t},{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(e){var t=e.categoryId;return r["b"].delete("/admin/categories/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.categoryId,a=e.name;return r["b"].put("/admin/categories/".concat(t),{name:a},{headers:{Authorization:"Bearer ".concat(n())}})}},restaurants:{create:function(e){var t=e.formData;return r["b"].post("/admin/restaurants",t,{headers:{Authorization:"Bearer ".concat(n())}})},get:function(){return r["b"].get("/admin/restaurants",{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(e){var t=e.restaurantId;return r["b"].delete("/admin/restaurants/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},getDetail:function(e){var t=e.restaurantId;return r["b"].get("/admin/restaurants/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.restaurantId,a=e.formData;return r["b"].put("/admin/restaurants/".concat(t),a,{headers:{Authorization:"Bearer ".concat(n())}})}},users:{get:function(){return r["b"].get("admin/users/",{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.userId,a=e.isAdmin;return r["b"].put("/admin/users/".concat(t),{isAdmin:a},{headers:{Authorization:"Bearer ".concat(n())}})}}}},e01a:function(e,t,a){"use strict";var r=a("23e7"),n=a("83ab"),s=a("da84"),i=a("e330"),o=a("1a2d"),u=a("1626"),c=a("3a9b"),d=a("577e"),l=a("9bf2").f,m=a("e893"),g=s.Symbol,p=g&&g.prototype;if(n&&u(g)&&(!("description"in p)||void 0!==g().description)){var f={},v=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),t=c(p,this)?new g(e):void 0===e?g():g(e);return""===e&&(f[t]=!0),t};m(v,g),v.prototype=p,p.constructor=v;var h="Symbol(test)"==String(g("test")),b=i(p.toString),w=i(p.valueOf),y=/^Symbol\((.*)\)[^)]+$/,x=i("".replace),I=i("".slice);l(p,"description",{configurable:!0,get:function(){var e=w(this),t=b(e);if(o(f,e))return"";var a=h?I(t,7,-1):x(t,y,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:v})}}}]);
//# sourceMappingURL=chunk-452696c7.92c6f09f.js.map