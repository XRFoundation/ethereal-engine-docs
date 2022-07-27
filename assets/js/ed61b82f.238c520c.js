"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[31981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"interaction_functions_interactUI",title:"Module: interaction/functions/interactUI",sidebar_label:"interaction/functions/interactUI",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/interaction_functions_interactUI",id:"Api/engine/modules/interaction_functions_interactUI",title:"Module: interaction/functions/interactUI",description:"Functions",source:"@site/docs/Api/engine/modules/interaction_functions_interactUI.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/interaction_functions_interactUI",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_functions_interactUI",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"interaction_functions_interactUI",title:"Module: interaction/functions/interactUI",sidebar_label:"interaction/functions/interactUI",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"interaction/functions/interactBoxRaycast",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_functions_interactBoxRaycast"},next:{title:"interaction/functions/mediaControlsUI",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_functions_mediaControlsUI"}},d={},c=[{value:"Functions",id:"functions",level:2},{value:"createInteractUI",id:"createinteractui",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"updateInteractUI",id:"updateinteractui",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createinteractui"},"createInteractUI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createInteractUI"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"interactMessage"),"): ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,i.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/interaction_ui_InteractiveModalView.InteractiveModalState"},(0,i.kt)("inlineCode",{parentName:"a"},"InteractiveModalState")),", {}",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"interactMessage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", {}",">","  }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"interactMessage")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,i.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/interaction_ui_InteractiveModalView.InteractiveModalState"},(0,i.kt)("inlineCode",{parentName:"a"},"InteractiveModalState")),", {}",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"interactMessage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", {}",">","  }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/90d0a3a/packages/engine/src/interaction/functions/interactUI.ts#L11"},"packages/engine/src/interaction/functions/interactUI.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updateinteractui"},"updateInteractUI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateInteractUI"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"xrui"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"xrui")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,i.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"StateMethods"),"<",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/interaction_ui_InteractiveModalView.InteractiveModalState"},(0,i.kt)("inlineCode",{parentName:"a"},"InteractiveModalState")),", {}",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"interactMessage"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", {}",">","  }, keyof ",(0,i.kt)("inlineCode",{parentName:"td"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"S"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"E"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"StateMethodsDestroy"),">")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/90d0a3a/packages/engine/src/interaction/functions/interactUI.ts#L30"},"packages/engine/src/interaction/functions/interactUI.ts:30")))}s.isMDXComponent=!0}}]);