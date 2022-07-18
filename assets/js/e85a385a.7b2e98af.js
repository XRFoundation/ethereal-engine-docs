"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[2769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,v=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41231:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const s={id:"hooks_remove_message_statuses",title:"Module: hooks/remove-message-statuses",sidebar_label:"hooks/remove-message-statuses",sidebar_position:0,custom_edit_url:null},a=void 0,i={unversionedId:"Api/server-core/modules/hooks_remove_message_statuses",id:"Api/server-core/modules/hooks_remove_message_statuses",title:"Module: hooks/remove-message-statuses",description:"Functions",source:"@site/docs/Api/server-core/modules/hooks_remove_message_statuses.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/hooks_remove_message_statuses",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_remove_message_statuses",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_remove_message_statuses",title:"Module: hooks/remove-message-statuses",sidebar_label:"hooks/remove-message-statuses",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/remove-group-users",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_remove_group_users"},next:{title:"hooks/remove-party-users",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_remove_party_users"}},l={},u=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"default"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9682b7b/packages/server-core/src/hooks/remove-message-statuses.ts#L5"},"packages/server-core/src/hooks/remove-message-statuses.ts:5")))}c.isMDXComponent=!0}}]);