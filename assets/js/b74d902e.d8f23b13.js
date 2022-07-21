"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[22380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"src_systems_AvatarUISystem",title:"Module: src/systems/AvatarUISystem",sidebar_label:"src/systems/AvatarUISystem",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"Api/client-core/modules/src_systems_AvatarUISystem",id:"Api/client-core/modules/src_systems_AvatarUISystem",title:"Module: src/systems/AvatarUISystem",description:"Variables",source:"@site/docs/Api/client-core/modules/src_systems_AvatarUISystem.md",sourceDirName:"Api/client-core/modules",slug:"/Api/client-core/modules/src_systems_AvatarUISystem",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_systems_AvatarUISystem",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"src_systems_AvatarUISystem",title:"Module: src/systems/AvatarUISystem",sidebar_label:"src/systems/AvatarUISystem",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"src/systems/AdminSystem",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_systems_AdminSystem"},next:{title:"src/systems/LoadingUISystem",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_systems_LoadingUISystem"}},o={},d=[{value:"Variables",id:"variables",level:2},{value:"AvatarUI",id:"avatarui",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"renderAvatarContextMenu",id:"renderavatarcontextmenu",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"avatarui"},"AvatarUI"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"AvatarUI"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"XRUI"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">","  }, keyof ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/client-core/src/systems/AvatarUISystem.tsx#L21"},"client-core/src/systems/AvatarUISystem.tsx:21")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"world")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"World"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/client-core/src/systems/AvatarUISystem.tsx#L44"},"client-core/src/systems/AvatarUISystem.tsx:44")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"renderavatarcontextmenu"},"renderAvatarContextMenu"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"renderAvatarContextMenu"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"contextMenuEntity"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"world")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"World"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"userId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"UserId"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"contextMenuEntity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Entity"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/client-core/src/systems/AvatarUISystem.tsx#L23"},"client-core/src/systems/AvatarUISystem.tsx:23")))}m.isMDXComponent=!0}}]);