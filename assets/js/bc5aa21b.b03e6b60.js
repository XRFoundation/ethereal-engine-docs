"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[67350],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),v=n,m=d["".concat(l,".").concat(v)]||d[v]||p[v]||i;return t?a.createElement(m,o(o({ref:r},u),{},{components:t})):a.createElement(m,o({ref:r},u))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65626:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const i={id:"user_avatar_avatar_service",title:"Module: user/avatar/avatar.service",sidebar_label:"user/avatar/avatar.service",custom_edit_url:null},o=void 0,s={unversionedId:"Api/server-core/modules/user_avatar_avatar_service",id:"Api/server-core/modules/user_avatar_avatar_service",title:"Module: user/avatar/avatar.service",description:"Functions",source:"@site/docs/Api/server-core/modules/user_avatar_avatar_service.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/user_avatar_avatar_service",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/user_avatar_avatar_service",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user_avatar_avatar_service",title:"Module: user/avatar/avatar.service",sidebar_label:"user/avatar/avatar.service",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"user/avatar/avatar.hooks",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/user_avatar_avatar_hooks"},next:{title:"user/discord-bot-auth/discord-bot-auth.class",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/user_discord_bot_auth_discord_bot_auth_class"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"default"},"default"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"default"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"app"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"app")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Application"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/42f3b05/packages/server-core/src/user/avatar/avatar.service.ts#L14"},"packages/server-core/src/user/avatar/avatar.service.ts:14")))}p.isMDXComponent=!0}}]);