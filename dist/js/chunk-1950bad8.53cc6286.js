(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1950bad8"],{"450c":function(t,a,s){},b8f4:function(t,a,s){"use strict";var e=s("450c"),n=s.n(e);n.a},e22f:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",{attrs:{"data-aos":"fade-up"}},[s("h1",[t._v("Available Farms")]),s("div",{staticClass:"line"}),s("p",{staticClass:"title__info"},[t._v("Select a farm you would like to sponsor from the available farms and the number of units you want, then proceed to pay the sponsorship fee on our secure platform, payment will be reflected in your account immediately.")]),s("div",{staticClass:"card__container"},t._l(t.farms.slice(0,6),function(a){return s("div",{key:a.id,staticClass:"farm__card",attrs:{"data-aos":"fade-up"},on:{click:function(s){return t.showModal(a)}}},[s("div",{staticClass:"farm__details",style:{background:"url("+a.image_url+")"}},[s("div",{staticClass:"overlay"},[s("div",{staticClass:"farm__title"},[s("p",[t._v(t._s(a.name))]),s("p",[s("strong",[t._v(t._s(Date.now()<=a.investment_deadline?a.available_units>=1?"AVAILABLE":"SOLD OUT":"UNAVAILABLE"))])])]),s("p",{staticClass:"rate"},[s("span",{staticClass:"farm__rate"},[t._v(t._s(a.returns)+"%")]),t._v(" returns\n          ")]),s("p",[t._v(t._s(a.available_units+" units")+" available")])])]),s("footer",[s("p",[t._v(t._s(a.id.toUpperCase()))]),s("p",[s("span",[s("strong",[t._v("₦ "+t._s(a.cost_per_unit.toLocaleString()))])]),t._v(" per unit ")]),s("p",[t._v(t._s(a.returns)+"% returns in "+t._s(a.yield_duration)+" months")])])])}),0),t.isModalVisible?s("farm-modal",{attrs:{farm:t.currentFarm},on:{close:t.closeModal}}):t._e()],1)},n=[],i={name:"availableFarms",components:{"farm-modal":function(){return s.e("chunk-4571460c").then(s.bind(null,"bf64"))}},data:function(){return{isModalVisible:!1,currentFarm:{}}},computed:{farms:function(){return this.$store.getters.allFarms}},methods:{showModal:function(t){this.isModalVisible=!0,this.currentFarm=t},closeModal:function(){this.isModalVisible=!1}},created:function(){this.$store.dispatch("getAllFarms")}},r=i,o=(s("b8f4"),s("2877")),l=Object(o["a"])(r,e,n,!1,null,"8d1ed246",null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1950bad8.53cc6286.js.map