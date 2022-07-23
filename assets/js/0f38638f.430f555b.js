"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[97855],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},18110:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const a={id:"renderer_functions_changeRenderMode",title:"Module: renderer/functions/changeRenderMode",sidebar_label:"renderer/functions/changeRenderMode",sidebar_position:0,custom_edit_url:null},i=void 0,d={unversionedId:"Api/engine/modules/renderer_functions_changeRenderMode",id:"Api/engine/modules/renderer_functions_changeRenderMode",title:"Module: renderer/functions/changeRenderMode",description:"Functions",source:"@site/docs/Api/engine/modules/renderer_functions_changeRenderMode.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_functions_changeRenderMode",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_functions_changeRenderMode",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"renderer_functions_changeRenderMode",title:"Module: renderer/functions/changeRenderMode",sidebar_label:"renderer/functions/changeRenderMode",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/effects/blending/glsl/shaders",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_shaders"},next:{title:"renderer/functions/configureEffectComposer",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_functions_configureEffectComposer"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"changeRenderMode",id:"changerendermode",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:c};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"changerendermode"},"changeRenderMode"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"changeRenderMode"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"mode"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Change render mode of the renderer"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mode")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_constants_RenderModes#rendermodestype"},(0,o.kt)("inlineCode",{parentName:"a"},"RenderModesType"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Mode which will be set to renderer")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1433440/packages/engine/src/renderer/functions/changeRenderMode.ts#L15"},"packages/engine/src/renderer/functions/changeRenderMode.ts:15")))}u.isMDXComponent=!0}}]);