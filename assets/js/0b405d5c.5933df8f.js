"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[10611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=o(n),m=i,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(v,l(l({ref:t},d),{},{components:n})):r.createElement(v,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(87462),i=(n(67294),n(3905));const a={id:"src_world_services_SceneService",title:"Module: src/world/services/SceneService",sidebar_label:"src/world/services/SceneService",sidebar_position:0,custom_edit_url:null},l=void 0,c={unversionedId:"Api/client-core/modules/src_world_services_SceneService",id:"Api/client-core/modules/src_world_services_SceneService",title:"Module: src/world/services/SceneService",description:"Classes",source:"@site/docs/Api/client-core/modules/src_world_services_SceneService.md",sourceDirName:"Api/client-core/modules",slug:"/Api/client-core/modules/src_world_services_SceneService",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_world_services_SceneService",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"src_world_services_SceneService",title:"Module: src/world/services/SceneService",sidebar_label:"src/world/services/SceneService",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"src/world/functions/getPortalDetails",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_world_functions_getPortalDetails"},next:{title:"src/service.common",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_service_common"}},s={},o=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2},{value:"SceneService",id:"sceneservice",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"SceneServiceReceptor",id:"sceneservicereceptor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"accessSceneState",id:"accessscenestate",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"useSceneState",id:"usescenestate",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:o};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/client-core/classes/src_world_services_SceneService.SceneActions"},"SceneActions"))),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"sceneservice"},"SceneService"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SceneService"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fetchCurrentScene")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"projectName"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"sceneName"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"void"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useAPIListeners")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9682b7b/packages/client-core/src/world/services/SceneService.ts#L39"},"client-core/src/world/services/SceneService.ts:39")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"sceneservicereceptor"},"SceneServiceReceptor"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"SceneServiceReceptor"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9682b7b/packages/client-core/src/world/services/SceneService.ts#L19"},"client-core/src/world/services/SceneService.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"accessscenestate"},"accessSceneState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"accessSceneState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"currentScene"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneData"),"  }",">"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"currentScene"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneData"),"  }",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9682b7b/packages/client-core/src/world/services/SceneService.ts#L35"},"client-core/src/world/services/SceneService.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usescenestate"},"useSceneState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useSceneState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"currentScene"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneData"),"  }",">"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"currentScene"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneData"),"  }",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9682b7b/packages/client-core/src/world/services/SceneService.ts#L37"},"client-core/src/world/services/SceneService.ts:37")))}p.isMDXComponent=!0}}]);