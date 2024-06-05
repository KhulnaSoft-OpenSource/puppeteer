/*! For license information please see 55fd95ae.bab3d7f8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50944],{60284:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=r(85893),n=r(11151);const o={sidebar_label:"Mouse"},a="Mouse class",d={id:"api/puppeteer.mouse",title:"Mouse class",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.mouse.md",sourceDirName:"api",slug:"/api/puppeteer.mouse",permalink:"/api/puppeteer.mouse",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"Mouse"},sidebar:"api",previous:{title:"Keyboard.up",permalink:"/api/puppeteer.keyboard.up"},next:{title:"Mouse.click",permalink:"/api/puppeteer.mouse.click"}},i={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"mouse-class",children:"Mouse class"}),"\n",(0,t.jsx)(s.p,{children:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."}),"\n",(0,t.jsx)(s.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export declare abstract class Mouse\n"})}),"\n",(0,t.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(s.p,{children:["Every ",(0,t.jsx)(s.code,{children:"page"})," object has its own Mouse, accessible with [",(0,t.jsx)(s.code,{children:"page.mouse"}),"](#pagemouse)."]}),"\n",(0,t.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(s.code,{children:"Mouse"})," class."]}),"\n",(0,t.jsx)(s.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),": The mouse events trigger synthetic ",(0,t.jsx)(s.code,{children:"MouseEvent"}),"s. This means that it does not fully replicate the functionality of what a normal user would be able to do with their mouse."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, dragging and selecting text is not possible using ",(0,t.jsx)(s.code,{children:"page.mouse"}),". Instead, you can use the ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection",children:"`DocumentOrShadowRoot.getSelection()`"})," functionality implemented in the platform."]}),"\n",(0,t.jsx)(s.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(s.p,{children:"For example, if you want to select all content between nodes:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"await page.evaluate(\n  (from, to) => {\n    const selection = from.getRootNode().getSelection();\n    const range = document.createRange();\n    range.setStartBefore(from);\n    range.setEndAfter(to);\n    selection.removeAllRanges();\n    selection.addRange(range);\n  },\n  fromJSHandle,\n  toJSHandle\n);\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you then would want to copy-paste your selection, you can use the clipboard api:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"// The clipboard api does not allow you to copy, unless the tab is focused.\nawait page.bringToFront();\nawait page.evaluate(() => {\n  // Copy the selected content to the clipboard\n  document.execCommand('copy');\n  // Obtain the content of the clipboard as a string\n  return navigator.clipboard.readText();\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),": If you want access to the clipboard API, you have to give it permission to do so:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"await browser\n  .defaultBrowserContext()\n  .overridePermissions('<your origin>', ['clipboard-read', 'clipboard-write']);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"click",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.click",children:"click(x, y, options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:["Shortcut for ",(0,t.jsx)(s.code,{children:"mouse.move"}),", ",(0,t.jsx)(s.code,{children:"mouse.down"})," and ",(0,t.jsx)(s.code,{children:"mouse.up"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"down",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.down",children:"down(options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Presses the mouse."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"drag",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.drag",children:"drag(start, target)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:["Dispatches a ",(0,t.jsx)(s.code,{children:"drag"})," event."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"draganddrop",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.draganddrop",children:"dragAndDrop(start, target, options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Performs a drag, dragenter, dragover, and drop in sequence."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"dragenter",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.dragenter",children:"dragEnter(target, data)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:["Dispatches a ",(0,t.jsx)(s.code,{children:"dragenter"})," event."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"dragover",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.dragover",children:"dragOver(target, data)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:["Dispatches a ",(0,t.jsx)(s.code,{children:"dragover"})," event."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"drop",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.drop",children:"drop(target, data)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Performs a dragenter, dragover, and drop in sequence."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"move",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.move",children:"move(x, y, options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Moves the mouse to the given coordinate."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"reset",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.reset",children:"reset()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Resets the mouse to the default state: No buttons pressed; position at (0,0)."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"up",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.up",children:"up(options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Releases the mouse."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"wheel",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.mouse.wheel",children:"wheel(options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:["Dispatches a ",(0,t.jsx)(s.code,{children:"mousewheel"})," event."]})})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},75251:(e,s,r)=>{var t=r(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,r){var t,o={},c=null,l=null;for(t in void 0!==r&&(c=""+r),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)a.call(s,t)&&!i.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:n,type:e,key:c,ref:l,props:o,_owner:d.current}}s.Fragment=o,s.jsx=c,s.jsxs=c},85893:(e,s,r)=>{e.exports=r(75251)},11151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>a});var t=r(67294);const n={},o=t.createContext(n);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);