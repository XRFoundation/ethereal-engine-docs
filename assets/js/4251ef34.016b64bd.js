"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[77368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,u=s["".concat(d,".").concat(c)]||s[c]||m[c]||i;return n?a.createElement(u,o(o({ref:t},k),{},{components:n})):a.createElement(u,o({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},68540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"hooks_notifications",title:"Module: hooks/notifications",sidebar_label:"hooks/notifications",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/server-core/modules/hooks_notifications",id:"Api/server-core/modules/hooks_notifications",title:"Module: hooks/notifications",description:"Functions",source:"@site/docs/Api/server-core/modules/hooks_notifications.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/hooks_notifications",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_notifications",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_notifications",title:"Module: hooks/notifications",sidebar_label:"hooks/notifications",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/message-permission-authenticate",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_message_permission_authenticate"},next:{title:"hooks/party-permission-authenticate",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_party_permission_authenticate"}},d={},p=[{value:"Functions",id:"functions",level:2},{value:"addBlockCreator",id:"addblockcreator",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"addFeedBookmark",id:"addfeedbookmark",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"addFeedComment",id:"addfeedcomment",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"addFeedCommentFire",id:"addfeedcommentfire",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"addFeedFire",id:"addfeedfire",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"addFollowCreator",id:"addfollowcreator",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"removeFeedBookmark",id:"removefeedbookmark",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"removeFeedCommentFire",id:"removefeedcommentfire",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"removeFeedFire",id:"removefeedfire",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"removeFollowCreator",id:"removefollowcreator",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-9",level:4}],k={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"addblockcreator"},"addBlockCreator"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addBlockCreator"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L139"},"packages/server-core/src/hooks/notifications.ts:139")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addfeedbookmark"},"addFeedBookmark"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addFeedBookmark"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L36"},"packages/server-core/src/hooks/notifications.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addfeedcomment"},"addFeedComment"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addFeedComment"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L67"},"packages/server-core/src/hooks/notifications.ts:67")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addfeedcommentfire"},"addFeedCommentFire"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addFeedCommentFire"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L85"},"packages/server-core/src/hooks/notifications.ts:85")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addfeedfire"},"addFeedFire"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addFeedFire"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L5"},"packages/server-core/src/hooks/notifications.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addfollowcreator"},"addFollowCreator"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addFollowCreator"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L124"},"packages/server-core/src/hooks/notifications.ts:124")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removefeedbookmark"},"removeFeedBookmark"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeFeedBookmark"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L53"},"packages/server-core/src/hooks/notifications.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removefeedcommentfire"},"removeFeedCommentFire"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeFeedCommentFire"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L104"},"packages/server-core/src/hooks/notifications.ts:104")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removefeedfire"},"removeFeedFire"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeFeedFire"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L22"},"packages/server-core/src/hooks/notifications.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removefollowcreator"},"removeFollowCreator"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeFollowCreator"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext"),">"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/server-core/src/hooks/notifications.ts#L154"},"packages/server-core/src/hooks/notifications.ts:154")))}m.isMDXComponent=!0}}]);