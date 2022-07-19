"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[88252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={id:"hooks_matchmaking_save_ticket",title:"Module: hooks/matchmaking-save-ticket",sidebar_label:"hooks/matchmaking-save-ticket",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"Api/server-core/modules/hooks_matchmaking_save_ticket",id:"Api/server-core/modules/hooks_matchmaking_save_ticket",title:"Module: hooks/matchmaking-save-ticket",description:"Functions",source:"@site/docs/Api/server-core/modules/hooks_matchmaking_save_ticket.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/hooks_matchmaking_save_ticket",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_matchmaking_save_ticket",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_matchmaking_save_ticket",title:"Module: hooks/matchmaking-save-ticket",sidebar_label:"hooks/matchmaking-save-ticket",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/matchmaking-restrict-multiple-queueing",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_matchmaking_restrict_multiple_queueing"},next:{title:"hooks/message-permission-authenticate",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_message_permission_authenticate"}},c={},l=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/matchmaking-save-ticket.ts#L5"},"packages/server-core/src/hooks/matchmaking-save-ticket.ts:5")))}u.isMDXComponent=!0}}]);