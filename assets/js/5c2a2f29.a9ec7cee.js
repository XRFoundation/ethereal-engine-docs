"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[70623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"src_utils_fetchContentType",title:"Module: src/utils/fetchContentType",sidebar_label:"src/utils/fetchContentType",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"Api/common/modules/src_utils_fetchContentType",id:"Api/common/modules/src_utils_fetchContentType",title:"Module: src/utils/fetchContentType",description:"Functions",source:"@site/docs/Api/common/modules/src_utils_fetchContentType.md",sourceDirName:"Api/common/modules",slug:"/Api/common/modules/src_utils_fetchContentType",permalink:"/ethereal-engine-docs/docs/Api/common/modules/src_utils_fetchContentType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"src_utils_fetchContentType",title:"Module: src/utils/fetchContentType",sidebar_label:"src/utils/fetchContentType",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"src/utils/encode",permalink:"/ethereal-engine-docs/docs/Api/common/modules/src_utils_encode"},next:{title:"src/utils/getContentType",permalink:"/ethereal-engine-docs/docs/Api/common/modules/src_utils_getContentType"}},s={},c=[{value:"Functions",id:"functions",level:2},{value:"fetchContentType",id:"fetchcontenttype",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"fetchcontenttype"},"fetchContentType"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"fetchContentType"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,o.kt)("p",null,"fetchContentType is used to get the header content type of response using url."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Robert Long"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Abhishek Pathak"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"url")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,o.kt)("p",null,"[wait for the response and return response]"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/common/src/utils/fetchContentType.tsx#L10"},"src/utils/fetchContentType.tsx:10")))}u.isMDXComponent=!0}}]);