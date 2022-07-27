"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[15993],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),c=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(d.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),g=c(t),u=a,k=g["".concat(d,".").concat(u)]||g[u]||o[u]||s;return t?i.createElement(k,l(l({ref:n},p),{},{components:t})):i.createElement(k,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=g;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<s;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},21976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const s={id:"ecs_classes_Engine.Engine",title:"Class: Engine",sidebar_label:"Engine",custom_edit_url:null},l=void 0,r={unversionedId:"Api/engine/classes/ecs_classes_Engine.Engine",id:"Api/engine/classes/ecs_classes_Engine.Engine",title:"Class: Engine",description:"ecs/classes/Engine.Engine",source:"@site/docs/Api/engine/classes/ecs_classes_Engine.Engine.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/ecs_classes_Engine.Engine",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_Engine.Engine",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ecs_classes_Engine.Engine",title:"Class: Engine",sidebar_label:"Engine",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ServerLoop",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/common_functions_ServerLoop.ServerLoop"},next:{title:"EngineActions",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_EngineState.EngineActions"}},d={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"currentWorld",id:"currentworld",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"engineTimer",id:"enginetimer",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"frameTime",id:"frametime",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"injectedSystems",id:"injectedsystems",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"isBot",id:"isbot",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"isEditor",id:"iseditor",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"isHMD",id:"ishmd",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"publicPath",id:"publicpath",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"simpleMaterials",id:"simplematerials",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"store",id:"store",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"tickRate",id:"tickrate",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"userId",id:"userid",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"worlds",id:"worlds",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"xrFrame",id:"xrframe",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"instance",id:"instance",level:3},{value:"Defined in",id:"defined-in-14",level:4}],p={toc:c};function o(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Engine"},"ecs/classes/Engine"),".Engine"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new Engine"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"currentworld"},"currentWorld"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"currentWorld"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World"))),(0,a.kt)("p",null,"The current world"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L50"},"packages/engine/src/ecs/classes/Engine.ts:50")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enginetimer"},"engineTimer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"engineTimer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"clear")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Function"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"start")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Function"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"stop")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L41"},"packages/engine/src/ecs/classes/Engine.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"frametime"},"frameTime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"frameTime"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("p",null,"Current frame timestamp, relative to performance.timeOrigin"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L39"},"packages/engine/src/ecs/classes/Engine.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"injectedsystems"},"injectedSystems"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"injectedSystems"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_SystemFunctions#systemmoduletype"},(0,a.kt)("inlineCode",{parentName:"a"},"SystemModuleType")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">","[] = ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")),(0,a.kt)("p",null,"Systems to inject after core systems"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L17"},"packages/engine/src/ecs/classes/Engine.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isbot"},"isBot"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"isBot"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L43"},"packages/engine/src/ecs/classes/Engine.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"iseditor"},"isEditor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"isEditor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L62"},"packages/engine/src/ecs/classes/Engine.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ishmd"},"isHMD"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"isHMD"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L45"},"packages/engine/src/ecs/classes/Engine.ts:45")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"publicpath"},"publicPath"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"publicPath"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L57"},"packages/engine/src/ecs/classes/Engine.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"simplematerials"},"simpleMaterials"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"simpleMaterials"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L59"},"packages/engine/src/ecs/classes/Engine.ts:59")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"store"},"store"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"store"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"HyperStore")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L22"},"packages/engine/src/ecs/classes/Engine.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tickrate"},"tickRate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"tickRate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"60")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L14"},"packages/engine/src/ecs/classes/Engine.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"userid"},"userId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"userId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"UserId")),(0,a.kt)("p",null,"The uuid of the logged-in user"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L20"},"packages/engine/src/ecs/classes/Engine.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"worlds"},"worlds"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"worlds"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")),"[] = ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")),(0,a.kt)("p",null,"All worlds that are currently instantiated"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L55"},"packages/engine/src/ecs/classes/Engine.ts:55")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"xrframe"},"xrFrame"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"xrFrame"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"XRFrame")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L60"},"packages/engine/src/ecs/classes/Engine.ts:60")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"instance"},"instance"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"instance"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_Engine.Engine"},(0,a.kt)("inlineCode",{parentName:"a"},"Engine"))),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/ecs/classes/Engine.ts#L13"},"packages/engine/src/ecs/classes/Engine.ts:13")))}o.isMDXComponent=!0}}]);