/*! For license information please see 3d1ba4da.99c59648.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22716],{73853:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(85893),s=n(11151);const l={sidebar_label:"WebWorker"},a="WebWorker class",i={id:"api/puppeteer.webworker",title:"WebWorker class",description:"This class represents a WebWorker.",source:"@site/../docs/api/puppeteer.webworker.md",sourceDirName:"api",slug:"/api/puppeteer.webworker",permalink:"/next/api/puppeteer.webworker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"WebWorker"},sidebar:"api",previous:{title:"Page.workers",permalink:"/next/api/puppeteer.page.workers"},next:{title:"WebWorker.close",permalink:"/next/api/puppeteer.webworker.close"}},o={},d=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"webworker-class",children:"WebWorker class"}),"\n",(0,t.jsxs)(r.p,{children:["This class represents a ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",children:"WebWorker"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class WebWorker extends EventEmitter<Record<EventType, unknown>>\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Extends:"})," ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.eventemitter",children:"EventEmitter"}),"<Record<",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.eventtype",children:"EventType"}),", unknown>>"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["The events ",(0,t.jsx)(r.code,{children:"workercreated"})," and ",(0,t.jsx)(r.code,{children:"workerdestroyed"})," are emitted on the page object to signal the worker lifecycle."]}),"\n",(0,t.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(r.code,{children:"WebWorker"})," class."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"page.on('workercreated', worker =>\n  console.log('Worker created: ' + worker.url())\n);\npage.on('workerdestroyed', worker =>\n  console.log('Worker destroyed: ' + worker.url())\n);\n\nconsole.log('Current workers:');\nfor (const worker of page.workers()) {\n  console.log('  ' + worker.url());\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"client",children:"client"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.cdpsession",children:"CDPSession"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"The CDP session client the WebWorker belongs to."})})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"close",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.close",children:"close()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"evaluate",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.evaluate",children:"evaluate(func, args)"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Evaluates a given function in the ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker",children:"worker"}),"."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["If the given function returns a promise, ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.evaluate",children:"evaluate"})," will wait for the promise to resolve."]}),(0,t.jsxs)(r.p,{children:["As a rule of thumb, if the return value of the given function is more complicated than a JSON object (e.g. most classes), then ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.evaluate",children:"evaluate"})," will _likely_ return some truncated value (or ",(0,t.jsx)(r.code,{children:"{}"}),"). This is because we are not returning the actual return value, but a deserialized version as a result of transferring the return value through a protocol to Puppeteer."]}),(0,t.jsxs)(r.p,{children:["In general, you should use ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.evaluatehandle",children:"evaluateHandle"})," if ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.evaluate",children:"evaluate"})," cannot serialize the return value properly or you need a mutable ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle",children:"handle"})," to the return object."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"evaluatehandle",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.evaluatehandle",children:"evaluateHandle(func, args)"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Evaluates a given function in the ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker",children:"worker"}),"."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["If the given function returns a promise, ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.evaluate",children:"evaluate"})," will wait for the promise to resolve."]}),(0,t.jsxs)(r.p,{children:["In general, you should use ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.evaluatehandle",children:"evaluateHandle"})," if ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.evaluate",children:"evaluate"})," cannot serialize the return value properly or you need a mutable ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.jshandle",children:"handle"})," to the return object."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"url",children:(0,t.jsx)(r.a,{href:"/next/api/puppeteer.webworker.url",children:"url()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"The URL of this web worker."})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,l={},d=null,c=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,t)&&!o.hasOwnProperty(t)&&(l[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===l[t]&&(l[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:c,props:l,_owner:i.current}}r.Fragment=l,r.jsx=d,r.jsxs=d},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>a});var t=n(67294);const s={},l=t.createContext(s);function a(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);