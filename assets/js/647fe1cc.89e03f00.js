"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[7368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),N=o(n),c=r,s=N["".concat(l,".").concat(c)]||N[c]||k[c]||i;return n?a.createElement(s,d(d({ref:t},m),{},{components:n})):a.createElement(s,d({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=N;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,d[1]=p;for(var o=2;o<i;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},90828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={id:"src_admin_services_PartyService.AdminPartyActions",title:"Class: AdminPartyActions",sidebar_label:"AdminPartyActions",custom_edit_url:null},d=void 0,p={unversionedId:"Api/client-core/classes/src_admin_services_PartyService.AdminPartyActions",id:"Api/client-core/classes/src_admin_services_PartyService.AdminPartyActions",title:"Class: AdminPartyActions",description:"src/admin/services/PartyService.AdminPartyActions",source:"@site/docs/Api/client-core/classes/src_admin_services_PartyService.AdminPartyActions.md",sourceDirName:"Api/client-core/classes",slug:"/Api/client-core/classes/src_admin_services_PartyService.AdminPartyActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_PartyService.AdminPartyActions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_admin_services_PartyService.AdminPartyActions",title:"Class: AdminPartyActions",sidebar_label:"AdminPartyActions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AdminLocationActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_LocationService.AdminLocationActions"},next:{title:"AdminRouteActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_RouteService.AdminRouteActions"}},l={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"partyAdminCreated",id:"partyadmincreated",level:3},{value:"Call signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"partyPatched",id:"partypatched",level:3},{value:"Call signature",id:"call-signature-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"partyRemoved",id:"partyremoved",level:3},{value:"Call signature",id:"call-signature-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"partyRetrieved",id:"partyretrieved",level:3},{value:"Call signature",id:"call-signature-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:o};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/client-core/modules/src_admin_services_PartyService"},"src/admin/services/PartyService"),".AdminPartyActions"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new AdminPartyActions"),"()"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"partyadmincreated"},"partyAdminCreated"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"partyAdminCreated"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"call-signature"},"Call signature"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"partialAction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PARTY_ADMIN_CREATED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_CREATED"'),"  }",">")))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PARTY_ADMIN_CREATED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_CREATED"'),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.party")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_CREATED"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matches")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_CREATED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_CREATED"'),"  }",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_CREATED"'))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/42f473a/packages/client-core/src/admin/services/PartyService.ts#L121"},"client-core/src/admin/services/PartyService.ts:121")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"partypatched"},"partyPatched"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"partyPatched"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"call-signature-1"},"Call signature"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"partialAction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"ADMIN_PARTY_PATCHED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_PATCHED"'),"  }",">")))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"ADMIN_PARTY_PATCHED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_PATCHED"'),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.party")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_PATCHED"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matches")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_PATCHED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_PATCHED"'),"  }",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_PATCHED"'))))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/42f473a/packages/client-core/src/admin/services/PartyService.ts#L136"},"client-core/src/admin/services/PartyService.ts:136")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"partyremoved"},"partyRemoved"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"partyRemoved"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"call-signature-2"},"Call signature"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"partialAction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"ADMIN_PARTY_REMOVED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_REMOVED"'),"  }",">")))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"ADMIN_PARTY_REMOVED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_REMOVED"'),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.party")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_REMOVED"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matches")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_REMOVED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_REMOVED"'),"  }",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"ADMIN_PARTY_REMOVED"'))))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/42f473a/packages/client-core/src/admin/services/PartyService.ts#L131"},"client-core/src/admin/services/PartyService.ts:131")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"partyretrieved"},"partyRetrieved"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"partyRetrieved"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"call-signature-3"},"Call signature"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"partialAction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Party"),">",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PARTY_ADMIN_DISPLAYED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_DISPLAYED"'),"  }",">")))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Party"),">",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"PARTY_ADMIN_DISPLAYED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_DISPLAYED"'),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.party")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_DISPLAYED"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matches")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_DISPLAYED"'),"  }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Party"),">",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_DISPLAYED"'),"  }",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"PARTY_ADMIN_DISPLAYED"'))))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/42f473a/packages/client-core/src/admin/services/PartyService.ts#L126"},"client-core/src/admin/services/PartyService.ts:126")))}k.isMDXComponent=!0}}]);