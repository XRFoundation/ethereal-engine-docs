"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[89401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=s(n),c=r,u=k["".concat(d,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(u,l(l({ref:t},o),{},{components:n})):a.createElement(u,l({ref:t},o))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},98969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"ecs_functions_SystemFunctions",title:"Module: ecs/functions/SystemFunctions",sidebar_label:"ecs/functions/SystemFunctions",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"Api/engine/modules/ecs_functions_SystemFunctions",id:"Api/engine/modules/ecs_functions_SystemFunctions",title:"Module: ecs/functions/SystemFunctions",description:"Type Aliases",source:"@site/docs/Api/engine/modules/ecs_functions_SystemFunctions.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/ecs_functions_SystemFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ecs_functions_SystemFunctions",title:"Module: ecs/functions/SystemFunctions",sidebar_label:"ecs/functions/SystemFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ecs/functions/FixedPipelineSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_FixedPipelineSystem"},next:{title:"ecs/functions/SystemHooks",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemHooks"}},d={},s=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"CreateSystemFunctionType",id:"createsystemfunctiontype",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"CreateSystemSyncFunctionType",id:"createsystemsyncfunctiontype",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"SystemFactoryType",id:"systemfactorytype",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"SystemInstanceType",id:"systeminstancetype",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"SystemModule",id:"systemmodule",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"SystemModulePromise",id:"systemmodulepromise",level:3},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"SystemModuleType",id:"systemmoduletype",level:3},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"SystemSyncFunctionType",id:"systemsyncfunctiontype",level:3},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Functions",id:"functions",level:2},{value:"initSystemSync",id:"initsystemsync",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"initSystems",id:"initsystems",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"unloadSystems",id:"unloadsystems",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-10",level:4}],o={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"createsystemfunctiontype"},"CreateSystemFunctionType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"CreateSystemFunctionType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),">",": (",(0,r.kt)("inlineCode",{parentName:"p"},"world"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"props?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"props?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"props?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L7"},"packages/engine/src/ecs/functions/SystemFunctions.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createsystemsyncfunctiontype"},"CreateSystemSyncFunctionType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"CreateSystemSyncFunctionType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),">",": (",(0,r.kt)("inlineCode",{parentName:"p"},"world"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"props?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),") => () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"props?"),"): () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"props?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L6"},"packages/engine/src/ecs/functions/SystemFunctions.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"systemfactorytype"},"SystemFactoryType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SystemFactoryType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))))),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sceneSystem?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"systemModule")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemFunctions#systemmodule"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemModule")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"A"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemUpdateType#systemupdatetype-1"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemUpdateType")))))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L24"},"packages/engine/src/ecs/functions/SystemFunctions.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"systeminstancetype"},"SystemInstanceType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SystemInstanceType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sceneSystem")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemUpdateType#systemupdatetype-1"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemUpdateType")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"execute")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L31"},"packages/engine/src/ecs/functions/SystemFunctions.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"systemmodule"},"SystemModule"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SystemModule"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemFunctions#createsystemfunctiontype"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateSystemFunctionType")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"A"),">")))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L8"},"packages/engine/src/ecs/functions/SystemFunctions.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"systemmodulepromise"},"SystemModulePromise"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SystemModulePromise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemFunctions#systemmodule"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemModule")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),">",">"),(0,r.kt)("h4",{id:"type-parameters-4"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L9"},"packages/engine/src/ecs/functions/SystemFunctions.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"systemmoduletype"},"SystemModuleType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SystemModuleType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-parameters-5"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))))),(0,r.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sceneSystem?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"systemModulePromise")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemFunctions#systemmodulepromise"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemModulePromise")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"A"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemUpdateType#systemupdatetype-1"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemUpdateType")))))),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L17"},"packages/engine/src/ecs/functions/SystemFunctions.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"systemsyncfunctiontype"},"SystemSyncFunctionType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SystemSyncFunctionType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-parameters-6"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))))),(0,r.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"systemFunction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemFunctions#createsystemsyncfunctiontype"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateSystemSyncFunctionType")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"A"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemUpdateType#systemupdatetype-1"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemUpdateType")))))),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L11"},"packages/engine/src/ecs/functions/SystemFunctions.ts:11")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"initsystemsync"},"initSystemSync"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initSystemSync"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"systemArgs"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"systemArgs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemFunctions#systemsyncfunctiontype"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemSyncFunctionType")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L87"},"packages/engine/src/ecs/functions/SystemFunctions.ts:87")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initsystems"},"initSystems"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initSystems"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"systemModulesToLoad"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"systemModulesToLoad")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemFunctions#systemmoduletype"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemModuleType")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">","[]")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L38"},"packages/engine/src/ecs/functions/SystemFunctions.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unloadsystems"},"unloadSystems"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unloadSystems"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sceneSystemsOnly?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sceneSystemsOnly")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/ecs/functions/SystemFunctions.ts#L113"},"packages/engine/src/ecs/functions/SystemFunctions.ts:113")))}m.isMDXComponent=!0}}]);