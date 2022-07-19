"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[8851],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return t?i.createElement(f,o(o({ref:n},s),{},{components:t})):i.createElement(f,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const r={id:"interaction_functions_mediaControlsUI",title:"Module: interaction/functions/mediaControlsUI",sidebar_label:"interaction/functions/mediaControlsUI",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/interaction_functions_mediaControlsUI",id:"Api/engine/modules/interaction_functions_mediaControlsUI",title:"Module: interaction/functions/mediaControlsUI",description:"Functions",source:"@site/docs/Api/engine/modules/interaction_functions_mediaControlsUI.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/interaction_functions_mediaControlsUI",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_functions_mediaControlsUI",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"interaction_functions_mediaControlsUI",title:"Module: interaction/functions/mediaControlsUI",sidebar_label:"interaction/functions/mediaControlsUI",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"interaction/functions/interactUI",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_functions_interactUI"},next:{title:"interaction/systems/EquippableSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_systems_EquippableSystem"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"createMediaControlsUI",id:"createmediacontrolsui",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"createmediacontrolsui"},"createMediaControlsUI"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createMediaControlsUI"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,a.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,a.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = data.playing }",">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = false; ",(0,a.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = data.playing }, keyof ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,a.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,a.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = data.playing }",">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = false; ",(0,a.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = data.playing }, keyof ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0156b51/packages/engine/src/interaction/functions/mediaControlsUI.ts#L12"},"packages/engine/src/interaction/functions/mediaControlsUI.ts:12")))}c.isMDXComponent=!0}}]);