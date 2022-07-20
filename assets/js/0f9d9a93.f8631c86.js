"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[39676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"common_functions_applyVectorMatrixXZ",title:"Module: common/functions/applyVectorMatrixXZ",sidebar_label:"common/functions/applyVectorMatrixXZ",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"Api/engine/modules/common_functions_applyVectorMatrixXZ",id:"Api/engine/modules/common_functions_applyVectorMatrixXZ",title:"Module: common/functions/applyVectorMatrixXZ",description:"Functions",source:"@site/docs/Api/engine/modules/common_functions_applyVectorMatrixXZ.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/common_functions_applyVectorMatrixXZ",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_applyVectorMatrixXZ",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_applyVectorMatrixXZ",title:"Module: common/functions/applyVectorMatrixXZ",sidebar_label:"common/functions/applyVectorMatrixXZ",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"common/functions/applyThreshold",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_applyThreshold"},next:{title:"common/functions/bitFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_bitFunctions"}},c={},p=[{value:"Functions",id:"functions",level:2},{value:"applyVectorMatrixXZ",id:"applyvectormatrixxz",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"applyvectormatrixxz"},"applyVectorMatrixXZ"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"applyVectorMatrixXZ"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,o.kt)("p",null,"Constructs a 2D matrix from first vector, replacing the Y axes with the global Y axis,\nand applies this matrix to the second vector. Saves performance when compared to full 3D matrix application.\nMutates and returns the data in the first vector.\nUseful for actor rotation, as it only happens on the Y axis."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"a")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Vector to construct 2D matrix from")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"b")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Vector to apply basis to")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/engine/src/common/functions/applyVectorMatrixXZ.ts#L12"},"packages/engine/src/common/functions/applyVectorMatrixXZ.ts:12")))}m.isMDXComponent=!0}}]);