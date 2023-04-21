"use strict";(self.webpackChunktech_doc=self.webpackChunktech_doc||[]).push([[81],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9896:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},i="TIS Environment information",l={unversionedId:"getting-started/tis-env",id:"getting-started/tis-env",title:"TIS Environment information",description:"|   \t                                                |TESTING  \t|PRODUCTION   \t|",source:"@site/docs/getting-started/tis-env.md",sourceDirName:"getting-started",slug:"/getting-started/tis-env",permalink:"/tech-doc/docs/getting-started/tis-env",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/tis-env.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Tire Manufacturer Guideline",permalink:"/tech-doc/docs/getting-started/tm-guide"}},c={},u=[],p={toc:u},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tis-environment-information"},"TIS Environment information"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"TESTING"),(0,a.kt)("th",{parentName:"tr",align:null},"PRODUCTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Domain Name"),(0,a.kt)("td",{parentName:"tr",align:null},"testing.gdso.org"),(0,a.kt)("td",{parentName:"tr",align:null},"gdso.org")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cognito servers authorize URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://fuqzxw2k75c49t2fdn.auth.eu-central-1.amazoncognito.com/oauth2/authorize"},"https://fuqzxw2k75c49t2fdn.auth.eu-central-1.amazoncognito.com/oauth2/authorize")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://fuqzxw2k75c49t2fds.auth.eu-central-1.amazoncognito.com/oauth2/authorize"},"https://fuqzxw2k75c49t2fds.auth.eu-central-1.amazoncognito.com/oauth2/authorize"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OpenID Connect Well-Known URLs"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_yIbrF9hG3/.well-known/openid-configuration"},"https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_yIbrF9hG3/.well-known/openid-configuration")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_X79w26IDV/.well-known/openid-configuration"},"https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_X79w26IDV/.well-known/openid-configuration"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cognito public Client Id"),(0,a.kt)("td",{parentName:"tr",align:null},"3661gkmsqil29qtb24rvq3o4tb"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint for Obtaining ID Token with User Credentials"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://authentication-api.testing.gdso.org/getIdToken"},"https://authentication-api.testing.gdso.org/getIdToken")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://authentication-api.gdso.org/getIdToken"},"https://authentication-api.gdso.org/getIdToken"))))))}d.isMDXComponent=!0}}]);