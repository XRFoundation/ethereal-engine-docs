"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[11488],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),f=d(t),k=i,u=f["".concat(c,".").concat(k)]||f[k]||p[k]||r;return t?a.createElement(u,s(s({ref:n},o),{},{components:t})):a.createElement(u,s({ref:n},o))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var d=2;d<r;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const r={id:"scene_classes_OffScreenIndicator.OffScreenIndicator",title:"Class: OffScreenIndicator",sidebar_label:"OffScreenIndicator",custom_edit_url:null},s=void 0,l={unversionedId:"Api/engine/classes/scene_classes_OffScreenIndicator.OffScreenIndicator",id:"Api/engine/classes/scene_classes_OffScreenIndicator.OffScreenIndicator",title:"Class: OffScreenIndicator",description:"scene/classes/OffScreenIndicator.OffScreenIndicator",source:"@site/docs/Api/engine/classes/scene_classes_OffScreenIndicator.OffScreenIndicator.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/scene_classes_OffScreenIndicator.OffScreenIndicator",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_OffScreenIndicator.OffScreenIndicator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scene_classes_OffScreenIndicator.OffScreenIndicator",title:"Class: OffScreenIndicator",sidebar_label:"OffScreenIndicator",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Ocean",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_Ocean.Ocean"},next:{title:"PortalEffect",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_PortalEffect.PortalEffect"}},c={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_halfBorderSize",id:"_halfbordersize",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_halfVPSize",id:"_halfvpsize",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_mat4",id:"_mat4",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_position",id:"_position",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"_vec3",id:"_vec3",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"_vpSize",id:"_vpsize",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"borderScale",id:"borderscale",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"camera",id:"camera",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"inside",id:"inside",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"margin",id:"margin",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"rotation",id:"rotation",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"Accessors",id:"accessors",level:2},{value:"position",id:"position",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"Methods",id:"methods",level:2},{value:"_isInside",id:"_isinside",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"getWorldPos",id:"getworldpos",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"setViewportSize",id:"setviewportsize",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"update",id:"update",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-17",level:4}],o={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_OffScreenIndicator"},"scene/classes/OffScreenIndicator"),".OffScreenIndicator"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new OffScreenIndicator"),"()"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L17"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:17")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_halfbordersize"},"_","halfBorderSize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","halfBorderSize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L14"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_halfvpsize"},"_","halfVPSize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","halfVPSize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L13"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_mat4"},"_","mat4"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","mat4"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Matrix4")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L15"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_position"},"_","position"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","position"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector4")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L11"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_vec3"},"_","vec3"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","vec3"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L10"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_vpsize"},"_","vpSize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","vpSize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L12"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"borderscale"},"borderScale"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"borderScale"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L9"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"camera"},"camera"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"camera"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L5"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inside"},"inside"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"inside"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L6"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"margin"},"margin"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"margin"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L7"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rotation"},"rotation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"rotation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L8"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"target"},"target"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L4"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:4")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"position"},"position"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"position"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L89"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:89")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"_isinside"},"_","isInside"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_isInside"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"pos"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pos")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L27"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getworldpos"},"getWorldPos"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getWorldPos"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"z"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"z")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L95"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:95")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setviewportsize"},"setViewportSize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setViewportSize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L103"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:103")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"update"},"update"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"update"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6891142/packages/engine/src/scene/classes/OffScreenIndicator.ts#L31"},"packages/engine/src/scene/classes/OffScreenIndicator.ts:31")))}p.isMDXComponent=!0}}]);