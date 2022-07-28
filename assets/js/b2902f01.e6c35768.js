"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[90953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={id:"hooks_limit_user_id",title:"Module: hooks/limit-user-id",sidebar_label:"hooks/limit-user-id",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"API/server-core/modules/hooks_limit_user_id",id:"API/server-core/modules/hooks_limit_user_id",title:"Module: hooks/limit-user-id",description:"Functions",source:"@site/docs/API/server-core/modules/hooks_limit_user_id.md",sourceDirName:"API/server-core/modules",slug:"/API/server-core/modules/hooks_limit_user_id",permalink:"/docs/docs/API/server-core/modules/hooks_limit_user_id",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_limit_user_id",title:"Module: hooks/limit-user-id",sidebar_label:"hooks/limit-user-id",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/is-action",permalink:"/docs/docs/API/server-core/modules/hooks_is_action"},next:{title:"hooks/log-request",permalink:"/docs/docs/API/server-core/modules/hooks_log_request"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"this"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"this")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"td"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"node_modules/@feathersjs/feathers/lib/declarations.d.ts:234"))}m.isMDXComponent=!0}}]);