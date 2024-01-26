/*! For license information please see f1ccfb77.4f3b1670.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80014],{51612:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=s(85893),n=s(11151);const a={sidebar_label:"Page.setBypassCSP"},i="Page.setBypassCSP() method",o={id:"api/puppeteer.page.setbypasscsp",title:"Page.setBypassCSP() method",description:"Toggles bypassing page's Content-Security-Policy.",source:"@site/versioned_docs/version-21.9.0/api/puppeteer.page.setbypasscsp.md",sourceDirName:"api",slug:"/api/puppeteer.page.setbypasscsp",permalink:"/api/puppeteer.page.setbypasscsp",draft:!1,unlisted:!1,tags:[],version:"21.9.0",frontMatter:{sidebar_label:"Page.setBypassCSP"},sidebar:"api",previous:{title:"Page.select",permalink:"/api/puppeteer.page.select"},next:{title:"Page.setBypassServiceWorker",permalink:"/api/puppeteer.page.setbypassserviceworker"}},p={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pagesetbypasscsp-method",children:"Page.setBypassCSP() method"}),"\n",(0,r.jsx)(t.p,{children:"Toggles bypassing page's Content-Security-Policy."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setBypassCSP(enabled: boolean): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"enabled"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"sets bypassing of page's Content-Security-Policy."})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["NOTE: CSP bypassing happens at the moment of CSP initialization rather than evaluation. Usually, this means that ",(0,r.jsx)(t.code,{children:"page.setBypassCSP"})," should be called before navigating to the domain."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,s)=>{var r=s(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var r,a={},l=null,c=null;for(r in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!p.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:n,type:e,key:l,ref:c,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},85893:(e,t,s)=>{e.exports=s(75251)},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var r=s(67294);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);