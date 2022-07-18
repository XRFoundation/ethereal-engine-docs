"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[95625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),N=o(n),c=i,s=N["".concat(p,".").concat(c)]||N[c]||k[c]||r;return n?a.createElement(s,d(d({ref:t},m),{},{components:n})):a.createElement(s,d({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=N;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var o=2;o<r;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},8346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={id:"src_admin_services_InviteService.AdminInviteActions",title:"Class: AdminInviteActions",sidebar_label:"AdminInviteActions",custom_edit_url:null},d=void 0,l={unversionedId:"Api/client-core/classes/src_admin_services_InviteService.AdminInviteActions",id:"Api/client-core/classes/src_admin_services_InviteService.AdminInviteActions",title:"Class: AdminInviteActions",description:"src/admin/services/InviteService.AdminInviteActions",source:"@site/docs/Api/client-core/classes/src_admin_services_InviteService.AdminInviteActions.md",sourceDirName:"Api/client-core/classes",slug:"/Api/client-core/classes/src_admin_services_InviteService.AdminInviteActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_InviteService.AdminInviteActions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_admin_services_InviteService.AdminInviteActions",title:"Class: AdminInviteActions",sidebar_label:"AdminInviteActions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"InstanceserverActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_InstanceserverService.InstanceserverActions"},next:{title:"AdminLocationActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_LocationService.AdminLocationActions"}},p={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"inviteCreated",id:"invitecreated",level:3},{value:"Call signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"invitePatched",id:"invitepatched",level:3},{value:"Call signature",id:"call-signature-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"inviteRemoved",id:"inviteremoved",level:3},{value:"Call signature",id:"call-signature-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"invitesRetrieved",id:"invitesretrieved",level:3},{value:"Call signature",id:"call-signature-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:o};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/client-core/modules/src_admin_services_InviteService"},"src/admin/services/InviteService"),".AdminInviteActions"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new AdminInviteActions"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"invitecreated"},"inviteCreated"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"inviteCreated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_INVITE_CREATED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_CREATED"'),"  }",">")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_INVITE_CREATED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_CREATED"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.invite")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_CREATED"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_CREATED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_CREATED"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_CREATED"'))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/client-core/src/admin/services/InviteService.ts#L155"},"client-core/src/admin/services/InviteService.ts:155")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"invitepatched"},"invitePatched"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"invitePatched"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature-1"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_INVITE_PATCHED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_PATCHED"'),"  }",">")))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_INVITE_PATCHED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_PATCHED"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.invite")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_PATCHED"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_PATCHED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_PATCHED"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_PATCHED"'))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/client-core/src/admin/services/InviteService.ts#L160"},"client-core/src/admin/services/InviteService.ts:160")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inviteremoved"},"inviteRemoved"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"inviteRemoved"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature-2"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_INVITE_REMOVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_REMOVED"'),"  }",">")))),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_INVITE_REMOVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_REMOVED"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.invite")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_REMOVED"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_REMOVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invite"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_REMOVED"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITE_REMOVED"'))))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/client-core/src/admin/services/InviteService.ts#L165"},"client-core/src/admin/services/InviteService.ts:165")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"invitesretrieved"},"invitesRetrieved"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"invitesRetrieved"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature-3"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"invites"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Invite"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_INVITES_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invites"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITES_RETRIEVED"'),"  }",">")))),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"invites"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Invite"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ADMIN_INVITES_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invites"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITES_RETRIEVED"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.invites")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITES_RETRIEVED"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invites"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITES_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"invites"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Invite"),">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITES_RETRIEVED"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"ADMIN_INVITES_RETRIEVED"'))))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/client-core/src/admin/services/InviteService.ts#L150"},"client-core/src/admin/services/InviteService.ts:150")))}k.isMDXComponent=!0}}]);