"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[58088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,m=u["".concat(d,".").concat(c)]||u[c]||k[c]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"src_transports_SocketWebRTCClientNetwork.SocketWebRTCClientNetwork",title:"Class: SocketWebRTCClientNetwork",sidebar_label:"SocketWebRTCClientNetwork",custom_edit_url:null},l=void 0,o={unversionedId:"Api/client-core/classes/src_transports_SocketWebRTCClientNetwork.SocketWebRTCClientNetwork",id:"Api/client-core/classes/src_transports_SocketWebRTCClientNetwork.SocketWebRTCClientNetwork",title:"Class: SocketWebRTCClientNetwork",description:"src/transports/SocketWebRTCClientNetwork.SocketWebRTCClientNetwork",source:"@site/docs/Api/client-core/classes/src_transports_SocketWebRTCClientNetwork.SocketWebRTCClientNetwork.md",sourceDirName:"Api/client-core/classes",slug:"/Api/client-core/classes/src_transports_SocketWebRTCClientNetwork.SocketWebRTCClientNetwork",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_transports_SocketWebRTCClientNetwork.SocketWebRTCClientNetwork",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_transports_SocketWebRTCClientNetwork.SocketWebRTCClientNetwork",title:"Class: SocketWebRTCClientNetwork",sidebar_label:"SocketWebRTCClientNetwork",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MediaStreams",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_transports_MediaStreams.MediaStreams"},next:{title:"AuthAction",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_user_services_AuthService.AuthAction"}},d={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"consumers",id:"consumers",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"dataConsumers",id:"dataconsumers",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"dataProducer",id:"dataproducer",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"dataProducers",id:"dataproducers",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"heartbeat",id:"heartbeat",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"hostId",id:"hostid",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"incomingMessageQueueUnreliable",id:"incomingmessagequeueunreliable",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"incomingMessageQueueUnreliableIDs",id:"incomingmessagequeueunreliableids",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"mediasoupDevice",id:"mediasoupdevice",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"mediasoupOperationQueue",id:"mediasoupoperationqueue",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"peers",id:"peers",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"producers",id:"producers",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"reconnecting",id:"reconnecting",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"recvTransport",id:"recvtransport",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"request",id:"request",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:5},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"sendTransport",id:"sendtransport",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"socket",id:"socket",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"topic",id:"topic",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"userIdToUserIndex",id:"useridtouserindex",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"userIndexCount",id:"userindexcount",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"userIndexToUserId",id:"userindextouserid",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"Accessors",id:"accessors",level:2},{value:"isHosting",id:"ishosting",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-22",level:4},{value:"Methods",id:"methods",level:2},{value:"close",id:"close",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-23",level:4},{value:"initialize",id:"initialize",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-24",level:4},{value:"sendActions",id:"sendactions",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-25",level:4},{value:"sendData",id:"senddata",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-26",level:4},{value:"updatePeers",id:"updatepeers",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-27",level:4}],p={toc:s};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/client-core/modules/src_transports_SocketWebRTCClientNetwork"},"src/transports/SocketWebRTCClientNetwork"),".SocketWebRTCClientNetwork"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Network")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SocketWebRTCClientNetwork"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new SocketWebRTCClientNetwork"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"hostId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"topic"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hostId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"UserId"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"topic")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Topic"))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"Network.constructor"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L25"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:25")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"consumers"},"consumers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"consumers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Consumer"),"[]"),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,"Network.consumers"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L40"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dataconsumers"},"dataConsumers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dataConsumers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"List of data consumer nodes."),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"Network.dataConsumers"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L58"},"engine/src/networking/classes/Network.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dataproducer"},"dataProducer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dataProducer"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DataProducer")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L36"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dataproducers"},"dataProducers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dataProducers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"List of data producer nodes."),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"Network.dataProducers"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L55"},"engine/src/networking/classes/Network.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"heartbeat"},"heartbeat"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"heartbeat"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Timer")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L37"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hostid"},"hostId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"hostId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId")),(0,i.kt)("p",null,"The UserId of the host"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"will either be a user's UserId, or an instance server's InstanceId")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"Network.hostId"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L91"},"engine/src/networking/classes/Network.ts:91")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"incomingmessagequeueunreliable"},"incomingMessageQueueUnreliable"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"incomingMessageQueueUnreliable"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RingBuffer"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"Buffer holding all incoming Messages."),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,"Network.incomingMessageQueueUnreliable"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L64"},"engine/src/networking/classes/Network.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"incomingmessagequeueunreliableids"},"incomingMessageQueueUnreliableIDs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"incomingMessageQueueUnreliableIDs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RingBuffer"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"Buffer holding all incoming Messages."),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,"Network.incomingMessageQueueUnreliableIDs"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L61"},"engine/src/networking/classes/Network.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mediasoupdevice"},"mediasoupDevice"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mediasoupDevice"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Device")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L29"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mediasoupoperationqueue"},"mediasoupOperationQueue"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mediasoupOperationQueue"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RingBuffer"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"Buffer holding Mediasoup operations"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,"Network.mediasoupOperationQueue"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L67"},"engine/src/networking/classes/Network.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"peers"},"peers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"peers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"UserId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkPeer"),">"),(0,i.kt)("p",null,"Connected peers"),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,"Network.peers"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L70"},"engine/src/networking/classes/Network.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"producers"},"producers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"producers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Producer"),"[]"),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,"Network.producers"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L39"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reconnecting"},"reconnecting"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"reconnecting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L30"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"recvtransport"},"recvTransport"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"recvTransport"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Transport")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L31"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"request"},"request"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"request"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": {}) => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,"Network.request"),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L34"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sendtransport"},"sendTransport"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"sendTransport"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Transport")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L32"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"socket"},"socket"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"socket"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Socket"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),">"),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L33"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"topic"},"topic"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"topic"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Topic")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,"Network.topic"),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L100"},"engine/src/networking/classes/Network.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"useridtouserindex"},"userIdToUserIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userIdToUserIndex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"UserId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,i.kt)("p",null,"Map of user client IDs to numerical user index"),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,"Network.userIdToUserIndex"),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L79"},"engine/src/networking/classes/Network.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userindexcount"},"userIndexCount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userIndexCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("p",null,"The index to increment when a new user joins\nNOTE: Must only be updated by the host"),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,"Network.userIndexCount"),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L85"},"engine/src/networking/classes/Network.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userindextouserid"},"userIndexToUserId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userIndexToUserId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId"),">"),(0,i.kt)("p",null,"Map of numerical user index to user client IDs"),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,"Network.userIndexToUserId"),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L76"},"engine/src/networking/classes/Network.ts:76")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"ishosting"},"isHosting"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"isHosting"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Check if this user is hosting the world."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,"Network.isHosting"),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L96"},"engine/src/networking/classes/Network.ts:96")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"close"},"close"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"close"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-4"},"Overrides"),(0,i.kt)("p",null,"Network.close"),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L53"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initialize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.channelId?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.ipAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.locationId?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.port")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"overrides-5"},"Overrides"),(0,i.kt)("p",null,"Network.initialize"),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L65"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:65")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sendactions"},"sendActions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendActions"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-6"},"Overrides"),(0,i.kt)("p",null,"Network.sendActions"),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L42"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"senddata"},"sendData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ArrayBuffer"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-7"},"Overrides"),(0,i.kt)("p",null,"Network.sendData"),(0,i.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/client-core/src/transports/SocketWebRTCClientNetwork.ts#L48"},"client-core/src/transports/SocketWebRTCClientNetwork.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatepeers"},"updatePeers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updatePeers"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Publish to connected peers that peer information has changed"),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,i.kt)("p",null,"Network.updatePeers"),(0,i.kt)("h4",{id:"defined-in-27"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/474f8ad/packages/engine/src/networking/classes/Network.ts#L73"},"engine/src/networking/classes/Network.ts:73")))}k.isMDXComponent=!0}}]);