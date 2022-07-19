"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[26222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>h});var i=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},o=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,p=e.originalType,c=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),d=l(t),h=s,u=d["".concat(c,".").concat(h)]||d[h]||y[h]||p;return t?i.createElement(u,r(r({ref:n},o),{},{components:t})):i.createElement(u,r({ref:n},o))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var p=t.length,r=new Array(p);r[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,r[1]=a;for(var l=2;l<p;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>y,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var i=t(87462),s=(t(67294),t(3905));const p={id:"physics_types_PhysicsTypes.SceneQuery",title:"Interface: SceneQuery",sidebar_label:"SceneQuery",custom_edit_url:null},r=void 0,a={unversionedId:"Api/engine/interfaces/physics_types_PhysicsTypes.SceneQuery",id:"Api/engine/interfaces/physics_types_PhysicsTypes.SceneQuery",title:"Interface: SceneQuery",description:"physics/types/PhysicsTypes.SceneQuery",source:"@site/docs/Api/engine/interfaces/physics_types_PhysicsTypes.SceneQuery.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/physics_types_PhysicsTypes.SceneQuery",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.SceneQuery",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_types_PhysicsTypes.SceneQuery",title:"Interface: SceneQuery",sidebar_label:"SceneQuery",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"RigidBody",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody"},next:{title:"ShapeOptions",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"collisionMask",id:"collisionmask",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"direction",id:"direction",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"flags",id:"flags",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"hits",id:"hits",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"maxDistance",id:"maxdistance",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"maxHits",id:"maxhits",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"origin",id:"origin",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-7",level:4}],o={toc:l};function y(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes"},"physics/types/PhysicsTypes"),".SceneQuery"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"collisionmask"},"collisionMask"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"collisionMask"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/physics/types/PhysicsTypes.ts#L122"},"packages/engine/src/physics/types/PhysicsTypes.ts:122")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"direction"},"direction"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"direction"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,s.kt)("inlineCode",{parentName:"a"},"Vec3"))),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/physics/types/PhysicsTypes.ts#L124"},"packages/engine/src/physics/types/PhysicsTypes.ts:124")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"flags"},"flags"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"flags"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/physics/types/PhysicsTypes.ts#L121"},"packages/engine/src/physics/types/PhysicsTypes.ts:121")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"hits"},"hits"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"hits"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RaycastHit"},(0,s.kt)("inlineCode",{parentName:"a"},"RaycastHit")),"[]"),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/physics/types/PhysicsTypes.ts#L127"},"packages/engine/src/physics/types/PhysicsTypes.ts:127")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"maxdistance"},"maxDistance"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"maxDistance"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/physics/types/PhysicsTypes.ts#L125"},"packages/engine/src/physics/types/PhysicsTypes.ts:125")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"maxhits"},"maxHits"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"maxHits"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/physics/types/PhysicsTypes.ts#L126"},"packages/engine/src/physics/types/PhysicsTypes.ts:126")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"origin"},"origin"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"origin"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,s.kt)("inlineCode",{parentName:"a"},"Vec3"))),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/physics/types/PhysicsTypes.ts#L123"},"packages/engine/src/physics/types/PhysicsTypes.ts:123")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"type"},"type"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"type"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.SceneQueryType#closest"},(0,s.kt)("inlineCode",{parentName:"a"},"Closest"))),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/physics/types/PhysicsTypes.ts#L120"},"packages/engine/src/physics/types/PhysicsTypes.ts:120")))}y.isMDXComponent=!0}}]);