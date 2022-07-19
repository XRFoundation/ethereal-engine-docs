"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[15461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var s=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=s.createContext({}),l=function(e){var n=s.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return s.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,y=m["".concat(a,".").concat(u)]||m[u]||d[u]||r;return t?s.createElement(y,c(c({ref:n},p),{},{components:t})):s.createElement(y,c({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=m;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<r;l++)c[l]=t[l];return s.createElement.apply(null,c)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(87462),i=(t(67294),t(3905));const r={id:"scene_systems_SceneObjectSystem.SceneOptions",title:"Class: SceneOptions",sidebar_label:"SceneOptions",custom_edit_url:null},c=void 0,o={unversionedId:"Api/engine/classes/scene_systems_SceneObjectSystem.SceneOptions",id:"Api/engine/classes/scene_systems_SceneObjectSystem.SceneOptions",title:"Class: SceneOptions",description:"scene/systems/SceneObjectSystem.SceneOptions",source:"@site/docs/Api/engine/classes/scene_systems_SceneObjectSystem.SceneOptions.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/scene_systems_SceneObjectSystem.SceneOptions",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_systems_SceneObjectSystem.SceneOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scene_systems_SceneObjectSystem.SceneOptions",title:"Class: SceneOptions",sidebar_label:"SceneOptions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"WaveSimulator",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_water_WaveSimulator.WaveSimulator"},next:{title:"XRHandMeshModel",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/xr_classes_XRHandMeshModel.XRHandMeshModel"}},a={},l=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"boxProjection",id:"boxprojection",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"bpcemOptions",id:"bpcemoptions",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"envMapIntensity",id:"envmapintensity",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"instance",id:"instance",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_systems_SceneObjectSystem"},"scene/systems/SceneObjectSystem"),".SceneOptions"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new SceneOptions"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"boxprojection"},"boxProjection"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"boxProjection"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7e48165/packages/engine/src/scene/systems/SceneObjectSystem.ts#L44"},"packages/engine/src/scene/systems/SceneObjectSystem.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bpcemoptions"},"bpcemOptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"bpcemOptions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BPCEMProps")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7e48165/packages/engine/src/scene/systems/SceneObjectSystem.ts#L39"},"packages/engine/src/scene/systems/SceneObjectSystem.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"envmapintensity"},"envMapIntensity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"envMapIntensity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7e48165/packages/engine/src/scene/systems/SceneObjectSystem.ts#L43"},"packages/engine/src/scene/systems/SceneObjectSystem.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instance"},"instance"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"instance"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/scene_systems_SceneObjectSystem.SceneOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"SceneOptions"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7e48165/packages/engine/src/scene/systems/SceneObjectSystem.ts#L38"},"packages/engine/src/scene/systems/SceneObjectSystem.ts:38")))}d.isMDXComponent=!0}}]);