/*! For license information please see 07cd6d9c.952462dc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34344],{9146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=r(85893),s=r(11151);const a={sidebar_label:"HTTPRequest.failure"},i="HTTPRequest.failure() method",l={id:"api/puppeteer.httprequest.failure",title:"HTTPRequest.failure() method",description:"Access information about the request's failure.",source:"@site/../docs/api/puppeteer.httprequest.failure.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.failure",permalink:"/next/api/puppeteer.httprequest.failure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPRequest.failure"},sidebar:"api",previous:{title:"HTTPRequest.enqueueInterceptAction",permalink:"/next/api/puppeteer.httprequest.enqueueinterceptaction"},next:{title:"HTTPRequest.fetchPostData",permalink:"/next/api/puppeteer.httprequest.fetchpostdata"}},u={},o=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"httprequestfailure-method",children:"HTTPRequest.failure() method"}),"\n",(0,n.jsx)(t.p,{children:"Access information about the request's failure."}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class HTTPRequest {\n  abstract failure(): {\n    errorText: string;\n  } | null;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"{ errorText: string; } | null"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"null"})," unless the request failed. If the request fails this can return an object with ",(0,n.jsx)(t.code,{children:"errorText"})," containing a human-readable error message, e.g. ",(0,n.jsx)(t.code,{children:"net::ERR_FAILED"}),". It is not guaranteed that there will be failure text if the request fails."]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"Example of logging all failed requests:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,a={},o=null,c=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:o,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(67294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);