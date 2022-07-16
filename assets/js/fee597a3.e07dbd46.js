"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[68121],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},14322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={id:"scene_functions_loaders_TriggerVolumeFunctions",title:"Module: scene/functions/loaders/TriggerVolumeFunctions",sidebar_label:"scene/functions/loaders/TriggerVolumeFunctions",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"Api/engine/modules/scene_functions_loaders_TriggerVolumeFunctions",id:"Api/engine/modules/scene_functions_loaders_TriggerVolumeFunctions",title:"Module: scene/functions/loaders/TriggerVolumeFunctions",description:"Variables",source:"@site/docs/Api/engine/modules/scene_functions_loaders_TriggerVolumeFunctions.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_functions_loaders_TriggerVolumeFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_TriggerVolumeFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_TriggerVolumeFunctions",title:"Module: scene/functions/loaders/TriggerVolumeFunctions",sidebar_label:"scene/functions/loaders/TriggerVolumeFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/loaders/TransformFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_TransformFunctions"},next:{title:"scene/functions/loaders/VideoFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_VideoFunctions"}},s={},d=[{value:"Variables",id:"variables",level:2},{value:"SCENE_COMPONENT_TRIGGER_VOLUME",id:"scene_component_trigger_volume",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SCENE_COMPONENT_TRIGGER_VOLUME_DEFAULT_VALUES",id:"scene_component_trigger_volume_default_values",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"deserializeTriggerVolume",id:"deserializetriggervolume",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"serializeTriggerVolume",id:"serializetriggervolume",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"updateTriggerVolume",id:"updatetriggervolume",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4}],u={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"scene_component_trigger_volume"},"SCENE","_","COMPONENT","_","TRIGGER","_","VOLUME"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","TRIGGER","_","VOLUME"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"trigger-volume"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/292714f/packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts#L20"},"packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scene_component_trigger_volume_default_values"},"SCENE","_","COMPONENT","_","TRIGGER","_","VOLUME","_","DEFAULT","_","VALUES"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","TRIGGER","_","VOLUME","_","DEFAULT","_","VALUES"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/292714f/packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts#L21"},"packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts:21")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"deserializetriggervolume"},"deserializeTriggerVolume"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"deserializeTriggerVolume"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"componentData")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ComponentJson"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/292714f/packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts#L23"},"packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializetriggervolume"},"serializeTriggerVolume"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"serializeTriggerVolume"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/292714f/packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts#L63"},"packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatetriggervolume"},"updateTriggerVolume"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateTriggerVolume"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"properties?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"properties?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/292714f/packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts#L53"},"packages/engine/src/scene/functions/loaders/TriggerVolumeFunctions.ts:53")))}p.isMDXComponent=!0}}]);