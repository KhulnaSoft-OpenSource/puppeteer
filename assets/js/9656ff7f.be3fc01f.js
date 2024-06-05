/*! For license information please see 9656ff7f.be3fc01f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20940],{97237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(85893),a=r(11151);const i={sidebar_label:"Page.authenticate"},s="Page.authenticate() method",c={id:"api/puppeteer.page.authenticate",title:"Page.authenticate() method",description:"Provide credentials for HTTP authentication.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.page.authenticate.md",sourceDirName:"api",slug:"/api/puppeteer.page.authenticate",permalink:"/api/puppeteer.page.authenticate",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"Page.authenticate"},sidebar:"api",previous:{title:"Page.addStyleTag_1",permalink:"/api/puppeteer.page.addstyletag_1"},next:{title:"Page.bringToFront",permalink:"/api/puppeteer.page.bringtofront"}},o={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pageauthenticate-method",children:"Page.authenticate() method"}),"\n",(0,n.jsxs)(t.p,{children:["Provide credentials for ",(0,n.jsx)(t.code,{children:"HTTP authentication"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract authenticate(credentials: Credentials | null): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"credentials"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/puppeteer.credentials",children:"Credentials"})," | null"]})}),(0,n.jsx)("td",{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["To disable authentication, pass ",(0,n.jsx)(t.code,{children:"null"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!o.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:d,props:i,_owner:c.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var n=r(67294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);