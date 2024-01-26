/*! For license information please see dcf904df.e1d0a885.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43387],{33243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=r(85893),s=r(11151);const i={sidebar_label:"PuppeteerNode"},p="PuppeteerNode class",d={id:"api/puppeteer.puppeteernode",title:"PuppeteerNode class",description:"Extends the main Puppeteer class with Node specific behaviour for fetching and downloading browsers.",source:"@site/../docs/api/puppeteer.puppeteernode.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode",permalink:"/next/api/puppeteer.puppeteernode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"PuppeteerNode"},sidebar:"api",next:{title:"PuppeteerNode.connect",permalink:"/next/api/puppeteer.puppeteernode.connect"}},c={},o=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"puppeteernode-class",children:"PuppeteerNode class"}),"\n",(0,n.jsxs)(t.p,{children:["Extends the main ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteer",children:"Puppeteer"})," class with Node specific behaviour for fetching and downloading browsers."]}),"\n",(0,n.jsxs)(t.p,{children:["If you're using Puppeteer in a Node environment, this is the class you'll get when you run ",(0,n.jsx)(t.code,{children:"require('puppeteer')"})," (or the equivalent ES ",(0,n.jsx)(t.code,{children:"import"}),")."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export declare class PuppeteerNode extends Puppeteer\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Extends:"})," ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteer",children:"Puppeteer"})]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["The most common method to use is ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteernode.launch",children:"launch"}),", which is used to launch and connect to a new browser instance."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteer",children:"the main Puppeteer class"})," for methods common to all environments, such as ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(t.code,{children:"PuppeteerNode"})," class."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"The following is a typical example of using Puppeteer to drive automation:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Once you have created a ",(0,n.jsx)(t.code,{children:"page"})," you have access to a large API to interact with the page, navigate, or find certain elements in that page. The ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.page",children:"`page` documentation"})," lists all the available methods."]}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"defaultProduct"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"readonly"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.product",children:"Product"})}),(0,n.jsxs)(t.td,{children:["The name of the browser that will be launched by default. For ",(0,n.jsx)("code",{children:"puppeteer"}),", this is influenced by your configuration. Otherwise, it's ",(0,n.jsx)("code",{children:"chrome"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lastLaunchedProduct"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"readonly"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.product",children:"Product"})}),(0,n.jsx)(t.td,{children:"The name of the browser that was last launched."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"product"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"readonly"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteernode.connect",children:"connect"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"This method attaches Puppeteer to an existing browser instance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteernode.defaultargs",children:"defaultArgs"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteernode.executablepath",children:"executablePath"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The default executable path."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteernode.launch",children:"launch"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)("p",{children:"Launches a browser instance with given arguments and options when specified."}),(0,n.jsxs)("p",{children:["When using with ",(0,n.jsx)("code",{children:"puppeteer-core"}),", ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.launchoptions",children:"options.executablePath"})," or ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.launchoptions",children:"options.channel"})," must be provided."]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.puppeteernode.trimcache",children:"trimCache"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless ",(0,n.jsx)("code",{children:"configuration.browserRevision"})," is provided."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,i={},o=null,a=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(a=t.ref),t)p.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:o,ref:a,props:i,_owner:d.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>p});var n=r(67294);const s={},i=n.createContext(s);function p(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:p(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);