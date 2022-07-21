"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[63026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"networking_systems_OutgoingNetworkSystem",title:"Module: networking/systems/OutgoingNetworkSystem",sidebar_label:"networking/systems/OutgoingNetworkSystem",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"Api/engine/modules/networking_systems_OutgoingNetworkSystem",id:"Api/engine/modules/networking_systems_OutgoingNetworkSystem",title:"Module: networking/systems/OutgoingNetworkSystem",description:"Variables",source:"@site/docs/Api/engine/modules/networking_systems_OutgoingNetworkSystem.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/networking_systems_OutgoingNetworkSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_systems_OutgoingNetworkSystem",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_systems_OutgoingNetworkSystem",title:"Module: networking/systems/OutgoingNetworkSystem",sidebar_label:"networking/systems/OutgoingNetworkSystem",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"networking/systems/OutgoingActionSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_systems_OutgoingActionSystem"},next:{title:"networking/systems/WorldNetworkActionSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_systems_WorldNetworkActionSystem"}},s={},d=[{value:"Variables",id:"variables",level:2},{value:"networkTransformsQuery",id:"networktransformsquery",level:3},{value:"Call signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"networktransformsquery"},"networkTransformsQuery"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"networkTransformsQuery"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"call-signature"},"Call signature"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"world?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),"[]"),(0,a.kt)("p",null,"QUERIES *"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"world")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Engine.instance.currentWorld"))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),"[]"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"enter")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),"[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"exit")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),"[]")))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L12"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:12")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"world")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L33"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:33")))}m.isMDXComponent=!0}}]);