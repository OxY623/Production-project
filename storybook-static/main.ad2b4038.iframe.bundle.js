(self.webpackChunkproject_app=self.webpackChunkproject_app||[]).push([[792],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./config/storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'*{margin:0;padding:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: consolas, "Times New Roman", serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--navbar-height: 50px;--side-bar-width: 300px;--side-bar-width-collapsed: 80px}.app.light{--bg-color: rgb(255 255 255);--inverted-bg-color: rgb(10 162 233);--primary-color: rgb(224 158 14 / 66.4%);--secondary-color: rgb(78 5 92);--color-warning: rgb(252 5 5)}.app.dark{--bg-color: rgb(55 4 105);--inverted-bg-color: rgb(243 11 224);--primary-color: rgb(11 201 226);--secondary-color: rgb(169 13 231);--color-warning: rgb(252 5 5)}.app{font-size:var(--font-m);background-color:var(--bg-color);color:var(--primary-color);height:100vh}.content-page{display:flex;flex-direction:row;justify-content:baseline}.page-wrapper{flex-grow:1;padding:20px}',"",{version:3,sources:["webpack://./src/app/styles/reset.scss","webpack://./src/app/styles/variables/global.scss","webpack://./src/app/styles/themes/normal.scss","webpack://./src/app/styles/themes/dark.scss","webpack://./src/app/styles/index.scss"],names:[],mappings:"AAAA,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,6BAIE,QAAA,CACA,YAAA,CCXF,MACE,sDAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CAGA,qBAAA,CACA,uBAAA,CACA,gCAAA,CCZF,WACE,4BAAA,CACA,oCAAA,CACA,wCAAA,CACA,+BAAA,CACA,6BAAA,CCLF,UACE,yBAAA,CACA,oCAAA,CACA,gCAAA,CACA,kCAAA,CACA,6BAAA,CCQF,KACE,uBAAA,CACA,gCAAA,CACA,0BAAA,CACA,YAAA,CAGF,cACE,YAAA,CACA,kBAAA,CACA,wBAAA,CAGF,cACE,WAAA,CACA,YAAA",sourcesContent:["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n}\r\n",':root {\r\n  --font-family-main: consolas, "Times New Roman", serif;\r\n  --font-size-m: 16px;\r\n  --font-line-m: 24px;\r\n  --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\r\n  --font-size-l: 24px;\r\n  --font-line-l: 32px;\r\n  --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\r\n\r\n  /* Sizes */\r\n  --navbar-height: 50px;\r\n  --side-bar-width: 300px;\r\n  --side-bar-width-collapsed: 80px;\r\n}\r\n',".app.light {\r\n  --bg-color: rgb(255 255 255);\r\n  --inverted-bg-color: rgb(10 162 233);\r\n  --primary-color: rgb(224 158 14 / 66.4%);\r\n  --secondary-color: rgb(78 5 92);\r\n  --color-warning: rgb(252 5 5);\r\n}\r\n",".app.dark {\r\n  --bg-color: rgb(55 4 105);\r\n  --inverted-bg-color: rgb(243 11 224);\r\n  --primary-color: rgb(11 201 226);\r\n  --secondary-color: rgb(169 13 231);\r\n  --color-warning: rgb(252 5 5);\r\n}\r\n",'@use "./reset" as *;\r\n@use "./variables/global" as *;\r\n@use "./themes/normal" as *;\r\n@use "./themes/dark" as *;\r\n\r\n// @import "./reset";\r\n// @import "./variables/global";\r\n// @import "./themes/normal";\r\n// @import "./themes/dark";\r\n\r\n// @use "../../shared/styles/_mixins.scss";\r\n// @use "../../shared/styles/_variables.scss";\r\n\r\n.app {\r\n  font-size: var(--font-m);\r\n  background-color: var(--bg-color);\r\n  color: var(--primary-color);\r\n  height: 100vh;\r\n}\r\n\r\n.content-page {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: baseline;\r\n}\r\n\r\n.page-wrapper {\r\n  flex-grow: 1;\r\n  padding: 20px;\r\n}\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/app/styles/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals},"./config/storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>storybook_preview});var ThemeContext=__webpack_require__("./src/app/providers/ThemeProviders/ui/ThemeContext.ts"),react=(__webpack_require__("./src/app/styles/index.scss"),__webpack_require__("./node_modules/react/index.js"));const StyleDecorator=Story=>react.createElement("div",null,react.createElement(Story,null));StyleDecorator.__docgenInfo={description:"",methods:[],displayName:"StyleDecorator"};var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),chunk_K6AXKMTT=__webpack_require__("./node_modules/react-router/dist/development/chunk-K6AXKMTT.mjs");const RouterDecorator=story=>react.createElement(chunk_K6AXKMTT.Kd,null,story());RouterDecorator.__docgenInfo={description:"",methods:[],displayName:"RouterDecorator"};const storybook_preview={parameters:{globals:{theme:ThemeContext.Sx.LIGHT},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[StyleDecorator,ThemeDecorator.n,RouterDecorator]}},"./src/app/providers/ThemeProviders/ui/ThemeContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Dx:()=>ThemeContext,QL:()=>LOCAL_STORAGE_THEME_KEY,Sx:()=>Theme});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),Theme=function(Theme){return Theme.LIGHT="light",Theme.DARK="dark",Theme}({});const ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),LOCAL_STORAGE_THEME_KEY="theme"},"./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,n:()=>ThemeDecorator});var app_providers_ThemeProviders_ui_ThemeContext__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/providers/ThemeProviders/ui/ThemeContext.ts"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/app/styles/index.scss"),__webpack_require__("./node_modules/react/index.js"));const ThemeDecorator=(Story,context)=>{const theme=context.parameters.theme||context.parameters.globals.theme||app_providers_ThemeProviders_ui_ThemeContext__WEBPACK_IMPORTED_MODULE_0__.Sx.LIGHT;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:`app ${theme}`},react__WEBPACK_IMPORTED_MODULE_2__.createElement(Story,null))},__WEBPACK_DEFAULT_EXPORT__=ThemeDecorator;ThemeDecorator.__docgenInfo={description:"",methods:[],displayName:"ThemeDecorator"}},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./pages/AboutPage/ui/AboutPage.stories":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",365,14],"./pages/AboutPage/ui/AboutPage.stories.tsx":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",365,14],"./pages/MainPage/ui/MainPage.stories":["./src/pages/MainPage/ui/MainPage.stories.tsx",365,38],"./pages/MainPage/ui/MainPage.stories.tsx":["./src/pages/MainPage/ui/MainPage.stories.tsx",365,38],"./shared/ui/AppLink/AppLink.stories":["./src/shared/ui/AppLink/AppLink.stories.tsx",739],"./shared/ui/AppLink/AppLink.stories.tsx":["./src/shared/ui/AppLink/AppLink.stories.tsx",739],"./shared/ui/Button/Button.stories":["./src/shared/ui/Button/Button.stories.tsx",425],"./shared/ui/Button/Button.stories.tsx":["./src/shared/ui/Button/Button.stories.tsx",425],"./shared/ui/LoadingSpinner/LoadingSpinner.stories":["./src/shared/ui/LoadingSpinner/LoadingSpinner.stories.tsx",911],"./shared/ui/LoadingSpinner/LoadingSpinner.stories.tsx":["./src/shared/ui/LoadingSpinner/LoadingSpinner.stories.tsx",911],"./widgets/LangSwitcher/ui/LangSwitcher.stories":["./src/widgets/LangSwitcher/ui/LangSwitcher.stories.tsx",365,279],"./widgets/LangSwitcher/ui/LangSwitcher.stories.tsx":["./src/widgets/LangSwitcher/ui/LangSwitcher.stories.tsx",365,279],"./widgets/Navbar/ui/Navbar.stories":["./src/widgets/Navbar/ui/Navbar.stories.tsx",365,207],"./widgets/Navbar/ui/Navbar.stories.tsx":["./src/widgets/Navbar/ui/Navbar.stories.tsx",365,207],"./widgets/PageLoading/ui/PageLoading.stories":["./src/widgets/PageLoading/ui/PageLoading.stories.tsx",797],"./widgets/PageLoading/ui/PageLoading.stories.tsx":["./src/widgets/PageLoading/ui/PageLoading.stories.tsx",797],"./widgets/Sidebar/ui/Sidebar.stories":["./src/widgets/Sidebar/ui/Sidebar.stories.tsx",365,959],"./widgets/Sidebar/ui/Sidebar.stories.tsx":["./src/widgets/Sidebar/ui/Sidebar.stories.tsx",365,959],"./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories":["./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",411],"./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":["./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",411]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[620],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);