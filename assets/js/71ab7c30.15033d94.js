"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[17070],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(y,p(p({ref:n},c),{},{components:t})):o.createElement(y,p({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var s=2;s<r;s++)p[s]=t[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=t(87462),i=(t(67294),t(3905));const r={id:"physics_components_RapierCollisionComponent",title:"Module: physics/components/RapierCollisionComponent",sidebar_label:"physics/components/RapierCollisionComponent",sidebar_position:0,custom_edit_url:null},p=void 0,a={unversionedId:"Api/engine/modules/physics_components_RapierCollisionComponent",id:"Api/engine/modules/physics_components_RapierCollisionComponent",title:"Module: physics/components/RapierCollisionComponent",description:"Type Aliases",source:"@site/docs/Api/engine/modules/physics_components_RapierCollisionComponent.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/physics_components_RapierCollisionComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_RapierCollisionComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_components_RapierCollisionComponent",title:"Module: physics/components/RapierCollisionComponent",sidebar_label:"physics/components/RapierCollisionComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"physics/classes/springs/VectorSpringSimulator",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_classes_springs_VectorSpringSimulator"},next:{title:"physics/components/RaycastComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_RaycastComponent"}},l={},s=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"RapierCollisionComponentType",id:"rapiercollisioncomponenttype",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables",level:2},{value:"RapierCollisionComponent",id:"rapiercollisioncomponent",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"rapiercollisioncomponenttype"},"RapierCollisionComponentType"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"RapierCollisionComponentType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"collisions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes#colliderhitevent"},(0,i.kt)("inlineCode",{parentName:"a"},"ColliderHitEvent")),">")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/physics/components/RapierCollisionComponent.ts#L6"},"packages/engine/src/physics/components/RapierCollisionComponent.ts:6")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"rapiercollisioncomponent"},"RapierCollisionComponent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"RapierCollisionComponent"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,i.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_RapierCollisionComponent#rapiercollisioncomponenttype"},(0,i.kt)("inlineCode",{parentName:"a"},"RapierCollisionComponentType")),", {}",">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/de270a7/packages/engine/src/physics/components/RapierCollisionComponent.ts#L11"},"packages/engine/src/physics/components/RapierCollisionComponent.ts:11")))}m.isMDXComponent=!0}}]);