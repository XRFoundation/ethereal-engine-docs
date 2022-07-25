"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[81430],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={id:"common_functions_ServerLoop.ServerLoop",title:"Class: ServerLoop",sidebar_label:"ServerLoop",custom_edit_url:null},i=void 0,l={unversionedId:"Api/engine/classes/common_functions_ServerLoop.ServerLoop",id:"Api/engine/classes/common_functions_ServerLoop.ServerLoop",title:"Class: ServerLoop",description:"common/functions/ServerLoop.ServerLoop",source:"@site/docs/Api/engine/classes/common_functions_ServerLoop.ServerLoop.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/common_functions_ServerLoop.ServerLoop",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/common_functions_ServerLoop.ServerLoop",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_functions_ServerLoop.ServerLoop",title:"Class: ServerLoop",sidebar_label:"ServerLoop",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Object3DUtils",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/common_functions_Object3DUtils.Object3DUtils"},next:{title:"Engine",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_Engine.Engine"}},p={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_deltas",id:"_deltas",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_lastFrameTime",id:"_lastframetime",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_option",id:"_option",level:3},{value:"_running",id:"_running",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_step",id:"_step",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"_times",id:"_times",level:3},{value:"_update",id:"_update",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods",level:2},{value:"_ConvertMsToNano",id:"_convertmstonano",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"_ConvertNanoToMs",id:"_convertnanotoms",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"_ConvertNanoToSeconds",id:"_convertnanotoseconds",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"_ConvertSecondsToNano",id:"_convertsecondstonano",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"_nano",id:"_nano",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"_time",id:"_time",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"now_ms",id:"now_ms",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"start",id:"start",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"stop",id:"stop",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-14",level:4}],d={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_ServerLoop"},"common/functions/ServerLoop"),".ServerLoop"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new ServerLoop"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"update?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_times?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_option?"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"update")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"_times")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"10"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"_option?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Option")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L14"},"packages/engine/src/common/functions/ServerLoop.ts:14")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"_deltas"},"_","deltas"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","deltas"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L13"},"packages/engine/src/common/functions/ServerLoop.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_lastframetime"},"_","lastFrameTime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","lastFrameTime"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L10"},"packages/engine/src/common/functions/ServerLoop.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_option"},"_","option"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"_","option"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Option")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_running"},"_","running"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","running"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L11"},"packages/engine/src/common/functions/ServerLoop.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_step"},"_","step"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","step"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L12"},"packages/engine/src/common/functions/ServerLoop.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_times"},"_","times"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","times"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_update"},"_","update"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","update"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Function")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L9"},"packages/engine/src/common/functions/ServerLoop.ts:9")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"_convertmstonano"},"_","ConvertMsToNano"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"_ConvertMsToNano"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"ms"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ms")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L34"},"packages/engine/src/common/functions/ServerLoop.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_convertnanotoms"},"_","ConvertNanoToMs"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"_ConvertNanoToMs"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"nano"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nano")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L31"},"packages/engine/src/common/functions/ServerLoop.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_convertnanotoseconds"},"_","ConvertNanoToSeconds"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"_ConvertNanoToSeconds"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"nano"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nano")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L28"},"packages/engine/src/common/functions/ServerLoop.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_convertsecondstonano"},"_","ConvertSecondsToNano"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"_ConvertSecondsToNano"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"sec"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"sec")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L25"},"packages/engine/src/common/functions/ServerLoop.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_nano"},"_","nano"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"_nano"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L21"},"packages/engine/src/common/functions/ServerLoop.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_time"},"_","time"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"_time"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L40"},"packages/engine/src/common/functions/ServerLoop.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"now_ms"},"now","_","ms"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"now_ms"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L37"},"packages/engine/src/common/functions/ServerLoop.ts:37")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"start"},"start"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"start"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_functions_ServerLoop.ServerLoop"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerLoop"))),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_functions_ServerLoop.ServerLoop"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerLoop"))),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L43"},"packages/engine/src/common/functions/ServerLoop.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stop"},"stop"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"stop"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_functions_ServerLoop.ServerLoop"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerLoop"))),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_functions_ServerLoop.ServerLoop"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerLoop"))),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/common/functions/ServerLoop.ts#L109"},"packages/engine/src/common/functions/ServerLoop.ts:109")))}m.isMDXComponent=!0}}]);