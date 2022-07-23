"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[16285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={id:"src_systems_state_LoadingState",title:"Module: src/systems/state/LoadingState",sidebar_label:"src/systems/state/LoadingState",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"Api/client-core/modules/src_systems_state_LoadingState",id:"Api/client-core/modules/src_systems_state_LoadingState",title:"Module: src/systems/state/LoadingState",description:"Variables",source:"@site/docs/Api/client-core/modules/src_systems_state_LoadingState.md",sourceDirName:"Api/client-core/modules",slug:"/Api/client-core/modules/src_systems_state_LoadingState",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_systems_state_LoadingState",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"src_systems_state_LoadingState",title:"Module: src/systems/state/LoadingState",sidebar_label:"src/systems/state/LoadingState",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"src/systems/createUploadAvatarWidget",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_systems_createUploadAvatarWidget"},next:{title:"src/systems/ui/AdminControlsMenuView",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_systems_ui_AdminControlsMenuView"}},l={},d=[{value:"Variables",id:"variables",level:2},{value:"LoadingSystemState",id:"loadingsystemstate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"accessLoadingSystemState",id:"accessloadingsystemstate",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useLoadingSystemState",id:"useloadingsystemstate",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"loadingsystemstate"},"LoadingSystemState"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"LoadingSystemState"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0 }",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"," = 0 }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/client-core/src/systems/state/LoadingState.ts#L3"},"client-core/src/systems/state/LoadingState.ts:3")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"accessloadingsystemstate"},"accessLoadingSystemState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"accessLoadingSystemState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0 }",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"," = 0 }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0 }",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"," = 0 }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/client-core/src/systems/state/LoadingState.ts#L6"},"client-core/src/systems/state/LoadingState.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"useloadingsystemstate"},"useLoadingSystemState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useLoadingSystemState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0 }",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"," = 0 }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0 }",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"," = 0 }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/client-core/src/systems/state/LoadingState.ts#L7"},"client-core/src/systems/state/LoadingState.ts:7")))}m.isMDXComponent=!0}}]);