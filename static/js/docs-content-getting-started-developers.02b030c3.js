(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./docs/content/getting-started/developers.mdx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n("./node_modules/react/index.js"),m=(a=o)&&a.__esModule?a:{default:a},p=n("./node_modules/@mdx-js/tag/dist/index.js");t.default=function(e){var t=e.components;!function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}(e,["components"]);return m.default.createElement(p.MDXTag,{name:"wrapper",components:t},m.default.createElement(p.MDXTag,{name:"h1",components:t,props:{id:"developers"}},m.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"h1",props:{"aria-hidden":!0,href:"#developers"}},m.default.createElement(p.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Developers"),m.default.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"install"}},m.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#install"}},m.default.createElement(p.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Install"),m.default.createElement(p.MDXTag,{name:"p",components:t},"You can install Circuit via npm or yarn. Today we do not have a functioning\nbuild for distribution, so you should install the latest release\nfrom github by tag."),m.default.createElement(p.MDXTag,{name:"p",components:t},m.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/sumup/circuit-ui/releases"}},"See all releases on Github")),m.default.createElement(p.MDXTag,{name:"p",components:t},"Circuit also uses ",m.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/emotion-js/emotion"}},"emotion")," and ",m.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/emotion-js/emotion-theming"}},"emotion-theming"),"."),m.default.createElement(p.MDXTag,{name:"pre",components:t},m.default.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"npm install git+https://github.com/sumup/circuit-ui.git#development-0.0.4 emotion react-emotion emotion-theming\n")),m.default.createElement(p.MDXTag,{name:"pre",components:t},m.default.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"yarn add git+https://github.com/sumup/circuit-ui.git#development-0.0.4 emotion react-emotion emotion-theming\n")),m.default.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"configuring-the-theme"}},m.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#configuring-the-theme"}},m.default.createElement(p.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Configuring the theme"),m.default.createElement(p.MDXTag,{name:"p",components:t},"At the root of your application, you should tell your app which theme to use.\nIn most cases, you will want to use the SumUp default theme."),m.default.createElement(p.MDXTag,{name:"pre",components:t},m.default.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"import { ThemeProvider } from 'emotion-theming';\nimport { standard } from 'circuit-ui/themes';\nimport { Button } from 'circuit-ui';\n\nconst App = () => (\n  <ThemeProvider theme={standard}>\n    <Button primary>Click me</Button>\n  </ThemeProvider>\n);\n\nexport default App;\n")),m.default.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"using-components"}},m.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#using-components"}},m.default.createElement(p.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Using components"),m.default.createElement(p.MDXTag,{name:"p",components:t},"Simply import components by name from the ",m.default.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"circuit-ui")," package, as demonstrated\nabove."),m.default.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"using-helpers"}},m.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#using-helpers"}},m.default.createElement(p.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Using helpers"),m.default.createElement(p.MDXTag,{name:"p",components:t},"There are a few helpers you may want to use within Circuit."),m.default.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"injecting-global-styles"}},m.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#injecting-global-styles"}},m.default.createElement(p.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Injecting global styles"),m.default.createElement(p.MDXTag,{name:"p",components:t},"Sometimes you may need to apply global styles to your page. Here is how you can do this with the utilities provided by Circuit UI."),m.default.createElement(p.MDXTag,{name:"pre",components:t},m.default.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"import { standard } from 'circuit-ui/themes';\nimport { globalStyles } from 'circuit-ui/styles';\n\nconst customStyles = `\n  body {\n    color: red;\n  }\n`;\n\nglobalStyles({ theme: standard, custom: customStyles });\n")))}}}]);