"use strict";(self.webpackChunkproject_app=self.webpackChunkproject_app||[]).push([[207],{"./src/widgets/Navbar/ui/Navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navbar_stories});var classNames=__webpack_require__("./src/shared/libs/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Navbar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Navbar_module.Ay,options);Navbar_module.Ay&&Navbar_module.Ay.locals&&Navbar_module.Ay.locals;var AppLink=__webpack_require__("./src/shared/ui/AppLink/AppLink.tsx"),AppLink_types=__webpack_require__("./src/shared/ui/AppLink/AppLink.types.ts"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");const Navbar=({className})=>{const{t}=(0,es.Bd)("navbar");return react.createElement("nav",{className:(0,classNames.x)(Navbar_module.v_,{},[])},react.createElement("ul",{className:Navbar_module.qj},react.createElement("li",null,react.createElement(AppLink.A,{theme:AppLink_types.N.SECONDARY,className:Navbar_module.W8,to:"/"},t("Главная станица"))),react.createElement("li",null,react.createElement(AppLink.A,{theme:AppLink_types.N.SECONDARY,className:Navbar_module.W8,to:"/about"},t("О нас")))))};Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/providers/ThemeProviders/ui/ThemeContext.ts");const Navbar_stories={title:"widget/Navbar",component:Navbar},Light={args:{}},Dark={parameters:{theme:ThemeContext.Sx.DARK},decorators:[ThemeDecorator.A],args:{}},__namedExportsOrder=["Light","Dark"];Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    theme: Theme.DARK\n  },\n  decorators: [ThemeDecorator],\n  args: {}\n}",...Dark.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,Ez:()=>AppLink,Rm:()=>secondary,wv:()=>red,zB:()=>primary});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-AppLink-AppLink-module__AppLink{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__primary{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__secondary{color:var(--secondary-color)}.src-shared-ui-AppLink-AppLink-module__red{color:var(--color-warning)}","",{version:3,sources:["webpack://./src/shared/ui/AppLink/AppLink.module.scss"],names:[],mappings:"AAAA,+CACE,0BAAA,CAGF,+CACE,0BAAA,CAGF,iDACE,4BAAA,CAGF,2CACE,0BAAA",sourcesContent:[".AppLink {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.primary {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.secondary {\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.red {\r\n  color: var(--color-warning);\r\n}\r\n"],sourceRoot:""}]);var AppLink="src-shared-ui-AppLink-AppLink-module__AppLink",primary="src-shared-ui-AppLink-AppLink-module__primary",secondary="src-shared-ui-AppLink-AppLink-module__secondary",red="src-shared-ui-AppLink-AppLink-module__red";const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,W8:()=>mainLink,qj:()=>navbar__links,v_:()=>navbar});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Navbar-ui-Navbar-module__navbar{width:100%;height:var(--navbar-height);background:var(--inverted-bg-color);padding:10px;display:flex;align-items:center;justify-content:end}.src-widgets-Navbar-ui-Navbar-module__navbar__links{display:flex;flex-direction:row;align-items:center;justify-content:end;gap:10px}.src-widgets-Navbar-ui-Navbar-module__mainLink{margin-right:5px}","",{version:3,sources:["webpack://./src/widgets/Navbar/ui/Navbar.module.scss"],names:[],mappings:"AAAA,6CACE,UAAA,CACA,2BAAA,CACA,mCAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,mBAAA,CAGF,oDACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,mBAAA,CACA,QAAA,CAGF,+CACE,gBAAA",sourcesContent:[".navbar {\r\n  width: 100%;\r\n  height: var(--navbar-height);\r\n  background: var(--inverted-bg-color);\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: end;\r\n}\r\n\r\n.navbar__links {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: end;\r\n  gap: 10px;\r\n}\r\n\r\n.mainLink {\r\n  margin-right: 5px;\r\n}\r\n"],sourceRoot:""}]);var navbar="src-widgets-Navbar-ui-Navbar-module__navbar",navbar__links="src-widgets-Navbar-ui-Navbar-module__navbar__links",mainLink="src-widgets-Navbar-ui-Navbar-module__mainLink";const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/libs/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function classNames(className="",mods={},additional=[]){return[className,...additional.filter((item=>Boolean(item))),...Object.entries(mods).filter((([_,value])=>Boolean(value))).map((([key])=>key))].filter(Boolean).join(" ")}__webpack_require__.d(__webpack_exports__,{x:()=>classNames})},"./src/shared/ui/AppLink/AppLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppLink_AppLink});var AppLink_module_namespaceObject={};__webpack_require__.r(AppLink_module_namespaceObject),__webpack_require__.d(AppLink_module_namespaceObject,{AppLink:()=>AppLink_module.Ez,default:()=>AppLink_AppLink_module,primary:()=>AppLink_module.zB,red:()=>AppLink_module.wv,secondary:()=>AppLink_module.Rm});var react=__webpack_require__("./node_modules/react/index.js"),chunk_K6AXKMTT=__webpack_require__("./node_modules/react-router/dist/development/chunk-K6AXKMTT.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AppLink_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AppLink_module.Ay,options);const AppLink_AppLink_module=AppLink_module.Ay&&AppLink_module.Ay.locals?AppLink_module.Ay.locals:void 0;var classNames=__webpack_require__("./src/shared/libs/classNames/classNames.ts"),AppLink_types=__webpack_require__("./src/shared/ui/AppLink/AppLink.types.ts");const AppLink=props=>{const{to,className,theme=AppLink_types.N.PRIMARY,children,...otherProps}=props;return react.createElement(chunk_K6AXKMTT.N_,{to,className:(0,classNames.x)(AppLink_module.Ez,{},[className,AppLink_module_namespaceObject[theme]]),...otherProps},children)},AppLink_AppLink=AppLink;AppLink.__docgenInfo={description:"",methods:[],displayName:"AppLink",props:{className:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"AppLinkTheme"},description:""}},composes:["LinkProps"]}},"./src/shared/ui/AppLink/AppLink.types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AppLinkTheme});var AppLinkTheme=function(AppLinkTheme){return AppLinkTheme.PRIMARY="primary",AppLinkTheme.SECONDARY="secondary",AppLinkTheme.RED="red",AppLinkTheme}({})}}]);