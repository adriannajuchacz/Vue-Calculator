webpackJsonp([1],{NHnr:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("7+uW"),s={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"calculator"}},[n("h1",[t._v("MY CALCULATOR")]),t._v(" "),n("div",{staticClass:"grid-area"},[n("div",{staticClass:"item",attrs:{id:"display"}},[t._v(" "+t._s(t.nowCurrent?t.current:t.buffer)+" ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"ac"},on:{click:function(i){t.ac()}}},[t._v(" AC ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"plusminus"},on:{click:function(i){t.plusminus()}}},[t._v(" +/- ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"modulo"}},[t._v(" % ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"division"},on:{click:function(i){t.compute("division")}}},[t._v(" : ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"seven"},on:{click:function(i){t.loadIntoBuffer(7)}}},[t._v(" 7 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"eight"},on:{click:function(i){t.loadIntoBuffer(8)}}},[t._v(" 8 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"nine"},on:{click:function(i){t.loadIntoBuffer(9)}}},[t._v(" 9 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"multiply"},on:{click:function(i){t.compute("multiply")}}},[t._v(" x ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"four"},on:{click:function(i){t.loadIntoBuffer(4)}}},[t._v(" 4 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"five"},on:{click:function(i){t.loadIntoBuffer(5)}}},[t._v(" 5 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"six"},on:{click:function(i){t.loadIntoBuffer(6)}}},[t._v(" 6 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"minus"},on:{click:function(i){t.compute("minus")}}},[t._v(" - ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"one"},on:{click:function(i){t.loadIntoBuffer(1)}}},[t._v(" 1 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"two"},on:{click:function(i){t.loadIntoBuffer(2)}}},[t._v(" 2 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"three"},on:{click:function(i){t.loadIntoBuffer(3)}}},[t._v(" 3 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"plus"},on:{click:function(i){t.compute("plus")}}},[t._v(" + ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"zero"},on:{click:function(i){t.loadIntoBuffer(0)}}},[t._v(" 0 ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"dot"}},[t._v(" . ")]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"equals"},on:{click:function(i){t.execute()}}},[t._v(" = ")])]),t._v(" "),n("p",[t._v(t._s("current : "+t.current))]),t._v(" "),n("p",[t._v(t._s("buffer : "+t.buffer))]),t._v(" "),n("p",[t._v(t._s("nowCurrent : "+t.nowCurrent))]),t._v(" "),n("p",[t._v(t._s("writeToCurrent : "+t.writeToCurrent))]),t._v(" "),n("p",[t._v(t._s("operation : "+t.operation))])])},staticRenderFns:[]};var r=n("VU/8")({name:"Calculator",data:function(){return{current:0,buffer:0,nowCurrent:!0,writeToCurrent:!0,operation:null,reseted:!0}},methods:{ac:function(){this.current=0,this.reset()},plusminus:function(){this.current=-this.current,this.reset()},loadIntoBuffer:function(t){this.writeToCurrent?(this.reseted&&(this.current=0),this.current=10*this.current+t,this.reseted=!1):(this.nowCurrent=!1,this.buffer=10*this.buffer+t)},compute:function(t){this.writeToCurrent=!1,this.operation=t},execute:function(){switch(this.operation){case"plus":this.current=this.current+this.buffer;break;case"minus":this.current=this.current-this.buffer;break;case"multiply":this.current=this.current*this.buffer;break;case"division":this.current=this.current/this.buffer}this.nowCurrent=!0,this.reset()},reset:function(){this.buffer=0,this.nowCurrent=!0,this.writeToCurrent=!0,this.operation=null,this.reseted=!0}}},s,!1,function(t){n("bMDo")},"data-v-2cc0329b",null).exports,c={name:"App",components:{Calculator:r}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("Calculator")],1)},staticRenderFns:[]};var o=n("VU/8")(c,a,!1,function(t){n("a4/n")},null,null).exports,u=n("/ocq");e.a.use(u.a);var l=new u.a({routes:[{path:"/",name:"Calculator",component:r}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:l,components:{App:o},template:"<App/>"})},"a4/n":function(t,i){},bMDo:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.6db0a4f3308fe0d4aa73.js.map