(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9],{3931:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-tes",function(){return t(3268)}])},9009:function(e,n,t){"use strict";var r=t(5893),a=t(7294),s=t(3944),i=t(3532);n.Z=function(e){var n=e.title,t=e.slug,c=(0,a.useState)(!1),o=c[0],l=c[1];return(0,a.useEffect)((function(){l(!0)}),[]),o?(0,r.jsx)(s.qw,{shortname:"your discuss shortname",config:{url:"http://localhost:3000",identifier:t,title:n}}):(0,r.jsx)("div",{className:"block py-20 text-center",children:(0,r.jsx)(i.Z,{})})}},3532:function(e,n,t){"use strict";var r=t(5893);n.Z=function(){return(0,r.jsxs)("div",{className:"spinner relative inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white border-opacity-20",children:[(0,r.jsx)("span",{className:"relative z-20 text-sm uppercase tracking-wider",children:"Loading"}),(0,r.jsx)("span",{className:"absolute z-10 h-full w-full animate-spin rounded-full border-l-2 border-t-2 border-white border-opacity-50 bg-grey-lighten"})]})}},4571:function(e,n,t){"use strict";t.d(n,{TR:function(){return i},ej:function(){return l},OT:function(){return d},$j:function(){return f.Z}});var r=t(5893),a=t(1664),s=t.n(a),i=function(e){var n=e.url,t=void 0===n?"/":n,a=e.text,i=void 0!==a&&a;return(0,r.jsx)(s(),{href:t,children:(0,r.jsx)("a",{className:"sitelogo py-2",children:i?(0,r.jsx)("span",{className:"text-4xl font-bold uppercase leading-none text-primary",children:"KLIMY"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("img",{className:"h-8 max-h-full w-auto",src:"/images/logo-k.png",alt:"kfl"})})})})},c=t(8767),o=t(8579),l=function(e){var n=e.currentFilter,t=e.filterHandler,a=(0,c.useQuery)("portfolio-filters",o.ez).data;return a?(0,r.jsxs)("div",{className:"portfolio-filters flex flex-wrap justify-center gap-4",children:[(0,r.jsx)("button",{className:"btn btn-small ".concat(""===n?"":"btn-transparent"),onClick:function(){return t("")},children:(0,r.jsx)("span",{children:"All"})}),null===a||void 0===a?void 0:a.map((function(e){return(0,r.jsx)("button",{className:"btn btn-small ".concat(n===e.value?"before:invisible":"btn-transparent"),onClick:function(){return t(e.value)},children:(0,r.jsx)("span",{children:e.title})},e.id)}))]}):null},u=t(2141),d=function(e){var n=e.title,t=e.watermark,a=e.animated,s=void 0===a||a,i=(0,u.YT)({translateX:s?[-200,200]:null,easing:"easeInOut"});return(0,r.jsxs)("div",{className:"section-heading relative overflow-hidden pb-14 text-center",children:[(0,r.jsx)("h2",{className:"relative z-10 mb-2 uppercase",children:n}),(0,r.jsx)("span",{className:"relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20",children:(0,r.jsx)("span",{className:"absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"})}),(0,r.jsx)("span",{ref:i.ref,className:"pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5",children:t})]})},f=t(3532);t(9009)},8579:function(e,n,t){"use strict";t.d(n,{Vf:function(){return v},s0:function(){return x},H9:function(){return l},Ry:function(){return m},UU:function(){return f},ez:function(){return p},r3:function(){return h},U2:function(){return u},QM:function(){return d}});var r=t(4051),a=t.n(r),s=t(9669),i=t.n(s)().create({baseURL:"http://localhost:3000/api",headers:{Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH","Content-Type":"application/json"}});function c(e,n,t,r,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var s=e.apply(n,t);function i(e){c(s,r,a,i,o,"next",e)}function o(e){c(s,r,a,i,o,"throw",e)}i(void 0)}))}}var l=function(){var e=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/information.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/services.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/techskills.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/languageskills.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/portfoliofilters.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/portfolios.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/jobexperience.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/educationbackground.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/clientsreview.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},4646:function(e,n,t){"use strict";t.d(n,{XI:function(){return s},f8:function(){return r},s3:function(){return a}});var r=function(e,n){return'\n<svg width="'.concat(e,'" height="').concat(n,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <linearGradient id="g">\n            <stop stop-color="#ededed" offset="20%" />\n            <stop stop-color="#e5e5e5" offset="50%" />\n            <stop stop-color="#dadada" offset="70%" />\n        </linearGradient>\n    </defs>\n    <rect width="').concat(e,'" height="').concat(n,'" fill="#1a2c38" />\n    <rect id="r" width="').concat(e,'" height="').concat(n,'" fill="url(#g)" fill-opacity="0.1" />\n    <animate xlink:href="#r" attributeName="x" from="-').concat(e,'" to="').concat(e,'" dur="1s" repeatCount="indefinite"  />\n</svg>')},a=function(e){return window.btoa(e)},s=function(e){return e}},3268:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return d}});var r=t(5893),a=t(5675),s=t.n(a),i=t(1664),c=t.n(i),o=t(6261),l=t(4571),u=t(4646),d=!0;n.default=function(e){var n=e.pages;return(0,r.jsxs)("div",{className:"previewpage bg-grey-darken",children:[(0,r.jsx)("header",{className:"header relative z-50 border-b border-white border-opacity-10",children:(0,r.jsx)("div",{className:"container mx-auto",children:(0,r.jsxs)("div",{className:"header-inner flex items-center justify-between py-3",children:[(0,r.jsx)(l.TR,{url:"/"}),(0,r.jsx)("div",{className:"header-button hidden lg:block",children:(0,r.jsx)(c(),{href:"https://themeforest.net/user/nuclear_themes/portfolio",children:(0,r.jsx)("a",{className:"btn",children:(0,r.jsx)("span",{children:"Buy Now"})})})})]})})}),(0,r.jsxs)("main",{className:"previewmain bg-grey",children:[(0,r.jsx)("div",{className:"herosection herosection-bg ",children:(0,r.jsx)("div",{className:"herosection-inner flex min-h-[50vh] items-center bg-grey-darken bg-opacity-90",children:(0,r.jsx)("div",{className:"container mx-auto",children:(0,r.jsxs)("div",{className:"herosection-content py-20 text-center",children:[(0,r.jsx)("h1",{className:"text-primary",children:"Klimy Florez L\xf3pez"}),(0,r.jsx)("p",{className:"lead",children:"Bieber is a creative personal portfolio React template build with NextJS and TailwindCSS."}),(0,r.jsx)(o.rU,{activeClass:"active",to:"section-demos",spy:!0,smooth:"easeInQuad",offset:0,duration:1e3,className:"btn btn-large mt-4",children:(0,r.jsx)("span",{className:"pl-2",children:"View Demos"})})]})})})}),(0,r.jsx)(o.W_,{name:"section-demos",className:"demos-section py-24 lg:py-28 xl:py-32",children:(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)(l.OT,{title:"Demos",watermark:"Demos"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-2",children:[n.map((function(e){return(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(c(),{href:e.path,children:(0,r.jsxs)("a",{className:"card hovercard block overflow-hidden",children:[(0,r.jsx)("div",{className:"imagebox overflow-hidden rounded",children:(0,r.jsx)(s(),{loader:u.XI,unoptimized:!0,src:e.image,height:337,width:650,alt:e.title})}),(0,r.jsx)("h5",{className:"py-3 text-center",children:e.title})]})})},e.id)})),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(c(),{href:"/",children:(0,r.jsxs)("a",{className:"card hovercard block overflow-hidden",children:[(0,r.jsx)("div",{className:"imagebox overflow-hidden rounded",children:(0,r.jsx)(s(),{loader:u.XI,unoptimized:!0,src:"/images/demo/coming-soon.jpg",height:337,width:650,alt:"Comming Soon"})}),(0,r.jsx)("h5",{className:"py-3 text-center",children:"More Demos Coming Soon"})]})})})]})]})})]}),(0,r.jsx)("footer",{className:"footer bg-grey-darken",children:(0,r.jsx)("div",{className:"contianer mx-auto",children:(0,r.jsxs)("p",{className:"mb-0 py-4 text-center",children:["\xa9 ",(new Date).getFullYear(),", All right reserved",(0,r.jsx)(c(),{href:"/",children:(0,r.jsx)("a",{className:"pl-1.5 font-medium text-heading no-underline hover:text-primary",children:"NuclearThemes"})})]})})})]})}}},function(e){e.O(0,[334,774,888,179],(function(){return n=3931,e(e.s=n);var n}));var n=e.O();_N_E=n}]);