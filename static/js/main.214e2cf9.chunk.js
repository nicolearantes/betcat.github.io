(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),i=c(21),a=c.n(i),o=c(19),r=c(4);var l=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),i=c[0],a=c[1],o=Object(n.useState)(0),l=Object(r.a)(o,2),j=l[0],u=l[1],b=i?"#39FF14":"white",h=i?"visible":"hidden";return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{onClick:function(){a(!i),i&&(u(0),e.onSub(j),e.fish.counting=0)},className:"fish-card"+(i?" selected":""),style:{borderColor:b},children:[Object(s.jsx)("h1",{children:e.name}),Object(s.jsx)("img",{className:"fish-img",alt:"Draw of a fish, colored with golden color",src:e.img})]}),Object(s.jsxs)("div",{className:"plus-class",style:{visibility:h},children:[Object(s.jsx)("button",{className:"calc calc-icon",onClick:function(){j>0&&(e.fish.counting=j-100,u(j-100),e.onSub(100))},children:" - "}),Object(s.jsx)("p",{className:"calc",children:j}),Object(s.jsx)("button",{className:"calc calc-icon",onClick:function(){e.onAdd(100)&&(e.fish.counting=j+100,u(j+100))},children:" + "})]})]})};var j=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("p",{style:{color:0===e.foodAmount?"red":""},children:["You currently have ",e.foodAmount," cat's food"]})})},u=c(14);var b=function(e){var t=Object(n.useState)(5),c=Object(r.a)(t,2),i=c[0],a=c[1],o=Object(n.useState)(!0),l=Object(r.a)(o,2),j=l[0],u=l[1];function b(){i>0?(a(i-1),1==i&&e.onFinish()):u(!1)}return Object(n.useEffect)((function(){setTimeout(b,1e3)}),[i]),i>0?Object(s.jsxs)("div",{className:"counter",children:[Object(s.jsx)("p",{children:" Are you ready? "}),Object(s.jsx)("p",{children:i})]}):Object(s.jsxs)("div",{className:"counter",style:{visibility:j?"visible":"hidden",opacity:j?1:0,backgroundColor:"green"},children:[Object(s.jsx)("p",{className:"p-go",children:" Go!"}),Object(s.jsx)("i",{class:"fas fa-flag-checkered"})]})},h=c(2),d=c(8);var f=function(e){var t,c=e.gameResult.winner,n=e.gameResult.foodBalance;return Object(h.f)(),console.log(e.gameResult),t=n>0?"You won ".concat(n," food!"):n<0?"You lost ".concat(-n," food!"):"You didn't lose or win any food",console.log(t),Object(s.jsxs)("div",{className:"win-or-lose",children:[c?Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"The winner"}),Object(s.jsx)("img",{alt:"draw fish",src:c.img,className:" fish-img"}),Object(s.jsx)("h1",{children:c.name})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:" No winners "})}),Object(s.jsxs)("p",{children:[" ",t," "]}),Object(s.jsx)("button",{className:"play",onClick:function(){return e.setGameState("choose")},children:"Play again"}),Object(s.jsx)(d.b,{to:"my-bets",children:Object(s.jsx)("button",{onClick:function(){return e.setGameState("choose")},className:"play",children:"My Bets"})})]})};var m=function(e){var t=Object(n.useState)(0),c=Object(r.a)(t,2),i=c[0],a=c[1],o=Object(n.useState)(null),l=Object(r.a)(o,2),j=l[0],h=l[1],d=null!=j;function m(){var t,c,s=Math.min.apply(Math,Object(u.a)(e.fishes.map((function(e){return e.velocity})))),n=e.fishes.filter((function(e){return e.velocity===s})),i=e.fishes.map((function(e){return e.counting})).reduce((function(e,t){return e+t}));1!==n.length?(t=i,c=null):((c=n[0]).won=!0,t=3*c.counting),h({foodBalance:t-i,winner:c}),e.onRaceEnd(t,i)}return Object(n.useEffect)((function(){e.fishes.forEach((function(e){var t=100*(Math.floor(20*Math.random())+70);e.velocity=t}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{onFinish:function(){a(79.8),setTimeout(m,9e3)}}),Object(s.jsxs)("div",{className:"race",children:[e.fishes.map((function(e){return Object(s.jsx)("img",{alt:"fish draw",className:"race-fish fish-img",style:{transitionDuration:e.velocity+"ms",left:i+"%"},src:e.img})})),d?Object(s.jsx)(f,{gameResult:j,fishes:e.fishes,setGameState:e.setGameState}):""]})]})},O=[{key:1,name:"Gold fish",img:"/img/goldfish.png",counting:0},{key:2,name:"Clown fish",img:"/img/clownfish.png",counting:0},{key:3,name:"Piranha",img:"/img/piranha.png",counting:0},{key:4,name:"Lion fish",img:"/img/lionfish.png",counting:0}];var x=function(e){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)(d.b,{className:"logo",to:"/",onClick:function(){return e.setGameState("choose")},children:"BetCat"}),Object(s.jsx)(d.b,{className:"header-link",to:"/my-bets",children:" /MyBets"}),Object(s.jsxs)(d.b,{className:"header-link",to:"/instructions",children:[" ",Object(s.jsx)("i",{class:"far fa-question-circle"})]})]})};var p=function(e){return Object(s.jsxs)("div",{className:"instruction",children:[Object(s.jsx)(d.b,{to:"/",children:Object(s.jsx)("i",{onClick:e.handleClick,className:"close-button fas fa-times fa-lg"})}),Object(s.jsx)("img",{className:"cat-instruction-img",alt:"Black cat using a blue sunglass",src:"/img/cat3.png"}),Object(s.jsxs)("div",{className:"instructions-text",children:[Object(s.jsx)("h2",{className:"instructions-title",children:"That's how the game works:"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fas fa-paw"})," You'll beginn with 1000 cat's food; "]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fas fa-paw"})," Click on the fish to choose it and put how much you want to bet;"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fas fa-paw"})," When one of your fishes wins, the amount you bet on it will be multiplied by 3; "]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fas fa-paw"})," Try to not lose all your food! "]})]})]})};var g=function(e){var t=e.bets.map((function(e,t){return{fishes:Object(u.a)(e.fishes),roundNumber:t+1,balance:e.prize-e.totalBets}})).reverse();function c(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{children:[e.won?Object(s.jsx)("i",{class:"fas fa-crown fa-sm"}):""," ",e.name]})})}return Object(s.jsxs)("div",{className:"my-bets",children:[Object(s.jsx)("h1",{children:" My Bets "}),t.map((function(e){var t,n=e.fishes.sort((function(e,t){return e.velocity-t.velocity}));return t=e.balance<0?"You lost ".concat(-e.balance," in this round."):0===e.balance?"You didn't lose or win any food in this round.":"You won ".concat(e.balance," in this round."),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{children:["Round ",e.roundNumber," "]}),n.map(c),Object(s.jsxs)("p",{children:[t," "]})]})}))]})},v=c(9),y=c.n(v);var N=function(){var e=y.a.get("totalFood"),t=y.a.get("bets"),c=Object(n.useState)(e?JSON.parse(e):1e3),i=Object(r.a)(c,2),a=i[0],u=i[1],b=Object(n.useState)("choose"),d=Object(r.a)(b,2),f=d[0],v=d[1],N=Object(n.useState)(O.map((function(e){return Object(o.a)({},e)}))),w=Object(r.a)(N,2),k=w[0],S=w[1],C=Object(n.useState)(t?JSON.parse(t):[]),B=Object(r.a)(C,2),G=B[0],F=B[1];function R(e){return a>0&&(u(a-e),!0)}function Y(e){u(a+e)}function A(e){return Object(s.jsx)(l,{name:e.name,img:e.img,fish:e,onAdd:R,onSub:Y},e.key)}function E(){v("race")}function M(){window.confirm("Are you sure?")&&(y.a.remove("totalFood"),y.a.remove("bets"),window.location.reload())}function J(e,t){var c=e+a;y.a.set("totalFood",c),G.push({prize:e,totalBets:t,fishes:k}),y.a.set("bets",JSON.stringify(G)),F(G),S(O.map((function(e){return Object(o.a)({},e)}))),u(c)}var T=Object(h.f)();return Object(n.useEffect)((function(){e||(y.a.set("totalFood",1e3),T.push("instructions"))})),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(x,{setGameState:v}),Object(s.jsxs)(h.c,{children:[Object(s.jsx)(h.a,{path:"/instructions",children:Object(s.jsx)(p,{})}),Object(s.jsx)(h.a,{path:"/my-bets",children:Object(s.jsx)(g,{bets:G})}),Object(s.jsx)(h.a,{path:"/",children:"choose"===f?Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("div",{className:"app-text",children:Object(s.jsx)("h2",{children:"Click on the fish to choose it and put how much you want to bet on!"})}),Object(s.jsx)(j,{foodAmount:a}),Object(s.jsx)("div",{className:"fish-map",children:k.map(A)}),Object(s.jsx)("button",{className:"play",onClick:E,children:"Let's play! "}),Object(s.jsx)("button",{className:"play restart",onClick:M,children:"Restart"})]}):"race"===f?Object(s.jsx)(m,{fishes:k,setGameState:v,onRaceEnd:J}):void 0})]})]})};a.a.render(Object(s.jsx)(d.a,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.214e2cf9.chunk.js.map