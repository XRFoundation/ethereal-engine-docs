"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[76637],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||c;return t?o.createElement(g,a(a({ref:n},l),{},{components:t})):o.createElement(g,a({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const c={id:"scene_components_SceneTagComponent",title:"Module: scene/components/SceneTagComponent",sidebar_label:"scene/components/SceneTagComponent",sidebar_position:0,custom_edit_url:null},a=void 0,i={unversionedId:"API/engine/modules/scene_components_SceneTagComponent",id:"API/engine/modules/scene_components_SceneTagComponent",title:"Module: scene/components/SceneTagComponent",description:"Variables",source:"@site/docs/API/engine/modules/scene_components_SceneTagComponent.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/scene_components_SceneTagComponent",permalink:"/docs/docs/API/engine/modules/scene_components_SceneTagComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_components_SceneTagComponent",title:"Module: scene/components/SceneTagComponent",sidebar_label:"scene/components/SceneTagComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/components/ScenePreviewCamera",permalink:"/docs/docs/API/engine/modules/scene_components_ScenePreviewCamera"},next:{title:"scene/components/ScreenshareTargetComponent",permalink:"/docs/docs/API/engine/modules/scene_components_ScreenshareTargetComponent"}},s={},p=[{value:"Variables",id:"variables",level:2},{value:"SCENE_COMPONENT_SCENE_TAG",id:"scene_component_scene_tag",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SceneTagComponent",id:"scenetagcomponent",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"scene_component_scene_tag"},"SCENE","_","COMPONENT","_","SCENE","_","TAG"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","SCENE","_","TAG"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"scene-tag"')),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/SceneTagComponent.ts#L3"},"packages/engine/src/scene/components/SceneTagComponent.ts:3")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scenetagcomponent"},"SceneTagComponent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SceneTagComponent"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,r.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", {}",">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/SceneTagComponent.ts#L5"},"packages/engine/src/scene/components/SceneTagComponent.ts:5")))}m.isMDXComponent=!0}}]);