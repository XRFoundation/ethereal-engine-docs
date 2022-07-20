"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[95355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(r),k=n,u=c["".concat(l,".").concat(k)]||c[k]||m[k]||i;return r?a.createElement(u,o(o({ref:t},s),{},{components:r})):a.createElement(u,o({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},49501:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"media_storageprovider_storageprovider_interface.BlobStore",title:"Interface: BlobStore",sidebar_label:"BlobStore",custom_edit_url:null},o=void 0,d={unversionedId:"Api/server-core/interfaces/media_storageprovider_storageprovider_interface.BlobStore",id:"Api/server-core/interfaces/media_storageprovider_storageprovider_interface.BlobStore",title:"Interface: BlobStore",description:"media/storageprovider/storageprovider.interface.BlobStore",source:"@site/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.BlobStore.md",sourceDirName:"Api/server-core/interfaces",slug:"/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.BlobStore",permalink:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.BlobStore",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"media_storageprovider_storageprovider_interface.BlobStore",title:"Interface: BlobStore",sidebar_label:"BlobStore",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"HttpException",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/util_exceptions_httpException.HttpException"},next:{title:"PutObjectParams",permalink:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.PutObjectParams"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"cache",id:"cache",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"path",id:"path",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"createReadStream",id:"createreadstream",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"createWriteStream",id:"createwritestream",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"exists",id:"exists",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/modules/media_storageprovider_storageprovider_interface"},"media/storageprovider/storageprovider.interface"),".BlobStore"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"cache"},"cache"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"cache"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/a5a9b4d/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L31"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:31")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"path"},"path"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/a5a9b4d/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L30"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:30")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"createreadstream"},"createReadStream"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createReadStream"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," { ",(0,n.kt)("inlineCode",{parentName:"td"},"key"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"string"),"  }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/a5a9b4d/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L33"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:33")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"createwritestream"},"createWriteStream"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createWriteStream"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"cb?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," { ",(0,n.kt)("inlineCode",{parentName:"td"},"key"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"string"),"  }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cb?")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(",(0,n.kt)("inlineCode",{parentName:"td"},"err"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"result"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,n.kt)("inlineCode",{parentName:"td"},"void"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/a5a9b4d/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L32"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:32")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"exists"},"exists"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"exists"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"cb?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," { ",(0,n.kt)("inlineCode",{parentName:"td"},"key"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"string"),"  }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cb?")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(",(0,n.kt)("inlineCode",{parentName:"td"},"err"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"result"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,n.kt)("inlineCode",{parentName:"td"},"void"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/a5a9b4d/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L34"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:34")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"remove"},"remove"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"remove"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"cb?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," { ",(0,n.kt)("inlineCode",{parentName:"td"},"key"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"string"),"  }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cb?")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(",(0,n.kt)("inlineCode",{parentName:"td"},"err"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"result"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,n.kt)("inlineCode",{parentName:"td"},"void"))))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/a5a9b4d/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L35"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:35")))}m.isMDXComponent=!0}}]);