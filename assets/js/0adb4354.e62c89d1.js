"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[59119],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,v=p["".concat(c,".").concat(u)]||p[u]||f[u]||s;return t?n.createElement(v,o(o({ref:r},d),{},{components:t})):n.createElement(v,o({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},55757:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const s={id:"scene_classes_water_shaders_surface_vertex",title:"Module: scene/classes/water/shaders/surface/vertex",sidebar_label:"scene/classes/water/shaders/surface/vertex",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"Api/engine/modules/scene_classes_water_shaders_surface_vertex",id:"Api/engine/modules/scene_classes_water_shaders_surface_vertex",title:"Module: scene/classes/water/shaders/surface/vertex",description:"Variables",source:"@site/docs/Api/engine/modules/scene_classes_water_shaders_surface_vertex.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_classes_water_shaders_surface_vertex",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_surface_vertex",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_classes_water_shaders_surface_vertex",title:"Module: scene/classes/water/shaders/surface/vertex",sidebar_label:"scene/classes/water/shaders/surface/vertex",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/classes/water/shaders/surface/fragment",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_surface_fragment"},next:{title:"scene/classes/water/shaders/waves/drop_fragment",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_waves_drop_fragment"}},c={},l=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:l};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\nuniform sampler2D height;\\nuniform vec3 localCameraPos;\\n\\nvarying vec2 refractedPosition[3];\\nvarying vec3 reflected;\\nvarying float reflectionFactor;\\nvarying vec2 vUv;\\n\\nconst float refractionFactor = 1.;\\n\\nconst float fresnelBias = 0.1;\\nconst float fresnelPower = 2.;\\nconst float fresnelScale = 1.;\\n\\n// Air refractive index / Water refractive index\\nconst float eta = 0.7504;\\n\\nvoid main() {\\n  vec4 info = texture2D(height, position.xy * 0.5 + 0.5);\\n\\n  // The water position is the vertex position on which we apply the height-map\\n  vec3 pos = vec3(position.xy, position.z + info.r);\\n  vec3 norm = normalize(vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a)).xzy;\\n\\n  vec3 eye = normalize(pos - localCameraPos);\\n  vec3 refracted = normalize(refract(eye, norm, eta));\\n  reflected = normalize(reflect(eye, norm));\\n\\n  reflectionFactor = fresnelBias + fresnelScale * pow(1. + dot(eye, norm), fresnelPower);\\n\\n  mat4 proj = projectionMatrix * modelViewMatrix;\\n\\n  vec4 projectedRefractedPosition = proj * vec4(pos + refractionFactor * refracted, 1.0);\\n  refractedPosition[0] = projectedRefractedPosition.xy / projectedRefractedPosition.w;\\n\\n  projectedRefractedPosition = proj * vec4(pos + refractionFactor * normalize(refract(eye, norm, eta * 0.96)), 1.0);\\n  refractedPosition[1] = projectedRefractedPosition.xy / projectedRefractedPosition.w;\\n\\n  projectedRefractedPosition = proj * vec4(pos + refractionFactor * normalize(refract(eye, norm, eta * 0.92)), 1.0);\\n  refractedPosition[2] = projectedRefractedPosition.xy / projectedRefractedPosition.w;\\n\\n  vUv = uv;\\n  gl_Position = proj * vec4(pos, 1.0);\\n}\\n"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/90d0a3a/packages/engine/src/scene/classes/water/shaders/surface/vertex.ts#L1"},"packages/engine/src/scene/classes/water/shaders/surface/vertex.ts:1")))}f.isMDXComponent=!0}}]);