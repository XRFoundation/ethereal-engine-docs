"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[63245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=r.createContext({}),p=function(e){var t=r.useContext(f),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,f=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),o=p(a),m=n,k=o["".concat(f,".").concat(m)]||o[m]||u[m]||i;return a?r.createElement(k,s(s({ref:t},d),{},{components:a})):r.createElement(k,s({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=o;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},31722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"assets_superbuffer_buffer.BufferManager",title:"Class: BufferManager",sidebar_label:"BufferManager",custom_edit_url:null},s=void 0,l={unversionedId:"API/engine/classes/assets_superbuffer_buffer.BufferManager",id:"API/engine/classes/assets_superbuffer_buffer.BufferManager",title:"Class: BufferManager",description:"assets/superbuffer/buffer.BufferManager",source:"@site/docs/API/engine/classes/assets_superbuffer_buffer.BufferManager.md",sourceDirName:"API/engine/classes",slug:"/API/engine/classes/assets_superbuffer_buffer.BufferManager",permalink:"/docs/docs/API/engine/classes/assets_superbuffer_buffer.BufferManager",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_superbuffer_buffer.BufferManager",title:"Class: BufferManager",sidebar_label:"BufferManager",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"TGALoader",permalink:"/docs/docs/API/engine/classes/assets_loaders_tga_TGALoader.TGALoader"},next:{title:"Model",permalink:"/docs/docs/API/engine/classes/assets_superbuffer_model.Model"}},f={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"maxByteSize",id:"maxbytesize",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Accessors",id:"accessors",level:2},{value:"offset",id:"offset",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"append",id:"append",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"finalize",id:"finalize",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"read",id:"read",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"refresh",id:"refresh",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-9",level:4}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/assets_superbuffer_buffer"},"assets/superbuffer/buffer"),".BufferManager"),(0,n.kt)("p",null,"The BufferManager class provides an API for reading and writing to an ArrayBuffer via\nDataViews while tracking the current byte offset and automatically handling string encoding."),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new BufferManager"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"bufferSize?"),")"),(0,n.kt)("p",null,"Create a new BufferManager instance."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bufferSize?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum size of the internal ArrayBuffer.")))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L65"},"packages/engine/src/assets/superbuffer/buffer.ts:65")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"maxbytesize"},"maxByteSize"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"maxByteSize"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Max buffer size for a serialized object. Default: 1 megabyte."),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L29"},"packages/engine/src/assets/superbuffer/buffer.ts:29")),(0,n.kt)("h2",{id:"accessors"},"Accessors"),(0,n.kt)("h3",{id:"offset"},"offset"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"offset"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Get the current byte offset of the buffer."),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L57"},"packages/engine/src/assets/superbuffer/buffer.ts:57")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"append"},"append"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"append"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"bufferView"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Append data to the internal DataView buffer."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,n.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,n.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#serializable"},(0,n.kt)("inlineCode",{parentName:"a"},"Serializable")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BufferView to define the type appended.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#serializable"},(0,n.kt)("inlineCode",{parentName:"a"},"Serializable"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data to be appended to the DataView.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L99"},"packages/engine/src/assets/superbuffer/buffer.ts:99")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"finalize"},"finalize"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"finalize"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")),(0,n.kt)("p",null,"Copy the contents of the internal ArrayBuffer (which may contain trailing empty sections)\ninto a new ArrayBuffer with no empty bytes."),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L90"},"packages/engine/src/assets/superbuffer/buffer.ts:90")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"read"},"read"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"read"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#serializable"},(0,n.kt)("inlineCode",{parentName:"a"},"Serializable"))),(0,n.kt)("p",null,"Read the DataView at the current byte offset according to the BufferView type, and\nincrement the offset if the read was successful."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,n.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,n.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#serializable"},(0,n.kt)("inlineCode",{parentName:"a"},"Serializable")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BufferView to define the type read.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#serializable"},(0,n.kt)("inlineCode",{parentName:"a"},"Serializable"))),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L135"},"packages/engine/src/assets/superbuffer/buffer.ts:135")),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"read"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,n.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),">")))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L136"},"packages/engine/src/assets/superbuffer/buffer.ts:136")),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"read"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,n.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"number"),">")))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L137"},"packages/engine/src/assets/superbuffer/buffer.ts:137")),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"read"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"bigint")),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,n.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"bigint"),">")))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"bigint")),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L138"},"packages/engine/src/assets/superbuffer/buffer.ts:138")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"refresh"},"refresh"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"refresh"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"newBuffer?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Refresh this Model's internal buffer and DataView before toBuffer is called."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"newBuffer?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specific ArrayBuffer instance, otherwise a default will be used.")))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/buffer.ts#L79"},"packages/engine/src/assets/superbuffer/buffer.ts:79")))}u.isMDXComponent=!0}}]);