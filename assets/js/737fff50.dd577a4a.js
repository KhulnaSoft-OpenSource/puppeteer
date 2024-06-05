/*! For license information please see 737fff50.dd577a4a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27737],{15002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=r(85893),s=r(11151);const i={sidebar_label:"Page.type"},a="Page.type() method",p={id:"api/puppeteer.page.type",title:"Page.type() method",description:"Sends a keydown, keypress/input, and keyup event for each character in the text.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.page.type.md",sourceDirName:"api",slug:"/api/puppeteer.page.type",permalink:"/api/puppeteer.page.type",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"Page.type"},sidebar:"api",previous:{title:"Page.title",permalink:"/api/puppeteer.page.title"},next:{title:"Page.url",permalink:"/api/puppeteer.page.url"}},l={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pagetype-method",children:"Page.type() method"}),"\n",(0,n.jsxs)(t.p,{children:["Sends a ",(0,n.jsx)(t.code,{children:"keydown"}),", ",(0,n.jsx)(t.code,{children:"keypress/input"}),", and ",(0,n.jsx)(t.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,n.jsxs)(t.p,{children:["To press a special key, like ",(0,n.jsx)(t.code,{children:"Control"})," or ",(0,n.jsx)(t.code,{children:"ArrowDown"}),", use ",(0,n.jsx)(t.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  type(\n    selector: string,\n    text: string,\n    options?: Readonly<KeyboardTypeOptions>\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"selector"})," of an element to type into. If there are multiple elements satisfying the selector, the first will be used."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"text"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"A text to type into a focused element."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Readonly<",(0,n.jsx)(t.a,{href:"/api/puppeteer.keyboardtypeoptions",children:"KeyboardTypeOptions"}),">"]})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," have property ",(0,n.jsx)(t.code,{children:"delay"})," which is the Time to wait between key presses in milliseconds. Defaults to ",(0,n.jsx)(t.code,{children:"0"}),"."]})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"await page.type('#mytextarea', 'Hello');\n// Types instantly\nawait page.type('#mytextarea', 'World', {delay: 100});\n// Types slower, like a user\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,i={},o=null,d=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:o,ref:d,props:i,_owner:p.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>p,a:()=>a});var n=r(67294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);