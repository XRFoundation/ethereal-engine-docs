"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[79564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"scene_functions_loaders_WaterFunctions",title:"Module: scene/functions/loaders/WaterFunctions",sidebar_label:"scene/functions/loaders/WaterFunctions",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"Api/engine/modules/scene_functions_loaders_WaterFunctions",id:"Api/engine/modules/scene_functions_loaders_WaterFunctions",title:"Module: scene/functions/loaders/WaterFunctions",description:"Variables",source:"@site/docs/Api/engine/modules/scene_functions_loaders_WaterFunctions.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_functions_loaders_WaterFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_WaterFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_WaterFunctions",title:"Module: scene/functions/loaders/WaterFunctions",sidebar_label:"scene/functions/loaders/WaterFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/loaders/VolumetricFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_VolumetricFunctions"},next:{title:"scene/functions/registerPrefabs",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_registerPrefabs"}},s={},d=[{value:"Variables",id:"variables",level:2},{value:"SCENE_COMPONENT_WATER",id:"scene_component_water",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SCENE_COMPONENT_WATER_DEFAULT_VALUES",id:"scene_component_water_default_values",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"deserializeWater",id:"deserializewater",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"serializeWater",id:"serializewater",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"updateWater",id:"updatewater",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"scene_component_water"},"SCENE","_","COMPONENT","_","WATER"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","WATER"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"water"')),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/engine/src/scene/functions/loaders/WaterFunctions.ts#L17"},"packages/engine/src/scene/functions/loaders/WaterFunctions.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scene_component_water_default_values"},"SCENE","_","COMPONENT","_","WATER","_","DEFAULT","_","VALUES"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","WATER","_","DEFAULT","_","VALUES"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/engine/src/scene/functions/loaders/WaterFunctions.ts#L18"},"packages/engine/src/scene/functions/loaders/WaterFunctions.ts:18")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"deserializewater"},"deserializeWater"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deserializeWater"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"componentData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ComponentJson"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/engine/src/scene/functions/loaders/WaterFunctions.ts#L20"},"packages/engine/src/scene/functions/loaders/WaterFunctions.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serializewater"},"serializeWater"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"serializeWater"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/engine/src/scene/functions/loaders/WaterFunctions.ts#L40"},"packages/engine/src/scene/functions/loaders/WaterFunctions.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatewater"},"updateWater"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"updateWater"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"properties?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"properties?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/engine/src/scene/functions/loaders/WaterFunctions.ts#L38"},"packages/engine/src/scene/functions/loaders/WaterFunctions.ts:38")))}c.isMDXComponent=!0}}]);