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

/***/ "./components/Header/CustomTextInput.js":
/*!**********************************************!*\
  !*** ./components/Header/CustomTextInput.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CustomTextInput_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomTextInput.module.css */ \"./components/Header/CustomTextInput.module.css\");\n/* harmony import */ var _CustomTextInput_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CustomTextInput_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/SearchOutlined */ \"./node_modules/@mui/icons-material/SearchOutlined.js\");\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nvar useClickOutside = function(handler) {\n    _s();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var handler = function(event) {\n            if (!searchInputRaf.current.contains(event.target)) {\n                setSearchActive(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", handler);\n        return function() {\n            document.removeEventListener(\"mousedown\", handler);\n        };\n    }, []);\n};\n_s(useClickOutside, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\nfunction CustomTextInput() {\n    _s1();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), searchActive = ref[0], setSearchActive1 = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: searchActive ? (_CustomTextInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().containerActive) : (_CustomTextInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        onClick: function() {\n            return setSearchActive1(true);\n        },\n        ref: searchInputRaf,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                color: \"gray\",\n                sx: {\n                    fontSize: 18\n                }\n            }, void 0, false, {\n                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/music/components/Header/CustomTextInput.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_CustomTextInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"fname\",\n                    name: \"fname\",\n                    className: (_CustomTextInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),\n                    placeholder: \"Search for songs, artist, lyrics\",\n                    autoComplete: \"off\"\n                }, void 0, false, {\n                    fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/music/components/Header/CustomTextInput.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/music/components/Header/CustomTextInput.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            searchActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CustomTextInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().betweenLine)\n            }, void 0, false, {\n                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/music/components/Header/CustomTextInput.js\",\n                lineNumber: 41,\n                columnNumber: 24\n            }, this),\n            searchActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CustomTextInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchResultsContainer)\n            }, void 0, false, {\n                fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/music/components/Header/CustomTextInput.js\",\n                lineNumber: 42,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/benjaminkarimaei/Desktop/Portfolio/music/components/Header/CustomTextInput.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s1(CustomTextInput, \"AnR7eOlJxOp6lbomgkr9rM2UpRc=\");\n_c = CustomTextInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomTextInput);\nvar _c;\n$RefreshReg$(_c, \"CustomTextInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9DdXN0b21UZXh0SW5wdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUEwQjtBQUN3QjtBQUNrQjtBQUVwRSxJQUFNRyxlQUFlLEdBQUcsU0FBQ0MsT0FBTyxFQUFLOztJQUNuQ0osc0RBQWUsQ0FBQyxXQUFNO1FBQ3BCLElBQU1JLE9BQU8sR0FBRyxTQUFDRSxLQUFLLEVBQUs7WUFDekIsSUFBSSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxFQUFFO2dCQUNsREMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7UUFFREMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVULE9BQU8sQ0FBQyxDQUFDO1FBRWhELE9BQU8sV0FBTTtZQUNYUSxRQUFRLENBQUNFLG1CQUFtQixDQUFDLFdBQVcsRUFBRVYsT0FBTyxDQUFDLENBQUM7U0FDcEQsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDUjtHQWRLRCxlQUFlO0FBZ0JyQixTQUFTWSxlQUFlLEdBQUc7O0lBQ3pCLElBQXdDZixHQUFxQixvRkFBckJBLHFEQUFjLENBQUMsS0FBSyxDQUFDLE1BQXREaUIsWUFBWSxHQUFxQmpCLEdBQXFCLEdBQTFDLEVBQUVXLGdCQUFlLEdBQUlYLEdBQXFCLEdBQXpCO0lBRXBDLHFCQUNFLDhEQUFDa0IsS0FBRztRQUNGQyxTQUFTLEVBQUVGLFlBQVksR0FBR2hCLG9GQUFzQixHQUFHQSw4RUFBZ0I7UUFDbkVxQixPQUFPLEVBQUU7bUJBQU1YLGdCQUFlLENBQUMsSUFBSSxDQUFDO1NBQUE7UUFDcENZLEdBQUcsRUFBRWhCLGNBQWM7OzBCQUVuQiw4REFBQ0wsMEVBQWtCO2dCQUFDc0IsS0FBSyxFQUFDLE1BQU07Z0JBQUNDLEVBQUUsRUFBRTtvQkFBRUMsUUFBUSxFQUFFLEVBQUU7aUJBQUU7Ozs7O29CQUFJOzBCQUN6RCw4REFBQ0MsTUFBSTtnQkFBQ1IsU0FBUyxFQUFFbEIseUVBQVc7MEJBQzFCLDRFQUFDMkIsT0FBSztvQkFDSkMsSUFBSSxFQUFDLE1BQU07b0JBQ1hDLEVBQUUsRUFBQyxPQUFPO29CQUNWQyxJQUFJLEVBQUMsT0FBTztvQkFDWlosU0FBUyxFQUFFbEIsOEVBQWdCO29CQUMzQmdDLFdBQVcsRUFBQyxrQ0FBa0M7b0JBQzlDQyxZQUFZLEVBQUMsS0FBSzs7Ozs7d0JBQ2xCOzs7OztvQkFDRztZQUNOakIsWUFBWSxrQkFBSSw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFFbEIsZ0ZBQWtCOzs7OztvQkFBSTtZQUN0RGdCLFlBQVksa0JBQUksOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWxCLDJGQUE2Qjs7Ozs7b0JBQVE7Ozs7OztZQUNsRSxDQUNOO0NBQ0g7SUF4QlFjLGVBQWU7QUFBZkEsS0FBQUEsZUFBZTtBQTBCeEIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9DdXN0b21UZXh0SW5wdXQuanM/NTRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0N1c3RvbVRleHRJbnB1dC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgU2VhcmNoT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaE91dGxpbmVkXCI7XG5cbmNvbnN0IHVzZUNsaWNrT3V0c2lkZSA9IChoYW5kbGVyKSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFzZWFyY2hJbnB1dFJhZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgc2V0U2VhcmNoQWN0aXZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcbn07XG5cbmZ1bmN0aW9uIEN1c3RvbVRleHRJbnB1dCgpIHtcbiAgY29uc3QgW3NlYXJjaEFjdGl2ZSwgc2V0U2VhcmNoQWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c2VhcmNoQWN0aXZlID8gc3R5bGVzLmNvbnRhaW5lckFjdGl2ZSA6IHN0eWxlcy5jb250YWluZXJ9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hBY3RpdmUodHJ1ZSl9XG4gICAgICByZWY9e3NlYXJjaElucHV0UmFmfVxuICAgID5cbiAgICAgIDxTZWFyY2hPdXRsaW5lZEljb24gY29sb3I9XCJncmF5XCIgc3g9e3sgZm9udFNpemU6IDE4IH19IC8+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiZm5hbWVcIlxuICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dElucHV0fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBzb25ncywgYXJ0aXN0LCBseXJpY3NcIlxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7c2VhcmNoQWN0aXZlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmV0d2VlbkxpbmV9IC8+fVxuICAgICAge3NlYXJjaEFjdGl2ZSAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFJlc3VsdHNDb250YWluZXJ9PjwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tVGV4dElucHV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiU2VhcmNoT3V0bGluZWRJY29uIiwidXNlQ2xpY2tPdXRzaWRlIiwiaGFuZGxlciIsInVzZUVmZmVjdCIsImV2ZW50Iiwic2VhcmNoSW5wdXRSYWYiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJzZXRTZWFyY2hBY3RpdmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ3VzdG9tVGV4dElucHV0IiwidXNlU3RhdGUiLCJzZWFyY2hBY3RpdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXJBY3RpdmUiLCJjb250YWluZXIiLCJvbkNsaWNrIiwicmVmIiwiY29sb3IiLCJzeCIsImZvbnRTaXplIiwiZm9ybSIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInRleHRJbnB1dCIsInBsYWNlaG9sZGVyIiwiYXV0b0NvbXBsZXRlIiwiYmV0d2VlbkxpbmUiLCJzZWFyY2hSZXN1bHRzQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/CustomTextInput.js\n"));

/***/ })

});