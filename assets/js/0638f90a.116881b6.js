"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[60128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,u=m["".concat(o,".").concat(f)]||m[f]||d[f]||s;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={id:"src_interfaces_User",title:"Module: src/interfaces/User",sidebar_label:"src/interfaces/User",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"Api/common/modules/src_interfaces_User",id:"Api/common/modules/src_interfaces_User",title:"Module: src/interfaces/User",description:"Interfaces",source:"@site/docs/Api/common/modules/src_interfaces_User.md",sourceDirName:"Api/common/modules",slug:"/Api/common/modules/src_interfaces_User",permalink:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_User",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"src_interfaces_User",title:"Module: src/interfaces/User",sidebar_label:"src/interfaces/User",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"src/interfaces/UploadAssetInterface",permalink:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_UploadAssetInterface"},next:{title:"src/interfaces/UserApiKey",permalink:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_UserApiKey"}},o={},c=[{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"UserSeed",id:"userseed",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"resolveUser",id:"resolveuser",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"resolveWalletUser",id:"resolvewalletuser",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.CreateEditUser"},"CreateEditUser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserInterface"},"UserInterface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserScope"},"UserScope")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserSetting"},"UserSetting"))),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"userseed"},"UserSeed"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"UserSeed"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"UserInterface"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7e48165/packages/common/src/interfaces/User.ts#L45"},"src/interfaces/User.ts:45")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"resolveuser"},"resolveUser"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"resolveUser"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"user"),"): ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"UserInterface"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"user")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"UserInterface"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7e48165/packages/common/src/interfaces/User.ts#L67"},"src/interfaces/User.ts:67")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resolvewalletuser"},"resolveWalletUser"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"resolveWalletUser"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"credentials"),"): ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"UserInterface"))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"credentials")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"UserInterface"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7e48165/packages/common/src/interfaces/User.ts#L99"},"src/interfaces/User.ts:99")))}d.isMDXComponent=!0}}]);