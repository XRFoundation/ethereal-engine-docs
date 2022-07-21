"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[42881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):f(f({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,u=p["".concat(l,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(u,f(f({ref:t},d),{},{components:n})):r.createElement(u,f({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,f=new Array(a);f[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,f[1]=o;for(var c=2;c<a;c++)f[c]=n[c];return r.createElement.apply(null,f)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>f,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"renderer_WebGLRendererSystem.EffectComposerWithSchema",title:"Interface: EffectComposerWithSchema",sidebar_label:"EffectComposerWithSchema",custom_edit_url:null},f=void 0,o={unversionedId:"Api/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema",id:"Api/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema",title:"Interface: EffectComposerWithSchema",description:"renderer/WebGLRendererSystem.EffectComposerWithSchema",source:"@site/docs/Api/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_WebGLRendererSystem.EffectComposerWithSchema",title:"Interface: EffectComposerWithSchema",sidebar_label:"EffectComposerWithSchema",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Vec3Fragment",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3Fragment"},next:{title:"PostProcessingSchema",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/renderer_interfaces_PostProcessingSchema.PostProcessingSchema"}},l={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"BloomEffect",id:"bloomeffect",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"BrightnessContrastEffect",id:"brightnesscontrasteffect",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ColorDepthEffect",id:"colordeptheffect",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"DepthOfFieldEffect",id:"depthoffieldeffect",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"HueSaturationEffect",id:"huesaturationeffect",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"LinearTosRGBEffect",id:"lineartosrgbeffect",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"OutlineEffect",id:"outlineeffect",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"SMAAEffect",id:"smaaeffect",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"SSAOEffect",id:"ssaoeffect",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"ToneMappingEffect",id:"tonemappingeffect",level:3},{value:"Defined in",id:"defined-in-9",level:4}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_WebGLRendererSystem"},"renderer/WebGLRendererSystem"),".EffectComposerWithSchema"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"EffectComposer")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"EffectComposerWithSchema"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bloomeffect"},"BloomEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"BloomEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BloomEffect")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L52"},"packages/engine/src/renderer/WebGLRendererSystem.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"brightnesscontrasteffect"},"BrightnessContrastEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"BrightnessContrastEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BrightnessContrastEffect")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L54"},"packages/engine/src/renderer/WebGLRendererSystem.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"colordeptheffect"},"ColorDepthEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ColorDepthEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ColorDepthEffect")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L56"},"packages/engine/src/renderer/WebGLRendererSystem.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depthoffieldeffect"},"DepthOfFieldEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"DepthOfFieldEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DepthOfFieldEffect")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L51"},"packages/engine/src/renderer/WebGLRendererSystem.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"huesaturationeffect"},"HueSaturationEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"HueSaturationEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"HueSaturationEffect")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L55"},"packages/engine/src/renderer/WebGLRendererSystem.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lineartosrgbeffect"},"LinearTosRGBEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"LinearTosRGBEffect"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect"},(0,i.kt)("inlineCode",{parentName:"a"},"LinearTosRGBEffect"))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L57"},"packages/engine/src/renderer/WebGLRendererSystem.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"outlineeffect"},"OutlineEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"OutlineEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"OutlineEffect")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L47"},"packages/engine/src/renderer/WebGLRendererSystem.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"smaaeffect"},"SMAAEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SMAAEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SMAAEffect")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L49"},"packages/engine/src/renderer/WebGLRendererSystem.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ssaoeffect"},"SSAOEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SSAOEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SSAOEffect")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L50"},"packages/engine/src/renderer/WebGLRendererSystem.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tonemappingeffect"},"ToneMappingEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ToneMappingEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ToneMappingEffect")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9804a3d/packages/engine/src/renderer/WebGLRendererSystem.ts#L53"},"packages/engine/src/renderer/WebGLRendererSystem.ts:53")))}s.isMDXComponent=!0}}]);