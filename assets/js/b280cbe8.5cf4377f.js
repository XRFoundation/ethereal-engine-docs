"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[20870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,N=m["".concat(o,".").concat(k)]||m[k]||p[k]||r;return n?i.createElement(N,l(l({ref:t},c),{},{components:n})):i.createElement(N,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={id:"src_admin_services_Setting_AnalyticsSettingsService.AdminAnalyticsSettingActions",title:"Class: AdminAnalyticsSettingActions",sidebar_label:"AdminAnalyticsSettingActions",custom_edit_url:null},l=void 0,d={unversionedId:"Api/client-core/classes/src_admin_services_Setting_AnalyticsSettingsService.AdminAnalyticsSettingActions",id:"Api/client-core/classes/src_admin_services_Setting_AnalyticsSettingsService.AdminAnalyticsSettingActions",title:"Class: AdminAnalyticsSettingActions",description:"src/admin/services/Setting/AnalyticsSettingsService.AdminAnalyticsSettingActions",source:"@site/docs/Api/client-core/classes/src_admin_services_Setting_AnalyticsSettingsService.AdminAnalyticsSettingActions.md",sourceDirName:"Api/client-core/classes",slug:"/Api/client-core/classes/src_admin_services_Setting_AnalyticsSettingsService.AdminAnalyticsSettingActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_Setting_AnalyticsSettingsService.AdminAnalyticsSettingActions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_admin_services_Setting_AnalyticsSettingsService.AdminAnalyticsSettingActions",title:"Class: AdminAnalyticsSettingActions",sidebar_label:"AdminAnalyticsSettingActions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AdminRedisSettingActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_Setting_AdminRedisSettingService.AdminRedisSettingActions"},next:{title:"AuthSettingsActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_Setting_AuthSettingService.AuthSettingsActions"}},o={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"fetchedAnalytics",id:"fetchedanalytics",level:3},{value:"Call signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/client-core/modules/src_admin_services_Setting_AnalyticsSettingsService"},"src/admin/services/Setting/AnalyticsSettingsService"),".AdminAnalyticsSettingActions"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new AdminAnalyticsSettingActions"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"fetchedanalytics"},"fetchedAnalytics"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"fetchedAnalytics"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"call-signature"},"Call signature"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"partialAction"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"analyticsSettings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"SettingAnalytics"),">",">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"SETTING_ANALYIS_DISPLAY"'),"  }",">",">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,a.kt)("inlineCode",{parentName:"td"},"analyticsSettings"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"SettingAnalytics"),">",">"," ; ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"SETTING_ANALYIS_DISPLAY"'),"  }",">")))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"analyticsSettings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"SettingAnalytics"),">",">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"SETTING_ANALYIS_DISPLAY"'),"  }",">",">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,a.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,a.kt)("inlineCode",{parentName:"td"},"analyticsSettings"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"SettingAnalytics"),">",">"," ; ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"SETTING_ANALYIS_DISPLAY"'),"  }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"actionShape.analyticsSettings")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"SettingAnalytics"),">",">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"SETTING_ANALYIS_DISPLAY"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"matches")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,a.kt)("inlineCode",{parentName:"td"},"analyticsSettings"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"SettingAnalytics"),">",">"," ; ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"SETTING_ANALYIS_DISPLAY"'),"  }",">",">"," & ",(0,a.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,a.kt)("inlineCode",{parentName:"td"},"analyticsSettings"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Paginated"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"SettingAnalytics"),">",">"," ; ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"SETTING_ANALYIS_DISPLAY"'),"  }",">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"SETTING_ANALYIS_DISPLAY"'))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8404362/packages/client-core/src/admin/services/Setting/AnalyticsSettingsService.ts#L44"},"client-core/src/admin/services/Setting/AnalyticsSettingsService.ts:44")))}p.isMDXComponent=!0}}]);