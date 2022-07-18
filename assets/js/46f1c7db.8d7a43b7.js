"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[59992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||o[k]||r;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={id:"particles_functions_ParticleEmitterMesh.ParticleEmitterMesh",title:"Class: ParticleEmitterMesh",sidebar_label:"ParticleEmitterMesh",custom_edit_url:null},l=void 0,s={unversionedId:"Api/engine/classes/particles_functions_ParticleEmitterMesh.ParticleEmitterMesh",id:"Api/engine/classes/particles_functions_ParticleEmitterMesh.ParticleEmitterMesh",title:"Class: ParticleEmitterMesh",description:"particles/functions/ParticleEmitterMesh.ParticleEmitterMesh",source:"@site/docs/Api/engine/classes/particles_functions_ParticleEmitterMesh.ParticleEmitterMesh.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/particles_functions_ParticleEmitterMesh.ParticleEmitterMesh",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/particles_functions_ParticleEmitterMesh.ParticleEmitterMesh",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"particles_functions_ParticleEmitterMesh.ParticleEmitterMesh",title:"Class: ParticleEmitterMesh",sidebar_label:"ParticleEmitterMesh",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ThreeParticleEmitter",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/particles_classes_ThreeParticleEmitter.ThreeParticleEmitter"},next:{title:"Physics",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_Physics.Physics"}},c={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"ageRandomness",id:"agerandomness",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ages",id:"ages",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"angularVelocity",id:"angularvelocity",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"colorCurve",id:"colorcurve",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"colors",id:"colors",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"count",id:"count",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"endColor",id:"endcolor",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"endOpacity",id:"endopacity",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"endSize",id:"endsize",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"endVelocity",id:"endvelocity",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"initialAges",id:"initialages",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"initialPositions",id:"initialpositions",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"inverseWorldScale",id:"inverseworldscale",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"lifetime",id:"lifetime",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"lifetimeRandomness",id:"lifetimerandomness",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"lifetimes",id:"lifetimes",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"middleColor",id:"middlecolor",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"middleOpacity",id:"middleopacity",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"particleCount",id:"particlecount",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"particleSizeRandomness",id:"particlesizerandomness",level:3},{value:"Defined in",id:"defined-in-20",level:4},{value:"sizeCurve",id:"sizecurve",level:3},{value:"Defined in",id:"defined-in-21",level:4},{value:"sizeRandomness",id:"sizerandomness",level:3},{value:"Defined in",id:"defined-in-22",level:4},{value:"src",id:"src",level:3},{value:"Defined in",id:"defined-in-23",level:4},{value:"startColor",id:"startcolor",level:3},{value:"Defined in",id:"defined-in-24",level:4},{value:"startOpacity",id:"startopacity",level:3},{value:"Defined in",id:"defined-in-25",level:4},{value:"startSize",id:"startsize",level:3},{value:"Defined in",id:"defined-in-26",level:4},{value:"startVelocity",id:"startvelocity",level:3},{value:"Defined in",id:"defined-in-27",level:4},{value:"velocityCurve",id:"velocitycurve",level:3},{value:"Defined in",id:"defined-in-28",level:4},{value:"worldScale",id:"worldscale",level:3},{value:"Defined in",id:"defined-in-29",level:4},{value:"Methods",id:"methods",level:2},{value:"copy",id:"copy",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-30",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-31",level:4},{value:"updateParticles",id:"updateparticles",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-32",level:4}],d={toc:p};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/particles_functions_ParticleEmitterMesh"},"particles/functions/ParticleEmitterMesh"),".ParticleEmitterMesh"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Mesh")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ParticleEmitterMesh"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new ParticleEmitterMesh"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"texture"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"texture")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Texture"))))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"Mesh.constructor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L65"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:65")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"agerandomness"},"ageRandomness"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ageRandomness"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L48"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:48")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ages"},"ages"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ages"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L49"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:49")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"angularvelocity"},"angularVelocity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"angularVelocity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L42"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:42")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"colorcurve"},"colorCurve"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"colorCurve"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L57"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"colors"},"colors"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"colors"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L50"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:50")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"count"},"count"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"count"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L62"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"endcolor"},"endColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"endColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Color")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L51"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"endopacity"},"endOpacity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"endOpacity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L56"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:56")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"endsize"},"endSize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"endSize"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L38"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"endvelocity"},"endVelocity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"endVelocity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L41"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initialages"},"initialAges"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"initialAges"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L36"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initialpositions"},"initialPositions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"initialPositions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L35"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inverseworldscale"},"inverseWorldScale"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inverseWorldScale"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L61"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:61")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lifetime"},"lifetime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lifetime"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L44"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:44")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lifetimerandomness"},"lifetimeRandomness"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lifetimeRandomness"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L46"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:46")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lifetimes"},"lifetimes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lifetimes"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L45"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:45")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"middlecolor"},"middleColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"middleColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Color")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L52"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"middleopacity"},"middleOpacity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"middleOpacity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L55"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:55")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"particlecount"},"particleCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"particleCount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L43"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"particlesizerandomness"},"particleSizeRandomness"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"particleSizeRandomness"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L47"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:47")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sizecurve"},"sizeCurve"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"sizeCurve"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L59"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:59")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sizerandomness"},"sizeRandomness"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"sizeRandomness"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L39"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"src"},"src"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"src"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"'/static/editor/dot.png'")),(0,a.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L63"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:63")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"startcolor"},"startColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"startColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Color")),(0,a.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L53"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:53")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"startopacity"},"startOpacity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"startOpacity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L54"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:54")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"startsize"},"startSize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"startSize"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L37"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:37")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"startvelocity"},"startVelocity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"startVelocity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("h4",{id:"defined-in-27"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L40"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"velocitycurve"},"velocityCurve"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"velocityCurve"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-28"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L58"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:58")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"worldscale"},"worldScale"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"worldScale"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("h4",{id:"defined-in-29"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L60"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:60")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"copy"},"copy"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"copy"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"recursive?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/particles_functions_ParticleEmitterMesh.ParticleEmitterMesh"},(0,a.kt)("inlineCode",{parentName:"a"},"ParticleEmitterMesh"))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"source")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/particles_functions_ParticleEmitterMesh.ParticleEmitterMesh"},(0,a.kt)("inlineCode",{parentName:"a"},"ParticleEmitterMesh"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"recursive")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/particles_functions_ParticleEmitterMesh.ParticleEmitterMesh"},(0,a.kt)("inlineCode",{parentName:"a"},"ParticleEmitterMesh"))),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,"Mesh.copy"),(0,a.kt)("h4",{id:"defined-in-30"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L262"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:262")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"update"},"update"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"update"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"dt"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"dt")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-31"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L168"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:168")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updateparticles"},"updateParticles"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"updateParticles"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-32"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fa20c9/packages/engine/src/particles/functions/ParticleEmitterMesh.ts#L113"},"packages/engine/src/particles/functions/ParticleEmitterMesh.ts:113")))}o.isMDXComponent=!0}}]);