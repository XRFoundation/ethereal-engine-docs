"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[90295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>C});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},N=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),N=m(t),C=i,f=N["".concat(l,".").concat(C)]||N[C]||k[C]||p;return t?a.createElement(f,r(r({ref:n},d),{},{components:t})):a.createElement(f,r({ref:n},d))}));function C(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,r=new Array(p);r[0]=N;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<p;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}N.displayName="MDXCreateElement"},2453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=t(87462),i=(t(67294),t(3905));const p={id:"xr_components_XRInputSourceComponent",title:"Module: xr/components/XRInputSourceComponent",sidebar_label:"xr/components/XRInputSourceComponent",sidebar_position:0,custom_edit_url:null},r=void 0,o={unversionedId:"Api/engine/modules/xr_components_XRInputSourceComponent",id:"Api/engine/modules/xr_components_XRInputSourceComponent",title:"Module: xr/components/XRInputSourceComponent",description:"Type Aliases",source:"@site/docs/Api/engine/modules/xr_components_XRInputSourceComponent.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/xr_components_XRInputSourceComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/xr_components_XRInputSourceComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"xr_components_XRInputSourceComponent",title:"Module: xr/components/XRInputSourceComponent",sidebar_label:"xr/components/XRInputSourceComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"xr/components/XRHandsInputComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/xr_components_XRHandsInputComponent"},next:{title:"xr/functions/WebXRFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/xr_functions_WebXRFunctions"}},l={},m=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"ControllerGroup",id:"controllergroup",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"XRInputSourceComponentType",id:"xrinputsourcecomponenttype",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Variables",id:"variables",level:2},{value:"XRInputSourceComponent",id:"xrinputsourcecomponent",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:m};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"controllergroup"},"ControllerGroup"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ControllerGroup"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Group")," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"cursor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshBasicMaterial"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"lastHit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<typeof ",(0,i.kt)("inlineCode",{parentName:"p"},"WebContainer3D.prototype.hitTest"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"targetRay"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshBasicMaterial"),">","  }"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/xr/components/XRInputSourceComponent.ts#L7"},"packages/engine/src/xr/components/XRInputSourceComponent.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"xrinputsourcecomponenttype"},"XRInputSourceComponentType"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"XRInputSourceComponentType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"container")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Group"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"controllerGripLeft")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Group"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"controllerGripLeftParent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Group"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"controllerGripRight")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Group"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"controllerGripRightParent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Group"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"controllerLeft")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/xr_components_XRInputSourceComponent#controllergroup"},(0,i.kt)("inlineCode",{parentName:"a"},"ControllerGroup")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"controllerLeftParent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Group"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"controllerRight")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/xr_components_XRInputSourceComponent#controllergroup"},(0,i.kt)("inlineCode",{parentName:"a"},"ControllerGroup")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"controllerRightParent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Group"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"head")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Group"))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/xr/components/XRInputSourceComponent.ts#L13"},"packages/engine/src/xr/components/XRInputSourceComponent.ts:13")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"xrinputsourcecomponent"},"XRInputSourceComponent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"XRInputSourceComponent"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,i.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/xr_components_XRInputSourceComponent#xrinputsourcecomponenttype"},(0,i.kt)("inlineCode",{parentName:"a"},"XRInputSourceComponentType")),", { ",(0,i.kt)("inlineCode",{parentName:"p"},"container"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema; ",(0,i.kt)("inlineCode",{parentName:"p"},"controllerGripLeft"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema; ",(0,i.kt)("inlineCode",{parentName:"p"},"controllerGripLeftParent"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema; ",(0,i.kt)("inlineCode",{parentName:"p"},"controllerGripRight"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema; ",(0,i.kt)("inlineCode",{parentName:"p"},"controllerGripRightParent"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema; ",(0,i.kt)("inlineCode",{parentName:"p"},"controllerLeft"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema; ",(0,i.kt)("inlineCode",{parentName:"p"},"controllerLeftParent"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema; ",(0,i.kt)("inlineCode",{parentName:"p"},"controllerRight"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema; ",(0,i.kt)("inlineCode",{parentName:"p"},"controllerRightParent"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema; ",(0,i.kt)("inlineCode",{parentName:"p"},"head"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = Vector3Schema; ",(0,i.kt)("inlineCode",{parentName:"p"},"quaternion"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"f32"')," = f32 } = QuaternionSchema } = GroupSchema }",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/xr/components/XRInputSourceComponent.ts#L69"},"packages/engine/src/xr/components/XRInputSourceComponent.ts:69")))}k.isMDXComponent=!0}}]);