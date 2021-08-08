(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(27),a=c.n(r),s=c(12),i=c(2),o=c(3),j=c.n(o),u=c(9),l=c(6),b=c(14),d=c.n(b),p=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="https://restcountries.eu/rest/v2/name/".concat(t),e.next=4,d.a.get(c);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="https://restcountries.eu/rest/v2/alpha/".concat(t),e.next=4,d.a.get(c);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(t);case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=c(0),v=function(e){var t=e.history,c=Object(i.g)().countryCode,r=Object(n.useState)(!0),a=Object(l.a)(r,2),o=a[0],b=a[1],d=Object(n.useState)([]),p=Object(l.a)(d,2),O=p[0],v=p[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,h(t);case 3:c=e.sent,n=c.data,v(n),b(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(c)}),[c]);return Object(x.jsxs)("div",{className:"countryscreen__container",children:[Object(x.jsxs)("button",{className:"countryscreen__btn",onClick:function(){t.length<=2?t.push("/"):t.goBack()},children:[Object(x.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"back "]}),o?Object(x.jsx)("div",{className:"loading__country-screen",children:Object(x.jsxs)("div",{className:"lds-roller",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})}):Object(x.jsxs)("div",{className:"countryscreen__body-img-text",children:[Object(x.jsx)("div",{className:"countryscreen__img-container",children:Object(x.jsx)("img",{src:O.flag,alt:"asd"})}),Object(x.jsxs)("div",{className:"countryscreen__text-container",children:[Object(x.jsxs)("div",{className:"countryscreen__country-info",children:[Object(x.jsx)("h2",{children:O.name}),Object(x.jsxs)("div",{className:"countryscreen__country-p",children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Native Name: "}),O.nativeName]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Population: "}),(new Intl.NumberFormat).format(O.population)]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Region: "}),O.region]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Sub Region: "}),O.subregion]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Capital: "}),O.capital]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Top Level Domain: "}),O.topLevelDomain]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Currencies: "}),O.currencies[0].name]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Lenguages: "}),O.languages.map((function(e){return"".concat(e.name,", ")}))]})]})]}),Object(x.jsxs)("div",{className:"countryscreen__country-border",children:[Object(x.jsx)("span",{children:"Border Countries: "}),Object(x.jsxs)("div",{className:"countryscreen__links",children:[" ",O.borders.map((function(e){return Object(x.jsxs)(s.b,{className:"countryscreen__link-border",to:"/country/".concat(e),children:[" ",e]},e)}))]})]})]})]})]})},f=function(e){var t=e.onSearch,c=e.selectOptions,r=Object(n.useState)(""),a=Object(l.a)(r,2),s=a[0],i=a[1],o=function(){var e=Object(u.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),t(s);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"search__container",children:[Object(x.jsx)("div",{className:"search__input-container",children:Object(x.jsxs)("form",{onSubmit:o,className:"search__input",children:[Object(x.jsx)("input",{placeholder:"Search country...",onChange:function(e){i(e.target.value),0===e.target.value.length&&t(null)}}),Object(x.jsx)("button",{type:"submit",className:"search__btn",children:Object(x.jsx)("i",{className:"fas fa-search"})})]})}),Object(x.jsx)("div",{className:"search__continents",children:Object(x.jsxs)("select",{name:"select-continents",className:"search__options-continents",onChange:function(e){c(e.target.value)},children:[Object(x.jsx)("option",{value:"all",children:"All"}),Object(x.jsx)("option",{value:"africa",children:"Africa"}),Object(x.jsx)("option",{value:"americas",children:"Americas"}),Object(x.jsx)("option",{value:"asia",children:"Asia"}),Object(x.jsx)("option",{value:"europe",children:"Europe"}),Object(x.jsx)("option",{value:"oceania",children:"Oceania"})]})})]})},m=function(e){var t,c=e.country,n=c.name,r=c.population,a=c.region,i=c.capital,o=c.flag,j=c.alpha3Code;return Object(x.jsx)(s.b,{className:"homepage__card",to:"/country/".concat(j),children:Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:o,alt:"".concat(n,"-flag")}),Object(x.jsx)("h4",{children:n}),Object(x.jsxs)("p",{children:[" ",Object(x.jsx)("span",{children:"Population:"}),"  ",(t=r,(new Intl.NumberFormat).format(t))]}),Object(x.jsxs)("p",{children:[" ",Object(x.jsx)("span",{children:"Region:"}),"  ",a]}),Object(x.jsxs)("p",{children:[" ",Object(x.jsx)("span",{children:"Capital:"}),"  ",i]})]})})},g=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(l.a)(a,2),i=s[0],o=s[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),h=(d[0],d[1]),v=Object(n.useState)(!1),g=Object(l.a)(v,2),_=g[0],y=g[1],N=Object(n.useState)("all"),k=Object(l.a)(N,2),w=k[0],S=k[1],C=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,O("https://restcountries.eu/rest/v2/region/".concat(t));case 4:c=e.sent,n=c.data,r(n),o(!1),h(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),h(!0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,O("https://restcountries.eu/rest/v2/all");case 4:t=e.sent,c=t.data,r(c),o(!1),h(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),h(!0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_||("all"===w?I():(console.log(w),C(w)))}),[w,_]);var E=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return y(!1),e.abrupt("return");case 3:return o(!0),h(!1),y(!0),e.next=8,p(t);case 8:if(c=e.sent,n=c.data){e.next=16;break}return h(!0),o(!1),e.abrupt("return");case 16:r(n);case 17:o(!1);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"homepage__container",children:[Object(x.jsx)(f,{onSearch:E,selectOptions:S}),Object(x.jsx)("div",{className:"homepage__cards-container",children:i?Object(x.jsx)("div",{className:"loading__homepage",children:Object(x.jsxs)("div",{className:"lds-roller",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})}):c.map((function(e){return Object(x.jsx)(m,{country:e},e.alpha2Code)}))})]})},_=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("theme");e?r("light"===e):localStorage.setItem("theme",c?"light":"dark")}),[]),Object(n.useEffect)((function(){c?(localStorage.setItem("theme","light"),document.body.classList.add("light")):(localStorage.setItem("theme","dark"),document.body.classList.remove("light"))}),[c]),Object(x.jsxs)("div",{className:"navlogo__header",children:[Object(x.jsx)("h1",{children:"Where in the World ?"}),Object(x.jsx)("div",{className:"navlogo__btn",onClick:function(){r(!c)},children:c?Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{className:"fas fa-moon"})," Dark Mode"]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{className:"far fa-sun"})," Light Mode"]})})]})},y=function(){return Object(x.jsxs)(s.a,{children:[Object(x.jsx)(_,{}),Object(x.jsx)("div",{children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{exact:!0,path:"/",component:g}),Object(x.jsx)(i.b,{exact:!0,path:"/country/:countryCode",component:v}),Object(x.jsx)(i.a,{to:"/"})]})})]})},N=function(){return Object(x.jsx)(y,{})};c(61);a.a.render(Object(x.jsx)(N,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.06f16cc1.chunk.js.map