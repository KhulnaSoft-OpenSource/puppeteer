/*! For license information please see 0cf0b262.eaf62973.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45434],{10896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=r(85893),a=r(11151);const s={sidebar_label:"Frame.evaluate"},i="Frame.evaluate() method",l={id:"api/puppeteer.frame.evaluate",title:"Frame.evaluate() method",description:"Behaves identically to Page.evaluate() except it's run within the context of this frame.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.frame.evaluate.md",sourceDirName:"api",slug:"/api/puppeteer.frame.evaluate",permalink:"/api/puppeteer.frame.evaluate",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"Frame.evaluate"},sidebar:"api",previous:{title:"Frame.content",permalink:"/api/puppeteer.frame.content"},next:{title:"Frame.evaluateHandle",permalink:"/api/puppeteer.frame.evaluatehandle"}},c={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"frameevaluate-method",children:"Frame.evaluate() method"}),"\n",(0,n.jsxs)(t.p,{children:["Behaves identically to ",(0,n.jsx)(t.a,{href:"/api/puppeteer.page.evaluate",children:"Page.evaluate()"})," except it's run within the context of this frame."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"pageFunction"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Func | string"})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"args"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Params"})}),(0,n.jsx)("td",{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<Awaited<ReturnType<Func>>>"})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,s={},o=null,p=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:o,ref:p,props:s,_owner:l.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(67294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);