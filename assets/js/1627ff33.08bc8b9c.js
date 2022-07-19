"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[26849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(n),g=s,m=c["".concat(p,".").concat(g)]||c[g]||x[g]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={id:"assets_loaders_gltf_extensions_exporter_LightmapExporterExtension.LightmapExporterExtension",title:"Class: LightmapExporterExtension",sidebar_label:"LightmapExporterExtension",custom_edit_url:null},i=void 0,a={unversionedId:"Api/engine/classes/assets_loaders_gltf_extensions_exporter_LightmapExporterExtension.LightmapExporterExtension",id:"Api/engine/classes/assets_loaders_gltf_extensions_exporter_LightmapExporterExtension.LightmapExporterExtension",title:"Class: LightmapExporterExtension",description:"assets/loaders/gltf/extensions/exporter/LightmapExporterExtension.LightmapExporterExtension",source:"@site/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_LightmapExporterExtension.LightmapExporterExtension.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/assets_loaders_gltf_extensions_exporter_LightmapExporterExtension.LightmapExporterExtension",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_LightmapExporterExtension.LightmapExporterExtension",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_loaders_gltf_extensions_exporter_LightmapExporterExtension.LightmapExporterExtension",title:"Class: LightmapExporterExtension",sidebar_label:"LightmapExporterExtension",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ExporterExtension",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension"},next:{title:"CubeTextureLoader",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_tex_CubeTextureLoader.CubeTextureLoader"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"exporter",id:"exporter",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"options",id:"options",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"onRegister",id:"onregister",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:l};function x(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_loaders_gltf_extensions_exporter_LightmapExporterExtension"},"assets/loaders/gltf/extensions/exporter/LightmapExporterExtension"),".LightmapExporterExtension"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension"},(0,s.kt)("inlineCode",{parentName:"a"},"ExporterExtension"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"LightmapExporterExtension"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new LightmapExporterExtension"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"exporter"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"options"),")"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"exporter")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"options")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"any"))))),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension"},"ExporterExtension"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension#constructor"},"constructor")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/assets/loaders/gltf/extensions/exporter/ExporterExtension.ts#L4"},"packages/engine/src/assets/loaders/gltf/extensions/exporter/ExporterExtension.ts:4")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"exporter"},"exporter"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"exporter"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension"},"ExporterExtension"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension#exporter"},"exporter")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/assets/loaders/gltf/extensions/exporter/ExporterExtension.ts#L2"},"packages/engine/src/assets/loaders/gltf/extensions/exporter/ExporterExtension.ts:2")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"options"},"options"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"options"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension"},"ExporterExtension"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension#options"},"options")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/assets/loaders/gltf/extensions/exporter/ExporterExtension.ts#L3"},"packages/engine/src/assets/loaders/gltf/extensions/exporter/ExporterExtension.ts:3")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"onregister"},"onRegister"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"onRegister"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension"},"ExporterExtension"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_extensions_exporter_ExporterExtension.ExporterExtension#onregister"},"onRegister")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/assets/loaders/gltf/extensions/exporter/LightmapExporterExtension.ts#L4"},"packages/engine/src/assets/loaders/gltf/extensions/exporter/LightmapExporterExtension.ts:4")))}x.isMDXComponent=!0}}]);