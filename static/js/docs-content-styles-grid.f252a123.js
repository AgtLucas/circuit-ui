(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./docs/content/styles/components/Grid.js":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Row=e.Col=e.Grid=void 0;var b=c("./node_modules/react-emotion/dist/index.esm.js"),a=u(b),t=u(c("./src/components/Row/index.js")),n=u(c("./src/components/Grid/index.js")),d=u(c("./src/components/Col/index.js"));function u(l){return l&&l.__esModule?l:{default:l}}var i=(0,a.default)(n.default,{label:"Grid",target:"e1slv1y00"})(function(l){var e=l.theme;return(0,b.css)("background-color:",e.colors.n100,";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MvY29udGVudC9zdHlsZXMvY29tcG9uZW50cy9HcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1zQiIsImZpbGUiOiJkb2NzL2NvbnRlbnQvc3R5bGVzL2NvbXBvbmVudHMvR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L2NpcmN1aXQtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IE9yaWdpbmFsUm93IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdyc7XG5pbXBvcnQgT3JpZ2luYWxHcmlkIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQnO1xuaW1wb3J0IE9yaWdpbmFsQ29sIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbCc7XG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQoT3JpZ2luYWxHcmlkKWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubjEwMH07XG4gIGB9O1xuYDtcblxuY29uc3QgQ29sID0gc3R5bGVkKE9yaWdpbmFsQ29sKWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgJjpudGgtb2YtdHlwZShuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iNTAwfTtcbiAgICB9XG5cbiAgICAmOm50aC1vZi10eXBlKDJuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iMzAwfTtcbiAgICB9XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGB9O1xuYDtcblxuY29uc3QgUm93ID0gc3R5bGVkKE9yaWdpbmFsUm93KWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYH07XG5gO1xuXG5leHBvcnQgeyBHcmlkLCBDb2wsIFJvdyB9O1xuIl19 */label:Grid;")},";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MvY29udGVudC9zdHlsZXMvY29tcG9uZW50cy9HcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtpQyIsImZpbGUiOiJkb2NzL2NvbnRlbnQvc3R5bGVzL2NvbXBvbmVudHMvR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L2NpcmN1aXQtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IE9yaWdpbmFsUm93IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdyc7XG5pbXBvcnQgT3JpZ2luYWxHcmlkIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQnO1xuaW1wb3J0IE9yaWdpbmFsQ29sIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbCc7XG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQoT3JpZ2luYWxHcmlkKWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubjEwMH07XG4gIGB9O1xuYDtcblxuY29uc3QgQ29sID0gc3R5bGVkKE9yaWdpbmFsQ29sKWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgJjpudGgtb2YtdHlwZShuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iNTAwfTtcbiAgICB9XG5cbiAgICAmOm50aC1vZi10eXBlKDJuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iMzAwfTtcbiAgICB9XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGB9O1xuYDtcblxuY29uc3QgUm93ID0gc3R5bGVkKE9yaWdpbmFsUm93KWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYH07XG5gO1xuXG5leHBvcnQgeyBHcmlkLCBDb2wsIFJvdyB9O1xuIl19 */"),g=(0,a.default)(d.default,{label:"Col",target:"e1slv1y01"})(function(l){var e=l.theme;return(0,b.css)("&:nth-of-type(n){background-color:",e.colors.b500,";}&:nth-of-type(2n){background-color:",e.colors.b300,";}color:",e.colors.white,";text-align:center;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MvY29udGVudC9zdHlsZXMvY29tcG9uZW50cy9HcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlzQiIsImZpbGUiOiJkb2NzL2NvbnRlbnQvc3R5bGVzL2NvbXBvbmVudHMvR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L2NpcmN1aXQtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IE9yaWdpbmFsUm93IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdyc7XG5pbXBvcnQgT3JpZ2luYWxHcmlkIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQnO1xuaW1wb3J0IE9yaWdpbmFsQ29sIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbCc7XG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQoT3JpZ2luYWxHcmlkKWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubjEwMH07XG4gIGB9O1xuYDtcblxuY29uc3QgQ29sID0gc3R5bGVkKE9yaWdpbmFsQ29sKWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgJjpudGgtb2YtdHlwZShuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iNTAwfTtcbiAgICB9XG5cbiAgICAmOm50aC1vZi10eXBlKDJuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iMzAwfTtcbiAgICB9XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGB9O1xuYDtcblxuY29uc3QgUm93ID0gc3R5bGVkKE9yaWdpbmFsUm93KWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYH07XG5gO1xuXG5leHBvcnQgeyBHcmlkLCBDb2wsIFJvdyB9O1xuIl19 */label:Col;")},";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MvY29udGVudC9zdHlsZXMvY29tcG9uZW50cy9HcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVcrQiIsImZpbGUiOiJkb2NzL2NvbnRlbnQvc3R5bGVzL2NvbXBvbmVudHMvR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L2NpcmN1aXQtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IE9yaWdpbmFsUm93IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdyc7XG5pbXBvcnQgT3JpZ2luYWxHcmlkIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQnO1xuaW1wb3J0IE9yaWdpbmFsQ29sIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbCc7XG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQoT3JpZ2luYWxHcmlkKWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubjEwMH07XG4gIGB9O1xuYDtcblxuY29uc3QgQ29sID0gc3R5bGVkKE9yaWdpbmFsQ29sKWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgJjpudGgtb2YtdHlwZShuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iNTAwfTtcbiAgICB9XG5cbiAgICAmOm50aC1vZi10eXBlKDJuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iMzAwfTtcbiAgICB9XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGB9O1xuYDtcblxuY29uc3QgUm93ID0gc3R5bGVkKE9yaWdpbmFsUm93KWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYH07XG5gO1xuXG5leHBvcnQgeyBHcmlkLCBDb2wsIFJvdyB9O1xuIl19 */"),I=(0,a.default)(t.default,{label:"Row",target:"e1slv1y02"})(function(l){var e=l.theme;return(0,b.css)("color:",e.colors.white,";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MvY29udGVudC9zdHlsZXMvY29tcG9uZW50cy9HcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCc0IiLCJmaWxlIjoiZG9jcy9jb250ZW50L3N0eWxlcy9jb21wb25lbnRzL0dyaWQuanMiLCJzb3VyY2VSb290IjoiL29wdC9jaXJjdWl0LXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdyZWFjdC1lbW90aW9uJztcbmltcG9ydCBPcmlnaW5hbFJvdyBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Sb3cnO1xuaW1wb3J0IE9yaWdpbmFsR3JpZCBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkJztcbmltcG9ydCBPcmlnaW5hbENvbCBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Db2wnO1xuXG5jb25zdCBHcmlkID0gc3R5bGVkKE9yaWdpbmFsR3JpZClgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLm4xMDB9O1xuICBgfTtcbmA7XG5cbmNvbnN0IENvbCA9IHN0eWxlZChPcmlnaW5hbENvbClgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgICY6bnRoLW9mLXR5cGUobikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYjUwMH07XG4gICAgfVxuXG4gICAgJjpudGgtb2YtdHlwZSgybikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYjMwMH07XG4gICAgfVxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBgfTtcbmA7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZChPcmlnaW5hbFJvdylgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gIGB9O1xuYDtcblxuZXhwb3J0IHsgR3JpZCwgQ29sLCBSb3cgfTtcbiJdfQ== */label:Row;")},";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MvY29udGVudC9zdHlsZXMvY29tcG9uZW50cy9HcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCK0IiLCJmaWxlIjoiZG9jcy9jb250ZW50L3N0eWxlcy9jb21wb25lbnRzL0dyaWQuanMiLCJzb3VyY2VSb290IjoiL29wdC9jaXJjdWl0LXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdyZWFjdC1lbW90aW9uJztcbmltcG9ydCBPcmlnaW5hbFJvdyBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Sb3cnO1xuaW1wb3J0IE9yaWdpbmFsR3JpZCBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkJztcbmltcG9ydCBPcmlnaW5hbENvbCBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Db2wnO1xuXG5jb25zdCBHcmlkID0gc3R5bGVkKE9yaWdpbmFsR3JpZClgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLm4xMDB9O1xuICBgfTtcbmA7XG5cbmNvbnN0IENvbCA9IHN0eWxlZChPcmlnaW5hbENvbClgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgICY6bnRoLW9mLXR5cGUobikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYjUwMH07XG4gICAgfVxuXG4gICAgJjpudGgtb2YtdHlwZSgybikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYjMwMH07XG4gICAgfVxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBgfTtcbmA7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZChPcmlnaW5hbFJvdylgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gIGB9O1xuYDtcblxuZXhwb3J0IHsgR3JpZCwgQ29sLCBSb3cgfTtcbiJdfQ== */");e.Grid=i,e.Col=g,e.Row=I},"./docs/content/styles/grid.mdx":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var b,a=c("./node_modules/react/index.js"),t=(b=a)&&b.__esModule?b:{default:b},n=c("./node_modules/@mdx-js/tag/dist/index.js"),d=c("./node_modules/docz/dist/index.m.js"),u=c("./docs/utils/Wrapper.js"),i=c("./docs/content/styles/components/Grid.js");e.default=function(l){var e=l.components;!function(l,e){var c={};for(var b in l)e.indexOf(b)>=0||Object.prototype.hasOwnProperty.call(l,b)&&(c[b]=l[b])}(l,["components"]);return t.default.createElement(n.MDXTag,{name:"wrapper",components:e},t.default.createElement(n.MDXTag,{name:"h1",components:e,props:{id:"grid"}},t.default.createElement(n.MDXTag,{name:"a",components:e,parentName:"h1",props:{"aria-hidden":!0,href:"#grid"}},t.default.createElement(n.MDXTag,{name:"span",components:e,parentName:"a",props:{className:"icon-link"}},"#")),"Grid"),t.default.createElement(n.MDXTag,{name:"p",components:e},"The grid provided by Circuit UI is a float-based grid. This is because we use\nthis grid in applications where we support older browsers, such as Android\nand iOS webviews."),t.default.createElement(n.MDXTag,{name:"p",components:e},"If you need a pure CSS grid solution with the CSS-only version of Circuit, you\nwill need to use a third-party grid for that purpose."),t.default.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"static-columns"}},t.default.createElement(n.MDXTag,{name:"a",components:e,parentName:"h2",props:{"aria-hidden":!0,href:"#static-columns"}},t.default.createElement(n.MDXTag,{name:"span",components:e,parentName:"a",props:{className:"icon-link"}},"#")),"Static columns"),t.default.createElement(n.MDXTag,{name:"p",components:e},"Sometimes you need the same type of grid behavior on all viewports. For that\nscenario, you can use the normal ",t.default.createElement(n.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"span")," attribute of the grid."),t.default.createElement(d.Playground,{__position:0,__code:'<Grid>\n  <Row>\n    <Col span="2">Col 2</Col>\n    <Col span="2">Col 2</Col>\n    <Col span="2">Col 2</Col>\n    <Col span="2">Col 2</Col>\n    <Col span="2">Col 2</Col>\n    <Col span="2">Col 2</Col>\n  </Row>\n  <Row>\n    <Col span="4">Col 4</Col>\n    <Col span="4">Col 4</Col>\n    <Col span="4">Col 4</Col>\n  </Row>\n</Grid>',wrapper:u.Wrapper},t.default.createElement(i.Grid,null,t.default.createElement(i.Row,null,t.default.createElement(i.Col,{span:"2"},"Col 2"),t.default.createElement(i.Col,{span:"2"},"Col 2"),t.default.createElement(i.Col,{span:"2"},"Col 2"),t.default.createElement(i.Col,{span:"2"},"Col 2"),t.default.createElement(i.Col,{span:"2"},"Col 2"),t.default.createElement(i.Col,{span:"2"},"Col 2")),t.default.createElement(i.Row,null,t.default.createElement(i.Col,{span:"4"},"Col 4"),t.default.createElement(i.Col,{span:"4"},"Col 4"),t.default.createElement(i.Col,{span:"4"},"Col 4")))),t.default.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"responsive-columns"}},t.default.createElement(n.MDXTag,{name:"a",components:e,parentName:"h2",props:{"aria-hidden":!0,href:"#responsive-columns"}},t.default.createElement(n.MDXTag,{name:"span",components:e,parentName:"a",props:{className:"icon-link"}},"#")),"Responsive columns"),t.default.createElement(n.MDXTag,{name:"p",components:e},"You can use the following ",t.default.createElement(n.MDXTag,{name:"a",components:e,parentName:"p",props:{href:"/styles/media-queries"}},"breakpoints")," to define the\nresponsive behavior of your grid:"),t.default.createElement(n.MDXTag,{name:"ul",components:e},t.default.createElement(n.MDXTag,{name:"li",components:e,parentName:"ul"},"untilKilo"),t.default.createElement(n.MDXTag,{name:"li",components:e,parentName:"ul"},"kilo"),t.default.createElement(n.MDXTag,{name:"li",components:e,parentName:"ul"},"mega"),t.default.createElement(n.MDXTag,{name:"li",components:e,parentName:"ul"},"giga"),t.default.createElement(n.MDXTag,{name:"li",components:e,parentName:"ul"},"tera")),t.default.createElement(d.Playground,{__position:1,__code:"<Grid>\n  <Row>\n    <Col span={{ default: 12, mega: 3, kilo: 6 }}>Col 2</Col>\n    <Col span={{ default: 12, mega: 3, kilo: 6 }}>Col 2</Col>\n    <Col span={{ default: 12, mega: 3, kilo: 6 }}>Col 2</Col>\n    <Col span={{ default: 12, mega: 3, kilo: 6 }}>Col 2</Col>\n  </Row>\n</Grid>",wrapper:u.Wrapper},t.default.createElement(i.Grid,null,t.default.createElement(i.Row,null,t.default.createElement(i.Col,{span:{default:12,mega:3,kilo:6}},"Col 2"),t.default.createElement(i.Col,{span:{default:12,mega:3,kilo:6}},"Col 2"),t.default.createElement(i.Col,{span:{default:12,mega:3,kilo:6}},"Col 2"),t.default.createElement(i.Col,{span:{default:12,mega:3,kilo:6}},"Col 2")))),t.default.createElement(n.MDXTag,{name:"p",components:e},"Default refers to the smallest viewpoint."),t.default.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"skipping-columns"}},t.default.createElement(n.MDXTag,{name:"a",components:e,parentName:"h2",props:{"aria-hidden":!0,href:"#skipping-columns"}},t.default.createElement(n.MDXTag,{name:"span",components:e,parentName:"a",props:{className:"icon-link"}},"#")),"Skipping columns"),t.default.createElement(n.MDXTag,{name:"p",components:e},"Sometimes you want to skip a column. For that, you can use the ",t.default.createElement(n.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"skip")," prop on\nthe ",t.default.createElement(n.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"Col")," component."),t.default.createElement(d.Playground,{__position:2,__code:'<Grid>\n  <Row>\n    <Col span="4">Col 4</Col>\n    <Col span="4" skip="4">\n      Col 4\n    </Col>\n  </Row>\n</Grid>',wrapper:u.Wrapper},t.default.createElement(i.Grid,null,t.default.createElement(i.Row,null,t.default.createElement(i.Col,{span:"4"},"Col 4"),t.default.createElement(i.Col,{span:"4",skip:"4"},"Col 4")))),t.default.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"responsive-skipping"}},t.default.createElement(n.MDXTag,{name:"a",components:e,parentName:"h2",props:{"aria-hidden":!0,href:"#responsive-skipping"}},t.default.createElement(n.MDXTag,{name:"span",components:e,parentName:"a",props:{className:"icon-link"}},"#")),"Responsive skipping"),t.default.createElement(d.Playground,{__position:3,__code:'<Grid>\n  <Row>\n    <Col span="3">Col 3</Col>\n    <Col span="3">Col 3</Col>\n    <Col span="3" skip={{ default: 0, untilKilo: 3 }}>\n      skip mobile\n    </Col>\n  </Row>\n</Grid>',wrapper:u.Wrapper},t.default.createElement(i.Grid,null,t.default.createElement(i.Row,null,t.default.createElement(i.Col,{span:"3"},"Col 3"),t.default.createElement(i.Col,{span:"3"},"Col 3"),t.default.createElement(i.Col,{span:"3",skip:{default:0,untilKilo:3}},"skip mobile")))))}},"./src/components/Col/Col.js":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var b=d(c("./node_modules/prop-types/index.js")),a=c("./node_modules/react-emotion/dist/index.esm.js"),t=d(a),n=c("./src/components/Col/utils.js");function d(l){return l&&l.__esModule?l:{default:l}}var u=(0,t.default)("div",{target:"etlhega0",label:"Col"})(function(l){var e=l.theme,c=l.skip,b=l.span;return(0,a.css)("label:col;box-sizing:border-box;float:left;",(0,n.getBreakPointStyles)(e),";",(0,n.getSpanStyles)(e,b),";",(0,n.getSkipStyles)(e,c),";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0NvbC9Db2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2lEIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0NvbC9Db2wuanMiLCJzb3VyY2VSb290IjoiL29wdC9jaXJjdWl0LXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5cbmltcG9ydCB7IGdldFNwYW5TdHlsZXMsIGdldFNraXBTdHlsZXMsIGdldEJyZWFrUG9pbnRTdHlsZXMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lLCBza2lwLCBzcGFuIH0pID0+IGNzc2BcbiAgbGFiZWw6IGNvbDtcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbG9hdDogbGVmdDtcblxuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUpfTtcbiAgJHtnZXRTcGFuU3R5bGVzKHRoZW1lLCBzcGFuKX07XG4gICR7Z2V0U2tpcFN0eWxlcyh0aGVtZSwgc2tpcCl9O1xuYDtcblxuLyoqXG4gKiBDb250ZW50IHdyYXBwaW5nIGZvciB0aGUgR3JpZCBjb21wb25lbnQuIEFsbG93cyBzaXppbmcgYmFzZWQgb24gcHJvdmlkZWRcbiAqIHByb3BzLlxuICovXG5jb25zdCBDb2wgPSBzdHlsZWQoJ2RpdicpKGJhc2VTdHlsZXMpO1xuXG5jb25zdCBzaXppbmdQcm9wID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5vYmplY3QsXG4gIFByb3BUeXBlcy5udW1iZXIsXG4gIFByb3BUeXBlcy5zdHJpbmdcbl0pO1xuXG5Db2wucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGFtb3VudCB0byBza2lwIGZvciBhIGNvbHVtbi4gSWYgdGhlIHZhbHVlIGlzIGEgbnVtYmVyL3N0cmluZyBpdCB3aWxsXG4gICAqIGJlIGFwcGxpZWQgd2l0aCBubyBtZWRpYSBxdWVyeS4gSWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBpdCB3aWxsIGFwcGx5XG4gICAqIGVhY2ggdmFsdWUgYmFzZWQgb24gdGhlIGtleSBicmVha3BvaW50LCBJRTpcbiAgICogeyB1bnRpbEtpbG86IDYgfSB3aWxsIGNyZWF0ZSBhIHN0eWxlIGZvciB0aGUgdW50aWxLaWxvIG1lZGlhIHF1ZXJ5IHdpdGggYVxuICAgKiBza2lwIG9mIDYgY29sdW1ucy4gQWNjZXB0cyBuZWdhdGl2ZSB2YWx1ZXMgYXMgd2VsbC5cbiAgICovXG4gIHNraXA6IHNpemluZ1Byb3AsXG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IHRvIHNwYW4gZm9yIGEgY29sdW1uLiBJZiB0aGUgdmFsdWUgaXMgYSBudW1iZXIvc3RyaW5nIGl0IHdpbGxcbiAgICogYmUgYXBwbGllZCB3aXRoIG5vIG1lZGlhIHF1ZXJ5LiBJZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IGl0IHdpbGwgYXBwbHlcbiAgICogZWFjaCB2YWx1ZSBiYXNlZCBvbiB0aGUga2V5IGJyZWFrcG9pbnQsIElFOlxuICAgKiB7IHVudGlsS2lsbzogNiB9IHdpbGwgY3JlYXRlIGEgc3R5bGUgZm9yIHRoZSB1bnRpbEtpbG8gbWVkaWEgcXVlcnkgd2l0aCBhXG4gICAqIHNwYW4gb2YgNiBjb2x1bW5zLlxuICAgKi9cbiAgc3Bhbjogc2l6aW5nUHJvcFxufTtcblxuQ29sLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2tpcDogJzAnLFxuICBzcGFuOiAnMCdcbn07XG5cbi8qKlxuICogQGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBDb2w7XG4iXX0= */label:baseStyles;")},"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0NvbC9Db2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JZIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0NvbC9Db2wuanMiLCJzb3VyY2VSb290IjoiL29wdC9jaXJjdWl0LXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5cbmltcG9ydCB7IGdldFNwYW5TdHlsZXMsIGdldFNraXBTdHlsZXMsIGdldEJyZWFrUG9pbnRTdHlsZXMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lLCBza2lwLCBzcGFuIH0pID0+IGNzc2BcbiAgbGFiZWw6IGNvbDtcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbG9hdDogbGVmdDtcblxuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUpfTtcbiAgJHtnZXRTcGFuU3R5bGVzKHRoZW1lLCBzcGFuKX07XG4gICR7Z2V0U2tpcFN0eWxlcyh0aGVtZSwgc2tpcCl9O1xuYDtcblxuLyoqXG4gKiBDb250ZW50IHdyYXBwaW5nIGZvciB0aGUgR3JpZCBjb21wb25lbnQuIEFsbG93cyBzaXppbmcgYmFzZWQgb24gcHJvdmlkZWRcbiAqIHByb3BzLlxuICovXG5jb25zdCBDb2wgPSBzdHlsZWQoJ2RpdicpKGJhc2VTdHlsZXMpO1xuXG5jb25zdCBzaXppbmdQcm9wID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5vYmplY3QsXG4gIFByb3BUeXBlcy5udW1iZXIsXG4gIFByb3BUeXBlcy5zdHJpbmdcbl0pO1xuXG5Db2wucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGFtb3VudCB0byBza2lwIGZvciBhIGNvbHVtbi4gSWYgdGhlIHZhbHVlIGlzIGEgbnVtYmVyL3N0cmluZyBpdCB3aWxsXG4gICAqIGJlIGFwcGxpZWQgd2l0aCBubyBtZWRpYSBxdWVyeS4gSWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBpdCB3aWxsIGFwcGx5XG4gICAqIGVhY2ggdmFsdWUgYmFzZWQgb24gdGhlIGtleSBicmVha3BvaW50LCBJRTpcbiAgICogeyB1bnRpbEtpbG86IDYgfSB3aWxsIGNyZWF0ZSBhIHN0eWxlIGZvciB0aGUgdW50aWxLaWxvIG1lZGlhIHF1ZXJ5IHdpdGggYVxuICAgKiBza2lwIG9mIDYgY29sdW1ucy4gQWNjZXB0cyBuZWdhdGl2ZSB2YWx1ZXMgYXMgd2VsbC5cbiAgICovXG4gIHNraXA6IHNpemluZ1Byb3AsXG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IHRvIHNwYW4gZm9yIGEgY29sdW1uLiBJZiB0aGUgdmFsdWUgaXMgYSBudW1iZXIvc3RyaW5nIGl0IHdpbGxcbiAgICogYmUgYXBwbGllZCB3aXRoIG5vIG1lZGlhIHF1ZXJ5LiBJZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IGl0IHdpbGwgYXBwbHlcbiAgICogZWFjaCB2YWx1ZSBiYXNlZCBvbiB0aGUga2V5IGJyZWFrcG9pbnQsIElFOlxuICAgKiB7IHVudGlsS2lsbzogNiB9IHdpbGwgY3JlYXRlIGEgc3R5bGUgZm9yIHRoZSB1bnRpbEtpbG8gbWVkaWEgcXVlcnkgd2l0aCBhXG4gICAqIHNwYW4gb2YgNiBjb2x1bW5zLlxuICAgKi9cbiAgc3Bhbjogc2l6aW5nUHJvcFxufTtcblxuQ29sLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2tpcDogJzAnLFxuICBzcGFuOiAnMCdcbn07XG5cbi8qKlxuICogQGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBDb2w7XG4iXX0= */"),i=b.default.oneOfType([b.default.object,b.default.number,b.default.string]);u.propTypes={skip:i,span:i},u.defaultProps={skip:"0",span:"0"},e.default=u},"./src/components/Col/constants.js":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.MIN_COL_SPAN=1,e.MAX_COL_WIDTH=100,e.DEFAULT_BREAKPOINT="default"},"./src/components/Col/index.js":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var b,a=c("./src/components/Col/Col.js"),t=(b=a)&&b.__esModule?b:{default:b};e.default=t.default},"./src/components/Col/utils.js":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getSkipStyles=e.getSpanStyles=e.mapBreakpoint=e.sortByPriority=e.getBreakPointStyles=e.createSkipStyles=e.createSpanStyles=e.wrapStyles=e.isDefault=void 0;var b=function(){return function(l,e){if(Array.isArray(l))return l;if(Symbol.iterator in Object(l))return function(l,e){var c=[],b=!0,a=!1,t=void 0;try{for(var n,d=l[Symbol.iterator]();!(b=(n=d.next()).done)&&(c.push(n.value),!e||c.length!==e);b=!0);}catch(l){a=!0,t=l}finally{try{!b&&d.return&&d.return()}finally{if(a)throw t}}return c}(l,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=c("./node_modules/react-emotion/dist/index.esm.js"),t=c("./src/util/fp.js"),n=c("./src/components/Col/constants.js");function d(l,e){var c={};for(var b in l)e.indexOf(b)>=0||Object.prototype.hasOwnProperty.call(l,b)&&(c[b]=l[b]);return c}var u=e.isDefault=(0,t.isEqual)(n.DEFAULT_BREAKPOINT),i=e.wrapStyles=function(l,e,c){return u(e)?(0,a.css)(l,"label:wrapStyles;","/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0NvbC91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQjBCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0NvbC91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L2NpcmN1aXQtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdyZWFjdC1lbW90aW9uJztcblxuaW1wb3J0IHtcbiAgaXNFcXVhbCxcbiAgaXNTdHJpbmcsXG4gIGNsYW1wLFxuICB0b1BhaXJzLFxuICBoZWFkLFxuICBjb21wb3NlLFxuICBjdXJyeSxcbiAgbWFwLFxuICBtYXBWYWx1ZXMsXG4gIHZhbHVlc1xufSBmcm9tICcuLi8uLi91dGlsL2ZwJztcbmltcG9ydCB7IE1JTl9DT0xfU1BBTiwgTUFYX0NPTF9XSURUSCwgREVGQVVMVF9CUkVBS1BPSU5UIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgaXNEZWZhdWx0ID0gaXNFcXVhbChERUZBVUxUX0JSRUFLUE9JTlQpO1xuXG5leHBvcnQgY29uc3Qgd3JhcFN0eWxlcyA9IChzdHlsZXMsIGJyZWFrcG9pbnQsIHRoZW1lKSA9PlxuICBpc0RlZmF1bHQoYnJlYWtwb2ludCkgPyBjc3Moc3R5bGVzKSA6IHRoZW1lLm1xW2JyZWFrcG9pbnRdKHN0eWxlcyk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTcGFuU3R5bGVzID0gKGdyaWQsIHRoZW1lLCBzcGFuKSA9PiB7XG4gIGlmICghZ3JpZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgeyBjb2xzLCBicmVha3BvaW50IH0gPSBncmlkO1xuICBjb25zdCBzYWZlU3BhbiA9IGNsYW1wKE1JTl9DT0xfU1BBTiwgY29scywgc3Bhbik7XG5cbiAgY29uc3Qgc3R5bGVzID0gYFxuICAgIHdpZHRoOiAke01BWF9DT0xfV0lEVEggLyBjb2xzICogc2FmZVNwYW59JTtcbiAgYDtcblxuICByZXR1cm4gd3JhcFN0eWxlcyhzdHlsZXMsIGJyZWFrcG9pbnQsIHRoZW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTa2lwU3R5bGVzID0gKGdyaWQsIHRoZW1lLCBza2lwKSA9PiB7XG4gIGlmICghZ3JpZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgeyBjb2xzLCBicmVha3BvaW50IH0gPSBncmlkO1xuICBjb25zdCBzYWZlU2tpcCA9IGNsYW1wKGNvbHMgKiAtMSwgY29scyAtIDEsIHNraXApO1xuXG4gIGNvbnN0IHN0eWxlcyA9IGBcbiAgICBsZWZ0OiAke01BWF9DT0xfV0lEVEggLyBjb2xzICogc2FmZVNraXB9JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGA7XG5cbiAgcmV0dXJuIHdyYXBTdHlsZXMoc3R5bGVzLCBicmVha3BvaW50LCB0aGVtZSk7XG59O1xuXG5jb25zdCBjcmVhdGVCcmVha3BvaW50U3R5bGVzID0gY3VycnkoKHRoZW1lLCBjdXJyZW50KSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHRoZW1lLmdyaWRbY3VycmVudC5icmVha3BvaW50XTtcblxuICBpZiAoIWNvbmZpZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgc3R5bGVzID0gYFxuICAgIHBhZGRpbmctbGVmdDogY2FsYygke2NvbmZpZy5ndXR0ZXJ9IC8gMik7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYygke2NvbmZpZy5ndXR0ZXJ9IC8gMik7XG4gIGA7XG5cbiAgcmV0dXJuIHdyYXBTdHlsZXMoc3R5bGVzLCBjdXJyZW50LmJyZWFrcG9pbnQsIHRoZW1lKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybiB0aGUgZGVmYXVsdCBzdHlsZXMgZm9yIGVhY2ggYnJlYWtwb2ludCBwcm92aWRlZCBieSB0aGUgY29uZmlnXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRCcmVha1BvaW50U3R5bGVzID0gdGhlbWUgPT5cbiAgY29tcG9zZSh2YWx1ZXMsIG1hcFZhbHVlcyhjcmVhdGVCcmVha3BvaW50U3R5bGVzKHRoZW1lKSkpKHRoZW1lLmdyaWQpO1xuXG4vKipcbiAqIFNvcnQgdGhlIGtleS92YWx1ZSBiYXNlZCBvbiB0aGUgYnJlYWtwb2ludCBwcmlvcml0eVxuICogZGVmaW5lZCBvbiB0aGUgZ3JpZCBjb25maWcuXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0QnlQcmlvcml0eSA9IGN1cnJ5KChncmlkLCBpdGVyYXRlZSkgPT5cbiAgaXRlcmF0ZWUuc29ydCgoYSwgYikgPT4gZ3JpZFtoZWFkKGEpXS5wcmlvcml0eSA+PSBncmlkW2hlYWQoYildLnByaW9yaXR5KVxuKTtcblxuLyoqXG4gKiBNYXAgdGhlIHByb3ZpZGVkIGtleS92YWx1ZSBicmVha3BvaW50IGludG8gc3R5bGVzIGJhc2VkIG9uIHRoZSBncmlkL3RoZW1lXG4gKiBjb25maWcuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBCcmVha3BvaW50ID0gY3VycnkoKGZuLCBncmlkLCB0aGVtZSwgW2tleSwgdmFsdWVdKSA9PlxuICBmbihncmlkW2tleV0sIHRoZW1lLCB2YWx1ZSlcbik7XG5cbi8qKlxuICogQ29tcG9zZSB0aGUgYnJlYWtwb2ludHMgb2JqZWN0IGludG8gYW4gYXJyYXkgb2Ygc3R5bGVzLlxuICovXG5jb25zdCBjb21wb3NlQnJlYWtwb2ludHMgPSBjdXJyeSgoZm4sIGdyaWQsIHRoZW1lLCBicmVha3BvaW50cykgPT5cbiAgY29tcG9zZShtYXAobWFwQnJlYWtwb2ludChmbiwgZ3JpZCwgdGhlbWUpKSwgc29ydEJ5UHJpb3JpdHkoZ3JpZCksIHRvUGFpcnMpKFxuICAgIGJyZWFrcG9pbnRzXG4gIClcbik7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBzdHlsZXMgb2YgdGhlIHNwYW4gYmFzZWQgb24gdGhlIHByb3ZpZGVkIHZhbHVlLiBJZiBpdCBpcyBhIHN0cmluZ1xuICogcmV0dXJucyBhIHNpbmdsZSBzdHlsZSwgb3RoZXJ3aXNlIGNvbXBvc2VzIHRoZSBicmVha3BvaW50cyBpbnRvIGFuIGFycmF5IG9mXG4gKiBzdHlsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNwYW5TdHlsZXMgPSAoeyBncmlkLCAuLi50aGVtZSB9LCBzcGFuKSA9PlxuICBpc1N0cmluZyhzcGFuKVxuICAgID8gY3JlYXRlU3BhblN0eWxlcyhncmlkLmRlZmF1bHQsIHRoZW1lLCBzcGFuKVxuICAgIDogY29tcG9zZUJyZWFrcG9pbnRzKGNyZWF0ZVNwYW5TdHlsZXMsIGdyaWQsIHRoZW1lLCBzcGFuKTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHN0eWxlcyBvZiB0aGUgc2tpcCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgdmFsdWUuIElmIGl0IGlzIGEgc3RyaW5nXG4gKiByZXR1cm5zIGEgc2luZ2xlIHN0eWxlLCBvdGhlcndpc2UgY29tcG9zZXMgdGhlIGJyZWFrcG9pbnRzIGludG8gYW4gYXJyYXkgb2ZcbiAqIHN0eWxlc1xuICovXG5leHBvcnQgY29uc3QgZ2V0U2tpcFN0eWxlcyA9ICh7IGdyaWQsIC4uLnRoZW1lIH0sIHNraXApID0+XG4gIGlzU3RyaW5nKHNraXApXG4gICAgPyBjcmVhdGVTa2lwU3R5bGVzKGdyaWQuZGVmYXVsdCwgdGhlbWUsIHNraXApXG4gICAgOiBjb21wb3NlQnJlYWtwb2ludHMoY3JlYXRlU2tpcFN0eWxlcywgZ3JpZCwgdGhlbWUsIHNraXApO1xuIl19 */"):c.mq[e](l)},g=e.createSpanStyles=function(l,e,c){if(!l)return null;var b=l.cols,a=l.breakpoint,d=(0,t.clamp)(n.MIN_COL_SPAN,b,c),u="\n    width: "+n.MAX_COL_WIDTH/b*d+"%;\n  ";return i(u,a,e)},I=e.createSkipStyles=function(l,e,c){if(!l)return null;var b=l.cols,a=l.breakpoint,d=(0,t.clamp)(-1*b,b-1,c),u="\n    left: "+n.MAX_COL_WIDTH/b*d+"%;\n    position: relative;\n  ";return i(u,a,e)},o=(0,t.curry)(function(l,e){var c=l.grid[e.breakpoint];if(!c)return null;var b="\n    padding-left: calc("+c.gutter+" / 2);\n    padding-right: calc("+c.gutter+" / 2);\n  ";return i(b,e.breakpoint,l)}),G=(e.getBreakPointStyles=function(l){return(0,t.compose)(t.values,(0,t.mapValues)(o(l)))(l.grid)},e.sortByPriority=(0,t.curry)(function(l,e){return e.sort(function(e,c){return l[(0,t.head)(e)].priority>=l[(0,t.head)(c)].priority})})),s=e.mapBreakpoint=(0,t.curry)(function(l,e,c,a){var t=b(a,2),n=t[0],d=t[1];return l(e[n],c,d)}),m=(0,t.curry)(function(l,e,c,b){return(0,t.compose)((0,t.map)(s(l,e,c)),G(e),t.toPairs)(b)});e.getSpanStyles=function(l,e){var c=l.grid,b=d(l,["grid"]);return(0,t.isString)(e)?g(c.default,b,e):m(g,c,b,e)};e.getSkipStyles=function(l,e){var c=l.grid,b=d(l,["grid"]);return(0,t.isString)(e)?I(c.default,b,e):m(I,c,b,e)}},"./src/components/Grid/Grid.js":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var b,a,t,n=(b=["\n    max-width: ",";\n    padding-left: calc("," / 2);\n    padding-right: calc("," / 2);\n  "],a=["\n    max-width: ",";\n    padding-left: calc("," / 2);\n    padding-right: calc("," / 2);\n  "],Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))),d=c("./node_modules/react-emotion/dist/index.esm.js");var u=function(l,e){var c=l.grid[e];return c?l.mq[e](n,c.maxWidth,c.gutter,c.gutter):null},i=(0,((t=d)&&t.__esModule?t:{default:t}).default)("div",{target:"ea2nvp80",label:"Grid"})(function(l){var e=l.theme;return(0,d.css)("label:grid;margin:0 auto;width:100%;",u(e,"untilKilo"),";",u(e,"kilo"),";",u(e,"mega"),";",u(e,"giga"),";",u(e,"tera"),";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnFDIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L2NpcmN1aXQtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuXG5jb25zdCBnZXRCcmVha1BvaW50U3R5bGVzID0gKHRoZW1lLCBicmVha3BvaW50KSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHRoZW1lLmdyaWRbYnJlYWtwb2ludF07XG5cbiAgaWYgKCFjb25maWcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB0aGVtZS5tcVticmVha3BvaW50XWBcbiAgICBtYXgtd2lkdGg6ICR7Y29uZmlnLm1heFdpZHRofTtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoJHtjb25maWcuZ3V0dGVyfSAvIDIpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoJHtjb25maWcuZ3V0dGVyfSAvIDIpO1xuICBgO1xufTtcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lIH0pID0+IGNzc2BcbiAgbGFiZWw6IGdyaWQ7XG5cbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuXG4gICR7Z2V0QnJlYWtQb2ludFN0eWxlcyh0aGVtZSwgJ3VudGlsS2lsbycpfTtcbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAna2lsbycpfTtcbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAnbWVnYScpfTtcbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAnZ2lnYScpfTtcbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAndGVyYScpfTtcbmA7XG5cbi8qKlxuICogQSBiYXNpYyAxMi1jb2x1bW4gZ3JpZCBjb21wb25lbnQuXG4gKi9cbmNvbnN0IEdyaWQgPSBzdHlsZWQoJ2RpdicpKGJhc2VTdHlsZXMpO1xuXG4vKipcbiAqIEBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiJdfQ== */label:baseStyles;")},"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2EiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkLmpzIiwic291cmNlUm9vdCI6Ii9vcHQvY2lyY3VpdC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5cbmNvbnN0IGdldEJyZWFrUG9pbnRTdHlsZXMgPSAodGhlbWUsIGJyZWFrcG9pbnQpID0+IHtcbiAgY29uc3QgY29uZmlnID0gdGhlbWUuZ3JpZFticmVha3BvaW50XTtcblxuICBpZiAoIWNvbmZpZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoZW1lLm1xW2JyZWFrcG9pbnRdYFxuICAgIG1heC13aWR0aDogJHtjb25maWcubWF4V2lkdGh9O1xuICAgIHBhZGRpbmctbGVmdDogY2FsYygke2NvbmZpZy5ndXR0ZXJ9IC8gMik7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYygke2NvbmZpZy5ndXR0ZXJ9IC8gMik7XG4gIGA7XG59O1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBsYWJlbDogZ3JpZDtcblxuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAndW50aWxLaWxvJyl9O1xuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUsICdraWxvJyl9O1xuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUsICdtZWdhJyl9O1xuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUsICdnaWdhJyl9O1xuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUsICd0ZXJhJyl9O1xuYDtcblxuLyoqXG4gKiBBIGJhc2ljIDEyLWNvbHVtbiBncmlkIGNvbXBvbmVudC5cbiAqL1xuY29uc3QgR3JpZCA9IHN0eWxlZCgnZGl2JykoYmFzZVN0eWxlcyk7XG5cbi8qKlxuICogQGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIl19 */");e.default=i},"./src/components/Grid/index.js":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var b,a=c("./src/components/Grid/Grid.js"),t=(b=a)&&b.__esModule?b:{default:b};e.default=t.default},"./src/components/Row/Row.js":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var b,a,t,n=(b=["\n    margin-left: calc(-"," / 2);\n    margin-right: calc(-"," / 2);\n  "],a=["\n    margin-left: calc(-"," / 2);\n    margin-right: calc(-"," / 2);\n  "],Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))),d=c("./node_modules/react-emotion/dist/index.esm.js"),u=(t=d)&&t.__esModule?t:{default:t},i=c("./src/styles/style-helpers.js");var g=function(l,e){var c=l.grid[e];return c?l.mq[e](n,c.gutter,c.gutter):null},I=(0,u.default)("div",{target:"ecdwj4q0",label:"Row"})(function(l){var e=l.theme;return(0,d.css)("label:row;position:relative;",i.clearfix,";",g(e,"untilKilo"),";",g(e,"kilo"),";",g(e,"mega"),";",g(e,"giga"),";",g(e,"tera"),";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Jvdy9Sb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJxQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9Sb3cvUm93LmpzIiwic291cmNlUm9vdCI6Ii9vcHQvY2lyY3VpdC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5cbmltcG9ydCB7IGNsZWFyZml4IH0gZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlLWhlbHBlcnMnO1xuXG5jb25zdCBnZXRCcmVha1BvaW50U3R5bGVzID0gKHRoZW1lLCBicmVha3BvaW50KSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHRoZW1lLmdyaWRbYnJlYWtwb2ludF07XG5cbiAgaWYgKCFjb25maWcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB0aGVtZS5tcVticmVha3BvaW50XWBcbiAgICBtYXJnaW4tbGVmdDogY2FsYygtJHtjb25maWcuZ3V0dGVyfSAvIDIpO1xuICAgIG1hcmdpbi1yaWdodDogY2FsYygtJHtjb25maWcuZ3V0dGVyfSAvIDIpO1xuICBgO1xufTtcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lIH0pID0+IGNzc2BcbiAgbGFiZWw6IHJvdztcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICR7Y2xlYXJmaXh9O1xuXG4gICR7Z2V0QnJlYWtQb2ludFN0eWxlcyh0aGVtZSwgJ3VudGlsS2lsbycpfTtcbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAna2lsbycpfTtcbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAnbWVnYScpfTtcbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAnZ2lnYScpfTtcbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAndGVyYScpfTtcbmA7XG5cbi8qKlxuICogUm93IHdyYXBwaW5nIGZvciB0aGUgQ29sIGNvbXBvbmVudC5cbiAqL1xuY29uc3QgUm93ID0gc3R5bGVkKCdkaXYnKShiYXNlU3R5bGVzKTtcblxuLyoqXG4gKiBAY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiJdfQ== */label:baseStyles;")},"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Jvdy9Sb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNZIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL1Jvdy9Sb3cuanMiLCJzb3VyY2VSb290IjoiL29wdC9jaXJjdWl0LXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdyZWFjdC1lbW90aW9uJztcblxuaW1wb3J0IHsgY2xlYXJmaXggfSBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGUtaGVscGVycyc7XG5cbmNvbnN0IGdldEJyZWFrUG9pbnRTdHlsZXMgPSAodGhlbWUsIGJyZWFrcG9pbnQpID0+IHtcbiAgY29uc3QgY29uZmlnID0gdGhlbWUuZ3JpZFticmVha3BvaW50XTtcblxuICBpZiAoIWNvbmZpZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoZW1lLm1xW2JyZWFrcG9pbnRdYFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKC0ke2NvbmZpZy5ndXR0ZXJ9IC8gMik7XG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKC0ke2NvbmZpZy5ndXR0ZXJ9IC8gMik7XG4gIGA7XG59O1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBsYWJlbDogcm93O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJHtjbGVhcmZpeH07XG5cbiAgJHtnZXRCcmVha1BvaW50U3R5bGVzKHRoZW1lLCAndW50aWxLaWxvJyl9O1xuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUsICdraWxvJyl9O1xuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUsICdtZWdhJyl9O1xuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUsICdnaWdhJyl9O1xuICAke2dldEJyZWFrUG9pbnRTdHlsZXModGhlbWUsICd0ZXJhJyl9O1xuYDtcblxuLyoqXG4gKiBSb3cgd3JhcHBpbmcgZm9yIHRoZSBDb2wgY29tcG9uZW50LlxuICovXG5jb25zdCBSb3cgPSBzdHlsZWQoJ2RpdicpKGJhc2VTdHlsZXMpO1xuXG4vKipcbiAqIEBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgUm93O1xuIl19 */");e.default=I},"./src/components/Row/index.js":function(l,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var b,a=c("./src/components/Row/Row.js"),t=(b=a)&&b.__esModule?b:{default:b};e.default=t.default}}]);