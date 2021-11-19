(this["webpackJsonpcf-plot"]=this["webpackJsonpcf-plot"]||[]).push([[0],{18:function(e,t,a){e.exports=a(27)},23:function(e,t,a){},24:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),s=a.n(c),l=(a(23),a(8)),i=(a(24),a(17)),u=(a(26),a(7)),o=a(14);u.a.register(o.a);var f={scales:{x:{type:"time",time:{unit:"month"},grid:{display:!1}}},plugins:{zoom:{zoom:{wheel:{enabled:!0},pinch:{enabled:!0},mode:"xy"},pan:{enabled:!0,mode:"xy"},limits:{x:{min:1262353464e3,max:Date.now(),minRange:50},y:{min:0,max:5e3,minRange:50}}}}},d=function(e){var t=e.datasets,a=e.progress;if(0===t.length)return 0===a.total?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"rating"},r.a.createElement("h2",null,"Fetching rating changes ",a.done,"/",a.total));var n={datasets:t};return r.a.createElement("div",{className:"rating"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"title"},"Rating Changes")),r.a.createElement(i.a,{data:n,options:f,plugins:[o.a],width:900,height:400}))},m=a(4),p=a(9),h=a.n(p),b=a(13),v=function(){var e=Object(b.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<a)){e.next=12;break}return e.next=4,fetch(t);case 4:if(!(r=e.sent).ok){e.next=7;break}return e.abrupt("return",r.json());case 7:if(400!==r.status){e.next=9;break}return e.abrupt("return",Promise.reject(new Error("Invalid handles!")));case 9:n++,e.next=1;break;case 12:return e.abrupt("return",Promise.reject(new Error("still failed after ".concat(a," times of trying"))));case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(h.a.mark((function e(t,a,n){var r,c,s,l,i,u,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],c=[],s=t.split("\n"),a([]),n({done:0,total:s.length}),l=0,i=Object(m.a)(s),e.prev=7,o=h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.value,e.next=3,v("https://codeforces.com/api/user.rating?handle="+t,10).then((function(e){r.push(e.result)}),(function(e){c.push(t),console.error(e)}));case 3:l++,n({done:l,total:s.length});case 5:case"end":return e.stop()}}),e)})),i.s();case 10:if((u=i.n()).done){e.next=14;break}return e.delegateYield(o(),"t0",12);case 12:e.next=10;break;case 14:e.next=19;break;case 16:e.prev=16,e.t1=e.catch(7),i.e(e.t1);case 19:return e.prev=19,i.f(),e.finish(19);case 22:if(0===c.length){e.next=26;break}return alert("".concat(c.join(", ")," are invalid handle(s)!")),a([]),e.abrupt("return");case 26:a(x(r));case 27:case"end":return e.stop()}}),e,null,[[7,16,19,22]])})));return function(t,a,n){return e.apply(this,arguments)}}(),E=["#25CCF7","#FD7272","#54a0ff","#00d2d3","#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d","#55efc4","#81ecec","#74b9ff","#a29bfe","#00b894","#00cec9","#0984e3","#6c5ce7","#ffeaa7","#fab1a0","#ff7675","#fd79a8","#fdcb6e","#e17055","#d63031","#feca57","#5f27cd","#54a0ff","#01a3a4"],x=function(e){var t,a=E.slice(),n=[],r=Object(m.a)(e);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(0!==c.length){var s,l={borderColor:a.pop(),label:c[0].handle,data:[],parsing:!1},i=Object(m.a)(c);try{for(i.s();!(s=i.n()).done;){var u=s.value;l.data.push({x:1e3*u.ratingUpdateTimeSeconds,y:u.newRating})}}catch(o){i.e(o)}finally{i.f()}n.push(l)}}}catch(o){r.e(o)}finally{r.f()}return n};var y=function(e){var t=e.users;return r.a.createElement("ul",{className:"rating",id:"rating-display"},t.map((function(e){return r.a.createElement("li",{key:e.handle},r.a.createElement("h3",{className:(t=e.rating,void 0===t?"user-black":t<1200?"user-gray":t<1400?"user-green":t<1600?"user-cyan":t<1900?"user-blue":t<2100?"user-violet":t<2300?"user-orange":t<2400?"user-yellow":t<2600?"user-fire":t<3e3?"user-red":"user-legendary")},e.handle," ",e.rating));var t})))},j=function(e){var t=e.handles,a=e.setHandles,n=e.submitAct;return r.a.createElement("form",{onSubmit:n,className:"form"},r.a.createElement("div",{className:"input-div"},r.a.createElement("textarea",{className:"input",value:t,onChange:function(e){return a(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"go")))},k=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),i=Object(l.a)(s,2),u=i[0],o=i[1],f=Object(n.useState)([]),m=Object(l.a)(f,2),p=m[0],h=m[1],b=Object(n.useState)({done:0,total:0}),v=Object(l.a)(b,2),E=v[0],x=v[1];return r.a.createElement("div",null,r.a.createElement(j,{handles:a,setHandles:c,submitAct:function(e){e.preventDefault(),function(e,t){t([]);var a=e.replaceAll("\n",";");fetch("https://codeforces.com/api/user.info?handles="+a).then((function(e){return e.ok?e.json():400===e.status?Promise.reject(new Error("Invalid handles!")):void 0})).then((function(e){t(e.result)}),(function(e){console.error(e)}))}(a,o),g(a,h,x)}}),r.a.createElement(y,{users:u}),r.a.createElement(d,{datasets:p,progress:E}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.69b7d2af.chunk.js.map