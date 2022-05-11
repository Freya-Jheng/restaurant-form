(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24f542c2"],{ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("h1",[t._v("餐廳描述頁")]),r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComment}}),r("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})],1)},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),r("4de4"),r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{key:t.restaurant.id,staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t.restaurant.image}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeFromFavorite.apply(null,arguments)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addToFavorite.apply(null,arguments)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike.apply(null,arguments)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike.apply(null,arguments)}}},[t._v(" Like ")])],1)])}),u=[],c={props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},methods:{addToFavorite:function(){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),{},{isFavorited:!0})},removeFromFavorite:function(){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),{},{isFavorited:!1})},addLike:function(){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),{},{isLiked:!0})},deleteLike:function(){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),{},{isLiked:!1})}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}}},l=c,m=r("2877"),d=Object(m["a"])(l,o,u,!1,null,null,null),p=d.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v(" 所有評論： ")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.handleDeleteButtonClick(e.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v(" "+t._s(e.User.name)+" ")])],1),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),r("hr")])}))],2)},f=[],v=r("2f62"),h=r("caad"),g={props:{restaurantComments:{type:Array,required:!0}},computed:Object(i["a"])({},Object(v["b"])(["currentUser"])),mixins:[h["b"]],methods:{handleDeleteButtonClick:function(t){console.log("handleDeleteButtonClick",t),console.log("rComments",this.restaurantComment),this.$emit("after-delete-comment",t)}}},C=g,_=Object(m["a"])(C,b,f,!1,null,null,null),k=_.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit"}},[t._v("Submit")])])])},x=[],w=(r("a9e3"),r("6b27")),O=r("c4c3"),j={name:"CreateComment",data:function(){return{text:""}},methods:{handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.text||w["a"].fire({icon:"warning",title:"請確認填寫留言！"}),e.next=4,O["a"].createComments({restaurantId:t.restaurantId,text:t.text});case 4:if(r=e.sent,a=r.data,console.log("createComment",a),"error"!==a.status){e.next=9;break}throw new Error(a.message);case 9:t.$emit("after-create-comment",{commentId:a.commentId,restaurantsAPI:t.restaurantId,text:t.text}),t.text="",w["a"].fire({icon:"success",title:"成功新增留言！"}),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0),w["a"].fire({icon:"error",title:"無法成功新增留言！"});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))()}},props:{restaurantId:{type:Number,required:!0}}},R=j,D=Object(m["a"])(R,y,x,!1,null,null,null),F=D.exports,U={components:{RestaurantDetail:p,RestaurantComments:k,CreateComment:F},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[]}},computed:Object(i["a"])({},Object(v["b"])(["currentUser"])),beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,u,c,l,m,d,p,b,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,O["a"].getRestaurant({restaurantId:t});case 3:a=r.sent,n=a.data,console.log("currentUser",e.currentUser),s=n.restaurant,i=n.isFavorited,o=n.isLiked,u=s.id,c=s.name,l=s.opening_hours,m=s.tel,d=s.image,p=s.address,b=s.description,f=s.Comments,e.restaurant={id:u,name:c,openingHours:l,tel:m,image:d,address:p,description:b,isFavorited:i,isLiked:o},e.restaurantComments=f,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log(r.t0),w["a"].fire({icon:"error",title:"無法成功讀取餐廳資料！"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()},afterDeleteComment:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!=t}))},afterCreateComment:function(t){var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:a,createdAt:new Date}),console.log("r",this.restaurantComments)}}},I=U,L=Object(m["a"])(I,a,n,!1,null,null,null);e["default"]=L.exports},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("e330"),o=r("1a2d"),u=r("1626"),c=r("3a9b"),l=r("577e"),m=r("9bf2").f,d=r("e893"),p=s.Symbol,b=p&&p.prototype;if(n&&u(p)&&(!("description"in b)||void 0!==p().description)){var f={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=c(b,this)?new p(t):void 0===t?p():p(t);return""===t&&(f[e]=!0),e};d(v,p),v.prototype=b,b.constructor=v;var h="Symbol(test)"==String(p("test")),g=i(b.toString),C=i(b.valueOf),_=/^Symbol\((.*)\)[^)]+$/,k=i("".replace),y=i("".slice);m(b,"description",{configurable:!0,get:function(){var t=C(this),e=g(t);if(o(f,t))return"";var r=h?y(e,7,-1):k(e,_,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:v})}}}]);
//# sourceMappingURL=chunk-24f542c2.db829ef9.js.map