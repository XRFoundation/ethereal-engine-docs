"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[61218],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,_=u["".concat(l,".").concat(f)]||u[f]||p[f]||s;return n?t.createElement(_,o(o({ref:r},d),{},{components:n})):t.createElement(_,o({ref:r},d))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39192:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const s={id:"scene_classes_water_shaders_waves_drop_fragment",title:"Module: scene/classes/water/shaders/waves/drop_fragment",sidebar_label:"scene/classes/water/shaders/waves/drop_fragment",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"Api/engine/modules/scene_classes_water_shaders_waves_drop_fragment",id:"Api/engine/modules/scene_classes_water_shaders_waves_drop_fragment",title:"Module: scene/classes/water/shaders/waves/drop_fragment",description:"Variables",source:"@site/docs/Api/engine/modules/scene_classes_water_shaders_waves_drop_fragment.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_classes_water_shaders_waves_drop_fragment",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_waves_drop_fragment",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_classes_water_shaders_waves_drop_fragment",title:"Module: scene/classes/water/shaders/waves/drop_fragment",sidebar_label:"scene/classes/water/shaders/waves/drop_fragment",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/classes/water/shaders/surface/vertex",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_surface_vertex"},next:{title:"scene/classes/water/shaders/waves/update_fragment",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_waves_update_fragment"}},l={},c=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:c};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\nprecision highp float;\\nprecision highp int;\\n\\nconst float PI = 3.141592653589793;\\nuniform sampler2D texture;\\nuniform vec2 center;\\nuniform float radius;\\nuniform float strength;\\nvarying vec2 coord;\\n\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  float circle = step(length(vUv - 0.5), 0.5);\\n  if(circle == 0.){\\n    discard;\\n  }\\n\\n  /* Get vertex info */\\n  vec4 info = texture2D(texture, coord);\\n\\n  /* Add the drop to the height */\\n  float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);\\n  drop = 0.5 - cos(drop * PI) * 0.5;\\n  info.r += drop * strength;\\n\\n  gl_FragColor = info;\\n}\\n"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/da503a8/packages/engine/src/scene/classes/water/shaders/waves/drop_fragment.ts#L1"},"packages/engine/src/scene/classes/water/shaders/waves/drop_fragment.ts:1")))}p.isMDXComponent=!0}}]);