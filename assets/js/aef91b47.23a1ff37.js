/*! For license information please see aef91b47.23a1ff37.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86666],{50977:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=t(85893),a=t(11151);const n={sidebar_label:"Coverage.startJSCoverage"},o="Coverage.startJSCoverage() method",i={id:"api/puppeteer.coverage.startjscoverage",title:"Coverage.startJSCoverage() method",description:"Signature:",source:"@site/../docs/api/puppeteer.coverage.startjscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.startjscoverage",permalink:"/next/api/puppeteer.coverage.startjscoverage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Coverage.startJSCoverage"},sidebar:"api",previous:{title:"Coverage.startCSSCoverage",permalink:"/next/api/puppeteer.coverage.startcsscoverage"},next:{title:"Coverage.stopCSSCoverage",permalink:"/next/api/puppeteer.coverage.stopcsscoverage"}},c={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"coveragestartjscoverage-method",children:"Coverage.startJSCoverage() method"}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Coverage {\n  startJSCoverage(options?: JSCoverageOptions): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"options"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.jscoverageoptions",children:"JSCoverageOptions"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," Set of configurable options for coverage defaults to ",(0,s.jsx)("code",{children:"resetOnNavigation : true, reportAnonymousScripts : false,"})," ",(0,s.jsx)("code",{children:"includeRawScriptCoverage : false, useBlockCoverage : true"})]})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.p,{children:"Promise that resolves when coverage is started."}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",(0,s.jsx)(r.code,{children:"eval"})," or ",(0,s.jsx)(r.code,{children:"new Function"}),". If ",(0,s.jsx)(r.code,{children:"reportAnonymousScripts"})," is set to ",(0,s.jsx)(r.code,{children:"true"}),", anonymous scripts URL will start with ",(0,s.jsx)(r.code,{children:"debugger://VM"})," (unless a magic //# sourceURL comment is present, in which case that will the be URL)."]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var s=t(67294),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var s,n={},l=null,d=null;for(s in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:a,type:e,key:l,ref:d,props:n,_owner:i.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>o});var s=t(67294);const a={},n=s.createContext(a);function o(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);