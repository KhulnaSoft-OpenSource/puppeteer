/*! For license information please see 33d9ac4f.1d9cb814.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68534],{67236:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(85893),a=t(11151);const s={sidebar_label:"Frame.$$"},o="Frame.$$() method",l={id:"api/puppeteer.frame.__",title:"Frame.$$() method",description:"Queries the frame for all elements matching the given selector.",source:"@site/../docs/api/puppeteer.frame.__.md",sourceDirName:"api",slug:"/api/puppeteer.frame.__",permalink:"/next/api/puppeteer.frame.__",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Frame.$$"},sidebar:"api",previous:{title:"Frame.$",permalink:"/next/api/puppeteer.frame._"},next:{title:"Frame.$$eval",permalink:"/next/api/puppeteer.frame.__eval"}},i={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"frame-method",children:"Frame.$$() method"}),"\n",(0,n.jsx)(r.p,{children:"Queries the frame for all elements matching the given selector."}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  $$<Selector extends string>(\n    selector: Selector\n  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"selector"}),(0,n.jsx)(r.td,{children:"Selector"}),(0,n.jsx)(r.td,{children:"The selector to query for."})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<Array<",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>>>"]}),"\n",(0,n.jsxs)(r.p,{children:["An array of ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.elementhandle",children:"element handles"})," that point to elements matching the given selector."]})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var n=t(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,s={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,n)&&!i.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:p,props:s,_owner:l.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>o});var n=t(67294);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);