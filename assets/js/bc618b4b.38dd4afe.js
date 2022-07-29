"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[8304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,p(p({ref:t},s),{},{components:n})):a.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<i;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={id:"input_interfaces_InputSchema",title:"Module: input/interfaces/InputSchema",sidebar_label:"input/interfaces/InputSchema",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"API/engine/modules/input_interfaces_InputSchema",id:"API/engine/modules/input_interfaces_InputSchema",title:"Module: input/interfaces/InputSchema",description:"Interfaces",source:"@site/docs/API/engine/modules/input_interfaces_InputSchema.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/input_interfaces_InputSchema",permalink:"/ethereal-engine-docs/docs/API/engine/modules/input_interfaces_InputSchema",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"input_interfaces_InputSchema",title:"Module: input/interfaces/InputSchema",sidebar_label:"input/interfaces/InputSchema",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"input/interfaces/InputRelationship",permalink:"/ethereal-engine-docs/docs/API/engine/modules/input_interfaces_InputRelationship"},next:{title:"input/interfaces/InputValue",permalink:"/ethereal-engine-docs/docs/API/engine/modules/input_interfaces_InputValue"}},o={},u=[{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"InputBehaviorType",id:"inputbehaviortype",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/API/engine/interfaces/input_interfaces_InputSchema.InputSchema"},"InputSchema"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"inputbehaviortype"},"InputBehaviorType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"InputBehaviorType"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputKey"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/input_types_InputAlias#inputalias"},(0,r.kt)("inlineCode",{parentName:"a"},"InputAlias")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputValue"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/interfaces/input_interfaces_InputValue.InputValue"},(0,r.kt)("inlineCode",{parentName:"a"},"InputValue")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputValue"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/modules/input_types_InputAlias#inputalias"},(0,r.kt)("inlineCode",{parentName:"a"},"InputAlias")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/interfaces/input_interfaces_InputValue.InputValue"},(0,r.kt)("inlineCode",{parentName:"a"},"InputValue")))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/input/interfaces/InputSchema.ts#L5"},"packages/engine/src/input/interfaces/InputSchema.ts:5")))}c.isMDXComponent=!0}}]);