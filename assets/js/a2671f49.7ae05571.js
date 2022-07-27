"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[18076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||u[f]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={id:"audio_components_SoundEffect",title:"Module: audio/components/SoundEffect",sidebar_label:"audio/components/SoundEffect",sidebar_position:0,custom_edit_url:null},i=void 0,d={unversionedId:"Api/engine/modules/audio_components_SoundEffect",id:"Api/engine/modules/audio_components_SoundEffect",title:"Module: audio/components/SoundEffect",description:"Type Aliases",source:"@site/docs/Api/engine/modules/audio_components_SoundEffect.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/audio_components_SoundEffect",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/audio_components_SoundEffect",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"audio_components_SoundEffect",title:"Module: audio/components/SoundEffect",sidebar_label:"audio/components/SoundEffect",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"audio/components/PlaySoundEffect",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/audio_components_PlaySoundEffect"},next:{title:"audio/constants/AudioConstants",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/audio_constants_AudioConstants"}},l={},c=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"SoundEffectType",id:"soundeffecttype",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables",level:2},{value:"SoundEffect",id:"soundeffect",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,a.kt)("h3",{id:"soundeffecttype"},"SoundEffectType"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"SoundEffectType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"audio")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Audio track container.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"src")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Source of the audio track.")))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8404362/packages/engine/src/audio/components/SoundEffect.ts#L3"},"packages/engine/src/audio/components/SoundEffect.ts:3")),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"soundeffect"},"SoundEffect"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"SoundEffect"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,a.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/audio_components_SoundEffect#soundeffecttype"},(0,a.kt)("inlineCode",{parentName:"a"},"SoundEffectType")),", {}",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8404362/packages/engine/src/audio/components/SoundEffect.ts#L10"},"packages/engine/src/audio/components/SoundEffect.ts:10")))}u.isMDXComponent=!0}}]);