"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[88198],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=d(t),m=r,u=f["".concat(l,".").concat(m)]||f[m]||c[m]||a;return t?i.createElement(u,s(s({ref:n},p),{},{components:t})):i.createElement(u,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},89845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const a={id:"src_interfaces_User.UserInterface",title:"Interface: UserInterface",sidebar_label:"UserInterface",custom_edit_url:null},s=void 0,o={unversionedId:"Api/common/interfaces/src_interfaces_User.UserInterface",id:"Api/common/interfaces/src_interfaces_User.UserInterface",title:"Interface: UserInterface",description:"src/interfaces/User.UserInterface",source:"@site/docs/Api/common/interfaces/src_interfaces_User.UserInterface.md",sourceDirName:"Api/common/interfaces",slug:"/Api/common/interfaces/src_interfaces_User.UserInterface",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserInterface",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_interfaces_User.UserInterface",title:"Interface: UserInterface",sidebar_label:"UserInterface",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"CreateEditUser",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.CreateEditUser"},next:{title:"UserScope",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserScope"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"apiKey",id:"apikey",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"avatarId",id:"avatarid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"avatarUrl",id:"avatarurl",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"channelInstanceId",id:"channelinstanceid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"identityProviders",id:"identityproviders",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"identity_providers",id:"identity_providers",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"instanceId",id:"instanceid",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"inverseRelationType",id:"inverserelationtype",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"inviteCode",id:"invitecode",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"locationAdmins",id:"locationadmins",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"locationBans",id:"locationbans",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"party",id:"party",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"partyId",id:"partyid",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"relationType",id:"relationtype",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"scopes",id:"scopes",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"userRole",id:"userrole",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"user_setting",id:"user_setting",level:3},{value:"Defined in",id:"defined-in-18",level:4}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_User"},"src/interfaces/User"),".UserInterface"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"apikey"},"apiKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"apiKey"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_UserApiKey.UserApiKey"},(0,r.kt)("inlineCode",{parentName:"a"},"UserApiKey"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L43"},"src/interfaces/User.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avatarid"},"avatarId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"avatarId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L28"},"src/interfaces/User.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avatarurl"},"avatarUrl"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"avatarUrl"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L34"},"src/interfaces/User.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"channelinstanceid"},"channelInstanceId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"channelInstanceId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L36"},"src/interfaces/User.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_UserId#userid"},(0,r.kt)("inlineCode",{parentName:"a"},"UserId"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L25"},"src/interfaces/User.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"identityproviders"},"identityProviders"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"identityProviders"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_IdentityProvider.IdentityProvider"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentityProvider")),"[]"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L30"},"src/interfaces/User.ts:30")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"identity_providers"},"identity","_","providers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"identity","_","providers"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_IdentityProvider.IdentityProvider"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentityProvider")),"[]"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L29"},"src/interfaces/User.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instanceid"},"instanceId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"instanceId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L35"},"src/interfaces/User.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inverserelationtype"},"inverseRelationType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"inverseRelationType"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_UserRelationship#relationshiptype"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationshipType"))),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L33"},"src/interfaces/User.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"invitecode"},"inviteCode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"inviteCode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L40"},"src/interfaces/User.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"locationadmins"},"locationAdmins"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"locationAdmins"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_LocationAdmin.LocationAdmin"},(0,r.kt)("inlineCode",{parentName:"a"},"LocationAdmin")),"[]"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L31"},"src/interfaces/User.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"locationbans"},"locationBans"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"locationBans"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_LocationBan.LocationBan"},(0,r.kt)("inlineCode",{parentName:"a"},"LocationBan")),"[]"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L38"},"src/interfaces/User.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L26"},"src/interfaces/User.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"party"},"party"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"party"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_Party#party"},(0,r.kt)("inlineCode",{parentName:"a"},"Party"))),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L41"},"src/interfaces/User.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"partyid"},"partyId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"partyId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L37"},"src/interfaces/User.ts:37")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"relationtype"},"relationType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"relationType"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_UserRelationship#relationshiptype"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationshipType"))),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L32"},"src/interfaces/User.ts:32")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scopes"},"scopes"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"scopes"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserScope"},(0,r.kt)("inlineCode",{parentName:"a"},"UserScope")),"[]"),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L42"},"src/interfaces/User.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"userrole"},"userRole"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"userRole"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L27"},"src/interfaces/User.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"user_setting"},"user","_","setting"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"user","_","setting"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserSetting"},(0,r.kt)("inlineCode",{parentName:"a"},"UserSetting"))),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68121de/packages/common/src/interfaces/User.ts#L39"},"src/interfaces/User.ts:39")))}c.isMDXComponent=!0}}]);