"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[74101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,c=s["".concat(d,".").concat(u)]||s[u]||k[u]||r;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"avatar_AvatarBoneMatching",title:"Module: avatar/AvatarBoneMatching",sidebar_label:"avatar/AvatarBoneMatching",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"Api/engine/modules/avatar_AvatarBoneMatching",id:"Api/engine/modules/avatar_AvatarBoneMatching",title:"Module: avatar/AvatarBoneMatching",description:"Type Aliases",source:"@site/docs/Api/engine/modules/avatar_AvatarBoneMatching.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/avatar_AvatarBoneMatching",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_AvatarBoneMatching",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"avatar_AvatarBoneMatching",title:"Module: avatar/AvatarBoneMatching",sidebar_label:"avatar/AvatarBoneMatching",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"avatar/AnimationSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_AnimationSystem"},next:{title:"avatar/AvatarControllerSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_AvatarControllerSystem"}},d={},p=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"BoneNames",id:"bonenames",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"BoneStructure",id:"bonestructure",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"createSkeletonFromBone",id:"createskeletonfrombone",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"findSkinnedMeshes",id:"findskinnedmeshes",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4}],m={toc:p};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"bonenames"},"BoneNames"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"BoneNames"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"Root"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hips"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Spine"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Spine1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Spine2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Neck"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Head"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftEye"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightEye"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftShoulder"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftArm"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftForeArm"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHand"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftUpLeg"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftLeg"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftFoot"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightShoulder"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightArm"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightForeArm"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHand"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightUpLeg"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightLeg"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightFoot"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandPinky1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandPinky2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandPinky3"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandRing1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandRing2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandRing3"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandMiddle1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandMiddle2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandMiddle3"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandIndex1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandIndex2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandIndex3"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandThumb1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandThumb2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"LeftHandThumb3"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandPinky1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandPinky2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandPinky3"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandRing1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandRing2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandRing3"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandMiddle1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandMiddle2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandMiddle3"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandIndex1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandIndex2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandIndex3"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandThumb1"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandThumb2"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RightHandThumb3"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/avatar/AvatarBoneMatching.ts#L8"},"packages/engine/src/avatar/AvatarBoneMatching.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bonestructure"},"BoneStructure"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"BoneStructure"),": { ","[bone in BoneNames]",": Bone }"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/avatar/AvatarBoneMatching.ts#L63"},"packages/engine/src/avatar/AvatarBoneMatching.ts:63")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createskeletonfrombone"},"createSkeletonFromBone"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createSkeletonFromBone"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"bone"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Skeleton")),(0,i.kt)("p",null,"Creates a skeleton form given bone chain"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bone")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Bone")),(0,i.kt)("td",{parentName:"tr",align:"left"},"first bone in the chain")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Skeleton")),(0,i.kt)("p",null,"Skeleton"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/avatar/AvatarBoneMatching.ts#L511"},"packages/engine/src/avatar/AvatarBoneMatching.ts:511")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"model"),"): ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_AvatarBoneMatching#bonestructure"},(0,i.kt)("inlineCode",{parentName:"a"},"BoneStructure"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"model")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Event"),">")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_AvatarBoneMatching#bonestructure"},(0,i.kt)("inlineCode",{parentName:"a"},"BoneStructure"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/avatar/AvatarBoneMatching.ts#L558"},"packages/engine/src/avatar/AvatarBoneMatching.ts:558")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"findskinnedmeshes"},"findSkinnedMeshes"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"findSkinnedMeshes"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"model"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"SkinnedMesh"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">","[]"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"model")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Event"),">")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SkinnedMesh"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">","[]"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/avatar/AvatarBoneMatching.ts#L495"},"packages/engine/src/avatar/AvatarBoneMatching.ts:495")))}k.isMDXComponent=!0}}]);