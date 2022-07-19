"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[30364],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=l(t),m=i,k=f["".concat(p,".").concat(m)]||f[m]||d[m]||s;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const s={id:"scene_constants_PostProcessing",title:"Module: scene/constants/PostProcessing",sidebar_label:"scene/constants/PostProcessing",sidebar_position:0,custom_edit_url:null},r=void 0,o={unversionedId:"Api/engine/modules/scene_constants_PostProcessing",id:"Api/engine/modules/scene_constants_PostProcessing",title:"Module: scene/constants/PostProcessing",description:"Enumerations",source:"@site/docs/Api/engine/modules/scene_constants_PostProcessing.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_constants_PostProcessing",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_constants_PostProcessing",title:"Module: scene/constants/PostProcessing",sidebar_label:"scene/constants/PostProcessing",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/constants/ObjectLayers",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_ObjectLayers"},next:{title:"scene/constants/SkyTypeEnum",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_SkyTypeEnum"}},p={},l=[{value:"Enumerations",id:"enumerations",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"BloomEffectProps",id:"bloomeffectprops",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"BrightnessContrastEffectProps",id:"brightnesscontrasteffectprops",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ColorDepthEffectProps",id:"colordeptheffectprops",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"DepthOfFieldEffectProps",id:"depthoffieldeffectprops",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"EffectProps",id:"effectprops",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"EffectPropsSchema",id:"effectpropsschema",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"EffectType",id:"effecttype",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"FXAAEffectProps",id:"fxaaeffectprops",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"HueSaturationEffectProps",id:"huesaturationeffectprops",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"LinearTosRGBEffectProps",id:"lineartosrgbeffectprops",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"OutlineEffectProps",id:"outlineeffectprops",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"SMAAEffectProps",id:"smaaeffectprops",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"SSAOEffectProps",id:"ssaoeffectprops",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"ToneMappingEffectProps",id:"tonemappingeffectprops",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"Variables",id:"variables",level:2},{value:"EffectMap",id:"effectmap",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"defaultPostProcessingSchema",id:"defaultpostprocessingschema",level:3},{value:"Defined in",id:"defined-in-15",level:4}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enumerations"},"Enumerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/enums/scene_constants_PostProcessing.Effects"},"Effects"))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"bloomeffectprops"},"BloomEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"BloomEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"intensity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"kernelSize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"luminanceSmoothing"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"luminanceThreshold"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L102"},"packages/engine/src/scene/constants/PostProcessing.ts:102")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"brightnesscontrasteffectprops"},"BrightnessContrastEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"BrightnessContrastEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"brightness"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"contrast"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L118"},"packages/engine/src/scene/constants/PostProcessing.ts:118")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"colordeptheffectprops"},"ColorDepthEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ColorDepthEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"bits"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L128"},"packages/engine/src/scene/constants/PostProcessing.ts:128")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depthoffieldeffectprops"},"DepthOfFieldEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"DepthOfFieldEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"bokehScale"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"focalLength"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"focusDistance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L96"},"packages/engine/src/scene/constants/PostProcessing.ts:96")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"effectprops"},"EffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"EffectProps"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"blendFunction?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BlendFunction"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isActive")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L55"},"packages/engine/src/scene/constants/PostProcessing.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"effectpropsschema"},"EffectPropsSchema"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"EffectPropsSchema"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BloomEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#bloomeffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"BloomEffectProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BrightnessContrastEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#brightnesscontrasteffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"BrightnessContrastEffectProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ColorDepthEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#colordeptheffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"ColorDepthEffectProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DepthOfFieldEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#depthoffieldeffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"DepthOfFieldEffectProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"HueSaturationEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#huesaturationeffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"HueSaturationEffectProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"LinearTosRGBEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#lineartosrgbeffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"LinearTosRGBEffectProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"OutlineEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#outlineeffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"OutlineEffectProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SMAAEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#smaaeffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"SMAAEffectProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SSAOEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#ssaoeffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"SSAOEffectProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ToneMappingEffect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#tonemappingeffectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"ToneMappingEffectProps")))))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L134"},"packages/engine/src/scene/constants/PostProcessing.ts:134")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"effecttype"},"EffectType"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"EffectType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"EffectClass")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L37"},"packages/engine/src/scene/constants/PostProcessing.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fxaaeffectprops"},"FXAAEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"FXAAEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L60"},"packages/engine/src/scene/constants/PostProcessing.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"huesaturationeffectprops"},"HueSaturationEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"HueSaturationEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"hue"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"saturation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L123"},"packages/engine/src/scene/constants/PostProcessing.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lineartosrgbeffectprops"},"LinearTosRGBEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"LinearTosRGBEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L132"},"packages/engine/src/scene/constants/PostProcessing.ts:132")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"outlineeffectprops"},"OutlineEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"OutlineEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"blur"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"edgeStrength"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"hiddenEdgeColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ColorRepresentation")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"kernelSize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"patternTexture"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Texture")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"pulseSpeed"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"resolutionScale"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"visibleEdgeColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ColorRepresentation")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"xRay"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"  }"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L68"},"packages/engine/src/scene/constants/PostProcessing.ts:68")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"smaaeffectprops"},"SMAAEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SMAAEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"edgeDetectionMode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"EdgeDetectionMode")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"predicationMode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PredicationMode")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"preset"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SMAAPreset"),"  }"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L62"},"packages/engine/src/scene/constants/PostProcessing.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ssaoeffectprops"},"SSAOEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SSAOEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"bias"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"depthAwareUpsampling"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"distanceFalloff"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"distanceScaling"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"distanceThreshold"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fade"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"intensity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"minRadiusScale"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"radius"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"rings"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"samples"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L82"},"packages/engine/src/scene/constants/PostProcessing.ts:82")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tonemappingeffectprops"},"ToneMappingEffectProps"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ToneMappingEffectProps"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectprops"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectProps"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"adaptationRate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"adaptive"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"averageLuminance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLuminance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"middleGrey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"resolution"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L109"},"packages/engine/src/scene/constants/PostProcessing.ts:109")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"effectmap"},"EffectMap"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"EffectMap"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/enums/scene_constants_PostProcessing.Effects"},(0,i.kt)("inlineCode",{parentName:"a"},"Effects")),", ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effecttype"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectType")),">"),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L41"},"packages/engine/src/scene/constants/PostProcessing.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"defaultpostprocessingschema"},"defaultPostProcessingSchema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"defaultPostProcessingSchema"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_PostProcessing#effectpropsschema"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectPropsSchema"))),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07101f9/packages/engine/src/scene/constants/PostProcessing.ts#L148"},"packages/engine/src/scene/constants/PostProcessing.ts:148")))}d.isMDXComponent=!0}}]);