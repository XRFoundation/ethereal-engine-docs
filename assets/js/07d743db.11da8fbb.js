"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[7130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={id:"hooks_matchmaking_restrict_multiple_queueing",title:"Module: hooks/matchmaking-restrict-multiple-queueing",sidebar_label:"hooks/matchmaking-restrict-multiple-queueing",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"Api/server-core/modules/hooks_matchmaking_restrict_multiple_queueing",id:"Api/server-core/modules/hooks_matchmaking_restrict_multiple_queueing",title:"Module: hooks/matchmaking-restrict-multiple-queueing",description:"Functions",source:"@site/docs/Api/server-core/modules/hooks_matchmaking_restrict_multiple_queueing.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/hooks_matchmaking_restrict_multiple_queueing",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_matchmaking_restrict_multiple_queueing",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_matchmaking_restrict_multiple_queueing",title:"Module: hooks/matchmaking-restrict-multiple-queueing",sidebar_label:"hooks/matchmaking-restrict-multiple-queueing",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/matchmaking-remove-ticket",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_matchmaking_remove_ticket"},next:{title:"hooks/matchmaking-save-ticket",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_matchmaking_save_ticket"}},c={},u=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,i.kt)("p",null,"prevent user to join new search game more then once at time"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/server-core/src/hooks/matchmaking-restrict-multiple-queueing.ts#L9"},"packages/server-core/src/hooks/matchmaking-restrict-multiple-queueing.ts:9")))}p.isMDXComponent=!0}}]);