"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[52700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(n),u=i,m=k["".concat(d,".").concat(u)]||k[u]||p[u]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},42167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"networking_functions_NetworkPeerFunctions",title:"Module: networking/functions/NetworkPeerFunctions",sidebar_label:"networking/functions/NetworkPeerFunctions",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/networking_functions_NetworkPeerFunctions",id:"Api/engine/modules/networking_functions_NetworkPeerFunctions",title:"Module: networking/functions/NetworkPeerFunctions",description:"Variables",source:"@site/docs/Api/engine/modules/networking_functions_NetworkPeerFunctions.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/networking_functions_NetworkPeerFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_functions_NetworkPeerFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_functions_NetworkPeerFunctions",title:"Module: networking/functions/NetworkPeerFunctions",sidebar_label:"networking/functions/NetworkPeerFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"networking/enums/MessageTypes",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_enums_MessageTypes"},next:{title:"networking/functions/WorldNetworkAction",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_functions_WorldNetworkAction"}},d={},s=[{value:"Variables",id:"variables",level:2},{value:"NetworkPeerFunctions",id:"networkpeerfunctions",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"networkpeerfunctions"},"NetworkPeerFunctions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"NetworkPeerFunctions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"clearCachedActionsForUser")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/networking_classes_Network.Network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"userId"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"UserId"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"createPeer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/networking_classes_Network.Network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"userId"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"UserId"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"destroyAllPeers")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/networking_classes_Network.Network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"destroyPeer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/networking_classes_Network.Network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"userId"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"UserId"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getCachedActionsForUser")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/networking_classes_Network.Network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"toUserId"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"UserId"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Action"),">","[]")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/292714f/packages/engine/src/networking/functions/NetworkPeerFunctions.ts#L99"},"packages/engine/src/networking/functions/NetworkPeerFunctions.ts:99")))}p.isMDXComponent=!0}}]);