(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{466:function(t,e,l){"use strict";l.r(e);var o=l(41),n=(l(85),l(224),l(60),l(87),l(83),l(244)),r=l.n(n),c={props:["pwa","client"],data:function(){return{currentRoute:null,options:{strs:[],prds:[],prjs:[],psts:[],strategies:{str:[{id:"custom",label:"Пользовательский"}],prj:[{id:"custom",label:"Пользовательский"},{id:"random",label:"Случайные"}],prd:[{id:"custom",label:"Пользовательский"},{id:"random",label:"Случайные"}],pst:[{id:"custom",label:"Пользовательский"},{id:"random",label:"Случайные"}]}},routes:[{id:"index",blocks:[]},{id:"proekty",blocks:[]},{id:"proekt",blocks:[]},{id:"realty",blocks:[]},{id:"room",blocks:[]},{id:"novosti",blocks:[]},{id:"novost",blocks:[]},{id:"ipoteka",blocks:[]},{id:"kontakty",blocks:[]}],blocks:[{id:"str",label:"Истории",items:[]},{id:"prj",label:"Проекты",strategy:"custom",items:[]},{id:"prd",label:"Помещения",strategy:"custom",items:[]},{id:"pst",label:"Посты",strategy:"custom",items:[]}]}},mounted:function(){0===this.pwa.routes.length&&(this.pwa.routes=this.routes),this.currentRoute=this.pwa.routes[0]},methods:{change:function(t){var e=t.id;t.item;this.currentRoute=this.pwa.routes.find((function(t){return t.id===e}))},create:function(t){var e=t.id,l=t.item,o={id:r.a.randomBytes(8).toString("hex"),type:l,items:[]};this.pwa.routes.find((function(t){return t.id===e})).blocks.push(o)},deleteBlock:function(t,e){t.blocks=t.blocks.filter((function(b){return b!==e}))},getAll:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function l(){var o;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return o={model:t,db:e.client.alias},l.next=3,e.$axios.$get("/api/adm/getAll/"+JSON.stringify(o));case 3:e.options[t+"s"]=l.sent,console.log(e.options[t+"s"]);case 5:case"end":return l.stop()}}),l)})))()}}},d=l(204),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return null!==t.currentRoute?e("div",{staticClass:"d-flex flex-column w-100 overflowxy rounded-xl border shadow bg-white"},[t._m(0),t._v(" "),e("div",{staticClass:"d-flex flex-row p-3",staticStyle:{"flex-wrap":"nowrap",display:"flex","overflow-x":"scroll"}},t._l(t.pwa.routes,(function(l){return e("div",{key:l.id,staticClass:"d-flex p-3"},[e("div",{staticClass:"d-flex flex-column rounded-xl border bg-light overflowxy",staticStyle:{width:"300px"}},[e("div",{staticClass:"d-flex flex-row justify-content-between align-items-center p-3 bg-white border-bottom"},[e("span",[t._v(t._s(l.id))]),t._v(" "),e("el-popover",{attrs:{trigger:"click",placement:"bottom-end",width:"300"}},[e("div",{staticClass:"d-flex flex-wrap w-100 p-2"},[e("Navmenu",{staticClass:"d-flex flex-column",attrs:{items:t.blocks,idKey:l.id,itemValueKey:"id",itemLabelKey:"label",itemClass:"my-2 cursor-pointer"},on:{go:t.create}})],1),t._v(" "),e("Button",{staticClass:"d-flex flex-nowrap font-size-075 bg-success text-white px-3 py-2 rounded-xl cursor-pointer",attrs:{slot:"reference",label:"Добавить блок"},slot:"reference"})],1)],1),t._v(" "),e("div",{staticClass:"d-flex flex-column px-2"},t._l(l.blocks,(function(o){return e("div",{key:o.id,staticClass:"d-flex flex-column p-3 rounded-xl bg-white border my-2"},[e("div",{staticClass:"d-flex flex-row justify-content-between align-items-center mb-2"},[e("span",[t._v(t._s(o.type))]),t._v(" "),e("Button",{staticClass:"p-2 rounded-xl border",attrs:{icon:{type:"element",src:"el-icon-delete"}},on:{click:function(e){return t.deleteBlock(l,o)}}})],1),t._v(" "),e("el-select",{model:{value:o.strategy,callback:function(e){t.$set(o,"strategy",e)},expression:"block.strategy"}},t._l(t.options.strategies[o.type],(function(t){return e("el-option",{key:t.id,attrs:{value:t.id,label:t.label}})})),1),t._v(" "),"custom"===o.strategy?e("el-select",{attrs:{multiple:"","collapse-tags":""},on:{focus:function(e){return t.getAll(o.type)}},model:{value:o.items,callback:function(e){t.$set(o,"items",e)},expression:"block.items"}},t._l(t.options[o.type+"s"],(function(t){return e("el-option",{key:t._id,attrs:{value:t._id,label:t.title}})})),1):t._e()],1)})),0)])])})),0)]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"d-flex flex-row justify-content-between align-items-center p-4 border-bottom"},[t("span",{staticClass:"h5 my-0"},[this._v("Страницы")])])}],!1,null,null,null);e.default=component.exports}}]);