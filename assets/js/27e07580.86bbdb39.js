"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[41234],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={id:"media_storageprovider_getCachedURL",title:"Module: media/storageprovider/getCachedURL",sidebar_label:"media/storageprovider/getCachedURL",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"Api/server-core/modules/media_storageprovider_getCachedURL",id:"Api/server-core/modules/media_storageprovider_getCachedURL",title:"Module: media/storageprovider/getCachedURL",description:"Functions",source:"@site/docs/Api/server-core/modules/media_storageprovider_getCachedURL.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/media_storageprovider_getCachedURL",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/media_storageprovider_getCachedURL",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"media_storageprovider_getCachedURL",title:"Module: media/storageprovider/getCachedURL",sidebar_label:"media/storageprovider/getCachedURL",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"media/storageprovider/getCacheDomain",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/media_storageprovider_getCacheDomain"},next:{title:"media/storageprovider/storageProviderUtils",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/media_storageprovider_storageProviderUtils"}},l={},s=[{value:"Functions",id:"functions",level:2},{value:"getCachedURL",id:"getcachedurl",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"getcachedurl"},"getCachedURL"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getCachedURL"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"cacheDomain"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Constructs the full URL for a cached asset"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the full key/path for the storage provider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cacheDomain")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the cache domain of the storage provider")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/server-core/src/media/storageprovider/getCachedURL.ts#L7"},"packages/server-core/src/media/storageprovider/getCachedURL.ts:7")))}p.isMDXComponent=!0}}]);