(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{252:function(t,e,n){"use strict";n.r(e);var l={props:["visible","title"],data:function(){return{fileList:[]}},mounted:function(){},methods:{upload:function(){this.$emit("upload",this.fileList)},cancel:function(){this.$emit("cancel"),this.fileList=[]},fileChange:function(t,e){this.fileList=e}}},r=n(204),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{withHeader:!1,"append-to-body":!0,"show-close":!1,"lock-scroll":!1,visible:t.visible,width:"100%"}},[e("transition",{attrs:{name:"scale-in",mode:"out-in",appear:""}},[t.visible?e("el-row",{staticClass:"d-flex justify-content-center align-items-center"},[e("el-col",{attrs:{xs:24,sm:20,md:6}},[e("div",{staticClass:"d-flex flex-column rounded-xl shadow overflowxy p-4 bg-light pe-all"},[e("div",{staticClass:"d-flex flex-grow w-100 justify-content-between align-items-center mb-4"},[e("span",{staticClass:"h5 font-weight-bold my-0 text-black"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"d-flex flex-grow align-items-center"},[e("Button",{staticClass:"rounded-xl p-2 border cursor-pointer",attrs:{icon:{type:"element",src:"el-icon-close"}},on:{click:t.cancel}})],1)]),t._v(" "),e("div",{staticClass:"d-flex flex-column w-100"},[e("el-upload",{ref:"upload",staticClass:"d-flex w-100",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,"on-change":t.fileChange,"file-list":t.fileList}},[e("Button",{staticClass:"d-flex flex-row w-100 rounded-xl p-2 border",attrs:{slot:"trigger",label:"Добавить",icon:{type:"element",src:"el-icon-plus"}},slot:"trigger"})],1),t._v(" "),e("Button",{staticClass:"d-flex flex-row rounded-xl border px-4 py-3 w-100 justify-content-center bg-success text-white mt-4",attrs:{label:"Загрузить"},on:{click:t.upload}})],1)])])],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},836:function(t,e,n){"use strict";n.r(e);n(206);var l=n(41),r=(n(85),n(60),n(87),n(83),n(140),n(141),n(210),n(244)),o=n.n(r),c={props:["current"],components:{DialogUpload:n(252).default},data:function(){return{dialogUpload:!1,currentMap:null,buildings:[]}},mounted:function(){"object"===this.current.model.name&&this.getBuildings()},methods:{getBuildings:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={model:"building",regionAlias:t.current.region.alias,developerAlias:t.current.developer.alias,match:{object:t.current.item._id},limit:100,skip:0},e.next=3,t.$store.dispatch("adm/getItems",{params:n});case 3:return l=e.sent,e.abrupt("return",t.buildings=l[0].result);case 5:case"end":return e.stop()}}),e)})))()},createMap:function(){var t={id:o.a.randomBytes(8).toString("hex"),dir:"",filename:"",polygons:[]};this.current.item.svgMaps.push(t)},removeMap:function(map){this.current.item.svgMaps=this.current.item.svgMaps.filter((function(t){return t!==map}))},createPolygon:function(map){var t={id:o.a.randomBytes(8).toString("hex"),points:"",target:null};map.polygons.push(t)},upload:function(t,map){"start"===t&&(this.dialogUpload=!0,this.currentMap=map),"cancel"===t&&(this.currentMap=null,this.dialogUpload=!1)},uploadMap:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=new FormData,c="regions/"+e.current.region.alias+"/developers/"+e.current.developer._id,"object"===e.current.model.name&&(c=c+"/objects/"+e.current.item._id+"/svgMaps/"+e.currentMap.id),"building"===e.current.model.name&&(c=c+"/buildings/"+e.current.item._id+"/svgMaps/"+e.currentMap.id),r.append("dir",c),n.next=8,Promise.all(t.map(function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(n){var l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=n.name.split(".").pop(),d=o.a.randomBytes(8).toString("hex")+"."+l,r.append("images",n.raw,d),e.currentMap.dir="https://storage.yandexcloud.net/360m/"+c,e.currentMap.filename=d;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 8:return n.next=10,e.$axios.$post("/api/adm/uploadImages",r);case 10:e.dialogUpload=!1,n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()}}},d=c,f=n(204),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex w-100 mt-5"},[e("div",{staticClass:"d-flex flex-column w-100 rounded border overflowxy"},[e("div",{staticClass:"d-flex flex-grow align-items-center justify-content-between p-3 bg-white border-bottom"},[e("span",[t._v("SVG Карты")]),t._v(" "),e("Button",{staticClass:"px-3 py-2 bg-success text-white rounded fontsize13",attrs:{label:"Создать карту",icon:"el-icon-plus",labelClass:"ml-2"},on:{click:t.createMap}})],1),t._v(" "),e("el-row",{staticClass:"mx-0 p-3",attrs:{gutters:16}},t._l(t.current.item.svgMaps,(function(map){return e("el-col",{key:map.id,staticClass:"d-flex flex-column rounded bg-white shadow-sm overflowxy",attrs:{xs:24,md:12}},[e("div",{staticClass:"d-flex flex-grow justify-content-between align-items-center p-3"},[e("span",[t._v(t._s(map.id))]),t._v(" "),e("Button",{staticClass:"px-3 py-1 rounded border",attrs:{label:"Удалить",labelClass:"ml-2",icon:"el-icon-close"},on:{click:function(e){return t.removeMap(map)}}})],1),t._v(" "),e("div",{staticClass:"bg-dark oveflowxy",staticStyle:{height:"300px"}},[void 0!==map.filename&&""!==map.filename?e("Picture",{staticClass:"w-100 h-100",attrs:{src:map.dir+"/medium/"+map.filename,fit:"cover"}}):t._e()],1),t._v(" "),e("div",{staticClass:"d-flex flex-column p-3"},[e("div",{staticClass:"d-flex flex-grow mb-3"},[e("Button",{staticClass:"w-100 px-3 py-2 rounded border justify-content-center mr-3",attrs:{label:"Загрузить изображение",icon:"el-icon-upload",labelClass:"ml-2"},on:{click:function(e){return t.upload("start",map)}}}),t._v(" "),e("Button",{staticClass:"w-100 px-3 py-2 rounded border justify-content-center",attrs:{label:"Добавить полигон",icon:"el-icon-plus",labelClass:"ml-2"},on:{click:function(e){return t.createPolygon(map)}}})],1),t._v(" "),t._l(map.polygons,(function(polygon){return e("div",{key:polygon.id,staticClass:"d-flex flex-grow align-items-center border p-2 rounded overflowxy mb-2 fontsize13"},[e("Button",{staticClass:"p-1 rounded border mr-2",attrs:{icon:"el-icon-close"}}),t._v(" "),e("span",{staticClass:"mr-3",staticStyle:{width:"150px"}},[t._v(t._s(polygon.id))]),t._v(" "),"object"===t.current.model.name?e("el-select",{staticClass:"mr-3",attrs:{placeholder:"Выберите цель"},model:{value:polygon.target,callback:function(e){t.$set(polygon,"target",e)},expression:"polygon.target"}},t._l(t.buildings,(function(t){return e("el-option",{key:t._id,attrs:{value:t._id,label:t.title}})})),1):t._e(),t._v(" "),"building"===t.current.model.name?e("el-select",{staticClass:"mr-3",attrs:{placeholder:"Выберите цель"},model:{value:polygon.target,callback:function(e){t.$set(polygon,"target",e)},expression:"polygon.target"}},t._l(t.current.item.sections,(function(section){return e("el-option",{key:section.id,attrs:{value:section.id,label:section.title}})})),1):t._e(),t._v(" "),e("el-input",{staticClass:"w-100",attrs:{placeholder:"Введите точки"},model:{value:polygon.points,callback:function(e){t.$set(polygon,"points",e)},expression:"polygon.points"}})],1)}))],2)])})),1)],1),t._v(" "),e("DialogUpload",{attrs:{visible:t.dialogUpload,title:"Загрузить план этажа"},on:{upload:t.uploadMap,cancel:function(e){return t.upload("cancel")}}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);