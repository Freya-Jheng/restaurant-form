(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b7d9635"],{"04d1":function(t,e,r){var a=r("342f"),n=a.match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},"4e82":function(t,e,r){"use strict";var a=r("23e7"),n=r("e330"),o=r("59ed"),i=r("7b0b"),s=r("07fa"),c=r("577e"),u=r("d039"),d=r("addb"),v=r("a640"),f=r("04d1"),l=r("d998"),p=r("2d00"),b=r("512c"),h=[],m=n(h.sort),g=n(h.push),w=u((function(){h.sort(void 0)})),C=u((function(){h.sort(null)})),F=v("sort"),k=!u((function(){if(p)return p<70;if(!(f&&f>3)){if(l)return!0;if(b)return b<603;var t,e,r,a,n="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(a=0;a<47;a++)h.push({k:e+a,v:r})}for(h.sort((function(t,e){return e.v-t.v})),a=0;a<h.length;a++)e=h[a].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}})),x=w||!C||!F||!k,R=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:c(e)>c(r)?1:-1}};a({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&o(t);var e=i(this);if(k)return void 0===t?m(e):m(e,t);var r,a,n=[],c=s(e);for(a=0;a<c;a++)a in e&&g(n,e[a]);d(n,R(t)),r=n.length,a=0;while(a<r)e[a]=n[a++];while(a<c)delete e[a++];return e}})},"512c":function(t,e,r){var a=r("342f"),n=a.match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},"571a":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),r("hr"),r("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},t._l(t.topRestaurants,(function(e){return r("div",{key:e.id,staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("a",{attrs:{href:e.image}},[r("img",{staticClass:"card-img",attrs:{src:e.image}})])]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Mrs. Mckenzie Johnston")]),r("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(e.FavoriteCount))]),r("p",{staticClass:"card-text"},[t._v(" "+t._s(e.description)+" ")]),r("a",{staticClass:"btn btn-primary mr-2",attrs:{href:"#"}},[t._v("Show")]),e.isFavorited?r("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.removeFavorited(e.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.addFavorited(e.id)}}},[t._v(" 加到最愛 ")])])])])})),0)],1)},n=[],o=r("5530"),i=r("1da1"),s=(r("96cf"),r("d81d"),r("a4d3"),r("e01a"),r("4e82"),r("8bb1")),c=r("6b27"),u=r("c4c3"),d=r("4cce"),v={components:{NavTabs:s["a"]},data:function(){return{topRestaurants:[]}},created:function(){this.fetchRestaurants()},methods:{fetchRestaurants:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].getTopRestaurant();case 3:if(r=e.sent,a=r.data,n=a.restaurants,"error"!==a.status){e.next=8;break}throw new Error(a.message);case 8:console.log("topRestaurants",a),t.topRestaurants=n,t.topRestaurants=t.topRestaurants.map((function(t){return{id:t.id,image:t.image,FavoriteCount:t.FavoriteCount,description:t.description,isFavorited:t.isFavorited}})),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0),c["a"].fire({icon:"error",title:"無法成功載入餐廳資料，請稍候！"});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()},addFavorited:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].addFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,console.log("data",n),"error"!==n.status){r.next=8;break}throw new Error(n.message);case 8:e.topRestaurants=e.topRestaurants.map((function(e){return e.id===t?Object(o["a"])(Object(o["a"])({},e),{},{FavoriteCount:e.FavoriteCount+1,isFavorited:!0}):e})).sort((function(t,e){return e.FavoriteCount-t.FavoriteCount})),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0),c["a"].fire({icon:"error",title:"無法成功加入最愛，請稍候！"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},removeFavorited:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].deleteFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:e.topRestaurants=e.topRestaurants.map((function(e){return e.id===t?Object(o["a"])(Object(o["a"])({},e),{},{FavoriteCount:e.FavoriteCount-1,isFavorited:!1}):e})).sort((function(t,e){return e.FavoriteCount-t.FavoriteCount})),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0),c["a"].fire({icon:"error",title:"無法成功移除最愛，請稍候！"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},f=v,l=r("2877"),p=Object(l["a"])(f,a,n,!1,null,null,null);e["default"]=p.exports},d81d:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").map,o=r("1dde"),i=o("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},d998:function(t,e,r){var a=r("342f");t.exports=/MSIE|Trident/.test(a)},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),o=r("da84"),i=r("e330"),s=r("1a2d"),c=r("1626"),u=r("3a9b"),d=r("577e"),v=r("9bf2").f,f=r("e893"),l=o.Symbol,p=l&&l.prototype;if(n&&c(l)&&(!("description"in p)||void 0!==l().description)){var b={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=u(p,this)?new l(t):void 0===t?l():l(t);return""===t&&(b[e]=!0),e};f(h,l),h.prototype=p,p.constructor=h;var m="Symbol(test)"==String(l("test")),g=i(p.toString),w=i(p.valueOf),C=/^Symbol\((.*)\)[^)]+$/,F=i("".replace),k=i("".slice);v(p,"description",{configurable:!0,get:function(){var t=w(this),e=g(t);if(s(b,t))return"";var r=m?k(e,7,-1):F(e,C,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:h})}}}]);
//# sourceMappingURL=chunk-1b7d9635.85150a3d.js.map