"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[43447],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(a),k=i,c=s["".concat(d,".").concat(k)]||s[k]||o[k]||r;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={id:"avatar_AvatarInputSchema",title:"Module: avatar/AvatarInputSchema",sidebar_label:"avatar/AvatarInputSchema",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"Api/engine/modules/avatar_AvatarInputSchema",id:"Api/engine/modules/avatar_AvatarInputSchema",title:"Module: avatar/AvatarInputSchema",description:"Variables",source:"@site/docs/Api/engine/modules/avatar_AvatarInputSchema.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/avatar_AvatarInputSchema",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_AvatarInputSchema",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"avatar_AvatarInputSchema",title:"Module: avatar/AvatarInputSchema",sidebar_label:"avatar/AvatarInputSchema",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"avatar/AvatarControllerSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_AvatarControllerSystem"},next:{title:"avatar/AvatarLoadingSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_AvatarLoadingSystem"}},d={},m=[{value:"Variables",id:"variables",level:2},{value:"AvatarInputSchema",id:"avatarinputschema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"changeCameraDistanceByDelta",id:"changecameradistancebydelta",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"createAvatarInput",id:"createavatarinput",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"createBehaviorMap",id:"createbehaviormap",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"fixedCameraBehindAvatar",id:"fixedcamerabehindavatar",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"handlePhysicsDebugEvent",id:"handlephysicsdebugevent",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"handlePrimaryButton",id:"handleprimarybutton",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"setCameraRotation",id:"setcamerarotation",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"setTargetCameraRotation",id:"settargetcamerarotation",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"switchShoulderSide",id:"switchshoulderside",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"toggleRunning",id:"togglerunning",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-10",level:4}],u={toc:m};function o(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"avatarinputschema"},"AvatarInputSchema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"AvatarInputSchema"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/input_interfaces_InputSchema.InputSchema"},(0,i.kt)("inlineCode",{parentName:"a"},"InputSchema"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L661"},"packages/engine/src/avatar/AvatarInputSchema.ts:661")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"changecameradistancebydelta"},"changeCameraDistanceByDelta"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"changeCameraDistanceByDelta"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Change camera distance."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Entity holding camera and input component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/input_interfaces_InputValue.InputValue"},(0,i.kt)("inlineCode",{parentName:"a"},"InputValue"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L238"},"packages/engine/src/avatar/AvatarInputSchema.ts:238")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createavatarinput"},"createAvatarInput"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createAvatarInput"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")),"[], ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")),">"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")),"[], ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L539"},"packages/engine/src/avatar/AvatarInputSchema.ts:539")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createbehaviormap"},"createBehaviorMap"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createBehaviorMap"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")),", ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_interfaces_InputSchema#inputbehaviortype"},(0,i.kt)("inlineCode",{parentName:"a"},"InputBehaviorType")),">"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")),", ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_interfaces_InputSchema#inputbehaviortype"},(0,i.kt)("inlineCode",{parentName:"a"},"InputBehaviorType")),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L618"},"packages/engine/src/avatar/AvatarInputSchema.ts:618")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fixedcamerabehindavatar"},"fixedCameraBehindAvatar"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fixedCameraBehindAvatar"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Fix camera behind the avatar to follow the avatar."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Entity on which camera will be fixed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/input_interfaces_InputValue.InputValue"},(0,i.kt)("inlineCode",{parentName:"a"},"InputValue"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L190"},"packages/engine/src/avatar/AvatarInputSchema.ts:190")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handlephysicsdebugevent"},"handlePhysicsDebugEvent"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"handlePhysicsDebugEvent"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/input_interfaces_InputValue.InputValue"},(0,i.kt)("inlineCode",{parentName:"a"},"InputValue")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L521"},"packages/engine/src/avatar/AvatarInputSchema.ts:521")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handleprimarybutton"},"handlePrimaryButton"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"handlePrimaryButton"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/input_interfaces_InputValue.InputValue"},(0,i.kt)("inlineCode",{parentName:"a"},"InputValue")))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L510"},"packages/engine/src/avatar/AvatarInputSchema.ts:510")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setcamerarotation"},"setCameraRotation"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setCameraRotation"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/input_interfaces_InputValue.InputValue"},(0,i.kt)("inlineCode",{parentName:"a"},"InputValue")))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L291"},"packages/engine/src/avatar/AvatarInputSchema.ts:291")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settargetcamerarotation"},"setTargetCameraRotation"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setTargetCameraRotation"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"phi"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"theta"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"phi")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"theta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.3"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L215"},"packages/engine/src/avatar/AvatarInputSchema.ts:215")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"switchshoulderside"},"switchShoulderSide"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"switchShoulderSide"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/input_interfaces_InputValue.InputValue"},(0,i.kt)("inlineCode",{parentName:"a"},"InputValue")))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L202"},"packages/engine/src/avatar/AvatarInputSchema.ts:202")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"togglerunning"},"toggleRunning"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toggleRunning"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inputValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,i.kt)("inlineCode",{parentName:"a"},"InputAlias")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/input_interfaces_InputValue.InputValue"},(0,i.kt)("inlineCode",{parentName:"a"},"InputValue")))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4c19696/packages/engine/src/avatar/AvatarInputSchema.ts#L374"},"packages/engine/src/avatar/AvatarInputSchema.ts:374")))}o.isMDXComponent=!0}}]);