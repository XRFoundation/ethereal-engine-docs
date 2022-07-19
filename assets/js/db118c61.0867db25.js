"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[12947],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var r=o.createContext({}),l=function(e){var n=o.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(r.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=s,b=d["".concat(r,".").concat(u)]||d[u]||m[u]||a;return t?o.createElement(b,i(i({ref:n},c),{},{components:t})):o.createElement(b,i({ref:n},c))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var r in n)hasOwnProperty.call(n,r)&&(p[r]=n[r]);p.originalType=e,p.mdxType="string"==typeof e?e:s,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=t(87462),s=(t(67294),t(3905));const a={id:"physics_components_ObstaclesComponent",title:"Module: physics/components/ObstaclesComponent",sidebar_label:"physics/components/ObstaclesComponent",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"Api/engine/modules/physics_components_ObstaclesComponent",id:"Api/engine/modules/physics_components_ObstaclesComponent",title:"Module: physics/components/ObstaclesComponent",description:"Type Aliases",source:"@site/docs/Api/engine/modules/physics_components_ObstaclesComponent.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/physics_components_ObstaclesComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_ObstaclesComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_components_ObstaclesComponent",title:"Module: physics/components/ObstaclesComponent",sidebar_label:"physics/components/ObstaclesComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"physics/components/CollisionComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_CollisionComponent"},next:{title:"physics/components/RaycastComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_RaycastComponent"}},r={},l=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"ObstaclesComponentType",id:"obstaclescomponenttype",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables",level:2},{value:"ObstaclesComponent",id:"obstaclescomponent",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:l};function m(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,s.kt)("h3",{id:"obstaclescomponenttype"},"ObstaclesComponentType"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"ObstaclesComponentType"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Object")),(0,s.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"obstacles")),(0,s.kt)("td",{parentName:"tr",align:"left"},"(",(0,s.kt)("inlineCode",{parentName:"td"},"PhysX.PxBoxObstacle")," ","|"," ",(0,s.kt)("inlineCode",{parentName:"td"},"PhysX.PxCapsuleObstacle"),")[]")))),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7e48165/packages/engine/src/physics/components/ObstaclesComponent.ts#L3"},"packages/engine/src/physics/components/ObstaclesComponent.ts:3")),(0,s.kt)("h2",{id:"variables"},"Variables"),(0,s.kt)("h3",{id:"obstaclescomponent"},"ObstaclesComponent"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"ObstaclesComponent"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,s.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_ObstaclesComponent#obstaclescomponenttype"},(0,s.kt)("inlineCode",{parentName:"a"},"ObstaclesComponentType")),", {}",">"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7e48165/packages/engine/src/physics/components/ObstaclesComponent.ts#L7"},"packages/engine/src/physics/components/ObstaclesComponent.ts:7")))}m.isMDXComponent=!0}}]);