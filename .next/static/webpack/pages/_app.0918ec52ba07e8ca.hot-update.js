"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _useScrollDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useScrollDirection */ \"./components/useScrollDirection.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n// import React from \"react\";\n// import useScrollDirection from \"./useScrollDirection\"; // フックをインポート\n// import Link from \"next/link\";\n// import { useRouter } from \"next/router\";\n// const Header = () => {\n//   const scrollDirection = useScrollDirection();\n//   const router = useRouter();\n//   // 詳細ページかどうかを判定する関数\n//   const isDetailPage = () => {\n//     return (\n//       router.pathname.includes(\"/movies/\") ||\n//       router.pathname.includes(\"/anime/\")\n//     );\n//   };\n//   return (\n//     <header\n//       className={`header header__back ${\n//         scrollDirection === \"down\" ? \"fade\" : \"\"\n//       }`}\n//     >\n//       <div className=\"w-11/12 py-3 mx-auto\">\n//         <div className=\"header\">\n//           {isDetailPage() ? (\n//             <button className=\"text-2xl\" onClick={() => router.back()}>\n//               ＜\n//             </button>\n//           ) : (\n//             <Link href=\"/\">\n//               <img\n//                 className=\"w-1/5 custom-lg:w-1/12 header__logo\"\n//                 src=\"/logo.svg\"\n//               />\n//             </Link>\n//           )}\n//         </div>\n//       </div>\n//     </header>\n//   );\n// };\n// export default Header;\n// components/Header.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n // このフックをインポート\n\n\nconst Header = ()=>{\n    _s();\n    const { currentUser } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const scrollDirection = (0,_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // スクロール方向のフックを使用\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleLogout = async ()=>{\n        try {\n            await _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.auth.signOut();\n            router.push(\"/signin\"); // ログアウト後のリダイレクト先\n        } catch (error) {\n            console.error(\"ログアウトエラー\", error);\n        }\n    };\n    const isDetailPage = router.pathname.includes(\"/movies/\") || router.pathname.includes(\"/anime/\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header header__back \".concat(scrollDirection === \"down\" ? \"fade\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between w-11/12 mx-auto\",\n            children: [\n                !isDetailPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-1/5 custom-lg:w-1/4 header__logo\",\n                        src: \"/logo.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                    lineNumber: 84,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-2xl\",\n                    onClick: ()=>router.back(),\n                    children: \"＜\"\n                }, void 0, false, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setDropdownOpen(!dropdownOpen),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faUser\n                                }, void 0, false, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, undefined),\n                            dropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/profile\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white\",\n                                            children: currentUser.email\n                                        }, void 0, false, {\n                                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleLogout,\n                                        className: \"block w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white\",\n                                        children: \"ログアウト\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/signin\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm px-4 py-2 rounded-md bg-blue-500 text-white\",\n                            children: \"ログイン\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                            lineNumber: 119,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"bgui5re1pWbmgg+ssKEwMoEHwAs=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth,\n        _useScrollDirection__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB1c2VTY3JvbGxEaXJlY3Rpb24gZnJvbSBcIi4vdXNlU2Nyb2xsRGlyZWN0aW9uXCI7IC8vIOODleODg+OCr+OCkuOCpOODs+ODneODvOODiFxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vIGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbi8vICAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uID0gdXNlU2Nyb2xsRGlyZWN0aW9uKCk7XG5cbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbi8vICAgLy8g6Kmz57Sw44Oa44O844K444GL44Gp44GG44GL44KS5Yik5a6a44GZ44KL6Zai5pWwXG4vLyAgIGNvbnN0IGlzRGV0YWlsUGFnZSA9ICgpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL21vdmllcy9cIikgfHxcbi8vICAgICAgIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9hbmltZS9cIilcbi8vICAgICApO1xuLy8gICB9O1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGhlYWRlclxuLy8gICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyIGhlYWRlcl9fYmFjayAke1xuLy8gICAgICAgICBzY3JvbGxEaXJlY3Rpb24gPT09IFwiZG93blwiID8gXCJmYWRlXCIgOiBcIlwiXG4vLyAgICAgICB9YH1cbi8vICAgICA+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEvMTIgcHktMyBteC1hdXRvXCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4vLyAgICAgICAgICAge2lzRGV0YWlsUGFnZSgpID8gKFxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxuLy8gICAgICAgICAgICAgICDvvJxcbi8vICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICkgOiAoXG4vLyAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuLy8gICAgICAgICAgICAgICA8aW1nXG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzUgY3VzdG9tLWxnOnctMS8xMiBoZWFkZXJfX2xvZ29cIlxuLy8gICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnN2Z1wiXG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgKX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2hlYWRlcj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuLy8gY29tcG9uZW50cy9IZWFkZXIuanNcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZVNjcm9sbERpcmVjdGlvbiBmcm9tIFwiLi91c2VTY3JvbGxEaXJlY3Rpb25cIjsgLy8g44GT44Gu44OV44OD44Kv44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVVzZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbZHJvcGRvd25PcGVuLCBzZXREcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzY3JvbGxEaXJlY3Rpb24gPSB1c2VTY3JvbGxEaXJlY3Rpb24oKTsgLy8g44K544Kv44Ot44O844Or5pa55ZCR44Gu44OV44OD44Kv44KS5L2/55SoXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXV0aC5zaWduT3V0KCk7XG4gICAgICByb3V0ZXIucHVzaChcIi9zaWduaW5cIik7IC8vIOODreOCsOOCouOCpuODiOW+jOOBruODquODgOOCpOODrOOCr+ODiOWFiFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44Ot44Kw44Ki44Km44OI44Ko44Op44O8XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNEZXRhaWxQYWdlID1cbiAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvbW92aWVzL1wiKSB8fCByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvYW5pbWUvXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlclxuICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyIGhlYWRlcl9fYmFjayAke1xuICAgICAgICBzY3JvbGxEaXJlY3Rpb24gPT09IFwiZG93blwiID8gXCJmYWRlXCIgOiBcIlwiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LTExLzEyIG14LWF1dG9cIj5cbiAgICAgICAgeyFpc0RldGFpbFBhZ2UgPyAoXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzUgY3VzdG9tLWxnOnctMS80IGhlYWRlcl9fbG9nb1wiXG4gICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnN2Z1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XG4gICAgICAgICAgICDvvJxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIHtjdXJyZW50VXNlciA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RHJvcGRvd25PcGVuKCFkcm9wZG93bk9wZW4pfT5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHtkcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHB5LTIgdy00OCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy14bCB6LTIwXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gY2FwaXRhbGl6ZSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFVzZXIuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1sZWZ0IHB4LTQgcHktMiB0ZXh0LXNtIGNhcGl0YWxpemUgdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg44Ot44Kw44Ki44Km44OIXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHB4LTQgcHktMiByb3VuZGVkLW1kIGJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICDjg63jgrDjgqTjg7NcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUF1dGgiLCJhdXRoIiwiTGluayIsInVzZVJvdXRlciIsInVzZVNjcm9sbERpcmVjdGlvbiIsIkZvbnRBd2Vzb21lSWNvbiIsImZhVXNlciIsIkhlYWRlciIsImN1cnJlbnRVc2VyIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwic2Nyb2xsRGlyZWN0aW9uIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0Iiwic2lnbk91dCIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJpc0RldGFpbFBhZ2UiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsImltZyIsInNyYyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwiaWNvbiIsInAiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});