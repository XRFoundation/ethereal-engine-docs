"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[32699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"user_user_user_access_control",title:"Module: user/user/user.access-control",sidebar_label:"user/user/user.access-control",custom_edit_url:null},l=void 0,d={unversionedId:"Api/server-core/modules/user_user_user_access_control",id:"Api/server-core/modules/user_user_user_access_control",title:"Module: user/user/user.access-control",description:"Variables",source:"@site/docs/Api/server-core/modules/user_user_user_access_control.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/user_user_user_access_control",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/user_user_user_access_control",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user_user_user_access_control",title:"Module: user/user/user.access-control",sidebar_label:"user/user/user.access-control",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"user/user-settings/user-settings.service",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/user_user_settings_user_settings_service"},next:{title:"user/user/user.class",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/user_user_user_class"}},o={},p=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"object"))," which declare permission of user based\non their role"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"admin")),(0,a.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,a.kt)("inlineCode",{parentName:"td"},"createScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'all'; ",(0,a.kt)("inlineCode",{parentName:"td"},"deleteScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'all'; ",(0,a.kt)("inlineCode",{parentName:"td"},"listScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'all'; ",(0,a.kt)("inlineCode",{parentName:"td"},"readScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'all'; ",(0,a.kt)("inlineCode",{parentName:"td"},"updateScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'all' }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"admin.createScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"admin.deleteScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"admin.listScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"admin.readScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"admin.updateScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"guest")),(0,a.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,a.kt)("inlineCode",{parentName:"td"},"createScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'none'; ",(0,a.kt)("inlineCode",{parentName:"td"},"deleteScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'none'; ",(0,a.kt)("inlineCode",{parentName:"td"},"listScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'all'; ",(0,a.kt)("inlineCode",{parentName:"td"},"readScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'all'; ",(0,a.kt)("inlineCode",{parentName:"td"},"updateScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'none' }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"guest.createScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"guest.deleteScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"guest.listScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"guest.readScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"guest.updateScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"user")),(0,a.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,a.kt)("inlineCode",{parentName:"td"},"createScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'none'; ",(0,a.kt)("inlineCode",{parentName:"td"},"deleteScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'none'; ",(0,a.kt)("inlineCode",{parentName:"td"},"listScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'all'; ",(0,a.kt)("inlineCode",{parentName:"td"},"readScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'all'; ",(0,a.kt)("inlineCode",{parentName:"td"},"updateScope"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'none' }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"user.createScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"user.deleteScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"user.listScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"user.readScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"user.updateScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/server-core/src/user/user/user.access-control.ts#L6"},"packages/server-core/src/user/user/user.access-control.ts:6")))}c.isMDXComponent=!0}}]);