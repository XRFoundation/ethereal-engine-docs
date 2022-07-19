"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[17412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=a.createContext({}),p=function(e){var t=a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,f=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),o=p(n),k=r,m=o["".concat(f,".").concat(k)]||o[k]||u[k]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=o;var s={};for(var f in t)hasOwnProperty.call(t,f)&&(s[f]=t[f]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},55247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"assets_superbuffer_buffer.BufferManager",title:"Class: BufferManager",sidebar_label:"BufferManager",custom_edit_url:null},l=void 0,s={unversionedId:"Api/engine/classes/assets_superbuffer_buffer.BufferManager",id:"Api/engine/classes/assets_superbuffer_buffer.BufferManager",title:"Class: BufferManager",description:"assets/superbuffer/buffer.BufferManager",source:"@site/docs/Api/engine/classes/assets_superbuffer_buffer.BufferManager.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/assets_superbuffer_buffer.BufferManager",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_superbuffer_buffer.BufferManager",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_superbuffer_buffer.BufferManager",title:"Class: BufferManager",sidebar_label:"BufferManager",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"TGALoader",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_tga_TGALoader.TGALoader"},next:{title:"Model",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_superbuffer_model.Model"}},f={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_buffer",id:"_buffer",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_dataView",id:"_dataview",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_offset",id:"_offset",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_textDecoder",id:"_textdecoder",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"_textEncoder",id:"_textencoder",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"_uint8Array",id:"_uint8array",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"maxByteSize",id:"maxbytesize",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Accessors",id:"accessors",level:2},{value:"offset",id:"offset",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods",level:2},{value:"append",id:"append",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"finalize",id:"finalize",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"read",id:"read",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"refresh",id:"refresh",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-15",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_buffer"},"assets/superbuffer/buffer"),".BufferManager"),(0,r.kt)("p",null,"The BufferManager class provides an API for reading and writing to an ArrayBuffer via\nDataViews while tracking the current byte offset and automatically handling string encoding."),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new BufferManager"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bufferSize?"),")"),(0,r.kt)("p",null,"Create a new BufferManager instance."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bufferSize?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum size of the internal ArrayBuffer.")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L65"},"packages/engine/src/assets/superbuffer/buffer.ts:65")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_buffer"},"_","buffer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","buffer"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")),(0,r.kt)("p",null,"Internal ArrayBuffer reference."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L33"},"packages/engine/src/assets/superbuffer/buffer.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_dataview"},"_","dataView"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","dataView"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"DataView")),(0,r.kt)("p",null,"Internal DataView reference."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L37"},"packages/engine/src/assets/superbuffer/buffer.ts:37")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_offset"},"_","offset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","offset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Current byte position in the DataView."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L41"},"packages/engine/src/assets/superbuffer/buffer.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_textdecoder"},"_","textDecoder"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","textDecoder"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"TextDecoder")),(0,r.kt)("p",null,"Internal TextDecoder reference."),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L49"},"packages/engine/src/assets/superbuffer/buffer.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_textencoder"},"_","textEncoder"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","textEncoder"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"TextEncoder")),(0,r.kt)("p",null,"Internal TextEncoder reference."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L45"},"packages/engine/src/assets/superbuffer/buffer.ts:45")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_uint8array"},"_","uint8Array"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","uint8Array"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,r.kt)("p",null,"Internal Uint8Array representation of the DataView."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L53"},"packages/engine/src/assets/superbuffer/buffer.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maxbytesize"},"maxByteSize"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"maxByteSize"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Max buffer size for a serialized object. Default: 1 megabyte."),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L29"},"packages/engine/src/assets/superbuffer/buffer.ts:29")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"offset"},"offset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"offset"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Get the current byte offset of the buffer."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L57"},"packages/engine/src/assets/superbuffer/buffer.ts:57")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"append"},"append"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"append"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bufferView"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Append data to the internal DataView buffer."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#bufferview"},(0,r.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#serializable"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializable")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BufferView to define the type appended.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#serializable"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializable"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data to be appended to the DataView.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L99"},"packages/engine/src/assets/superbuffer/buffer.ts:99")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"finalize"},"finalize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"finalize"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")),(0,r.kt)("p",null,"Copy the contents of the internal ArrayBuffer (which may contain trailing empty sections)\ninto a new ArrayBuffer with no empty bytes."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L90"},"packages/engine/src/assets/superbuffer/buffer.ts:90")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"read"},"read"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"read"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#serializable"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializable"))),(0,r.kt)("p",null,"Read the DataView at the current byte offset according to the BufferView type, and\nincrement the offset if the read was successful."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#bufferview"},(0,r.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#serializable"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializable")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BufferView to define the type read.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#serializable"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializable"))),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L135"},"packages/engine/src/assets/superbuffer/buffer.ts:135")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"read"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#bufferview"},(0,r.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L136"},"packages/engine/src/assets/superbuffer/buffer.ts:136")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"read"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#bufferview"},(0,r.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"number"),">")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L137"},"packages/engine/src/assets/superbuffer/buffer.ts:137")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"read"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_superbuffer_types#bufferview"},(0,r.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"bigint"),">")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L138"},"packages/engine/src/assets/superbuffer/buffer.ts:138")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"refresh"},"refresh"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"refresh"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"newBuffer?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Refresh this Model's internal buffer and DataView before toBuffer is called."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newBuffer?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specific ArrayBuffer instance, otherwise a default will be used.")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/assets/superbuffer/buffer.ts#L79"},"packages/engine/src/assets/superbuffer/buffer.ts:79")))}u.isMDXComponent=!0}}]);