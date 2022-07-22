"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[39687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={id:"util_useSequilizeClient",title:"Module: util/useSequilizeClient",sidebar_label:"util/useSequilizeClient",sidebar_position:0,custom_edit_url:null},a=void 0,u={unversionedId:"Api/server-core/modules/util_useSequilizeClient",id:"Api/server-core/modules/util_useSequilizeClient",title:"Module: util/useSequilizeClient",description:"Functions",source:"@site/docs/Api/server-core/modules/util_useSequilizeClient.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/util_useSequilizeClient",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/util_useSequilizeClient",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"util_useSequilizeClient",title:"Module: util/useSequilizeClient",sidebar_label:"util/useSequilizeClient",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"util/model-resolver",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/util_model_resolver"},next:{title:"analytics/analytics/analytics.class",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/analytics_analytics_analytics_class"}},o={},s=[{value:"Functions",id:"functions",level:2},{value:"useSequelizeClient",id:"usesequelizeclient",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"useSequelizeModels",id:"usesequelizemodels",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"usesequelizeclient"},"useSequelizeClient"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useSequelizeClient"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"app"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Sequelize")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"app")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Application"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Sequelize")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/server-core/src/util/useSequilizeClient.ts#L7"},"packages/server-core/src/util/useSequilizeClient.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usesequelizemodels"},"useSequelizeModels"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useSequelizeModels"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"app"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Models")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"app")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Application"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Models")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/server-core/src/util/useSequilizeClient.ts#L11"},"packages/server-core/src/util/useSequilizeClient.ts:11")))}d.isMDXComponent=!0}}]);