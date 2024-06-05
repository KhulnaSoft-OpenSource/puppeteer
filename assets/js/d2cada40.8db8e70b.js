/*! For license information please see d2cada40.8db8e70b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85991],{34925:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=r(85893),i=r(11151);const d={sidebar_label:"PDFOptions"},t="PDFOptions interface",l={id:"api/puppeteer.pdfoptions",title:"PDFOptions interface",description:"Valid options to configure PDF generation via Page.pdf().",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.pdfoptions.md",sourceDirName:"api",slug:"/api/puppeteer.pdfoptions",permalink:"/api/puppeteer.pdfoptions",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"PDFOptions"},sidebar:"api",previous:{title:"PDFMargin",permalink:"/api/puppeteer.pdfmargin"},next:{title:"Permission",permalink:"/api/puppeteer.permission"}},c={},h=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pdfoptions-interface",children:"PDFOptions interface"}),"\n",(0,s.jsxs)(n.p,{children:["Valid options to configure PDF generation via ",(0,s.jsx)(n.a,{href:"/api/puppeteer.page.pdf",children:"Page.pdf()"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export interface PDFOptions\n"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"displayheaderfooter",children:"displayHeaderFooter"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Whether to show the header and footer."})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"footertemplate",children:"footerTemplate"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["HTML template for the print footer. Has the same constraints and support for special classes as ",(0,s.jsx)(n.a,{href:"/api/puppeteer.pdfoptions#headertemplate",children:"PDFOptions.headerTemplate"}),"."]})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"format",children:"format"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.paperformat",children:"PaperFormat"})})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remarks:"})}),(0,s.jsxs)(n.p,{children:["If set, this takes priority over the ",(0,s.jsx)(n.code,{children:"width"})," and ",(0,s.jsx)(n.code,{children:"height"})," options."]})]}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"letter"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"headertemplate",children:"headerTemplate"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"string"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"HTML template for the print header. Should be valid HTML with the following classes used to inject values into them:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"date"})," formatted print date"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"title"})," document title"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"url"})," document location"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pageNumber"})," current page number"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"totalPages"})," total pages in the document"]}),"\n"]}),"\n"]})]}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"height",children:"height"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"string | number"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Sets the height of paper. You can pass in a number or a string with a unit."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"landscape",children:"landscape"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Whether to print in landscape orientation."})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"margin",children:"margin"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.pdfmargin",children:"PDFMargin"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Set the PDF margins."})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"undefined"})," no margins are set."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"omitbackground",children:"omitBackground"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Hides default white background and allows generating pdfs with transparency."})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"outline",children:"outline"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"(Experimental)"})})," Generate document outline."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remarks:"})}),(0,s.jsxs)(n.p,{children:["If this is enabled the PDF will also be tagged (accessible) Currently only works in old Headless (headless = 'shell') ",(0,s.jsx)(n.a,{href:"https://issues.chromium.org/issues/41387522#comment48",children:"Chromium feature request"})]})]}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"pageranges",children:"pageRanges"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Paper ranges to print, e.g. ",(0,s.jsx)(n.code,{children:"1-5, 8, 11-13"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"The empty string, which means all pages are printed."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"path",children:"path"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"string"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"The path to save the file to."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remarks:"})}),(0,s.jsx)(n.p,{children:"If the path is relative, it's resolved relative to the current working directory."})]}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"undefined"}),", which means the PDF will not be written to disk."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"prefercsspagesize",children:"preferCSSPageSize"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Give any CSS ",(0,s.jsx)(n.code,{children:"@page"})," size declared in the page priority over what is declared in the ",(0,s.jsx)(n.code,{children:"width"})," or ",(0,s.jsx)(n.code,{children:"height"})," or ",(0,s.jsx)(n.code,{children:"format"})," option."]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"false"}),", which will scale the content to fit the paper size."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"printbackground",children:"printBackground"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Set to ",(0,s.jsx)(n.code,{children:"true"})," to print background graphics."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"scale",children:"scale"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Scales the rendering of the web page. Amount must be between ",(0,s.jsx)(n.code,{children:"0.1"})," and ",(0,s.jsx)(n.code,{children:"2"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"1"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"tagged",children:"tagged"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"(Experimental)"})})," Generate tagged (accessible) PDF."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"timeout",children:"timeout"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Timeout in milliseconds. Pass ",(0,s.jsx)(n.code,{children:"0"})," to disable timeout."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"30_000"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"width",children:"width"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"string | number"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Sets the width of paper. You can pass in a number or a string with a unit."})}),(0,s.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},75251:(e,n,r)=>{var s=r(67294),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,r){var s,d={},h=null,o=null;for(s in void 0!==r&&(h=""+r),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,s)&&!c.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:i,type:e,key:h,ref:o,props:d,_owner:l.current}}n.Fragment=d,n.jsx=h,n.jsxs=h},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var s=r(67294);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);