/*! For license information please see 4ffb3b59.3e52fc60.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45715],{76650:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var n=s(85893),i=s(11151);const t={sidebar_label:"InstallOptions"},l="InstallOptions interface",d={id:"browsers-api/browsers.installoptions",title:"InstallOptions interface",description:"Signature:",source:"@site/versioned_docs/version-22.10.0/browsers-api/browsers.installoptions.md",sourceDirName:"browsers-api",slug:"/browsers-api/browsers.installoptions",permalink:"/browsers-api/browsers.installoptions",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"InstallOptions"},sidebar:"browsersApi",previous:{title:"InstalledBrowser.writeMetadata",permalink:"/browsers-api/browsers.installedbrowser.writemetadata"},next:{title:"LaunchOptions",permalink:"/browsers-api/browsers.launchoptions"}},o={},c=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"installoptions-interface",children:"InstallOptions interface"}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface InstallOptions\n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Default"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"baseurl",children:"baseUrl"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Determines the host that will be used for downloading."})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Either"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://storage.googleapis.com/chrome-for-testing-public",children:"https://storage.googleapis.com/chrome-for-testing-public"})," or - ",(0,n.jsx)(r.a,{href:"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central",children:"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central"})]}),"\n"]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"browser",children:"browser"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.browser",children:"Browser"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Determines which browser to install."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"buildid",children:"buildId"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Determines which buildId to download. BuildId should uniquely identify binaries and they are used for caching."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"buildidalias",children:"buildIdAlias"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["An alias for the provided ",(0,n.jsx)(r.code,{children:"buildId"}),". It will be used to maintain local metadata to support aliases in the ",(0,n.jsx)(r.code,{children:"launch"})," command."]})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"cachedir",children:"cacheDir"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Determines the path to download browsers to."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"downloadprogresscallback",children:"downloadProgressCallback"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"(downloadedBytes: number, totalBytes: number) => void"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Provides information about the progress of the download."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"platform",children:"platform"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.browserplatform",children:"BrowserPlatform"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Determines which platform the browser will be suited for."})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Auto-detected."})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"unpack",children:"unpack"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether to unpack and install browser archives."})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"true"})})})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},75251:(e,r,s)=>{var n=s(67294),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var n,t={},c=null,a=null;for(n in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,n)&&!o.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:i,type:e,key:c,ref:a,props:t,_owner:d.current}}r.Fragment=t,r.jsx=c,r.jsxs=c},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>d,a:()=>l});var n=s(67294);const i={},t=n.createContext(i);function l(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);