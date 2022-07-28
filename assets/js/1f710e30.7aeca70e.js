"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[20887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),f=l(n),m=s,k=f["".concat(p,".").concat(m)]||f[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=f;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const i={id:"scene_constants_PostProcessing",title:"Module: scene/constants/PostProcessing",sidebar_label:"scene/constants/PostProcessing",sidebar_position:0,custom_edit_url:null},o=void 0,r={unversionedId:"API/engine/modules/scene_constants_PostProcessing",id:"API/engine/modules/scene_constants_PostProcessing",title:"Module: scene/constants/PostProcessing",description:"Enumerations",source:"@site/docs/API/engine/modules/scene_constants_PostProcessing.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/scene_constants_PostProcessing",permalink:"/docs/docs/API/engine/modules/scene_constants_PostProcessing",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_constants_PostProcessing",title:"Module: scene/constants/PostProcessing",sidebar_label:"scene/constants/PostProcessing",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/constants/ObjectLayers",permalink:"/docs/docs/API/engine/modules/scene_constants_ObjectLayers"},next:{title:"scene/constants/SkyTypeEnum",permalink:"/docs/docs/API/engine/modules/scene_constants_SkyTypeEnum"}},p={},l=[{value:"Enumerations",id:"enumerations",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"BloomEffectProps",id:"bloomeffectprops",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"BrightnessContrastEffectProps",id:"brightnesscontrasteffectprops",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ColorDepthEffectProps",id:"colordeptheffectprops",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"DepthOfFieldEffectProps",id:"depthoffieldeffectprops",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"EffectProps",id:"effectprops",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"EffectPropsSchema",id:"effectpropsschema",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"EffectType",id:"effecttype",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"FXAAEffectProps",id:"fxaaeffectprops",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"HueSaturationEffectProps",id:"huesaturationeffectprops",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"LinearTosRGBEffectProps",id:"lineartosrgbeffectprops",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"OutlineEffectProps",id:"outlineeffectprops",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"SMAAEffectProps",id:"smaaeffectprops",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"SSAOEffectProps",id:"ssaoeffectprops",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"ToneMappingEffectProps",id:"tonemappingeffectprops",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"Variables",id:"variables",level:2},{value:"EffectMap",id:"effectmap",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"defaultPostProcessingSchema",id:"defaultpostprocessingschema",level:3},{value:"Defined in",id:"defined-in-15",level:4}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"enumerations"},"Enumerations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/API/engine/enums/scene_constants_PostProcessing.Effects"},"Effects"))),(0,s.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,s.kt)("h3",{id:"bloomeffectprops"},"BloomEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"BloomEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,s.kt)("inlineCode",{parentName:"p"},"intensity"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"kernelSize"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"luminanceSmoothing"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"luminanceThreshold"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L102"},"packages/engine/src/scene/constants/PostProcessing.ts:102")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"brightnesscontrasteffectprops"},"BrightnessContrastEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"BrightnessContrastEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,s.kt)("inlineCode",{parentName:"p"},"brightness"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"contrast"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L118"},"packages/engine/src/scene/constants/PostProcessing.ts:118")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"colordeptheffectprops"},"ColorDepthEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"ColorDepthEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,s.kt)("inlineCode",{parentName:"p"},"bits"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L128"},"packages/engine/src/scene/constants/PostProcessing.ts:128")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"depthoffieldeffectprops"},"DepthOfFieldEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"DepthOfFieldEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,s.kt)("inlineCode",{parentName:"p"},"bokehScale"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"focalLength"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"focusDistance"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L96"},"packages/engine/src/scene/constants/PostProcessing.ts:96")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"effectprops"},"EffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"EffectProps"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Object")),(0,s.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"blendFunction?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"BlendFunction"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"isActive")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L55"},"packages/engine/src/scene/constants/PostProcessing.ts:55")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"effectpropsschema"},"EffectPropsSchema"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"EffectPropsSchema"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Object")),(0,s.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"BloomEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#bloomeffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"BloomEffectProps")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"BrightnessContrastEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#brightnesscontrasteffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"BrightnessContrastEffectProps")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ColorDepthEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#colordeptheffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"ColorDepthEffectProps")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"DepthOfFieldEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#depthoffieldeffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"DepthOfFieldEffectProps")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"HueSaturationEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#huesaturationeffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"HueSaturationEffectProps")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"LinearTosRGBEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#lineartosrgbeffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"LinearTosRGBEffectProps")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"OutlineEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#outlineeffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"OutlineEffectProps")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SMAAEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#smaaeffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"SMAAEffectProps")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SSAOEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#ssaoeffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"SSAOEffectProps")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ToneMappingEffect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#tonemappingeffectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"ToneMappingEffectProps")))))),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L134"},"packages/engine/src/scene/constants/PostProcessing.ts:134")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"effecttype"},"EffectType"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"EffectType"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Object")),(0,s.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"EffectClass")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"any"))))),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L37"},"packages/engine/src/scene/constants/PostProcessing.ts:37")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"fxaaeffectprops"},"FXAAEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"FXAAEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L60"},"packages/engine/src/scene/constants/PostProcessing.ts:60")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"huesaturationeffectprops"},"HueSaturationEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"HueSaturationEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,s.kt)("inlineCode",{parentName:"p"},"hue"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"saturation"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,s.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L123"},"packages/engine/src/scene/constants/PostProcessing.ts:123")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"lineartosrgbeffectprops"},"LinearTosRGBEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"LinearTosRGBEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))),(0,s.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L132"},"packages/engine/src/scene/constants/PostProcessing.ts:132")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"outlineeffectprops"},"OutlineEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"OutlineEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,s.kt)("inlineCode",{parentName:"p"},"blur"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"edgeStrength"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"height"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"hiddenEdgeColor"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"ColorRepresentation")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"kernelSize"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"patternTexture"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Texture")," ","|"," ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"pulseSpeed"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"resolutionScale"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"visibleEdgeColor"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"ColorRepresentation")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"width"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"xRay"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),"  }"),(0,s.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L68"},"packages/engine/src/scene/constants/PostProcessing.ts:68")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"smaaeffectprops"},"SMAAEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"SMAAEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,s.kt)("inlineCode",{parentName:"p"},"edgeDetectionMode"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"EdgeDetectionMode")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"predicationMode"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"PredicationMode")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"preset"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"SMAAPreset"),"  }"),(0,s.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L62"},"packages/engine/src/scene/constants/PostProcessing.ts:62")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"ssaoeffectprops"},"SSAOEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"SSAOEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,s.kt)("inlineCode",{parentName:"p"},"bias"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"depthAwareUpsampling"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"distanceFalloff"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"distanceScaling"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"distanceThreshold"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"fade"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"intensity"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"minRadiusScale"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"radius"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"rings"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"samples"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,s.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L82"},"packages/engine/src/scene/constants/PostProcessing.ts:82")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"tonemappingeffectprops"},"ToneMappingEffectProps"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"ToneMappingEffectProps"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectprops"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,s.kt)("inlineCode",{parentName:"p"},"adaptationRate"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"adaptive"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"averageLuminance"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"maxLuminance"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"middleGrey"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,s.kt)("inlineCode",{parentName:"p"},"resolution"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,s.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L109"},"packages/engine/src/scene/constants/PostProcessing.ts:109")),(0,s.kt)("h2",{id:"variables"},"Variables"),(0,s.kt)("h3",{id:"effectmap"},"EffectMap"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"EffectMap"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/enums/scene_constants_PostProcessing.Effects"},(0,s.kt)("inlineCode",{parentName:"a"},"Effects")),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effecttype"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectType")),">"),(0,s.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L41"},"packages/engine/src/scene/constants/PostProcessing.ts:41")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"defaultpostprocessingschema"},"defaultPostProcessingSchema"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"defaultPostProcessingSchema"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_constants_PostProcessing#effectpropsschema"},(0,s.kt)("inlineCode",{parentName:"a"},"EffectPropsSchema"))),(0,s.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/constants/PostProcessing.ts#L148"},"packages/engine/src/scene/constants/PostProcessing.ts:148")))}d.isMDXComponent=!0}}]);