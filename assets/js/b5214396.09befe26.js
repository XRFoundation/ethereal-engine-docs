"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[94817],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>u});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),o=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},c=function(e){var r=o(e.components);return t.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=o(n),u=a,p=g["".concat(s,".").concat(u)]||g[u]||f[u]||l;return n?t.createElement(p,d(d({ref:r},c),{},{components:n})):t.createElement(p,d({ref:r},c))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,d=new Array(l);d[0]=g;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var o=2;o<l;o++)d[o]=n[o];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8954:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=n(87462),a=(n(67294),n(3905));const l={id:"renderer_effects_blending_glsl_add_shader_frag",title:"Module: renderer/effects/blending/glsl/add/shader.frag",sidebar_label:"renderer/effects/blending/glsl/add/shader.frag",custom_edit_url:null},d=void 0,i={unversionedId:"Api/engine/modules/renderer_effects_blending_glsl_add_shader_frag",id:"Api/engine/modules/renderer_effects_blending_glsl_add_shader_frag",title:"Module: renderer/effects/blending/glsl/add/shader.frag",description:"Variables",source:"@site/docs/Api/engine/modules/renderer_effects_blending_glsl_add_shader_frag.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_effects_blending_glsl_add_shader_frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_add_shader_frag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_blending_glsl_add_shader_frag",title:"Module: renderer/effects/blending/glsl/add/shader.frag",sidebar_label:"renderer/effects/blending/glsl/add/shader.frag",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/THREE.WebGL",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_THREE_WebGL"},next:{title:"renderer/effects/blending/glsl/alpha/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_alpha_shader_frag"}},s={},o=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:o};function f(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\treturn min(x + y, 1.0) * opacity + x * (1.0 - opacity);\\n}"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20cb808/packages/engine/src/renderer/effects/blending/glsl/add/shader.frag.ts#L1"},"packages/engine/src/renderer/effects/blending/glsl/add/shader.frag.ts:1")))}f.isMDXComponent=!0}}]);