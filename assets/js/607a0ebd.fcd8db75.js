"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[18779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=o(n),k=i,N=s["".concat(p,".").concat(k)]||s[k]||m[k]||r;return n?a.createElement(N,d(d({ref:t},c),{},{components:n})):a.createElement(N,d({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var o=2;o<r;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={id:"src_admin_services_SceneService.AdminSceneActions",title:"Class: AdminSceneActions",sidebar_label:"AdminSceneActions",custom_edit_url:null},d=void 0,l={unversionedId:"Api/client-core/classes/src_admin_services_SceneService.AdminSceneActions",id:"Api/client-core/classes/src_admin_services_SceneService.AdminSceneActions",title:"Class: AdminSceneActions",description:"src/admin/services/SceneService.AdminSceneActions",source:"@site/docs/Api/client-core/classes/src_admin_services_SceneService.AdminSceneActions.md",sourceDirName:"Api/client-core/classes",slug:"/Api/client-core/classes/src_admin_services_SceneService.AdminSceneActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_SceneService.AdminSceneActions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_admin_services_SceneService.AdminSceneActions",title:"Class: AdminSceneActions",sidebar_label:"AdminSceneActions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AdminRouteActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_RouteService.AdminRouteActions"},next:{title:"AdminScopeTypeActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_ScopeTypeService.AdminScopeTypeActions"}},p={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"sceneFetched",id:"scenefetched",level:3},{value:"Call signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"scenesFetched",id:"scenesfetched",level:3},{value:"Call signature",id:"call-signature-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:o};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/client-core/modules/src_admin_services_SceneService"},"src/admin/services/SceneService"),".AdminSceneActions"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new AdminSceneActions"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"scenefetched"},"sceneFetched"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"sceneFetched"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneData"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_SCENE_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneData"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENE_RETRIEVED"'),"  }",">")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneData"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_SCENE_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneData"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENE_RETRIEVED"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.sceneData")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneData"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENE_RETRIEVED"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneData"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENE_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneData"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENE_RETRIEVED"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENE_RETRIEVED"'))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/admin/services/SceneService.ts#L74"},"client-core/src/admin/services/SceneService.ts:74")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scenesfetched"},"scenesFetched"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"scenesFetched"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature-1"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneMetadata"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_SCENES_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneMetadata"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENES_RETRIEVED"'),"  }",">")))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneMetadata"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_SCENES_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneMetadata"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENES_RETRIEVED"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.sceneData")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneMetadata"),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENES_RETRIEVED"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneMetadata"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENES_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"sceneData"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SceneMetadata"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENES_RETRIEVED"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_SCENES_RETRIEVED"'))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/admin/services/SceneService.ts#L69"},"client-core/src/admin/services/SceneService.ts:69")))}m.isMDXComponent=!0}}]);