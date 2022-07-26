"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[5970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=i,u=c["".concat(m,".").concat(g)]||c[g]||d[g]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"avatar_animation_singleAnimationState",title:"Module: avatar/animation/singleAnimationState",sidebar_label:"avatar/animation/singleAnimationState",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/avatar_animation_singleAnimationState",id:"Api/engine/modules/avatar_animation_singleAnimationState",title:"Module: avatar/animation/singleAnimationState",description:"Type Aliases",source:"@site/docs/Api/engine/modules/avatar_animation_singleAnimationState.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/avatar_animation_singleAnimationState",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_singleAnimationState",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"avatar_animation_singleAnimationState",title:"Module: avatar/animation/singleAnimationState",sidebar_label:"avatar/animation/singleAnimationState",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"avatar/animation/retargetSkeleton",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_retargetSkeleton"},next:{title:"avatar/components/AnimationComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_components_AnimationComponent"}},m={},s=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"SingleAnimationState",id:"singleanimationstate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"enterSingleAnimationState",id:"entersingleanimationstate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getSingleAnimationStateActions",id:"getsingleanimationstateactions",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"singleanimationstate"},"SingleAnimationState"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SingleAnimationState"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_AnimationState#animationstate"},(0,i.kt)("inlineCode",{parentName:"a"},"AnimationState"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationAction")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"clamp"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"loop"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"SingleAnimationState"'),"  }"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/05eb628/packages/engine/src/avatar/animation/singleAnimationState.ts#L5"},"packages/engine/src/avatar/animation/singleAnimationState.ts:5")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"entersingleanimationstate"},"enterSingleAnimationState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"enterSingleAnimationState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prevState"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_singleAnimationState#singleanimationstate"},(0,i.kt)("inlineCode",{parentName:"a"},"SingleAnimationState")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prevState")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_AnimationState#animationstate"},(0,i.kt)("inlineCode",{parentName:"a"},"AnimationState")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/05eb628/packages/engine/src/avatar/animation/singleAnimationState.ts#L16"},"packages/engine/src/avatar/animation/singleAnimationState.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getsingleanimationstateactions"},"getSingleAnimationStateActions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getSingleAnimationStateActions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationAction"),"[]"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_singleAnimationState#singleanimationstate"},(0,i.kt)("inlineCode",{parentName:"a"},"SingleAnimationState")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AnimationAction"),"[]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/05eb628/packages/engine/src/avatar/animation/singleAnimationState.ts#L12"},"packages/engine/src/avatar/animation/singleAnimationState.ts:12")))}d.isMDXComponent=!0}}]);