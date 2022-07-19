"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[12506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},26468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"user_strategies_custom_oauth.CustomOAuthStrategy",title:"Class: CustomOAuthStrategy",sidebar_label:"CustomOAuthStrategy",custom_edit_url:null},s=void 0,o={unversionedId:"Api/server-core/classes/user_strategies_custom_oauth.CustomOAuthStrategy",id:"Api/server-core/classes/user_strategies_custom_oauth.CustomOAuthStrategy",title:"Class: CustomOAuthStrategy",description:"user/strategies/custom-oauth.CustomOAuthStrategy",source:"@site/docs/Api/server-core/classes/user_strategies_custom_oauth.CustomOAuthStrategy.md",sourceDirName:"Api/server-core/classes",slug:"/Api/server-core/classes/user_strategies_custom_oauth.CustomOAuthStrategy",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/user_strategies_custom_oauth.CustomOAuthStrategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user_strategies_custom_oauth.CustomOAuthStrategy",title:"Class: CustomOAuthStrategy",sidebar_label:"CustomOAuthStrategy",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Sms",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/user_sms_sms_class.Sms"},next:{title:"DiscordStrategy",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/user_strategies_discord.DiscordStrategy"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Properties",id:"properties",level:2},{value:"app",id:"app",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"getEntityData",id:"getentitydata",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getEntityQuery",id:"getentityquery",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/modules/user_strategies_custom_oauth"},"user/strategies/custom-oauth"),".CustomOAuthStrategy"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"OAuthStrategy")),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"CustomOAuthStrategy"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/classes/user_strategies_discord.DiscordStrategy"},(0,n.kt)("inlineCode",{parentName:"a"},"DiscordStrategy"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/classes/user_strategies_facebook.FacebookStrategy"},(0,n.kt)("inlineCode",{parentName:"a"},"FacebookStrategy"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/classes/user_strategies_github.GithubStrategy"},(0,n.kt)("inlineCode",{parentName:"a"},"GithubStrategy"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/classes/user_strategies_google.Googlestrategy"},(0,n.kt)("inlineCode",{parentName:"a"},"Googlestrategy"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/classes/user_strategies_linkedin.LinkedInStrategy"},(0,n.kt)("inlineCode",{parentName:"a"},"LinkedInStrategy"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/classes/user_strategies_twitter.TwitterStrategy"},(0,n.kt)("inlineCode",{parentName:"a"},"TwitterStrategy"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new CustomOAuthStrategy"),"()"),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,"OAuthStrategy.constructor"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"app"},"app"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"app"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Application")),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,"OAuthStrategy.app"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/server-core/src/user/strategies/custom-oauth.ts#L10"},"packages/server-core/src/user/strategies/custom-oauth.ts:10")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"getentitydata"},"getEntityData"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getEntityData"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"profile"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"_existingEntity"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"_params"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"profile")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_existingEntity")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Params"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,"OAuthStrategy.getEntityData"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/server-core/src/user/strategies/custom-oauth.ts#L17"},"packages/server-core/src/user/strategies/custom-oauth.ts:17")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getentityquery"},"getEntityQuery"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getEntityQuery"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"profile"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"_params"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"profile")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Params"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"overrides-2"},"Overrides"),(0,n.kt)("p",null,"OAuthStrategy.getEntityQuery"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/server-core/src/user/strategies/custom-oauth.ts#L11"},"packages/server-core/src/user/strategies/custom-oauth.ts:11")))}d.isMDXComponent=!0}}]);