"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[76303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),N=p(n),s=i,c=N["".concat(o,".").concat(s)]||N[s]||k[s]||r;return n?a.createElement(c,d(d({ref:t},m),{},{components:n})):a.createElement(c,d({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=N;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var p=2;p<r;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},81520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"src_admin_services_BotsService.AdminBotsActions",title:"Class: AdminBotsActions",sidebar_label:"AdminBotsActions",custom_edit_url:null},d=void 0,l={unversionedId:"Api/client-core/classes/src_admin_services_BotsService.AdminBotsActions",id:"Api/client-core/classes/src_admin_services_BotsService.AdminBotsActions",title:"Class: AdminBotsActions",description:"src/admin/services/BotsService.AdminBotsActions",source:"@site/docs/Api/client-core/classes/src_admin_services_BotsService.AdminBotsActions.md",sourceDirName:"Api/client-core/classes",slug:"/Api/client-core/classes/src_admin_services_BotsService.AdminBotsActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_BotsService.AdminBotsActions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_admin_services_BotsService.AdminBotsActions",title:"Class: AdminBotsActions",sidebar_label:"AdminBotsActions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AdminBotCommandActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_BotsCommand.AdminBotCommandActions"},next:{title:"GithubAppActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_GithubAppService.GithubAppActions"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"botCreated",id:"botcreated",level:3},{value:"Call signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"botPatched",id:"botpatched",level:3},{value:"Call signature",id:"call-signature-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"botRemoved",id:"botremoved",level:3},{value:"Call signature",id:"call-signature-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"fetchedBot",id:"fetchedbot",level:3},{value:"Call signature",id:"call-signature-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:p};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/client-core/modules/src_admin_services_BotsService"},"src/admin/services/BotsService"),".AdminBotsActions"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new AdminBotsActions"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"botcreated"},"botCreated"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"botCreated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"BOT_ADMIN_CREATE"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_CREATE"'),"  }",">")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"BOT_ADMIN_CREATE"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_CREATE"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.bot")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_CREATE"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_CREATE"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_CREATE"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_CREATE"'))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/234847b/packages/client-core/src/admin/services/BotsService.ts#L119"},"client-core/src/admin/services/BotsService.ts:119")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"botpatched"},"botPatched"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"botPatched"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature-1"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"BOT_ADMIN_UPDATE"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_UPDATE"'),"  }",">")))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"BOT_ADMIN_UPDATE"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_UPDATE"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.bot")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_UPDATE"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_UPDATE"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_UPDATE"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_UPDATE"'))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/234847b/packages/client-core/src/admin/services/BotsService.ts#L127"},"client-core/src/admin/services/BotsService.ts:127")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"botremoved"},"botRemoved"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"botRemoved"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature-2"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"BOT_ADMIN_REMOVE"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_REMOVE"'),"  }",">")))),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"BOT_ADMIN_REMOVE"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_REMOVE"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.bot")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_REMOVE"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_REMOVE"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bot"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_REMOVE"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_REMOVE"'))))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/234847b/packages/client-core/src/admin/services/BotsService.ts#L123"},"client-core/src/admin/services/BotsService.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fetchedbot"},"fetchedBot"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"fetchedBot"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature-3"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"AdminBot"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"BOT_ADMIN_DISPLAY"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_DISPLAY"'),"  }",">")))),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"AdminBot"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"BOT_ADMIN_DISPLAY"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_DISPLAY"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.bots")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_DISPLAY"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_DISPLAY"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"AdminBot"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_DISPLAY"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"BOT_ADMIN_DISPLAY"'))))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/234847b/packages/client-core/src/admin/services/BotsService.ts#L115"},"client-core/src/admin/services/BotsService.ts:115")))}k.isMDXComponent=!0}}]);