"use strict";(self.webpackChunkproject_app=self.webpackChunkproject_app||[]).push([[279],{"./src/widgets/LangSwitcher/ui/LangSwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _LangSwitcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/widgets/LangSwitcher/ui/LangSwitcher.tsx"),shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProviders_ui_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/providers/ThemeProviders/ui/ThemeContext.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"widget/LangSwitcher",component:_LangSwitcher__WEBPACK_IMPORTED_MODULE_0__.q},Light={args:{}},Dark={parameters:{theme:app_providers_ThemeProviders_ui_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.Sx.DARK},decorators:[shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.A],args:{}},__namedExportsOrder=["Light","Dark"];Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    theme: Theme.DARK\n  },\n  decorators: [ThemeDecorator],\n  args: {}\n}",...Dark.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,Ay:()=>__WEBPACK_DEFAULT_EXPORT__,IU:()=>clear,rj:()=>outline});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button{width:auto}.src-shared-ui-Button-Button-module__clear{padding:0;margin:0;border:none;background-color:inherit;padding-left:2%}.src-shared-ui-Button-Button-module__outline{padding:10px 15px;border:1px solid var(--primary-color);color:var(--primary-color);background:none}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,4CACE,UAAA,CAGF,2CACE,SAAA,CACA,QAAA,CACA,WAAA,CACA,wBAAA,CACA,eAAA,CAGF,6CACE,iBAAA,CACA,qCAAA,CACA,0BAAA,CACA,eAAA",sourcesContent:[".Button {\r\n  width: auto;\r\n}\r\n\r\n.clear {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: none;\r\n  background-color: inherit;\r\n  padding-left: 2%;\r\n}\r\n\r\n.outline {\r\n  padding: 10px 15px;\r\n  border: 1px solid var(--primary-color);\r\n  color: var(--primary-color);\r\n  background: none;\r\n}\r\n"],sourceRoot:""}]);var Button="src-shared-ui-Button-Button-module__Button",clear="src-shared-ui-Button-Button-module__clear",outline="src-shared-ui-Button-Button-module__outline";const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/LangSwitcher/ui/LangSwitcher.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,q:()=>LangSwitcher});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-LangSwitcher-ui-LangSwitcher-module__LangSwitcher{width:auto}","",{version:3,sources:["webpack://./src/widgets/LangSwitcher/ui/LangSwitcher.module.scss"],names:[],mappings:"AAAA,+DACE,UAAA",sourcesContent:[".LangSwitcher {\r\n  width: auto;\r\n}\r\n"],sourceRoot:""}]);var LangSwitcher="src-widgets-LangSwitcher-ui-LangSwitcher-module__LangSwitcher";const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/libs/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function classNames(className="",mods={},additional=[]){return[className,...additional.filter((item=>Boolean(item))),...Object.entries(mods).filter((([_,value])=>Boolean(value))).map((([key])=>key))].filter(Boolean).join(" ")}__webpack_require__.d(__webpack_exports__,{x:()=>classNames})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var Button_module_namespaceObject={};__webpack_require__.r(Button_module_namespaceObject),__webpack_require__.d(Button_module_namespaceObject,{Button:()=>Button_module.$n,clear:()=>Button_module.IU,default:()=>Button_Button_module,outline:()=>Button_module.rj});var classNames=__webpack_require__("./src/shared/libs/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Ay,options);const Button_Button_module=Button_module.Ay&&Button_module.Ay.locals?Button_module.Ay.locals:void 0,Button=props=>{const{className,children,theme,...otherProps}=props,buttonClassName=(0,classNames.x)(Button_module.$n,theme&&void 0!==theme?{[Button_module_namespaceObject[theme]]:!0}:{},[className]);return react.createElement("button",{...otherProps,className:buttonClassName},children)};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"ThemeButton"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes"]}},"./src/shared/ui/Button/Button.types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>ThemeButton});var ThemeButton=function(ThemeButton){return ThemeButton.CLEAR="clear",ThemeButton.OUTLINE="outline",ThemeButton}({})},"./src/widgets/LangSwitcher/ui/LangSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>LangSwitcher});var classNames=__webpack_require__("./src/shared/libs/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LangSwitcher_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/LangSwitcher/ui/LangSwitcher.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LangSwitcher_module.A,options);LangSwitcher_module.A&&LangSwitcher_module.A.locals&&LangSwitcher_module.A.locals;var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button_types=__webpack_require__("./src/shared/ui/Button/Button.types.ts"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx");const LangSwitcher=({className})=>{const{t,i18n}=(0,es.Bd)();return react.createElement(Button.$,{className:(0,classNames.x)(LangSwitcher_module.q,{},[]),theme:Button_types.o.CLEAR,onClick:()=>{i18n.changeLanguage("ru"===i18n.language?"en":"ru")}},t("Перевод"))};LangSwitcher.__docgenInfo={description:"",methods:[],displayName:"LangSwitcher",props:{className:{required:!1,tsType:{name:"string"},description:""}}}}}]);