"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[64928],{3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>c});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=t.createContext({}),d=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},p=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(i),c=a,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return i?t.createElement(k,l(l({ref:n},p),{},{components:i})):t.createElement(k,l({ref:n},p))}));function c(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<r;d++)l[d]=i[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},82342:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=i(87462),a=(i(67294),i(3905));const r={id:"initializeEngine",title:"Module: initializeEngine",sidebar_label:"initializeEngine",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"Api/engine/modules/initializeEngine",id:"Api/engine/modules/initializeEngine",title:"Module: initializeEngine",description:"Functions",source:"@site/docs/Api/engine/modules/initializeEngine.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/initializeEngine",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/initializeEngine",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"initializeEngine",title:"Module: initializeEngine",sidebar_label:"initializeEngine",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ecs/functions/SystemUpdateType",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemUpdateType"},next:{title:"input/components/DelegatedInputReceiverComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/input_components_DelegatedInputReceiverComponent"}},o={},d=[{value:"Functions",id:"functions",level:2},{value:"createEngine",id:"createengine",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"initializeBrowser",id:"initializebrowser",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"initializeCoreSystems",id:"initializecoresystems",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"initializeMediaServerSystems",id:"initializemediaserversystems",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"initializeNode",id:"initializenode",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"initializeRealtimeSystems",id:"initializerealtimesystems",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"initializeSceneSystems",id:"initializescenesystems",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"setupEngineActionSystems",id:"setupengineactionsystems",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4}],p={toc:d};function u(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"createengine"},"createEngine"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createEngine"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Creates a new instance of the engine and engine renderer. This initializes all properties and state for the engine,\nadds action receptors and creates a new world."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/initializeEngine.ts#L30"},"packages/engine/src/initializeEngine.ts:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initializebrowser"},"initializeBrowser"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"initializeBrowser"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"initializeBrowser"),(0,a.kt)("p",null,"initializes everything for the browser context"),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/initializeEngine.ts#L64"},"packages/engine/src/initializeEngine.ts:64")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initializecoresystems"},"initializeCoreSystems"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"initializeCoreSystems"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/initializeEngine.ts#L131"},"packages/engine/src/initializeEngine.ts:131")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initializemediaserversystems"},"initializeMediaServerSystems"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"initializeMediaServerSystems"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/initializeEngine.ts#L127"},"packages/engine/src/initializeEngine.ts:127")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initializenode"},"initializeNode"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"initializeNode"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"initializeNode"),(0,a.kt)("p",null,"initializes everything for the node context"),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/initializeEngine.ts#L116"},"packages/engine/src/initializeEngine.ts:116")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initializerealtimesystems"},"initializeRealtimeSystems"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"initializeRealtimeSystems"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"media?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pose?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"media")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pose")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/initializeEngine.ts#L296"},"packages/engine/src/initializeEngine.ts:296")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initializescenesystems"},"initializeSceneSystems"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"initializeSceneSystems"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"everything needed for rendering 3d scenes"),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/initializeEngine.ts#L190"},"packages/engine/src/initializeEngine.ts:190")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setupengineactionsystems"},"setupEngineActionSystems"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setupEngineActionSystems"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/initializeEngine.ts#L42"},"packages/engine/src/initializeEngine.ts:42")))}u.isMDXComponent=!0}}]);