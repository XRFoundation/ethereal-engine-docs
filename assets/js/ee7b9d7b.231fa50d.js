"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[38927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(n),u=r,g=f["".concat(o,".").concat(u)]||f[u]||d[u]||l;return n?i.createElement(g,a(a({ref:t},s),{},{components:n})):i.createElement(g,a({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<l;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const l={id:"src_interfaces_ClientSetting.ClientSetting",title:"Interface: ClientSetting",sidebar_label:"ClientSetting",custom_edit_url:null},a=void 0,p={unversionedId:"Api/common/interfaces/src_interfaces_ClientSetting.ClientSetting",id:"Api/common/interfaces/src_interfaces_ClientSetting.ClientSetting",title:"Interface: ClientSetting",description:"src/interfaces/ClientSetting.ClientSetting",source:"@site/docs/Api/common/interfaces/src_interfaces_ClientSetting.ClientSetting.md",sourceDirName:"Api/common/interfaces",slug:"/Api/common/interfaces/src_interfaces_ClientSetting.ClientSetting",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_ClientSetting.ClientSetting",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_interfaces_ClientSetting.ClientSetting",title:"Interface: ClientSetting",sidebar_label:"ClientSetting",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AuthUser",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_AuthUser.AuthUser"},next:{title:"PatchClientSetting",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_ClientSetting.PatchClientSetting"}},o={},c=[{value:"Properties",id:"properties",level:2},{value:"appBackground",id:"appbackground",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"appDescription",id:"appdescription",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"appSocialLinks",id:"appsociallinks",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"appSubtitle",id:"appsubtitle",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"appTitle",id:"apptitle",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"favicon16px",id:"favicon16px",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"favicon32px",id:"favicon32px",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"icon192px",id:"icon192px",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"icon512px",id:"icon512px",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"logo",id:"logo",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"releaseName",id:"releasename",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"siteDescription",id:"sitedescription",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"themeModes",id:"thememodes",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"themeSettings",id:"themesettings",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"title",id:"title",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"url",id:"url",level:3},{value:"Defined in",id:"defined-in-16",level:4}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_ClientSetting"},"src/interfaces/ClientSetting"),".ClientSetting"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"appbackground"},"appBackground"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"appBackground"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L12"},"src/interfaces/ClientSetting.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"appdescription"},"appDescription"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"appDescription"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L15"},"src/interfaces/ClientSetting.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"appsociallinks"},"appSocialLinks"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"appSocialLinks"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"SocialLink"),"[]"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L16"},"src/interfaces/ClientSetting.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"appsubtitle"},"appSubtitle"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"appSubtitle"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L14"},"src/interfaces/ClientSetting.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"apptitle"},"appTitle"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"appTitle"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L13"},"src/interfaces/ClientSetting.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"favicon16px"},"favicon16px"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"favicon16px"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L9"},"src/interfaces/ClientSetting.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"favicon32px"},"favicon32px"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"favicon32px"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L8"},"src/interfaces/ClientSetting.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"icon192px"},"icon192px"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"icon192px"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L10"},"src/interfaces/ClientSetting.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"icon512px"},"icon512px"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"icon512px"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L11"},"src/interfaces/ClientSetting.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L2"},"src/interfaces/ClientSetting.ts:2")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"logo"},"logo"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"logo"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L3"},"src/interfaces/ClientSetting.ts:3")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"releasename"},"releaseName"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"releaseName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L6"},"src/interfaces/ClientSetting.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sitedescription"},"siteDescription"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"siteDescription"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L7"},"src/interfaces/ClientSetting.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thememodes"},"themeModes"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"themeModes"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_ClientSetting.ThemeMode"},(0,r.kt)("inlineCode",{parentName:"a"},"ThemeMode"))),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L18"},"src/interfaces/ClientSetting.ts:18")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"themesettings"},"themeSettings"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"themeSettings"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_ClientSetting.ThemeSetting"},(0,r.kt)("inlineCode",{parentName:"a"},"ThemeSetting"))),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L17"},"src/interfaces/ClientSetting.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"title"},"title"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"title"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L4"},"src/interfaces/ClientSetting.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"url"},"url"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/48ec111/packages/common/src/interfaces/ClientSetting.ts#L5"},"src/interfaces/ClientSetting.ts:5")))}d.isMDXComponent=!0}}]);