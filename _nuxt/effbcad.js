(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{467:function(e,t,n){"use strict";n.r(t);var l=n(41),r=n(84),c=(n(85),{props:["current"],data:function(){return{newItem:{},models:{cmp:{fields:["title"]},prj:{fields:["title"]},bld:{fields:["title"]},sct:{fields:["title"]},flr:{fields:["title"]},flt:{fields:["title"]}},targets:[{id:"pwa",label:"PWA"},{id:"vk",label:"VK"},{id:"instagram",label:"Instagram"}],fields:Object(r.a)({cmp:{type:"select",label:"Компания",placeholder:"Выберите компанию"},title:{type:"input",label:"Название",placeholder:"Введите название"},description:{type:"input",label:"Описание",placeholder:"Введите описание"},login:{type:"input",label:"Логин",placeholder:"Введите логин"},password:{type:"input",label:"Пароль",placeholder:"Введите пароль"}},"title",{type:"input",label:"Название",placeholder:"Введите название"})}},methods:{create:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"bld"===e.current.modelForCreate&&(e.newItem.cmp=e.current.profile.cmp,e.newItem.prj=e.current.profile._id),console.log(e.newItem),t.next=5,e.$axios.$post("/api/"+e.current.modelForCreate+"/create",{params:JSON.stringify(e.newItem)});case 5:e.newItem={},e.$emit("success"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},getOptions:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$get("/api/"+e+"/getAll");case 2:t.fields[e].options=n.sent;case 3:case"end":return n.stop()}}),n)})))()},go:function(e){"create"===e&&this.create(),"cancel"===e&&(this.newItem={}),this.$bvModal.hide("databaseModalCreate")}}}),o=n(204),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"databaseModalCreate","hide-footer":"","hide-header":"",centered:""}},[null!==e.current.modelForCreate?t("div",{staticClass:"d-flex flex-column w-100 h-100 overflowxy justify-content-center align-items-center"},[t("div",{staticClass:"d-flex flex-column justify-content-center p-4"},[e._l(e.models[e.current.modelForCreate].fields,(function(n){return t("div",{key:n,staticClass:"d-flex flex-column outline br-075 shadow-sm my-2 p-3 bg-white"},[t("span",{staticClass:"mb-2"},[e._v("\n                    "+e._s(e.fields[n].label)+"\n                ")]),e._v(" "),"input"===e.fields[n].type?t("b-form-input",{model:{value:e.newItem[n],callback:function(t){e.$set(e.newItem,n,t)},expression:"newItem[field]"}}):e._e(),e._v(" "),"select"===e.fields[n].type?t("b-form-select",{attrs:{options:e.fields[n].options,"value-field":"_id","text-field":"title"},nativeOn:{blur:function(t){return e.getOptions(n)}},model:{value:e.newItem[n],callback:function(t){e.$set(e.newItem,n,t)},expression:"newItem[field]"}}):e._e()],1)})),e._v(" "),t("Button",{staticClass:"d-flex flex-row justify-content-center py-3 bg-success text-white br-075 mt-5",attrs:{label:"Создать"},on:{click:function(t){return e.go("create")}}}),e._v(" "),t("Button",{staticClass:"d-flex flex-row justify-content-center py-3 text-white br-075",attrs:{label:"Отменить"},on:{click:function(t){return e.go("cancel")}}})],2)]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);