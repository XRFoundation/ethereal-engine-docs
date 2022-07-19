"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[40968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,N=m["".concat(l,".").concat(s)]||m[s]||k[s]||a;return n?i.createElement(N,o(o({ref:t},c),{},{components:n})):i.createElement(N,o({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"networking_functions_WorldNetworkActionReceptor",title:"Module: networking/functions/WorldNetworkActionReceptor",sidebar_label:"networking/functions/WorldNetworkActionReceptor",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"Api/engine/modules/networking_functions_WorldNetworkActionReceptor",id:"Api/engine/modules/networking_functions_WorldNetworkActionReceptor",title:"Module: networking/functions/WorldNetworkActionReceptor",description:"Variables",source:"@site/docs/Api/engine/modules/networking_functions_WorldNetworkActionReceptor.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/networking_functions_WorldNetworkActionReceptor",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_functions_WorldNetworkActionReceptor",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_functions_WorldNetworkActionReceptor",title:"Module: networking/functions/WorldNetworkActionReceptor",sidebar_label:"networking/functions/WorldNetworkActionReceptor",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"networking/functions/WorldNetworkAction",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_functions_WorldNetworkAction"},next:{title:"networking/functions/getNearbyUsers",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_functions_getNearbyUsers"}},l={},p=[{value:"Variables",id:"variables",level:2},{value:"WorldNetworkActionReceptor",id:"worldnetworkactionreceptor",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"worldnetworkactionreceptor"},"WorldNetworkActionReceptor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"WorldNetworkActionReceptor"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiveDestroyObject")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"networkId"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"NetworkId"),">"," = matchesNetworkId; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.DESTROY","_","OBJECT' }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiveRequestAuthorityOverObject")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Object"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"requester"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"," = matches.string; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.REQUEST","_","AUTHORITY","_","OVER","_","OBJECT' }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiveSetEquippedObject")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"$cache"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," = true; ",(0,r.kt)("inlineCode",{parentName:"td"},"attachmentPoint"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),">"," = matches.number; ",(0,r.kt)("inlineCode",{parentName:"td"},"equip"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),">"," = matches.boolean; ",(0,r.kt)("inlineCode",{parentName:"td"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Object"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.SET","_","EQUIPPED","_","OBJECT' }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiveSetUserTyping")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.USER","_","IS","_","TYPING'; ",(0,r.kt)("inlineCode",{parentName:"td"},"typing"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),">"," = matches.boolean }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiveSpawnDebugPhysicsObject")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"config"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.SPAWN","_","DEBUG","_","PHYSICS","_","OBJECT' }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiveSpawnObject")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"$cache"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," = true; ",(0,r.kt)("inlineCode",{parentName:"td"},"networkId"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_MatchesUtils#matcheswithdefault"},(0,r.kt)("inlineCode",{parentName:"a"},"MatchesWithDefault")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"NetworkId"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"position"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Optional"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"),">",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"prefab"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"," = matches.string; ",(0,r.kt)("inlineCode",{parentName:"td"},"rotation"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Optional"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Quaternion"),">",">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.SPAWN","_","OBJECT' }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiveTransferAuthorityOfObject")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"newAuthor"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"," = matches.string; ",(0,r.kt)("inlineCode",{parentName:"td"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Object"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.TRANSFER","_","AUTHORITY","_","OF","_","OBJECT' }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4983a8f/packages/engine/src/networking/functions/WorldNetworkActionReceptor.ts#L146"},"packages/engine/src/networking/functions/WorldNetworkActionReceptor.ts:146")))}k.isMDXComponent=!0}}]);