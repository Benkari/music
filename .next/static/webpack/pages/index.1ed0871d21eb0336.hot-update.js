"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Leftbar_Leftbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Leftbar/Leftbar */ \"./components/Leftbar/Leftbar.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _styles_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Theme */ \"./styles/Theme.js\");\n/* harmony import */ var _components_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainSection/MainSection */ \"./components/MainSection/MainSection.js\");\n/* harmony import */ var _components_RightBar_RightBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/RightBar/RightBar */ \"./components/RightBar/RightBar.js\");\n/* harmony import */ var _FavListContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FavListContext */ \"./FavListContext.js\");\n/* harmony import */ var _functions_addToStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../functions/addToStorage */ \"./functions/addToStorage.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var drake = param.drake, omer = param.omer, sofi = param.sofi;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), favList = ref[0], setFavList = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), mainScreenDimmed = ref1[0], setMainScreenDimmed = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var favArrayFromStorage = (0,_functions_addToStorage__WEBPACK_IMPORTED_MODULE_8__.getFromStorage)();\n        if (favArrayFromStorage) setFavList(favArrayFromStorage);\n    }, []);\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), loading = ref2[0], setLoading = ref2[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var start = function() {\n            console.log(\"start\");\n            setLoading(true);\n        };\n        var end = function() {\n            console.log(\"finished\");\n            setLoading(false);\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on(\"routeChangeStart\", start);\n        next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on(\"routeChangeComplete\", end);\n        next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on(\"routeChangeError\", end);\n        return function() {\n            next_router__WEBPACK_IMPORTED_MODULE_9___default().events.off(\"routeChangeStart\", start);\n            next_router__WEBPACK_IMPORTED_MODULE_9___default().events.off(\"routeChangeComplete\", end);\n            next_router__WEBPACK_IMPORTED_MODULE_9___default().events.off(\"routeChangeError\", end);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FavListContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Provider, {\n        value: {\n            favList: favList,\n            setFavList: setFavList,\n            mainScreenDimmed: mainScreenDimmed,\n            setMainScreenDimmed: setMainScreenDimmed\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n            theme: _styles_Theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: \"Create Next App\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"description\",\n                                content: \"Generated by create next app\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                rel: \"icon\",\n                                href: \"/favicon.ico\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().leftSection),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Leftbar_Leftbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().mainCenter),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    drake: drake,\n                                    sofi: sofi\n                                }, void 0, false, {\n                                    fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().rightSection),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RightBar_RightBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    omer: omer\n                                }, void 0, false, {\n                                    fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().footer)\n                    }, void 0, false, {\n                        fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/Music FullS Stack/music/pages/index.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"5tEYi5oVJ4tRj2daP79OkntenXs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFFdkMsMkVBQWdCOzswQ0FFL0IsOERBQUM4QixLQUFHO2dDQUFDUyxTQUFTLEVBQUV2Qyw2RUFBa0I7MENBQ2hDLDRFQUFDRCxtRUFBTzs7Ozt3Q0FBRzs7Ozs7b0NBQ1A7MENBR04sOERBQUMrQixLQUFHO2dDQUFDUyxTQUFTLEVBQUV2Qyw0RUFBaUI7MENBQy9CLDRFQUFDRywyRUFBVztvQ0FBQ00sS0FBSyxFQUFFQSxLQUFLO29DQUFFRSxJQUFJLEVBQUVBLElBQUk7Ozs7O3dDQUFJOzs7OztvQ0FDckM7MENBR04sOERBQUNtQixLQUFHO2dDQUFDUyxTQUFTLEVBQUV2Qyw4RUFBbUI7MENBQ2pDLDRFQUFDSSxxRUFBUTtvQ0FBQ00sSUFBSSxFQUFFQSxJQUFJOzs7Ozt3Q0FBSTs7Ozs7b0NBQ3BCOzs7Ozs7NEJBQ0Q7a0NBRVAsOERBQUNrQyxRQUFNO3dCQUFDTCxTQUFTLEVBQUV2Qyx3RUFBYTs7Ozs7NEJBQVc7Ozs7OztvQkFDdkM7Ozs7O2dCQUNROzs7OztZQUNRLENBQzFCO0NBQ0g7R0EvRHVCUSxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGVmdGJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9MZWZ0YmFyL0xlZnRiYXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL1RoZW1lXCI7XG5pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblNlY3Rpb24vTWFpblNlY3Rpb25cIjtcbmltcG9ydCBSaWdodEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9SaWdodEJhci9SaWdodEJhclwiO1xuaW1wb3J0IHsgZ2V0T25lc0FsYnVtcyB9IGZyb20gXCIuLi9hcGlSZXF1ZXN0cy9nZXRNdXNpY2FuXCI7XG5pbXBvcnQgRmF2TGlzdENvbnRleHQgZnJvbSBcIi4uL0Zhdkxpc3RDb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRGcm9tU3RvcmFnZSB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYWRkVG9TdG9yYWdlXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZHJha2UsIG9tZXIsIHNvZmkgfSkge1xuICBjb25zdCBbZmF2TGlzdCwgc2V0RmF2TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFttYWluU2NyZWVuRGltbWVkLCBzZXRNYWluU2NyZWVuRGltbWVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZhdkFycmF5RnJvbVN0b3JhZ2UgPSBnZXRGcm9tU3RvcmFnZSgpO1xuICAgIGlmIChmYXZBcnJheUZyb21TdG9yYWdlKSBzZXRGYXZMaXN0KGZhdkFycmF5RnJvbVN0b3JhZ2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzdGFydFwiKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydCk7XG4gICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgZW5kKTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCBlbmQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgc3RhcnQpO1xuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGVuZCk7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgZW5kKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmF2TGlzdENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGZhdkxpc3QsIHNldEZhdkxpc3QsIG1haW5TY3JlZW5EaW1tZWQsIHNldE1haW5TY3JlZW5EaW1tZWQgfX1cbiAgICA+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIHsvKiBMZWZ0YmFyICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0U2VjdGlvbn0+XG4gICAgICAgICAgICAgIDxMZWZ0YmFyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIE1haW4gQ2VudGVyICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ2VudGVyfT5cbiAgICAgICAgICAgICAgPE1haW5TZWN0aW9uIGRyYWtlPXtkcmFrZX0gc29maT17c29maX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUmlnaHRiYXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0U2VjdGlvbn0+XG4gICAgICAgICAgICAgIDxSaWdodEJhciBvbWVyPXtvbWVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PjwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0Zhdkxpc3RDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleCkge1xuICBjb25zdCBkcmFrZSA9IGF3YWl0IGdldE9uZXNBbGJ1bXMoXCI5ZmZmMmY4YS0yMWU2LTQ3ZGUtYTJiOC03ZjQ0OTkyOWQ0M2ZcIik7XG4gIGNvbnN0IG9tZXIgPSBhd2FpdCBnZXRPbmVzQWxidW1zKFwiMDZkZDA2YTgtNTkxNS00YjIzLThjZDYtZDUyYjc0MjMyZTZmXCIpO1xuICBjb25zdCBzb2ZpID0gYXdhaXQgZ2V0T25lc0FsYnVtcyhcIjRhYzcyM2Y0LThiZTgtNGEwZC1hM2FlLWQ1ZGRhMjBmMGE5YVwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkcmFrZTogZHJha2UsXG4gICAgICBvbWVyOiBvbWVyLFxuICAgICAgc29maTogc29maSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkxlZnRiYXIiLCJzdHlsZXMiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJNYWluU2VjdGlvbiIsIlJpZ2h0QmFyIiwiRmF2TGlzdENvbnRleHQiLCJnZXRGcm9tU3RvcmFnZSIsIlJvdXRlciIsIkhvbWUiLCJkcmFrZSIsIm9tZXIiLCJzb2ZpIiwidXNlU3RhdGUiLCJmYXZMaXN0Iiwic2V0RmF2TGlzdCIsIm1haW5TY3JlZW5EaW1tZWQiLCJzZXRNYWluU2NyZWVuRGltbWVkIiwidXNlRWZmZWN0IiwiZmF2QXJyYXlGcm9tU3RvcmFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwiZW5kIiwiZXZlbnRzIiwib24iLCJvZmYiLCJQcm92aWRlciIsInZhbHVlIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJsZWZ0U2VjdGlvbiIsIm1haW5DZW50ZXIiLCJyaWdodFNlY3Rpb24iLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});