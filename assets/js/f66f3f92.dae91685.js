"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[89431],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>u});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),o=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},c=function(e){var n=o(e.components);return t.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=o(r),u=i,p=g["".concat(s,".").concat(u)]||g[u]||f[u]||l;return r?t.createElement(p,d(d({ref:n},c),{},{components:r})):t.createElement(p,d({ref:n},c))}));function u(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,d=new Array(l);d[0]=g;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,d[1]=a;for(var o=2;o<l;o++)d[o]=r[o];return t.createElement.apply(null,d)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},81997:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=r(87462),i=(r(67294),r(3905));const l={id:"renderer_effects_blending_glsl_divide_shader_frag",title:"Module: renderer/effects/blending/glsl/divide/shader.frag",sidebar_label:"renderer/effects/blending/glsl/divide/shader.frag",custom_edit_url:null},d=void 0,a={unversionedId:"Api/engine/modules/renderer_effects_blending_glsl_divide_shader_frag",id:"Api/engine/modules/renderer_effects_blending_glsl_divide_shader_frag",title:"Module: renderer/effects/blending/glsl/divide/shader.frag",description:"Variables",source:"@site/docs/Api/engine/modules/renderer_effects_blending_glsl_divide_shader_frag.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_effects_blending_glsl_divide_shader_frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_divide_shader_frag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_blending_glsl_divide_shader_frag",title:"Module: renderer/effects/blending/glsl/divide/shader.frag",sidebar_label:"renderer/effects/blending/glsl/divide/shader.frag",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/effects/blending/glsl/difference/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_difference_shader_frag"},next:{title:"renderer/effects/blending/glsl/exclusion/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_exclusion_shader_frag"}},s={},o=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:o};function f(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"float blend(const in float x, const in float y) {\\n\\n\\treturn (y > 0.0) ? min(x / y, 1.0) : 1.0;\\n\\n}\\n\\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\\n\\n\\treturn z * opacity + x * (1.0 - opacity);\\n\\n}\\n"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/909c67f/packages/engine/src/renderer/effects/blending/glsl/divide/shader.frag.ts#L1"},"packages/engine/src/renderer/effects/blending/glsl/divide/shader.frag.ts:1")))}f.isMDXComponent=!0}}]);