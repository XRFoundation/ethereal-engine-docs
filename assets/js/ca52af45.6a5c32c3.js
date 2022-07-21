"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[98124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={id:"renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect",title:"Class: LinearTosRGBEffect",sidebar_label:"LinearTosRGBEffect",custom_edit_url:null},o=void 0,c={unversionedId:"Api/engine/classes/renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect",id:"Api/engine/classes/renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect",title:"Class: LinearTosRGBEffect",description:"renderer/effects/LinearTosRGBEffect.LinearTosRGBEffect",source:"@site/docs/Api/engine/classes/renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect",title:"Class: LinearTosRGBEffect",sidebar_label:"LinearTosRGBEffect",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"FXAAEffect",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_effects_FXAAEffect.FXAAEffect"},next:{title:"BlendMode",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_effects_blending_BlendMode.BlendMode"}},s={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4}],f={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_LinearTosRGBEffect"},"renderer/effects/LinearTosRGBEffect"),".LinearTosRGBEffect"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Effect")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"LinearTosRGBEffect"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new LinearTosRGBEffect"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"[options]?"),")"),(0,a.kt)("p",null,"Constructs a new effect that will convert color from linear color space to sRGB."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[options]")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[options].blendFunction")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"BlendFunction")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"Effect.constructor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/42f3b05/packages/engine/src/renderer/effects/LinearTosRGBEffect.ts#L14"},"packages/engine/src/renderer/effects/LinearTosRGBEffect.ts:14")))}p.isMDXComponent=!0}}]);