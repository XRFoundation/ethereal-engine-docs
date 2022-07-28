"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[73731],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,c=m["".concat(l,".").concat(u)]||m[u]||f[u]||i;return a?n.createElement(c,s(s({ref:t},o),{},{components:a})):n.createElement(c,s({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91582:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={id:"assets_superbuffer_types",title:"Module: assets/superbuffer/types",sidebar_label:"assets/superbuffer/types",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"API/engine/modules/assets_superbuffer_types",id:"API/engine/modules/assets_superbuffer_types",title:"Module: assets/superbuffer/types",description:"Type Aliases",source:"@site/docs/API/engine/modules/assets_superbuffer_types.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/assets_superbuffer_types",permalink:"/docs/docs/API/engine/modules/assets_superbuffer_types",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"assets_superbuffer_types",title:"Module: assets/superbuffer/types",sidebar_label:"assets/superbuffer/types",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"assets/superbuffer/schema",permalink:"/docs/docs/API/engine/modules/assets_superbuffer_schema"},next:{title:"assets/superbuffer/utils",permalink:"/docs/docs/API/engine/modules/assets_superbuffer_utils"}},l={},d=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"BufferView",id:"bufferview",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"BufferViewOrSchema",id:"buffervieworschema",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ExtractSchemaDefinition",id:"extractschemadefinition",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"ExtractSchemaObject",id:"extractschemaobject",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"SchemaDefinition",id:"schemadefinition",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"SchemaObject",id:"schemaobject",level:3},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Serializable",id:"serializable",level:3},{value:"Defined in",id:"defined-in-6",level:4}],o={toc:d};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"bufferview"},"BufferView"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"BufferView"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"Defines a TypedArray within an ArrayBuffer."),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#serializable"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializable"))," = ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#serializable"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializable")))))),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")," extends ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ? ",(0,r.kt)("inlineCode",{parentName:"td"},'"String"')," : ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," extends ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ? ",(0,r.kt)("inlineCode",{parentName:"td"},'"Boolean"')," : ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," extends ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ? ",(0,r.kt)("inlineCode",{parentName:"td"},'"Uint8"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"Uint16"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"Uint32"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"Int8"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"Int16"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"Int32"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"Float32"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"Float64"')," : ",(0,r.kt)("inlineCode",{parentName:"td"},'"BigInt64"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"BigUint64"'))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/types.ts#L14"},"packages/engine/src/assets/superbuffer/types.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buffervieworschema"},"BufferViewOrSchema"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"BufferViewOrSchema"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,r.kt)("inlineCode",{parentName:"a"},"BufferView"))," ","|"," [",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,r.kt)("inlineCode",{parentName:"a"},"BufferView")),"] ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/classes/assets_superbuffer_schema.Schema"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema"))," ","|"," [",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/classes/assets_superbuffer_schema.Schema"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema")),"]"),(0,r.kt)("p",null,"A BufferView, BufferView array, Schema, or Schema array."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/types.ts#L28"},"packages/engine/src/assets/superbuffer/types.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extractschemadefinition"},"ExtractSchemaDefinition"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"ExtractSchemaDefinition"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/classes/assets_superbuffer_model.Model"},(0,r.kt)("inlineCode",{parentName:"a"},"Model")),"<infer U",">"," ? ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#schemadefinition"},(0,r.kt)("inlineCode",{parentName:"a"},"SchemaDefinition")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"," : ",(0,r.kt)("inlineCode",{parentName:"p"},"never")),(0,r.kt)("p",null,"Extract the SchemaDefinition type from a Model."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/types.ts#L61"},"packages/engine/src/assets/superbuffer/types.ts:61")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extractschemaobject"},"ExtractSchemaObject"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"ExtractSchemaObject"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/classes/assets_superbuffer_model.Model"},(0,r.kt)("inlineCode",{parentName:"a"},"Model")),"<infer U",">"," ? ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/assets_superbuffer_types#schemaobject"},(0,r.kt)("inlineCode",{parentName:"a"},"SchemaObject")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"," : ",(0,r.kt)("inlineCode",{parentName:"p"},"never")),(0,r.kt)("p",null,"Extract the SchemaObject type from a Model."),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/types.ts#L66"},"packages/engine/src/assets/superbuffer/types.ts:66")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"schemadefinition"},"SchemaDefinition"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SchemaDefinition"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": { ","[K in keyof T]",": T","[K]"," extends BufferViewOrSchema ? T","[K]"," : T","[K]"," extends Record<string, unknown",">"," ? SchemaDefinition<T","[K]",">"," : never }"),(0,r.kt)("p",null,"Defines a BufferSchema."),(0,r.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/types.ts#L33"},"packages/engine/src/assets/superbuffer/types.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"schemaobject"},"SchemaObject"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SchemaObject"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": { ","[K in keyof T]",": T","[K]"," extends BufferView<infer U",">"," ? U : T","[K]"," extends BufferView<infer U",">","[] ? U[] : T","[K]"," extends Schema<infer U",">"," ? SchemaObject<U",">"," : T","[K]"," extends Schema<infer U",">","[] ? SchemaObject<U",">","[] : T","[K]"," extends Record<string, unknown",">"," ? SchemaObject<T","[K]",">"," : never }"),(0,r.kt)("p",null,"Extracts the plain object representation of the schema definition."),(0,r.kt)("h4",{id:"type-parameters-4"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/types.ts#L44"},"packages/engine/src/assets/superbuffer/types.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serializable"},"Serializable"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"Serializable"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"A type that can be serialized into ArrayBuffer."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1ad994/packages/engine/src/assets/superbuffer/types.ts#L9"},"packages/engine/src/assets/superbuffer/types.ts:9")))}f.isMDXComponent=!0}}]);