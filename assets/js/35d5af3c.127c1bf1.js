"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[79446],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>h});var t=i(67294);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,s=function(e,n){if(null==e)return{};var i,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=t.createContext({}),o=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},c=function(e){var n=o(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var i=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=o(i),h=s,g=y["".concat(l,".").concat(h)]||y[h]||d[h]||a;return i?t.createElement(g,r(r({ref:n},c),{},{components:i})):t.createElement(g,r({ref:n},c))}));function h(e,n){var i=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=i.length,r=new Array(a);r[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var o=2;o<a;o++)r[o]=i[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}y.displayName="MDXCreateElement"},12409:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var t=i(87462),s=(i(67294),i(3905));const a={id:"physics_types_PhysicsTypes.RigidBody",title:"Interface: RigidBody",sidebar_label:"RigidBody",custom_edit_url:null},r=void 0,p={unversionedId:"Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody",id:"Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody",title:"Interface: RigidBody",description:"physics/types/PhysicsTypes.RigidBody",source:"@site/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_types_PhysicsTypes.RigidBody",title:"Interface: RigidBody",sidebar_label:"RigidBody",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"RaycastHit",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RaycastHit"},next:{title:"SceneQuery",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.SceneQuery"}},l={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"angularDamping",id:"angulardamping",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"angularVelocity",id:"angularvelocity",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"linearDamping",id:"lineardamping",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"linearVelocity",id:"linearvelocity",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"mass",id:"mass",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"shapes",id:"shapes",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"transform",id:"transform",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"type",id:"type",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"useCCD",id:"useccd",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"userData",id:"userdata",level:3},{value:"Defined in",id:"defined-in-9",level:4}],c={toc:o};function d(e){let{components:n,...i}=e;return(0,s.kt)("wrapper",(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes"},"physics/types/PhysicsTypes"),".RigidBody"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"},(0,s.kt)("inlineCode",{parentName:"a"},"BodyConfig"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"RigidBody"))),(0,s.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ControllerRigidBody"},(0,s.kt)("inlineCode",{parentName:"a"},"ControllerRigidBody"))))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"angulardamping"},"angularDamping"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"angularDamping"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"},"BodyConfig"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig#angulardamping"},"angularDamping")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L59"},"packages/engine/src/physics/types/PhysicsTypes.ts:59")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"angularvelocity"},"angularVelocity"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"angularVelocity"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,s.kt)("inlineCode",{parentName:"a"},"Vec3"))),(0,s.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"},"BodyConfig"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig#angularvelocity"},"angularVelocity")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L61"},"packages/engine/src/physics/types/PhysicsTypes.ts:61")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"lineardamping"},"linearDamping"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"linearDamping"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"},"BodyConfig"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig#lineardamping"},"linearDamping")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L58"},"packages/engine/src/physics/types/PhysicsTypes.ts:58")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"linearvelocity"},"linearVelocity"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"linearVelocity"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,s.kt)("inlineCode",{parentName:"a"},"Vec3"))),(0,s.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"},"BodyConfig"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig#linearvelocity"},"linearVelocity")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L60"},"packages/engine/src/physics/types/PhysicsTypes.ts:60")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"mass"},"mass"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"mass"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"},"BodyConfig"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig#mass"},"mass")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L56"},"packages/engine/src/physics/types/PhysicsTypes.ts:56")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"shapes"},"shapes"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"shapes"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"PxShape"),"[]"),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L66"},"packages/engine/src/physics/types/PhysicsTypes.ts:66")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"transform"},"transform"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"transform"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"PxTransformLike")),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L65"},"packages/engine/src/physics/types/PhysicsTypes.ts:65")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"type"},"type"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"type"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.BodyType"},(0,s.kt)("inlineCode",{parentName:"a"},"BodyType"))),(0,s.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"},"BodyConfig"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig#type"},"type")),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L55"},"packages/engine/src/physics/types/PhysicsTypes.ts:55")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"useccd"},"useCCD"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"useCCD"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"},"BodyConfig"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig#useccd"},"useCCD")),(0,s.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L57"},"packages/engine/src/physics/types/PhysicsTypes.ts:57")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"userdata"},"userData"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"userData"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L67"},"packages/engine/src/physics/types/PhysicsTypes.ts:67")))}d.isMDXComponent=!0}}]);