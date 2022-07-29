"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[62056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,v=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={id:"scene_classes_water_shaders_waves_update_fragment",title:"Module: scene/classes/water/shaders/waves/update_fragment",sidebar_label:"scene/classes/water/shaders/waves/update_fragment",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"API/engine/modules/scene_classes_water_shaders_waves_update_fragment",id:"API/engine/modules/scene_classes_water_shaders_waves_update_fragment",title:"Module: scene/classes/water/shaders/waves/update_fragment",description:"Variables",source:"@site/docs/API/engine/modules/scene_classes_water_shaders_waves_update_fragment.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/scene_classes_water_shaders_waves_update_fragment",permalink:"/ethereal-engine-docs/docs/API/engine/modules/scene_classes_water_shaders_waves_update_fragment",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_classes_water_shaders_waves_update_fragment",title:"Module: scene/classes/water/shaders/waves/update_fragment",sidebar_label:"scene/classes/water/shaders/waves/update_fragment",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/classes/water/shaders/waves/drop_fragment",permalink:"/ethereal-engine-docs/docs/API/engine/modules/scene_classes_water_shaders_waves_drop_fragment"},next:{title:"scene/classes/water/shaders/waves/vertex",permalink:"/ethereal-engine-docs/docs/API/engine/modules/scene_classes_water_shaders_waves_vertex"}},c={},l=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\nprecision highp float;\\nprecision highp int;\\n\\nuniform sampler2D texture;\\nuniform vec2 delta;\\nvarying vec2 coord;\\n\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  float circle = step(length(vUv - 0.5), 0.5);\\n  \\n  if(circle == 0.){\\n    discard;\\n  }\\n\\n  /* get vertex info */\\n  vec4 info = texture2D(texture, coord);\\n\\n  /* calculate average neighbor height */\\n  vec2 dx = vec2(delta.x, 0.0);\\n  vec2 dy = vec2(0.0, delta.y);\\n  float average = (\\n    texture2D(texture, coord - dx).r +\\n    texture2D(texture, coord - dy).r +\\n    texture2D(texture, coord + dx).r +\\n    texture2D(texture, coord + dy).r\\n  ) * 0.25;\\n\\n  /* change the velocity to move toward the average */\\n  info.g += (average - info.r) * 2.0;\\n\\n  /* attenuate the velocity a little so waves do not last forever */\\n  info.g *= 0.995;\\n\\n  /* move the vertex along the velocity */\\n  info.r += info.g;\\n\\n  /* update the normal */\\n  vec3 ddx = vec3(delta.x, texture2D(texture, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);\\n  vec3 ddy = vec3(0.0, texture2D(texture, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);\\n  info.ba = normalize(cross(ddy, ddx)).xz;\\n\\n  gl_FragColor = info;\\n}\\n"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/scene/classes/water/shaders/waves/update_fragment.ts#L1"},"packages/engine/src/scene/classes/water/shaders/waves/update_fragment.ts:1")))}u.isMDXComponent=!0}}]);