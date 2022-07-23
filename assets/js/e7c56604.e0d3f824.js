"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[44211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=i,k=s["".concat(p,".").concat(u)]||s[u]||c[u]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},49934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={id:"common_constants_PrefabFunctionType",title:"Module: common/constants/PrefabFunctionType",sidebar_label:"common/constants/PrefabFunctionType",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/common_constants_PrefabFunctionType",id:"Api/engine/modules/common_constants_PrefabFunctionType",title:"Module: common/constants/PrefabFunctionType",description:"Type Aliases",source:"@site/docs/Api/engine/modules/common_constants_PrefabFunctionType.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/common_constants_PrefabFunctionType",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_constants_PrefabFunctionType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_constants_PrefabFunctionType",title:"Module: common/constants/PrefabFunctionType",sidebar_label:"common/constants/PrefabFunctionType",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"common/constants/OBCTypes",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_constants_OBCTypes"},next:{title:"common/enums/BinaryValue",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_enums_BinaryValue"}},p={},d=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"ComponentDeserializeFunction",id:"componentdeserializefunction",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"ComponentPrepareForGLTFExportFunction",id:"componentprepareforgltfexportfunction",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"ComponentSerializeFunction",id:"componentserializefunction",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"ComponentShouldDeserializeFunction",id:"componentshoulddeserializefunction",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"ComponentUpdateFunction",id:"componentupdatefunction",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"SceneLoaderType",id:"sceneloadertype",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Defined in",id:"defined-in-5",level:4}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"componentdeserializefunction"},"ComponentDeserializeFunction"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ComponentDeserializeFunction"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"componentData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentJson"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"componentData")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ComponentJson"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/common/constants/PrefabFunctionType.ts#L7"},"packages/engine/src/common/constants/PrefabFunctionType.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentprepareforgltfexportfunction"},"ComponentPrepareForGLTFExportFunction"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ComponentPrepareForGLTFExportFunction"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object3D"))))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/common/constants/PrefabFunctionType.ts#L11"},"packages/engine/src/common/constants/PrefabFunctionType.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentserializefunction"},"ComponentSerializeFunction"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ComponentSerializeFunction"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentJson")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentJson")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ComponentJson")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/common/constants/PrefabFunctionType.ts#L8"},"packages/engine/src/common/constants/PrefabFunctionType.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentshoulddeserializefunction"},"ComponentShouldDeserializeFunction"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ComponentShouldDeserializeFunction"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/common/constants/PrefabFunctionType.ts#L10"},"packages/engine/src/common/constants/PrefabFunctionType.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentupdatefunction"},"ComponentUpdateFunction"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ComponentUpdateFunction"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"properties?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"properties?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"properties?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h5",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/common/constants/PrefabFunctionType.ts#L9"},"packages/engine/src/common/constants/PrefabFunctionType.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sceneloadertype"},"SceneLoaderType"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SceneLoaderType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"deserialize")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_constants_PrefabFunctionType#componentdeserializefunction"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentDeserializeFunction")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prepareForGLTFExport?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_constants_PrefabFunctionType#componentprepareforgltfexportfunction"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentPrepareForGLTFExportFunction")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serialize")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_constants_PrefabFunctionType#componentserializefunction"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentSerializeFunction")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"shouldDeserialize?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_constants_PrefabFunctionType#componentshoulddeserializefunction"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentShouldDeserializeFunction")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"update?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_constants_PrefabFunctionType#componentupdatefunction"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentUpdateFunction")))))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/common/constants/PrefabFunctionType.ts#L13"},"packages/engine/src/common/constants/PrefabFunctionType.ts:13")))}c.isMDXComponent=!0}}]);