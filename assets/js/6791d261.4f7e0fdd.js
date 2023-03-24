"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88449],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=u(t),f=o,b=y["".concat(i,".").concat(f)]||y[f]||l[f]||p;return t?n.createElement(b,a(a({ref:r},s),{},{components:t})):n.createElement(b,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=y;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<p;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},88033:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>s});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={sidebar_label:"ResourceType"},c="ResourceType type",i={unversionedId:"api/puppeteer.resourcetype",id:"api/puppeteer.resourcetype",title:"ResourceType type",description:"Resource types for HTTPRequests as perceived by the rendering engine.",source:"@site/../docs/api/puppeteer.resourcetype.md",sourceDirName:"api",slug:"/api/puppeteer.resourcetype",permalink:"/next/api/puppeteer.resourcetype",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ResourceType"},sidebar:"api",previous:{title:"RemoteAddress.port",permalink:"/next/api/puppeteer.remoteaddress.port"},next:{title:"ResponseForRequest",permalink:"/next/api/puppeteer.responseforrequest"}},u={},s=[{value:"Signature:",id:"signature",level:4}],l={toc:s};function y(e){var{components:r}=e,t=p(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"resourcetype-type"}),"ResourceType type"),(0,n.kt)("p",null,"Resource types for HTTPRequests as perceived by the rendering engine."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export type ResourceType = Lowercase<Protocol.Network.ResourceType>;\n")))}y.isMDXComponent=!0}}]);