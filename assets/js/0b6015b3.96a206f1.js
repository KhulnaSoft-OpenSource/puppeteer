/*! For license information please see 0b6015b3.96a206f1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29536],{18115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(85893),n=r(11151);const s={sidebar_label:"Page.queryObjects"},p="Page.queryObjects() method",o={id:"api/puppeteer.page.queryobjects",title:"Page.queryObjects() method",description:"This method iterates the JavaScript heap and finds all objects with the given prototype.",source:"@site/../docs/api/puppeteer.page.queryobjects.md",sourceDirName:"api",slug:"/api/puppeteer.page.queryobjects",permalink:"/next/api/puppeteer.page.queryobjects",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.queryObjects"},sidebar:"api",previous:{title:"Page.pdf",permalink:"/next/api/puppeteer.page.pdf"},next:{title:"Page.reload",permalink:"/next/api/puppeteer.page.reload"}},i={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"pagequeryobjects-method",children:"Page.queryObjects() method"}),"\n",(0,a.jsx)(t.p,{children:"This method iterates the JavaScript heap and finds all objects with the given prototype."}),"\n",(0,a.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract queryObjects<Prototype>(\n    prototypeHandle: JSHandle<Prototype>\n  ): Promise<JSHandle<Prototype[]>>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"prototypeHandle"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/next/api/puppeteer.jshandle",children:"JSHandle"}),"<Prototype>"]})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"a handle to the object prototype."})})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:["Promise<",(0,a.jsx)(t.a,{href:"/next/api/puppeteer.jshandle",children:"JSHandle"}),"<Prototype[]>>"]}),"\n",(0,a.jsx)(t.p,{children:"Promise which resolves to a handle to an array of objects with this prototype."}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// Create a Map object\nawait page.evaluate(() => (window.map = new Map()));\n// Get a handle to the Map object prototype\nconst mapPrototype = await page.evaluateHandle(() => Map.prototype);\n// Query all map instances into an array\nconst mapInstances = await page.queryObjects(mapPrototype);\n// Count amount of map objects in heap\nconst count = await page.evaluate(maps => maps.length, mapInstances);\nawait mapInstances.dispose();\nawait mapPrototype.dispose();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},75251:(e,t,r)=>{var a=r(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,s={},c=null,l=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)p.call(t,a)&&!i.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:l,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>p});var a=r(67294);const n={},s=a.createContext(n);function p(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:p(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);