(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./docs/content/components/hr.mdx":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=i(n("./node_modules/react/index.js")),c=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),l=i(n("./src/components/Hr/Hr.js")),o=(i(n("./docs/utils/PropTable.js")),n("./docs/utils/Wrapper.js"));function i(e){return e&&e.__esModule?e:{default:e}}a.default=function(e){var a=e.components;!function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}(e,["components"]);return t.default.createElement(c.MDXTag,{name:"wrapper",components:a},t.default.createElement(c.MDXTag,{name:"h1",components:a,props:{id:"hr"}},t.default.createElement(c.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#hr"}},t.default.createElement(c.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"HR"),t.default.createElement(s.Playground,{__position:0,__code:"<Hr />",wrapper:o.Wrapper},t.default.createElement(l.default,null)),t.default.createElement(c.MDXTag,{name:"h2",components:a,props:{id:"best-practices"}},t.default.createElement(c.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#best-practices"}},t.default.createElement(c.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Best practices"),t.default.createElement(c.MDXTag,{name:"h2",components:a,props:{id:"usage-guidelines"}},t.default.createElement(c.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#usage-guidelines"}},t.default.createElement(c.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Usage guidelines"))}},"./src/components/Hr/Hr.js":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t,c=n("./node_modules/react-emotion/dist/index.esm.js");var s=(0,((t=c)&&t.__esModule?t:{default:t}).default)("hr",{target:"e1f6fbo30",label:"Hr"})(function(e){var a=e.theme;return(0,c.css)("label:hr;border:1px solid ",a.colors.n300,";margin-top:",a.spacings.mega,";margin-bottom:",a.spacings.mega,";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0hyL0hyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVxQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9Ici9Ici5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L2NpcmN1aXQtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBsYWJlbDogaHI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLm4zMDB9O1xuICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmdzLm1lZ2F9O1xuICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLm1lZ2F9O1xuYDtcblxuLyoqXG4gKiBBIGhvcml6b250YWwgcnVsZSB0byB2aXN1YWxseSBhbmQgc2VtYW50aWNhbGx5IHNlcGFyYXRlIHRleHQuXG4gKi9cbmNvbnN0IEhyID0gc3R5bGVkKCdocicpKGJhc2VTdHlsZXMpO1xuXG4vKipcbiAqIEBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgSHI7XG4iXX0= */label:baseStyles;")},"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0hyL0hyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlXIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0hyL0hyLmpzIiwic291cmNlUm9vdCI6Ii9vcHQvY2lyY3VpdC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIGxhYmVsOiBocjtcbiAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMubjMwMH07XG4gIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZ3MubWVnYX07XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MubWVnYX07XG5gO1xuXG4vKipcbiAqIEEgaG9yaXpvbnRhbCBydWxlIHRvIHZpc3VhbGx5IGFuZCBzZW1hbnRpY2FsbHkgc2VwYXJhdGUgdGV4dC5cbiAqL1xuY29uc3QgSHIgPSBzdHlsZWQoJ2hyJykoYmFzZVN0eWxlcyk7XG5cbi8qKlxuICogQGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBIcjtcbiJdfQ== */");a.default=s}}]);