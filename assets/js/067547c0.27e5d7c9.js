/*! For license information please see 067547c0.27e5d7c9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85650],{55598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(85893),s=t(11151);const o={sidebar_label:"ElementHandle.screenshot"},a="ElementHandle.screenshot() method",l={id:"api/puppeteer.elementhandle.screenshot",title:"ElementHandle.screenshot() method",description:"This method scrolls element into view if needed, and then uses Page.screenshot() to take a screenshot of the element. If the element is detached from DOM, the method throws an error.",source:"@site/../docs/api/puppeteer.elementhandle.screenshot.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.screenshot",permalink:"/next/api/puppeteer.elementhandle.screenshot",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ElementHandle.screenshot"},sidebar:"api",previous:{title:"ElementHandle.press",permalink:"/next/api/puppeteer.elementhandle.press"},next:{title:"ElementHandle.screenshot_1",permalink:"/next/api/puppeteer.elementhandle.screenshot_1"}},i={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"elementhandlescreenshot-method",children:"ElementHandle.screenshot() method"}),"\n",(0,r.jsxs)(n.p,{children:["This method scrolls element into view if needed, and then uses ",(0,r.jsx)(n.a,{href:"/next/api/puppeteer.page.screenshot_1",children:"Page.screenshot()"})," to take a screenshot of the element. If the element is detached from DOM, the method throws an error."]}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  screenshot(\n    options: Readonly<ScreenshotOptions> & {\n      encoding: 'base64';\n    }\n  ): Promise<string>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Readonly<",(0,r.jsx)(n.a,{href:"/next/api/puppeteer.screenshotoptions",children:"ScreenshotOptions"}),"> & { encoding: 'base64'; }"]})}),(0,r.jsx)("td",{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<string>"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var r=t(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!i.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:l.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(67294);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);