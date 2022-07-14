"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[3850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={},r="Entity Component System",l={unversionedId:"concepts/ecs",id:"concepts/ecs",title:"Entity Component System",description:"What is an ECS?",source:"@site/docs/3_concepts/3_ecs.md",sourceDirName:"3_concepts",slug:"/concepts/ecs",permalink:"/ethereal-engine-docs/docs/concepts/ecs",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/3_concepts/3_ecs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Editor & Locations",permalink:"/ethereal-engine-docs/docs/concepts/editor_scenes_locations"},next:{title:"Updating database models",permalink:"/ethereal-engine-docs/docs/concepts/updating_and_seeding_database"}},s={},p=[{value:"What is an ECS?",id:"what-is-an-ecs",level:2},{value:"Example",id:"example",level:3},{value:"Update Loop",id:"update-loop",level:2},{value:"Ethereal Engine ECS API",id:"ethereal-engine-ecs-api",level:2},{value:"The World",id:"the-world",level:3},{value:"Systems",id:"systems",level:3},{value:"API",id:"api",level:3},{value:"Entities",id:"entities",level:4},{value:"Component Lifecycle",id:"component-lifecycle",level:4},{value:"Queries",id:"queries",level:4},{value:"Examples",id:"examples",level:3},{value:"Tag Components",id:"tag-components",level:4}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entity-component-system"},"Entity Component System"),(0,a.kt)("h2",{id:"what-is-an-ecs"},"What is an ECS?"),(0,a.kt)("p",null,"ECS stands for Entity Component System. It is a pattern for organising data and objects that allows for composition over inheritance. An entity is simply a number that points to a particular set of data contained in components. Systems then operate logic on these entities and components."),(0,a.kt)("p",null,"Some references"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=2rW7ALyHaas"},"Entity Component System Overview in 7 Minutes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=qaY_CKvFLYM"},"Entity Component System in TypeScript with Phaser 3 and bitECS)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=W3aieHjyNvw"},"Overwatch GDC ECS & Netcode")," (note, ethereal engine does not use this style of network)")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7362).Z,width:"509",height:"445"})),(0,a.kt)("p",null,"This code creates a TimerComponent, creates a new entity and adds the component to it, creates a system that will then add the world delta for the current frame each update."),(0,a.kt)("h2",{id:"update-loop"},"Update Loop"),(0,a.kt)("p",null,"The engine uses a very similar model to Unity's update loop (found here ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ExecutionOrder.html"},"https://docs.unity3d.com/Manual/ExecutionOrder.html"),"). It has a frame update, called once per frame, of which inside is a fixed update, which operates on an accumulator system. This system ensures a stable number of updates per second independent of the framerate. This means it may have 0 to many updates in a given frame. "),(0,a.kt)("h2",{id:"ethereal-engine-ecs-api"},"Ethereal Engine ECS API"),(0,a.kt)("h3",{id:"the-world"},"The World"),(0,a.kt)("p",null,".."),(0,a.kt)("h3",{id:"systems"},"Systems"),(0,a.kt)("p",null,".."),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../packages/engine/src/ecs/functions/ComponentFunctions.ts"},"Component Functions")),(0,a.kt)("h4",{id:"entities"},"Entities"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createEntity")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeEntity")),(0,a.kt)("h4",{id:"component-lifecycle"},"Component Lifecycle"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createMappedComponent")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addComponent")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hasComponent")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getComponent")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeComponent")),(0,a.kt)("h4",{id:"queries"},"Queries"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"defineQuery")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"enter queries")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"exit queries")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"tag-components"},"Tag Components"),(0,a.kt)("p",null,"Tag components are how booleans are represented in the ECS pattern. An entity either has a specific tag component, or it doesn't. The SceneObjectSystem includes queries for Object3DComponent and VisibleComponent. Any entities with an Object3DComponent that has a VisibleComponent added, will have the 'visible' property of the Object3D referenced in Object3DComponent.value set to 'true', and set to 'false' when the VisibleComponent is removed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"\nconst visibleEntity = createEntity()\n\nconst obj3d = new Object3D()\nobj3d.visible = false // since threejs defaults .visible to true, we must set it manually to sync up with the ECS\n\naddComponent(entity, Object3D, { value: obj3d })\n\nconsole.log(obj3d.visible) // false\n\naddComponent(entity, VisibleComponent)\n\n// iterate logic loop\n\nconsole.log(obj3d.visible) // true\n\nremoveComponent(entity, VisibleComponent)\n\n// iterate logic loop\n\nconsole.log(obj3d.visible) // false\n\n")))}d.isMDXComponent=!0},7362:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ecs-example-e29dd455cbb17d7784b9e1db4c24ee0f.png"}}]);