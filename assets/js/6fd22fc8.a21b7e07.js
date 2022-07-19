"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[57117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return t?o.createElement(f,s(s({ref:n},m),{},{components:t})):o.createElement(f,s({ref:n},m))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(87462),i=(t(67294),t(3905));const r={id:"common_functions_getEnvironment",title:"Module: common/functions/getEnvironment",sidebar_label:"common/functions/getEnvironment",sidebar_position:0,custom_edit_url:null},s=void 0,a={unversionedId:"Api/engine/modules/common_functions_getEnvironment",id:"Api/engine/modules/common_functions_getEnvironment",title:"Module: common/functions/getEnvironment",description:"Variables",source:"@site/docs/Api/engine/modules/common_functions_getEnvironment.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/common_functions_getEnvironment",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_getEnvironment",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_getEnvironment",title:"Module: common/functions/getEnvironment",sidebar_label:"common/functions/getEnvironment",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"common/functions/delay",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_delay"},next:{title:"common/functions/getSignedAngleBetweenVectors",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_getSignedAngleBetweenVectors"}},l={},c=[{value:"Variables",id:"variables",level:2},{value:"isBrowser",id:"isbrowser",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"isNode",id:"isnode",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"isWebWorker",id:"iswebworker",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Functions",id:"functions",level:2},{value:"isJsDom",id:"isjsdom",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"isbrowser"},"isBrowser"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"isBrowser"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/engine/src/common/functions/getEnvironment.ts#L3"},"packages/engine/src/common/functions/getEnvironment.ts:3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isnode"},"isNode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"isNode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/engine/src/common/functions/getEnvironment.ts#L10"},"packages/engine/src/common/functions/getEnvironment.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iswebworker"},"isWebWorker"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"isWebWorker"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/engine/src/common/functions/getEnvironment.ts#L6"},"packages/engine/src/common/functions/getEnvironment.ts:6")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"isjsdom"},"isJsDom"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isJsDom"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/releases/tag/12.0.0"},"https://github.com/jsdom/jsdom/releases/tag/12.0.0")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/issues/1537"},"https://github.com/jsdom/jsdom/issues/1537")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/engine/src/common/functions/getEnvironment.ts#L17"},"packages/engine/src/common/functions/getEnvironment.ts:17")))}u.isMDXComponent=!0}}]);