(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{268:function(module,exports,__webpack_require__){__webpack_require__(269),__webpack_require__(415),module.exports=__webpack_require__(416)},333:function(module,exports){},416:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(267);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(606)],module)}.call(this,__webpack_require__(417)(module))},606:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":607};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=606},607:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(33)),Navbar_1=__webpack_require__(608);exports.default={title:"Navbar"};var Logo=function(){return React.createElement("img",{src:"https://avatars1.githubusercontent.com/u/50220511?s=200&v=4"})};exports.simple=function(){return React.createElement(Navbar_1.Navbar,{bgColor:"#e2e2e2",logoContent:React.createElement(Logo,null)})}},608:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(33)),react_flexbox_grid_1=__webpack_require__(609);exports.Navbar=function(_a){var bgColor=_a.bgColor,height=(_a.logoContent,_a.sectionContent,_a.menuContent,_a.height),mainStyle=__assign(__assign({display:"flex"},bgColor&&{backgroundColor:bgColor}),height?{height:height}:{height:50});return react_1.default.createElement("div",{style:mainStyle},react_1.default.createElement(react_flexbox_grid_1.Grid,{style:{width:"100%"}},react_1.default.createElement(react_flexbox_grid_1.Row,{middle:"xs"},react_1.default.createElement(react_flexbox_grid_1.Col,{xs:3},"logo"),react_1.default.createElement(react_flexbox_grid_1.Col,{xs:6},"sections"),react_1.default.createElement(react_flexbox_grid_1.Col,{xs:3},"menu"))))}}},[[268,1,2]]]);
//# sourceMappingURL=main.b336c840e0022a61840b.bundle.js.map