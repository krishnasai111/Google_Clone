(this.webpackJsonpgoogle=this.webpackJsonpgoogle||[]).push([[0],{50:function(e,a,t){e.exports=t(67)},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(19),r=t.n(l),o=(t(55),t(56),t(57),t(5)),s=t(40),i=t.n(s),m=t(81),u=t(35),d=t(18),h=(t(58),t(25)),g=t.n(h),E=t(39),_=t.n(E),v=t(80),p=t(3),f=Object(n.createContext)(),b=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(f.Provider,{value:Object(n.useReducer)(a,t)},l)},N=function(){return Object(n.useContext)(f)},P=t(30),w="SET_SEARCH_TERM",k=function(e,a){switch(console.log(a),a.type){case w:return Object(P.a)(Object(P.a)({},e),{},{term:a.term});default:return e}};var j=function(e){var a=e.hideButtons,t=void 0!==a&&a,l=N(),r=Object(d.a)(l,2);Object(u.a)(r[0]);var o=r[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),m=i[0],h=i[1],E=Object(p.f)(),f=function(e){e.preventDefault(),console.log("You hit the search button",m),o({type:w,term:m}),E.push("/search")};return c.a.createElement("form",{className:"search"},c.a.createElement("div",{className:"search__input"},c.a.createElement(g.a,{className:"search__inputIcon"}),c.a.createElement("input",{value:m,onChange:function(e){return h(e.target.value)}}),c.a.createElement(_.a,null)),t?c.a.createElement("div",{className:"search__buttons"},c.a.createElement(v.a,{className:"search__buttonsHidden",type:"submit",onClick:f,variant:"outlined"},"Google Search"),c.a.createElement(v.a,{className:"search__buttonsHidden",variant:"outlined"},"I'm Feeling Lucky")):c.a.createElement("div",{className:"search__buttons"},c.a.createElement(v.a,{type:"submit",onClick:f,variant:"outlined"},"Google Search"),c.a.createElement(v.a,{variant:"outlined"},"I'm Feeling Lucky")))};var O=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__header"},c.a.createElement("div",{className:"home__headerLeft"},c.a.createElement(o.b,{to:"/about"},"About"),c.a.createElement(o.b,{to:"/store"},"Store")),c.a.createElement("div",{className:"home__headerRight"},c.a.createElement(o.b,{to:"/gmail"},"Gmail"),c.a.createElement(o.b,{to:"/images "},"Images"),c.a.createElement(i.a,null),c.a.createElement(m.a,null))),c.a.createElement("div",{className:"home__body"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"}),c.a.createElement("div",{className:"home__inputContainer"},c.a.createElement(j,null))))},y=(t(65),t(29)),S=t.n(y),I=t(41),x=function(e){var a=Object(n.useState)(null),t=Object(d.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(I.a)(S.a.mark((function a(){return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyC0oGTx3jFZHlUcrBp5AWgx2DHaRZxs6RI","&cx=").concat("773fe3df0524db8e3","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){l(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:c}},C=t(42),G=t.n(C),R=t(43),A=t.n(R),T=t(44),B=t.n(T),L=t(45),H=t.n(L),F=t(46),W=t.n(F);var D=function(){var e=N(),a=Object(d.a)(e,2),t=a[0].term,n=(a[1],x(t).data);return console.log(n),c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"searchPage__header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"searchPage__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"})),c.a.createElement("div",{className:"searchPage__headerBody"},c.a.createElement(j,{hideButtons:!0}),c.a.createElement("div",{className:"searchPage__options"},c.a.createElement("div",{className:"searchPage__optionsLeft"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(g.a,null),c.a.createElement(o.b,{to:"/all"},"All")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(G.a,null),c.a.createElement(o.b,{to:"/news"},"News")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(A.a,null),c.a.createElement(o.b,{to:"/images"},"Images")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(B.a,null),c.a.createElement(o.b,{to:"/shopping"},"shopping")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(H.a,null),c.a.createElement(o.b,{to:"/maps"},"maps")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(W.a,null),c.a.createElement(o.b,{to:"/more"},"more"))),c.a.createElement("div",{className:"searchPage__optionsRight"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(o.b,{to:"/settings"},"Settings")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(o.b,{to:"/tools"},"Tools")))))),t&&c.a.createElement("div",{className:"searchPage__results"},c.a.createElement("p",{className:"searchPage__resultCount"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults," results"," ",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime," for ",t),null===n||void 0===n?void 0:n.items.map((function(e){var a,t,n,l,r,o,s,i;return c.a.createElement("div",{className:"searchPage__result"},c.a.createElement("a",{className:"searchPage__resultLink",href:e.link},(null===(a=e.pagemap)||void 0===a||null===(t=a.cse_image)||void 0===t?void 0:t.length)>0&&(null===(n=e.pagemap)||void 0===n||null===(l=n.cse_image[0])||void 0===l?void 0:l.src)&&c.a.createElement("img",{className:"searchPage__resultImage",src:(null===(r=e.pagemap)||void 0===r||null===(o=r.cse_image)||void 0===o?void 0:o.length)>0&&(null===(s=e.pagemap)||void 0===s||null===(i=s.cse_image[0])||void 0===i?void 0:i.src)}),e.displayLink),c.a.createElement("a",{className:"searchPage__resultTitle",href:e.link},c.a.createElement("h2",null,e.title)),c.a.createElement("p",{className:"searchPage__resultSnippet"},e.snippet))}))))};var J=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/search"},c.a.createElement(D,null)),c.a.createElement(p.a,{path:"/"},c.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,{initialState:{term:null},reducer:k},c.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.f6a4e42e.chunk.js.map