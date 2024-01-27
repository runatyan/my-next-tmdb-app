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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _useScrollDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useScrollDirection */ \"./components/useScrollDirection.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n// import React from \"react\";\n// import useScrollDirection from \"./useScrollDirection\"; // フックをインポート\n// import Link from \"next/link\";\n// import { useRouter } from \"next/router\";\n// const Header = () => {\n//   const scrollDirection = useScrollDirection();\n//   const router = useRouter();\n//   // 詳細ページかどうかを判定する関数\n//   const isDetailPage = () => {\n//     return (\n//       router.pathname.includes(\"/movies/\") ||\n//       router.pathname.includes(\"/anime/\")\n//     );\n//   };\n//   return (\n//     <header\n//       className={`header header__back ${\n//         scrollDirection === \"down\" ? \"fade\" : \"\"\n//       }`}\n//     >\n//       <div className=\"w-11/12 py-3 mx-auto\">\n//         <div className=\"header\">\n//           {isDetailPage() ? (\n//             <button className=\"text-2xl\" onClick={() => router.back()}>\n//               ＜\n//             </button>\n//           ) : (\n//             <Link href=\"/\">\n//               <img\n//                 className=\"w-1/5 custom-lg:w-1/12 header__logo\"\n//                 src=\"/logo.svg\"\n//               />\n//             </Link>\n//           )}\n//         </div>\n//       </div>\n//     </header>\n//   );\n// };\n// export default Header;\n// components/Header.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n // このフックをインポート\n\n\nconst Header = ()=>{\n    _s();\n    const { currentUser } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const scrollDirection = (0,_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // スクロール方向のフックを使用\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleLogout = async ()=>{\n        try {\n            await _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.auth.signOut();\n            router.push(\"/signin\"); // ログアウト後のリダイレクト先\n        } catch (error) {\n            console.error(\"ログアウトエラー\", error);\n        }\n    };\n    const isDetailPage = router.pathname.includes(\"/movies/\") || router.pathname.includes(\"/anime/\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header header__back \".concat(scrollDirection === \"down\" ? \"fade\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between w-11/12 mx-auto\",\n            children: [\n                !isDetailPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-1/5 custom-lg:w-1/4 header__logo\",\n                        src: \"/logo.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                    lineNumber: 84,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-2xl\",\n                    onClick: ()=>router.back(),\n                    children: \"＜\"\n                }, void 0, false, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setDropdownOpen(!dropdownOpen),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                                    icon: faUser\n                                }, void 0, false, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, undefined),\n                            dropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/profile\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white\",\n                                            children: currentUser.email\n                                        }, void 0, false, {\n                                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleLogout,\n                                        className: \"block w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white\",\n                                        children: \"ログアウト\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/signin\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm px-4 py-2 rounded-md bg-blue-500 text-white\",\n                            children: \"ログイン\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                            lineNumber: 119,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"bgui5re1pWbmgg+ssKEwMoEHwAs=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth,\n        _useScrollDirection__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgdXNlU2Nyb2xsRGlyZWN0aW9uIGZyb20gXCIuL3VzZVNjcm9sbERpcmVjdGlvblwiOyAvLyDjg5Xjg4Pjgq/jgpLjgqTjg7Pjg53jg7zjg4hcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHNjcm9sbERpcmVjdGlvbiA9IHVzZVNjcm9sbERpcmVjdGlvbigpO1xuXG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgIC8vIOips+e0sOODmuODvOOCuOOBi+OBqeOBhuOBi+OCkuWIpOWumuOBmeOCi+mWouaVsFxuLy8gICBjb25zdCBpc0RldGFpbFBhZ2UgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9tb3ZpZXMvXCIpIHx8XG4vLyAgICAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvYW5pbWUvXCIpXG4vLyAgICAgKTtcbi8vICAgfTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxoZWFkZXJcbi8vICAgICAgIGNsYXNzTmFtZT17YGhlYWRlciBoZWFkZXJfX2JhY2sgJHtcbi8vICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uID09PSBcImRvd25cIiA/IFwiZmFkZVwiIDogXCJcIlxuLy8gICAgICAgfWB9XG4vLyAgICAgPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIHB5LTMgbXgtYXV0b1wiPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuLy8gICAgICAgICAgIHtpc0RldGFpbFBhZ2UoKSA/IChcbi8vICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC0yeGxcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT5cbi8vICAgICAgICAgICAgICAg77ycXG4vLyAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICApIDogKFxuLy8gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbi8vICAgICAgICAgICAgICAgPGltZ1xuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS81IGN1c3RvbS1sZzp3LTEvMTIgaGVhZGVyX19sb2dvXCJcbi8vICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5zdmdcIlxuLy8gICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICl9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9oZWFkZXI+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cbi8vIGNvbXBvbmVudHMvSGVhZGVyLmpzXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VTY3JvbGxEaXJlY3Rpb24gZnJvbSBcIi4vdXNlU2Nyb2xsRGlyZWN0aW9uXCI7IC8vIOOBk+OBruODleODg+OCr+OCkuOCpOODs+ODneODvOODiFxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTdGFyIGFzIGZ1bGxTdGFyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uID0gdXNlU2Nyb2xsRGlyZWN0aW9uKCk7IC8vIOOCueOCr+ODreODvOODq+aWueWQkeOBruODleODg+OCr+OCkuS9v+eUqFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF1dGguc2lnbk91dCgpO1xuICAgICAgcm91dGVyLnB1c2goXCIvc2lnbmluXCIpOyAvLyDjg63jgrDjgqLjgqbjg4jlvozjga7jg6rjg4DjgqTjg6zjgq/jg4jlhYhcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODreOCsOOCouOCpuODiOOCqOODqeODvFwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzRGV0YWlsUGFnZSA9XG4gICAgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL21vdmllcy9cIikgfHwgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FuaW1lL1wiKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzTmFtZT17YGhlYWRlciBoZWFkZXJfX2JhY2sgJHtcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uID09PSBcImRvd25cIiA/IFwiZmFkZVwiIDogXCJcIlxuICAgICAgfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy0xMS8xMiBteC1hdXRvXCI+XG4gICAgICAgIHshaXNEZXRhaWxQYWdlID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS81IGN1c3RvbS1sZzp3LTEvNCBoZWFkZXJfX2xvZ29cIlxuICAgICAgICAgICAgICBzcmM9XCIvbG9nby5zdmdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxuICAgICAgICAgICAg77ycXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICB7Y3VycmVudFVzZXIgPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERyb3Bkb3duT3BlbighZHJvcGRvd25PcGVuKX0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7ZHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgbXQtMiBweS0yIHctNDggYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3cteGwgei0yMFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIGNhcGl0YWxpemUgdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRVc2VyLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHRleHQtbGVmdCBweC00IHB5LTIgdGV4dC1zbSBjYXBpdGFsaXplIHRleHQtZ3JheS03MDAgaG92ZXI6YmctYmx1ZS01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOODreOCsOOCouOCpuODiFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBweC00IHB5LTIgcm91bmRlZC1tZCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAg44Ot44Kw44Kk44OzXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiYXV0aCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTY3JvbGxEaXJlY3Rpb24iLCJGb250QXdlc29tZUljb24iLCJmYVN0YXIiLCJmdWxsU3RhciIsIkhlYWRlciIsImN1cnJlbnRVc2VyIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwic2Nyb2xsRGlyZWN0aW9uIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0Iiwic2lnbk91dCIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJpc0RldGFpbFBhZ2UiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsImltZyIsInNyYyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwiaWNvbiIsImZhVXNlciIsInAiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});