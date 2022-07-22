"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[64937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,g=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"networking_interfaces_WorldState",title:"Module: networking/interfaces/WorldState",sidebar_label:"networking/interfaces/WorldState",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/networking_interfaces_WorldState",id:"Api/engine/modules/networking_interfaces_WorldState",title:"Module: networking/interfaces/WorldState",description:"Type Aliases",source:"@site/docs/Api/engine/modules/networking_interfaces_WorldState.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/networking_interfaces_WorldState",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_interfaces_WorldState",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_interfaces_WorldState",title:"Module: networking/interfaces/WorldState",sidebar_label:"networking/interfaces/WorldState",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"networking/interfaces/NetworkPeer",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_interfaces_NetworkPeer"},next:{title:"networking/serialization/DataReader",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_serialization_DataReader"}},s={},p=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"AvatarProps",id:"avatarprops",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables",level:2},{value:"WorldState",id:"worldstate",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"matchesAvatarProps",id:"matchesavatarprops",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,a.kt)("h3",{id:"avatarprops"},"AvatarProps"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"AvatarProps"),": typeof ",(0,a.kt)("inlineCode",{parentName:"p"},"matchesAvatarProps._TYPE")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/engine/src/networking/interfaces/WorldState.ts#L10"},"packages/engine/src/networking/interfaces/WorldState.ts:10")),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"worldstate"},"WorldState"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"WorldState"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateDefinition"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"userAvatarDetails"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"UserId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"userNames"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"UserId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">","  }",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/engine/src/networking/interfaces/WorldState.ts#L12"},"packages/engine/src/networking/interfaces/WorldState.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"matchesavatarprops"},"matchesAvatarProps"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"matchesAvatarProps"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/engine/src/networking/interfaces/WorldState.ts#L6"},"packages/engine/src/networking/interfaces/WorldState.ts:6")))}c.isMDXComponent=!0}}]);