"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[6162],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,p=u["".concat(o,".").concat(g)]||u[g]||f[g]||l;return t?n.createElement(p,i(i({ref:r},d),{},{components:t})):n.createElement(p,i({ref:r},d))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14586:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const l={id:"renderer_effects_glsl_linear_to_srgb_shader_frag",title:"Module: renderer/effects/glsl/linear-to-srgb/shader.frag",sidebar_label:"renderer/effects/glsl/linear-to-srgb/shader.frag",custom_edit_url:null},i=void 0,s={unversionedId:"Api/engine/modules/renderer_effects_glsl_linear_to_srgb_shader_frag",id:"Api/engine/modules/renderer_effects_glsl_linear_to_srgb_shader_frag",title:"Module: renderer/effects/glsl/linear-to-srgb/shader.frag",description:"Variables",source:"@site/docs/Api/engine/modules/renderer_effects_glsl_linear_to_srgb_shader_frag.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_effects_glsl_linear_to_srgb_shader_frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_glsl_linear_to_srgb_shader_frag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_glsl_linear_to_srgb_shader_frag",title:"Module: renderer/effects/glsl/linear-to-srgb/shader.frag",sidebar_label:"renderer/effects/glsl/linear-to-srgb/shader.frag",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/effects/glsl/antialiasing/fxaa.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag"},next:{title:"renderer/materials/constants/AliasVortex.mat",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_materials_constants_AliasVortex_mat"}},o={},c=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:c};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\\n\\n\\toutputColor = LinearTosRGB(max(inputColor, 0.0));\\n\\n}"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/181c91e/packages/engine/src/renderer/effects/glsl/linear-to-srgb/shader.frag.ts#L1"},"packages/engine/src/renderer/effects/glsl/linear-to-srgb/shader.frag.ts:1")))}f.isMDXComponent=!0}}]);