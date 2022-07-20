"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[23469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"debug_systems_DebugRenderer",title:"Module: debug/systems/DebugRenderer",sidebar_label:"debug/systems/DebugRenderer",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"Api/engine/modules/debug_systems_DebugRenderer",id:"Api/engine/modules/debug_systems_DebugRenderer",title:"Module: debug/systems/DebugRenderer",description:"Functions",source:"@site/docs/Api/engine/modules/debug_systems_DebugRenderer.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/debug_systems_DebugRenderer",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/debug_systems_DebugRenderer",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"debug_systems_DebugRenderer",title:"Module: debug/systems/DebugRenderer",sidebar_label:"debug/systems/DebugRenderer",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"debug/systems/DebugHelpersSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/debug_systems_DebugHelpersSystem"},next:{title:"ecs/classes/Engine",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Engine"}},o={},s=[{value:"Functions",id:"functions",level:2},{value:"DebugRenderer",id:"debugrenderer",level:3},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"getColorForBodyType",id:"getcolorforbodytype",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"debugrenderer"},"DebugRenderer"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"DebugRenderer"),"(): (",(0,a.kt)("inlineCode",{parentName:"p"},"world"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_enabled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fn")),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_enabled"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"world")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"_enabled")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/debug/systems/DebugRenderer.ts#L47"},"packages/engine/src/debug/systems/DebugRenderer.ts:47")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getcolorforbodytype"},"getColorForBodyType"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getColorForBodyType"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"bodyType"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"16777215")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"16711680")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"65280")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"43775")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bodyType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.BodyType"},(0,a.kt)("inlineCode",{parentName:"a"},"BodyType")))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"16777215")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"16711680")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"65280")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"43775")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/debug/systems/DebugRenderer.ts#L40"},"packages/engine/src/debug/systems/DebugRenderer.ts:40")))}u.isMDXComponent=!0}}]);