"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[3234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(n),N=r,s=k["".concat(o,".").concat(N)]||k[N]||c[N]||i;return n?a.createElement(s,l(l({ref:t},m),{},{components:n})):a.createElement(s,l({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},73948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"src_common_services_ProjectService.ProjectAction",title:"Class: ProjectAction",sidebar_label:"ProjectAction",custom_edit_url:null},l=void 0,p={unversionedId:"Api/client-core/classes/src_common_services_ProjectService.ProjectAction",id:"Api/client-core/classes/src_common_services_ProjectService.ProjectAction",title:"Class: ProjectAction",description:"src/common/services/ProjectService.ProjectAction",source:"@site/docs/Api/client-core/classes/src_common_services_ProjectService.ProjectAction.md",sourceDirName:"Api/client-core/classes",slug:"/Api/client-core/classes/src_common_services_ProjectService.ProjectAction",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_common_services_ProjectService.ProjectAction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_common_services_ProjectService.ProjectAction",title:"Class: ProjectAction",sidebar_label:"ProjectAction",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"NotificationAction",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_common_services_NotificationService.NotificationAction"},next:{title:"MediaStreamAction",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_media_services_MediaStreamService.MediaStreamAction"}},o={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"createdProject",id:"createdproject",level:3},{value:"Call signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"patchedProject",id:"patchedproject",level:3},{value:"Call signature",id:"call-signature-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"postProject",id:"postproject",level:3},{value:"Call signature",id:"call-signature-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"projectsFetched",id:"projectsfetched",level:3},{value:"Call signature",id:"call-signature-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/client-core/modules/src_common_services_ProjectService"},"src/common/services/ProjectService"),".ProjectAction"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ProjectAction"),"()"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"createdproject"},"createdProject"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"createdProject"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"call-signature"},"Call signature"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"partialAction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PROJECT_CREATED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_CREATED"'),"  }",">")))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PROJECT_CREATED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_CREATED"'),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_CREATED"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matches")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_CREATED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_CREATED"'),"  }",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_CREATED"'))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8404362/packages/client-core/src/common/services/ProjectService.ts#L169"},"client-core/src/common/services/ProjectService.ts:169")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"patchedproject"},"patchedProject"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"patchedProject"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"call-signature-1"},"Call signature"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"partialAction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectInterface"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PROJECT_PATCHED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"project"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_PATCHED"'),"  }",">")))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectInterface"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PROJECT_PATCHED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"project"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_PATCHED"'),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.project")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_PATCHED"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matches")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"project"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_PATCHED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"project"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_PATCHED"'),"  }",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_PATCHED"'))))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8404362/packages/client-core/src/common/services/ProjectService.ts#L173"},"client-core/src/common/services/ProjectService.ts:173")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"postproject"},"postProject"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"postProject"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"call-signature-2"},"Call signature"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"partialAction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PROJECT_POSTED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_POSTED"'),"  }",">")))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PROJECT_POSTED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_POSTED"'),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_POSTED"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matches")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_POSTED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_POSTED"'),"  }",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECT_POSTED"'))))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8404362/packages/client-core/src/common/services/ProjectService.ts#L165"},"client-core/src/common/services/ProjectService.ts:165")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"projectsfetched"},"projectsFetched"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"projectsFetched"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"call-signature-3"},"Call signature"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"partialAction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"projectResult"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectInterface"),"[]",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PROJECTS_RETRIEVED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"projectResult"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),"[]",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECTS_RETRIEVED"'),"  }",">")))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"projectResult"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectInterface"),"[]",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PROJECTS_RETRIEVED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"projectResult"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),"[]",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECTS_RETRIEVED"'),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.projectResult")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),"[]",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECTS_RETRIEVED"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matches")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"projectResult"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),"[]",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECTS_RETRIEVED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"projectResult"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ProjectInterface"),"[]",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECTS_RETRIEVED"'),"  }",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PROJECTS_RETRIEVED"'))))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8404362/packages/client-core/src/common/services/ProjectService.ts#L160"},"client-core/src/common/services/ProjectService.ts:160")))}c.isMDXComponent=!0}}]);