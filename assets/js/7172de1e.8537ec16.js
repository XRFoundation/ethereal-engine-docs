"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[79248],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11844:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const i={id:"logger",title:"Module: logger",sidebar_label:"logger",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"Api/server-core/modules/logger",id:"Api/server-core/modules/logger",title:"Module: logger",description:"Variables",source:"@site/docs/Api/server-core/modules/logger.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/logger",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/logger",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"logger",title:"Module: logger",sidebar_label:"logger",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/verify-scope",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_verify_scope"},next:{title:"matchmaking/emulate",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/matchmaking_emulate"}},s={},c=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"base"),": { ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," = 'server-core'; ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),": () => ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," = os.hostname } ; ",(0,o.kt)("inlineCode",{parentName:"p"},"level"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," = 'debug' }",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/server-core/src/logger.ts#L28"},"packages/server-core/src/logger.ts:28")))}u.isMDXComponent=!0}}]);