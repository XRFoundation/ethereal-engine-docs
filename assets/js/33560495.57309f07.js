"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[81603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"hooks_createPartyInstance",title:"Module: hooks/createPartyInstance",sidebar_label:"hooks/createPartyInstance",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"Api/server-core/modules/hooks_createPartyInstance",id:"Api/server-core/modules/hooks_createPartyInstance",title:"Module: hooks/createPartyInstance",description:"Functions",source:"@site/docs/Api/server-core/modules/hooks_createPartyInstance.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/hooks_createPartyInstance",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_createPartyInstance",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_createPartyInstance",title:"Module: hooks/createPartyInstance",sidebar_label:"hooks/createPartyInstance",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/collect-analytics",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_collect_analytics"},next:{title:"hooks/create-group-owner",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_create_group_owner"}},p={},c=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in",level:4}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(): (",(0,a.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",") => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fn")),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"context")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"Application"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/05eb628/packages/server-core/src/hooks/createPartyInstance.ts#L11"},"packages/server-core/src/hooks/createPartyInstance.ts:11")))}d.isMDXComponent=!0}}]);