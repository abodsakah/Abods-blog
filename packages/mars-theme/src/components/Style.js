const Style = `
code[class*="language-"],
pre[class*="language-"] {
  color: #e3eaf2;
  background: none;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
  background: #3c526d;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
  background: #3c526d;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #111b27;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em 0.3em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #8da1b9;
}

.token.punctuation {
  color: #e3eaf2;
}

.token.delimiter.important,
.token.selector .parent,
.token.tag,
.token.tag .token.punctuation {
  color: #66cccc;
}

.token.attr-name,
.token.boolean,
.token.boolean.important,
.token.number,
.token.constant,
.token.selector .token.attribute {
  color: #e6d37a;
}

.token.class-name,
.token.key,
.token.parameter,
.token.property,
.token.property-access,
.token.variable {
  color: #6cb8e6;
}

.token.attr-value,
.token.inserted,
.token.color,
.token.selector .token.value,
.token.string,
.token.string .token.url-link {
  color: #91d076;
}

.token.builtin,
.token.keyword-array,
.token.package,
.token.regex {
  color: #f4adf4;
}

.token.function,
.token.selector .token.class,
.token.selector .token.id {
  color: #c699e3;
}

.token.atrule .token.rule,
.token.combinator,
.token.keyword,
.token.operator,
.token.pseudo-class,
.token.pseudo-element,
.token.selector,
.token.unit {
  color: #e9ae7e;
}

.token.deleted,
.token.important {
  color: #cd6660;
}

.token.keyword-this,
.token.this {
  color: #6cb8e6;
}

.token.important,
.token.keyword-this,
.token.this,
.token.bold {
  font-weight: bold;
}

.token.delimiter.important {
  font-weight: inherit;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.language-markdown .token.title,
.language-markdown .token.title .token.punctuation {
  color: #6cb8e6;
  font-weight: bold;
}

.language-markdown .token.blockquote.punctuation {
  color: #f4adf4;
}

.language-markdown .token.code {
  color: #66cccc;
}

.language-markdown .token.hr.punctuation {
  color: #6cb8e6;
}

.language-markdown .token.url .token.content {
  color: #91d076;
}

.language-markdown .token.url-link {
  color: #e6d37a;
}

.language-markdown .token.list.punctuation {
  color: #f4adf4;
}

.language-markdown .token.table-header {
  color: #e3eaf2;
}

.language-json .token.operator {
  color: #e3eaf2;
}

.language-scss .token.variable {
  color: #66cccc;
}

/* overrides color-values for the Show Invisibles plugin
 * https://prismjs.com/plugins/show-invisibles/
 */
.token.token.tab:not(:empty):before,
.token.token.cr:before,
.token.token.lf:before,
.token.token.space:before {
  color: #8da1b9;
}

/* overrides color-values for the Toolbar plugin
 * https://prismjs.com/plugins/toolbar/
 */
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > button {
  color: #111b27;
  background: #6cb8e6;
}

div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus {
  color: #111b27;
  background: #6cb8e6da;
  text-decoration: none;
}

div.code-toolbar > .toolbar.toolbar > .toolbar-item > span,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
  color: #111b27;
  background: #8da1b9;
}

/* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */
.line-highlight.line-highlight {
  background: #3c526d5f;
  background: linear-gradient(to right, #3c526d5f 70%, #3c526d55);
}

.line-highlight.line-highlight:before,
.line-highlight.line-highlight[data-end]:after {
  background-color: #8da1b9;
  color: #111b27;
  box-shadow: 0 1px #3c526d;
}

pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before {
  background-color: #8da1b918;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers.line-numbers .line-numbers-rows {
  padding: 0rem .5rem 0rem .5rem;
  margin-right: 1rem;
  border-right: 1px solid #0b121b;
  background: #0b121b7a;
}

.line-numbers .line-numbers-rows > span:before {
  color: #8da1b9da;
}

/* overrides color-values for the Match Braces plugin
 * https://prismjs.com/plugins/match-braces/
 */
.rainbow-braces .token.token.punctuation.brace-level-1,
.rainbow-braces .token.token.punctuation.brace-level-5,
.rainbow-braces .token.token.punctuation.brace-level-9 {
  color: #e6d37a;
}

.rainbow-braces .token.token.punctuation.brace-level-2,
.rainbow-braces .token.token.punctuation.brace-level-6,
.rainbow-braces .token.token.punctuation.brace-level-10 {
  color: #f4adf4;
}

.rainbow-braces .token.token.punctuation.brace-level-3,
.rainbow-braces .token.token.punctuation.brace-level-7,
.rainbow-braces .token.token.punctuation.brace-level-11 {
  color: #6cb8e6;
}

.rainbow-braces .token.token.punctuation.brace-level-4,
.rainbow-braces .token.token.punctuation.brace-level-8,
.rainbow-braces .token.token.punctuation.brace-level-12 {
  color: #c699e3;
}

/* overrides color-values for the Diff Highlight plugin
 * https://prismjs.com/plugins/diff-highlight/
 */
pre.diff-highlight > code .token.token.deleted:not(.prefix),
pre > code.diff-highlight .token.token.deleted:not(.prefix) {
  background-color: #cd66601f;
}

pre.diff-highlight > code .token.token.inserted:not(.prefix),
pre > code.diff-highlight .token.token.inserted:not(.prefix) {
  background-color: #91d0761f;
}

/* overrides color-values for the Command Line plugin
 * https://prismjs.com/plugins/command-line/
 */
.command-line .command-line-prompt {
  border-right: 1px solid #0b121b;
}

.command-line .command-line-prompt > span:before {
  color: #8da1b9da;
}
pre[class*="language-"].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}

  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }

    .line-numbers-rows > span:before {
      content: counter(linenumber);
      color: #999;
      display: block;
      padding-right: 0.8em;
      text-align: right;
    }
    pre[data-line] {
      position: relative;
      padding: 1em 0 1em 3em;
    }
    
    .line-highlight {
      position: absolute;
      left: 0;
      right: 0;
      padding: inherit 0;
      margin-top: 1em; /* Same as .prism’s padding-top */
    
      background: hsla(24, 20%, 50%,.08);
      background: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));
    
      pointer-events: none;
    
      line-height: inherit;
      white-space: pre;
    }
    
    @media print {
      .line-highlight {
        /*
         * This will prevent browsers from replacing the background color with white.
         * It's necessary because the element is layered on top of the displayed code.
         */
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
      }
    }
    
      .line-highlight:before,
      .line-highlight[data-end]:after {
        content: attr(data-start);
        position: absolute;
        top: .4em;
        left: .6em;
        min-width: 1em;
        padding: 0 .5em;
        background-color: hsla(24, 20%, 50%,.4);
        color: hsl(24, 20%, 95%);
        font: bold 65%/1.5 sans-serif;
        text-align: center;
        vertical-align: .3em;
        border-radius: 999px;
        text-shadow: none;
        box-shadow: 0 1px white;
      }
    
      .line-highlight[data-end]:after {
        content: attr(data-end);
        top: auto;
        bottom: .4em;
      }
    
    .line-numbers .line-highlight:before,
    .line-numbers .line-highlight:after {
      content: none;
    }
    
    pre[id].linkable-line-numbers span.line-numbers-rows {
      pointer-events: all;
    }
    pre[id].linkable-line-numbers span.line-numbers-rows > span:before {
      cursor: pointer;
    }
    pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {
      background-color: rgba(128, 128, 128, .2);
    }
    .prism-previewer,
.prism-previewer:before,
.prism-previewer:after {
	position: absolute;
	pointer-events: none;
}
.prism-previewer,
.prism-previewer:after {
	left: 50%;
}
.prism-previewer {
	margin-top: -48px;
	width: 32px;
	height: 32px;
	margin-left: -16px;
	z-index: 10;

	opacity: 0;
	-webkit-transition: opacity .25s;
	-o-transition: opacity .25s;
	transition: opacity .25s;
}
.prism-previewer.flipped {
	margin-top: 0;
	margin-bottom: -48px;
}
.prism-previewer:before,
.prism-previewer:after {
	content: '';
	position: absolute;
	pointer-events: none;
}
.prism-previewer:before {
	top: -5px;
	right: -5px;
	left: -5px;
	bottom: -5px;
	border-radius: 10px;
	border: 5px solid #fff;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset, 0 0 10px rgba(0, 0, 0, 0.75);
}
.prism-previewer:after {
	top: 100%;
	width: 0;
	height: 0;
	margin: 5px 0 0 -7px;
	border: 7px solid transparent;
	border-color: rgba(255, 0, 0, 0);
	border-top-color: #fff;
}
.prism-previewer.flipped:after {
	top: auto;
	bottom: 100%;
	margin-top: 0;
	margin-bottom: 5px;
	border-top-color: rgba(255, 0, 0, 0);
	border-bottom-color: #fff;
}
.prism-previewer.active {
	opacity: 1;
}

.prism-previewer-angle:before {
	border-radius: 50%;
	background: #fff;
}
.prism-previewer-angle:after {
	margin-top: 4px;
}
.prism-previewer-angle svg {
	width: 32px;
	height: 32px;
	-webkit-transform: rotate(-90deg);
	-moz-transform: rotate(-90deg);
	-ms-transform: rotate(-90deg);
	-o-transform: rotate(-90deg);
	transform: rotate(-90deg);
}
.prism-previewer-angle[data-negative] svg {
	-webkit-transform: scaleX(-1) rotate(-90deg);
	-moz-transform: scaleX(-1) rotate(-90deg);
	-ms-transform: scaleX(-1) rotate(-90deg);
	-o-transform: scaleX(-1) rotate(-90deg);
	transform: scaleX(-1) rotate(-90deg);
}
.prism-previewer-angle circle {
	fill: transparent;
	stroke: hsl(200, 10%, 20%);
	stroke-opacity: 0.9;
	stroke-width: 32;
	stroke-dasharray: 0, 500;
}

.prism-previewer-gradient {
	background-image: linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%, #bbb), linear-gradient(45deg, #bbb 25%, #eee 25%, #eee 75%, #bbb 75%, #bbb);
	background-size: 10px 10px;
	background-position: 0 0, 5px 5px;

	width: 64px;
	margin-left: -32px;
}
.prism-previewer-gradient:before {
	content: none;
}
.prism-previewer-gradient div {
	position: absolute;
	top: -5px;
	left: -5px;
	right: -5px;
	bottom: -5px;
	border-radius: 10px;
	border: 5px solid #fff;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset, 0 0 10px rgba(0, 0, 0, 0.75);
}

.prism-previewer-color {
	background-image: linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%, #bbb), linear-gradient(45deg, #bbb 25%, #eee 25%, #eee 75%, #bbb 75%, #bbb);
	background-size: 10px 10px;
	background-position: 0 0, 5px 5px;
}
.prism-previewer-color:before {
	background-color: inherit;
	background-clip: padding-box;
}

.prism-previewer-easing {
	margin-top: -76px;
	margin-left: -30px;
	width: 60px;
	height: 60px;
	background: #333;
}
.prism-previewer-easing.flipped {
	margin-bottom: -116px;
}
.prism-previewer-easing svg {
	width: 60px;
	height: 60px;
}
.prism-previewer-easing circle {
	fill: hsl(200, 10%, 20%);
	stroke: white;
}
.prism-previewer-easing path {
	fill: none;
	stroke: white;
	stroke-linecap: round;
	stroke-width: 4;
}
.prism-previewer-easing line {
	stroke: white;
	stroke-opacity: 0.5;
	stroke-width: 2;
}

@-webkit-keyframes prism-previewer-time {
	0% {
		stroke-dasharray: 0, 500;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 100, 500;
		stroke-dashoffset: 0;
	}
	100% {
		stroke-dasharray: 0, 500;
		stroke-dashoffset: -100;
	}
}

@-o-keyframes prism-previewer-time {
	0% {
		stroke-dasharray: 0, 500;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 100, 500;
		stroke-dashoffset: 0;
	}
	100% {
		stroke-dasharray: 0, 500;
		stroke-dashoffset: -100;
	}
}

@-moz-keyframes prism-previewer-time {
	0% {
		stroke-dasharray: 0, 500;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 100, 500;
		stroke-dashoffset: 0;
	}
	100% {
		stroke-dasharray: 0, 500;
		stroke-dashoffset: -100;
	}
}

@keyframes prism-previewer-time {
	0% {
		stroke-dasharray: 0, 500;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 100, 500;
		stroke-dashoffset: 0;
	}
	100% {
		stroke-dasharray: 0, 500;
		stroke-dashoffset: -100;
	}
}

.prism-previewer-time:before {
	border-radius: 50%;
	background: #fff;
}
.prism-previewer-time:after {
	margin-top: 4px;
}
.prism-previewer-time svg {
	width: 32px;
	height: 32px;
	-webkit-transform: rotate(-90deg);
	-moz-transform: rotate(-90deg);
	-ms-transform: rotate(-90deg);
	-o-transform: rotate(-90deg);
	transform: rotate(-90deg);
}
.token.treeview-part .entry-line {
	position: relative;
	text-indent: -99em;
	display: inline-block;
	vertical-align: top;
	width: 1.2em;
}
.token.treeview-part .entry-line:before,
.token.treeview-part .line-h:after {
	content: "";
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
}
.token.treeview-part .line-h:before,
.token.treeview-part .line-v:before {
	border-left: 1px solid #ccc;
}
.token.treeview-part .line-v-last:before {
	height: 50%;
	border-left: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
}
.token.treeview-part .line-h:after {
	height: 50%;
	border-bottom: 1px solid #ccc;
}
.token.treeview-part .entry-name {
	position: relative;
	display: inline-block;
	vertical-align: top;
}
.token.treeview-part .entry-name.dotfile {
	opacity: 0.5;
}
	src: url("data:application/font-woff;base64,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")
		format("woff");
}

.token.treeview-part .entry-name:before {
	content: "\ea01";
	font-family: "PrismTreeview";
	font-size: inherit;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 2.5ex;
	display: inline-block;
}

.token.treeview-part .entry-name.dir:before {
	content: "\ea02";
}
.token.treeview-part .entry-name.ext-bmp:before,
.token.treeview-part .entry-name.ext-eps:before,
.token.treeview-part .entry-name.ext-gif:before,
.token.treeview-part .entry-name.ext-jpe:before,
.token.treeview-part .entry-name.ext-jpg:before,
.token.treeview-part .entry-name.ext-jpeg:before,
.token.treeview-part .entry-name.ext-png:before,
.token.treeview-part .entry-name.ext-svg:before,
.token.treeview-part .entry-name.ext-tiff:before {
	content: "\ea03";
}
.token.treeview-part .entry-name.ext-cfg:before,
.token.treeview-part .entry-name.ext-conf:before,
.token.treeview-part .entry-name.ext-config:before,
.token.treeview-part .entry-name.ext-csv:before,
.token.treeview-part .entry-name.ext-ini:before,
.token.treeview-part .entry-name.ext-log:before,
.token.treeview-part .entry-name.ext-md:before,
.token.treeview-part .entry-name.ext-nfo:before,
.token.treeview-part .entry-name.ext-txt:before {
	content: "\ea06";
}
.token.treeview-part .entry-name.ext-asp:before,
.token.treeview-part .entry-name.ext-aspx:before,
.token.treeview-part .entry-name.ext-c:before,
.token.treeview-part .entry-name.ext-cc:before,
.token.treeview-part .entry-name.ext-cpp:before,
.token.treeview-part .entry-name.ext-cs:before,
.token.treeview-part .entry-name.ext-css:before,
.token.treeview-part .entry-name.ext-h:before,
.token.treeview-part .entry-name.ext-hh:before,
.token.treeview-part .entry-name.ext-htm:before,
.token.treeview-part .entry-name.ext-html:before,
.token.treeview-part .entry-name.ext-jav:before,
.token.treeview-part .entry-name.ext-java:before,
.token.treeview-part .entry-name.ext-js:before,
.token.treeview-part .entry-name.ext-php:before,
.token.treeview-part .entry-name.ext-rb:before,
.token.treeview-part .entry-name.ext-xml:before {
	content: "\ea07";
}
.token.treeview-part .entry-name.ext-7z:before,
.token.treeview-part .entry-name.ext-bz:before,
.token.treeview-part .entry-name.ext-bz2:before,
.token.treeview-part .entry-name.ext-gz:before,
.token.treeview-part .entry-name.ext-rar:before,
.token.treeview-part .entry-name.ext-tar:before,
.token.treeview-part .entry-name.ext-tgz:before,
.token.treeview-part .entry-name.ext-zip:before {
	content: "\ea08";
}
.token.treeview-part .entry-name.ext-aac:before,
.token.treeview-part .entry-name.ext-au:before,
.token.treeview-part .entry-name.ext-cda:before,
.token.treeview-part .entry-name.ext-flac:before,
.token.treeview-part .entry-name.ext-mp3:before,
.token.treeview-part .entry-name.ext-oga:before,
.token.treeview-part .entry-name.ext-ogg:before,
.token.treeview-part .entry-name.ext-wav:before,
.token.treeview-part .entry-name.ext-wma:before {
	content: "\ea04";
}
.token.treeview-part .entry-name.ext-avi:before,
.token.treeview-part .entry-name.ext-flv:before,
.token.treeview-part .entry-name.ext-mkv:before,
.token.treeview-part .entry-name.ext-mov:before,
.token.treeview-part .entry-name.ext-mp4:before,
.token.treeview-part .entry-name.ext-mpeg:before,
.token.treeview-part .entry-name.ext-mpg:before,
.token.treeview-part .entry-name.ext-ogv:before,
.token.treeview-part .entry-name.ext-webm:before {
	content: "\ea05";
}
.token.treeview-part .entry-name.ext-pdf:before {
	content: "\ea09";
}
.token.treeview-part .entry-name.ext-xls:before,
.token.treeview-part .entry-name.ext-xlsx:before {
	content: "\ea0a";
}
.token.treeview-part .entry-name.ext-doc:before,
.token.treeview-part .entry-name.ext-docm:before,
.token.treeview-part .entry-name.ext-docx:before {
	content: "\ea0c";
}
.token.treeview-part .entry-name.ext-pps:before,
.token.treeview-part .entry-name.ext-ppt:before,
.token.treeview-part .entry-name.ext-pptx:before {
	content: "\ea0b";
}

.prism-previewer-time circle {
	fill: transparent;
	stroke: hsl(200, 10%, 20%);
	stroke-opacity: 0.9;
	stroke-width: 32;
	stroke-dasharray: 0, 500;
	stroke-dashoffset: 0;
	-webkit-animation: prism-previewer-time linear infinite 3s;
	-moz-animation: prism-previewer-time linear infinite 3s;
	-o-animation: prism-previewer-time linear infinite 3s;
	animation: prism-previewer-time linear infinite 3s;
}

`

export default Style;
