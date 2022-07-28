"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[38289],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,k=c["".concat(m,".").concat(u)]||c[u]||s[u]||i;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},68852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={id:"avatar_animation_locomotionState",title:"Module: avatar/animation/locomotionState",sidebar_label:"avatar/animation/locomotionState",sidebar_position:0,custom_edit_url:null},r=void 0,l={unversionedId:"API/engine/modules/avatar_animation_locomotionState",id:"API/engine/modules/avatar_animation_locomotionState",title:"Module: avatar/animation/locomotionState",description:"Type Aliases",source:"@site/docs/API/engine/modules/avatar_animation_locomotionState.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/avatar_animation_locomotionState",permalink:"/docs/docs/API/engine/modules/avatar_animation_locomotionState",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"avatar_animation_locomotionState",title:"Module: avatar/animation/locomotionState",sidebar_label:"avatar/animation/locomotionState",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"avatar/animation/avatarPose",permalink:"/docs/docs/API/engine/modules/avatar_animation_avatarPose"},next:{title:"avatar/animation/retargetSkeleton",permalink:"/docs/docs/API/engine/modules/avatar_animation_retargetSkeleton"}},m={},d=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"LocomotionState",id:"locomotionstate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"enterLocomotionState",id:"enterlocomotionstate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getLocomotionStateActions",id:"getlocomotionstateactions",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"updateLocomotionState",id:"updatelocomotionstate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"updateLocomotionStateBlendValues",id:"updatelocomotionstateblendvalues",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4}],p={toc:d};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,o.kt)("h3",{id:"locomotionstate"},"LocomotionState"),(0,o.kt)("p",null,"\u01ac ",(0,o.kt)("strong",{parentName:"p"},"LocomotionState"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/avatar_animation_AnimationState#animationstate"},(0,o.kt)("inlineCode",{parentName:"a"},"AnimationState"))," & { ",(0,o.kt)("inlineCode",{parentName:"p"},"blendValue"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector2")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"forwardMovementActions"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/avatar_animation_DistanceMatchingAction#distancematchingaction"},(0,o.kt)("inlineCode",{parentName:"a"},"DistanceMatchingAction")),"[] ; ",(0,o.kt)("inlineCode",{parentName:"p"},"frameBlendValue"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector2")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"idleAction"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimationAction")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"movementParams"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"sideMovementActions"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/avatar_animation_DistanceMatchingAction#distancematchingaction"},(0,o.kt)("inlineCode",{parentName:"a"},"DistanceMatchingAction")),"[] ; ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"LocomotionState"')," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"xAxisBlendSpace"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/avatar_animation_BlendSpace1D#blendspace1d"},(0,o.kt)("inlineCode",{parentName:"a"},"BlendSpace1D"))," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"yAxisBlendSpace"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/avatar_animation_BlendSpace1D#blendspace1d"},(0,o.kt)("inlineCode",{parentName:"a"},"BlendSpace1D")),"  }"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/avatar/animation/locomotionState.ts#L9"},"packages/engine/src/avatar/animation/locomotionState.ts:9")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"enterlocomotionstate"},"enterLocomotionState"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"enterLocomotionState"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"prevState?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/avatar_animation_locomotionState#locomotionstate"},(0,o.kt)("inlineCode",{parentName:"a"},"LocomotionState")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"prevState?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/avatar_animation_locomotionState#locomotionstate"},(0,o.kt)("inlineCode",{parentName:"a"},"LocomotionState")))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/avatar/animation/locomotionState.ts#L91"},"packages/engine/src/avatar/animation/locomotionState.ts:91")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getlocomotionstateactions"},"getLocomotionStateActions"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getLocomotionStateActions"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"state"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimationAction"),"[]"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/avatar_animation_locomotionState#locomotionstate"},(0,o.kt)("inlineCode",{parentName:"a"},"LocomotionState")))))),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AnimationAction"),"[]"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/avatar/animation/locomotionState.ts#L98"},"packages/engine/src/avatar/animation/locomotionState.ts:98")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updatelocomotionstate"},"updateLocomotionState"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"updateLocomotionState"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/avatar_animation_locomotionState#locomotionstate"},(0,o.kt)("inlineCode",{parentName:"a"},"LocomotionState")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"delta")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number"))))),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/avatar/animation/locomotionState.ts#L82"},"packages/engine/src/avatar/animation/locomotionState.ts:82")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updatelocomotionstateblendvalues"},"updateLocomotionStateBlendValues"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"updateLocomotionStateBlendValues"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/avatar_animation_locomotionState#locomotionstate"},(0,o.kt)("inlineCode",{parentName:"a"},"LocomotionState")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"delta")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number"))))),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/avatar/animation/locomotionState.ts#L76"},"packages/engine/src/avatar/animation/locomotionState.ts:76")))}s.isMDXComponent=!0}}]);