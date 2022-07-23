"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[3585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>N});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),N=i,g=k["".concat(l,".").concat(N)]||k[N]||m[N]||r;return n?a.createElement(g,d(d({ref:t},s),{},{components:n})):a.createElement(g,d({ref:t},s))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,d[1]=o;for(var p=2;p<r;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"networking_constants_VideoConstants",title:"Module: networking/constants/VideoConstants",sidebar_label:"networking/constants/VideoConstants",sidebar_position:0,custom_edit_url:null},d=void 0,o={unversionedId:"Api/engine/modules/networking_constants_VideoConstants",id:"Api/engine/modules/networking_constants_VideoConstants",title:"Module: networking/constants/VideoConstants",description:"Variables",source:"@site/docs/Api/engine/modules/networking_constants_VideoConstants.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/networking_constants_VideoConstants",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_constants_VideoConstants",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_constants_VideoConstants",title:"Module: networking/constants/VideoConstants",sidebar_label:"networking/constants/VideoConstants",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"networking/constants/STUNServers",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_constants_STUNServers"},next:{title:"networking/enums/Commands",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_enums_Commands"}},l={},p=[{value:"Variables",id:"variables",level:2},{value:"CAM_VIDEO_SIMULCAST_ENCODINGS",id:"cam_video_simulcast_encodings",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"VIDEO_CONSTRAINTS",id:"video_constraints",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"localAudioConstraints",id:"localaudioconstraints",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"localVideoConstraints",id:"localvideoconstraints",level:3},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"cam_video_simulcast_encodings"},"CAM","_","VIDEO","_","SIMULCAST","_","ENCODINGS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CAM","_","VIDEO","_","SIMULCAST","_","ENCODINGS"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBitrate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 36000; ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleResolutionDownBy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 4 }[]"),(0,i.kt)("p",null,"Encodings for outgoing video.\\\nJust two resolutions, for now, as chrome 75 seems to ignore more\nthan two encodings."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/networking/constants/VideoConstants.ts#L31"},"packages/engine/src/networking/constants/VideoConstants.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"video_constraints"},"VIDEO","_","CONSTRAINTS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"VIDEO","_","CONSTRAINTS"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"VIDEO_CONSTRAINTS is video quality levels."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fhd")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"height"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1080 } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"width"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1920 }  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fhd.height")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1080 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fhd.height.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fhd.width")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1920 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fhd.width.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"height"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 720 } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"width"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1280 }  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd.height")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 720 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd.height.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd.width")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1280 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd.width.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"height"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 240 } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"width"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 320 }  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga.height")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 240 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga.height.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga.width")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 320 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga.width.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"height"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 480 } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"width"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 640 }  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga.height")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 480 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga.height.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga.width")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ideal"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 640 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga.width.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/networking/constants/VideoConstants.ts#L2"},"packages/engine/src/networking/constants/VideoConstants.ts:2")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"localaudioconstraints"},"localAudioConstraints"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"localAudioConstraints"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MediaStreamConstraints")),(0,i.kt)("p",null,"localMediaConstraints is passed to the getUserMedia object to request a lower video quality than the maximum."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/networking/constants/VideoConstants.ts#L10"},"packages/engine/src/networking/constants/VideoConstants.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"localvideoconstraints"},"localVideoConstraints"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"localVideoConstraints"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MediaStreamConstraints")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/262290f/packages/engine/src/networking/constants/VideoConstants.ts#L18"},"packages/engine/src/networking/constants/VideoConstants.ts:18")))}m.isMDXComponent=!0}}]);