(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{202:function(e,t,n){"use strict";n.r(t);var r=n(1),s=(n(6),n(8),n(55)),i=n(189),c=n(190),a=n(0);var l=Object(r.connect)(({state:e,item:t})=>{const n=e.source.author[t.author],r=[],l=new Date(t.date),{text:g}=Object(c.a)(t.content.rendered);for(let n of t.tags)r.push(e.source.tag[n]);return Object(a.jsxs)("article",{style:{border:"1px solid #eaeaea",borderRadius:"1rem",padding:"2rem 1rem",backgroundColor:"#fff",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)",margin:"1rem",maxWidth:"20rem",height:"auto"},children:[e.theme.featured.showOnList&&Object(a.jsx)(i.a,{id:t.featured_media}),Object(a.jsx)(s.a,{link:t.link,children:Object(a.jsx)(o,{dangerouslySetInnerHTML:{__html:t.title.rendered}})}),Object(a.jsxs)("div",{children:[n&&Object(a.jsx)(j,{link:n.link,children:Object(a.jsxs)(d,{children:["By ",Object(a.jsx)("b",{children:n.name})]})}),Object(a.jsxs)(m,{children:[" ","on ",Object(a.jsx)("b",{children:l.toDateString()})," | ",g]})]}),t.excerpt&&Object(a.jsx)(b,{dangerouslySetInnerHTML:{__html:t.excerpt.rendered}}),Object(a.jsx)(h,{children:r.length>0&&r.map(e=>Object(a.jsx)(x,{children:Object(a.jsx)("a",{href:e.link,children:e.name})}))}),Object(a.jsx)(s.a,{link:t.link,style:{textDecoration:"underline"},children:" Read more"})]})});const o=Object(r.styled)("h1",{target:"e1p5zhim6"})({name:"1vwysmt",styles:"font-size:2rem;color:rgba(12, 17, 43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box"}),d=Object(r.styled)("span",{target:"e1p5zhim5"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),j=Object(r.styled)(s.a,{target:"e1p5zhim4"})({name:"1k93czn",styles:"padding:15px 0"}),m=Object(r.styled)("span",{target:"e1p5zhim3"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),b=Object(r.styled)("div",{target:"e1p5zhim2"})({name:"1xhvlt7",styles:"line-height:1.6em;color:rgba(12, 17, 43, 0.8)"}),x=Object(r.styled)("span",{target:"e1p5zhim1"})({name:"1m1t866",styles:"background-color:#eaeaea;padding:0.5rem;margin-right:0.5rem;border-radius:0.5rem"}),h=Object(r.styled)("div",{target:"e1p5zhim0"})({name:"kz2qr2",styles:"display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-start;align-items:center;margin-top:1rem;margin-bottom:1rem"});var g=n(2);var O=Object(r.connect)(({state:e,actions:t})=>{const{next:n,previous:r}=e.source.get(e.router.link);return Object(g.useEffect)(()=>{n&&t.source.fetch(n)},[]),Object(a.jsxs)("div",{children:[n&&Object(a.jsx)(s.a,{link:n,children:Object(a.jsx)(y,{children:"← Older posts"})}),r&&n&&" - ",r&&Object(a.jsx)(s.a,{link:r,children:Object(a.jsx)(y,{children:"Newer posts →"})})]})});const y=Object(r.styled)("em",{target:"esft81u0"})({name:"vxgo1h",styles:"display:inline-block;margin-top:16px"});t.default=Object(r.connect)(({state:e})=>{const t=e.source.get(e.router.link);return Object(a.jsxs)(p,{children:[Object(a.jsxs)(f,{children:[Object(a.jsx)("h1",{style:{fontSize:"2rem",margin:0,textAlign:"center"},children:"Welcome to my brain 🧠"}),Object(a.jsx)("h2",{style:{fontWeight:"lighter",fontSize:"1.5rem",textAlign:"center"},children:"This is where the magic happens 🪄"})]}),Object(a.jsxs)(u,{children:[t.isTaxonomy&&Object(a.jsxs)(z,{children:[t.taxonomy,":"," ",Object(a.jsx)("b",{children:Object(r.decode)(e.source[t.taxonomy][t.id].name)})]}),t.isAuthor&&Object(a.jsxs)(z,{children:["Author: ",Object(a.jsx)("b",{children:Object(r.decode)(e.source.author[t.id].name)})]}),Object(a.jsx)(w,{children:t.items.map(({type:t,id:n})=>{const r=e.source[t][n];return Object(a.jsx)(l,{item:r},r.id)})}),Object(a.jsx)(O,{})]})]})});const p=Object(r.styled)("div",{target:"exiu6z14"})({name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"}),u=Object(r.styled)("section",{target:"exiu6z13"})({name:"1dwu1sp",styles:"width:100%;margin:0;list-style:none"}),f=Object(r.styled)("section",{target:"exiu6z12"})({name:"d8b62s",styles:"font-size:1.5em;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;height:30vh;max-width:100vw"}),z=Object(r.styled)("h3",{target:"exiu6z11"})({name:"eigqg2",styles:"font-weight:300;text-transform:capitalize;color:rgba(12, 17, 43, 0.9)"}),w=Object(r.styled)("section",{target:"exiu6z10"})({name:"19ggrs3",styles:"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;align-items:center;flex:1"})}}]);