(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{264:function(e,t,r){"use strict";r.r(t);r(18);var n=r(1),i=(r(19),r(3),r(41),r(11),r(5),r(6),r(16),r(17),r(8),r(12),r(84)),c=r(252),s=r(0);function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,c=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=Object(n.connect)((function(e){var t,r=e.state,n=e.item,o=r.source.author[n.author],l=[],f=new Date(n.date),g=a(n.tags);try{for(g.s();!(t=g.n()).done;){var y=t.value;l.push(r.source.tag[y])}}catch(e){g.e(e)}finally{g.f()}return Object(s.jsxs)("article",{style:{border:"1px solid #eaeaea",borderRadius:"1rem",padding:"2rem 1rem",backgroundColor:"#fff",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)",margin:"1rem",maxWidth:"20rem",height:"auto"},children:[r.theme.featured.showOnList&&Object(s.jsx)(c.a,{id:n.featured_media}),Object(s.jsx)(i.a,{link:n.link,children:Object(s.jsx)(d,{dangerouslySetInnerHTML:{__html:n.title.rendered}})}),Object(s.jsxs)("div",{children:[o&&Object(s.jsx)(j,{link:o.link,children:Object(s.jsxs)(m,{children:["By ",Object(s.jsx)("b",{children:o.name})]})}),Object(s.jsxs)(u,{children:[" ","on ",Object(s.jsx)("b",{children:f.toDateString()})]})]}),n.excerpt&&Object(s.jsx)(b,{dangerouslySetInnerHTML:{__html:n.excerpt.rendered}}),Object(s.jsx)(x,{children:l.length>0&&l.map((function(e){return Object(s.jsx)(h,{children:Object(s.jsx)("a",{href:e.link,children:e.name})})}))}),Object(s.jsx)(i.a,{link:n.link,style:{textDecoration:"underline"},children:" Read more"})]})})),d=Object(n.styled)("h1",{target:"e1p5zhim6"})({name:"1vwysmt",styles:"font-size:2rem;color:rgba(12, 17, 43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box"}),m=Object(n.styled)("span",{target:"e1p5zhim5"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),j=Object(n.styled)(i.a,{target:"e1p5zhim4"})({name:"1k93czn",styles:"padding:15px 0"}),u=Object(n.styled)("span",{target:"e1p5zhim3"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),b=Object(n.styled)("div",{target:"e1p5zhim2"})({name:"1xhvlt7",styles:"line-height:1.6em;color:rgba(12, 17, 43, 0.8)"}),h=Object(n.styled)("span",{target:"e1p5zhim1"})({name:"1m1t866",styles:"background-color:#eaeaea;padding:0.5rem;margin-right:0.5rem;border-radius:0.5rem"}),x=Object(n.styled)("div",{target:"e1p5zhim0"})({name:"kz2qr2",styles:"display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-start;align-items:center;margin-top:1rem;margin-bottom:1rem"}),f=r(2);var g=Object(n.connect)((function(e){var t=e.state,r=e.actions,n=t.source.get(t.router.link),c=n.next,a=n.previous;return Object(f.useEffect)((function(){c&&r.source.fetch(c)}),[]),Object(s.jsxs)("div",{children:[c&&Object(s.jsx)(i.a,{link:c,children:Object(s.jsx)(y,{children:"← Older posts"})}),a&&c&&" - ",a&&Object(s.jsx)(i.a,{link:a,children:Object(s.jsx)(y,{children:"Newer posts →"})})]})})),y=Object(n.styled)("em",{target:"esft81u0"})({name:"vxgo1h",styles:"display:inline-block;margin-top:16px"});t.default=Object(n.connect)((function(e){var t=e.state,r=t.source.get(t.router.link);return Object(s.jsxs)(O,{children:[Object(s.jsxs)(v,{children:[Object(s.jsx)("h1",{style:{fontSize:"2rem",margin:0,textAlign:"center"},children:"Welcome to my brain 🧠"}),Object(s.jsx)("h2",{style:{fontWeight:"lighter",fontSize:"1.5rem",textAlign:"center"},children:"This is where the magic happens 🪄"})]}),Object(s.jsxs)(p,{children:[r.isTaxonomy&&Object(s.jsxs)(w,{children:[r.taxonomy,":"," ",Object(s.jsx)("b",{children:Object(n.decode)(t.source[r.taxonomy][r.id].name)})]}),r.isAuthor&&Object(s.jsxs)(w,{children:["Author: ",Object(s.jsx)("b",{children:Object(n.decode)(t.source.author[r.id].name)})]}),Object(s.jsx)(z,{children:r.items.map((function(e){var r=e.type,n=e.id,i=t.source[r][n];return Object(s.jsx)(l,{item:i},i.id)}))}),Object(s.jsx)(g,{})]})]})}));var O=Object(n.styled)("div",{target:"exiu6z14"})({name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"}),p=Object(n.styled)("section",{target:"exiu6z13"})({name:"1dwu1sp",styles:"width:100%;margin:0;list-style:none"}),v=Object(n.styled)("section",{target:"exiu6z12"})({name:"d8b62s",styles:"font-size:1.5em;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;height:30vh;max-width:100vw"}),w=Object(n.styled)("h3",{target:"exiu6z11"})({name:"eigqg2",styles:"font-weight:300;text-transform:capitalize;color:rgba(12, 17, 43, 0.9)"}),z=Object(n.styled)("section",{target:"exiu6z10"})({name:"19ggrs3",styles:"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;align-items:center;flex:1"})}}]);