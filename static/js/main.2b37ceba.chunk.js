(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),i=(a(33),a(34),a(35),a(36),a(7)),s=a(1),l=a(8),u=a.n(l),m=a(23),p=a(26),f=(a(38),a(24)),h=a.n(f),d=(a(56),a(27));var v=function(e){var t=e.user,a=e.number;return r.a.createElement(d.a.div,{initial:{opacity:0},animate:{opacity:[0,1]},transition:{duration:.2,delay:.1*a},className:"user-card"},r.a.createElement("div",{className:"tag"},r.a.createElement("h1",null,a)),r.a.createElement("h2",null,t.firstName," ",t.lastName),r.a.createElement("h3",null,t.email),r.a.createElement("h4",null,t.favoriteStockId))};var E=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],c=t[1];function o(){return(o=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://zothacks-2020-workshop.herokuapp.com/user");case 2:200===(t=e.sent).status?c(t.data.data):console.log("Error retrieving users");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"user-list"},(a||[]).map((function(e,t){return r.a.createElement(v,{user:e,key:t,number:t})})))};var w=function(){return r.a.createElement("div",{className:"app fill-view"},r.a.createElement(i.a,{baseName:"/zothacks-frontend"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.2b37ceba.chunk.js.map