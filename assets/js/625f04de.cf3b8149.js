/*! For license information please see 625f04de.cf3b8149.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23922],{89757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(85893),l=n(11151);const a={sidebar_label:"ElementHandle.$eval"},s="ElementHandle.$eval() method",i={id:"api/puppeteer.elementhandle._eval",title:"ElementHandle.$eval() method",description:"Runs the given function on the first element matching the given selector in the current element.",source:"@site/versioned_docs/version-21.9.0/api/puppeteer.elementhandle._eval.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle._eval",permalink:"/api/puppeteer.elementhandle._eval",draft:!1,unlisted:!1,tags:[],version:"21.9.0",frontMatter:{sidebar_label:"ElementHandle.$eval"},sidebar:"api",previous:{title:"ElementHandle.$$eval",permalink:"/api/puppeteer.elementhandle.__eval"},next:{title:"ElementHandle.$x",permalink:"/api/puppeteer.elementhandle._x"}},o={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandleeval-method",children:"ElementHandle.$eval() method"}),"\n",(0,r.jsx)(t.p,{children:"Runs the given function on the first element matching the given selector in the current element."}),"\n",(0,r.jsx)(t.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  $eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<\n      NodeFor<Selector>,\n      Params\n    >,\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selector"}),(0,r.jsx)(t.td,{children:"Selector"}),(0,r.jsx)(t.td,{children:"The selector to query for."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pageFunction"}),(0,r.jsx)(t.td,{children:"Func | string"}),(0,r.jsx)(t.td,{children:"The function to be evaluated in this element's page's context. The first element matching the selector will be passed in as the first argument."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"args"}),(0,r.jsx)(t.td,{children:"Params"}),(0,r.jsxs)(t.td,{children:["Additional arguments to pass to ",(0,r.jsx)("code",{children:"pageFunction"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,r.jsx)(t.p,{children:"A promise to the result of the function."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const tweetHandle = await page.$('.tweet');\nexpect(await tweetHandle.$eval('.like', node => node.innerText)).toBe('100');\nexpect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe('10');\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!o.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:l,type:e,key:d,ref:c,props:a,_owner:i.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);