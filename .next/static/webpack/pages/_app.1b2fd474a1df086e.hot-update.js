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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _useScrollDirection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useScrollDirection */ \"./components/useScrollDirection.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { currentUser } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const scrollDirection = (0,_useScrollDirection__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const goToProfile = ()=>{\n        router.push(\"/profile\");\n    };\n    const isDetailPage = router.pathname.includes(\"/movies/\") || router.pathname.includes(\"/anime/\") || router.pathname.includes(\"/profile\");\n    const isDetailPageShera = router.pathname.includes(\"/movies/\") || router.pathname.includes(\"/anime/\");\n    const handleShareFallback = ()=>{\n        const shareURL1 = \"https://twitter.com/intent/tweet?url=\".concat(encodeURIComponent(window.location.href), \"&text=\").concat(encodeURIComponent(document.title));\n        // 新しいウィンドウでSNSのシェアページを開く\n        window.open(shareURL1, \"_blank\", \"noopener,noreferrer\");\n    };\n    // 新しいウィンドウでSNSのシェアページを開く\n    window.open(shareURL, \"_blank\", \"noopener,noreferrer\");\n    // シェアボタンのイベントハンドラ\n    const handleShare = async ()=>{\n        // シェアのロジックをここに実装します\n        console.log(\"Share button clicked\");\n        if (navigator.share) {\n            try {\n                // 現在のページURLを共有\n                await navigator.share({\n                    title: document.title,\n                    text: \"この作品をチェックしてみてください！\",\n                    url: window.location.href\n                });\n                console.log(\"コンテンツを共有しました。\");\n            } catch (error) {\n                console.error(\"コンテンツの共有に失敗しました。\", error);\n            }\n        } else {\n            // Web Share APIが利用できない場合のフォールバック\n            console.log(\"Web Share APIはこのブラウザでは利用できません。\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header header__back \".concat(scrollDirection === \"down\" ? \"fade\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between w-11/12 mx-auto\",\n            children: [\n                !isDetailPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-1/2 custom-lg:w-5/12 header__logo\",\n                        src: \"/logo.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-2xl\",\n                        onClick: ()=>router.back(),\n                        children: \"＜\"\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        isDetailPageShera && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleShare,\n                            className: \"mr-4 custom-lg:mr-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faArrowUpFromBracket,\n                                className: \"text-lg custom-lg:text-2xl\"\n                            }, void 0, false, {\n                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: goToProfile,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faUser,\n                                    className: \"text-lg custom-lg:text-2xl hover:text-yellow-400\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/signin\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm px-4 py-2 rounded-md bg-blue-500 text-white\",\n                                    children: \"ログイン\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/Header.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"bPxntM15vjAQOV7TEjrPyxpdP/0=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth,\n        _useScrollDirection__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlU2Nyb2xsRGlyZWN0aW9uIGZyb20gXCIuL3VzZVNjcm9sbERpcmVjdGlvblwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtcbiAgZmFVc2VyLFxuICBmYUFycm93VXBGcm9tQnJhY2tldCxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uID0gdXNlU2Nyb2xsRGlyZWN0aW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGdvVG9Qcm9maWxlID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIik7XG4gIH07XG5cbiAgY29uc3QgaXNEZXRhaWxQYWdlID1cbiAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvbW92aWVzL1wiKSB8fFxuICAgIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9hbmltZS9cIikgfHxcbiAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvcHJvZmlsZVwiKTtcblxuICBjb25zdCBpc0RldGFpbFBhZ2VTaGVyYSA9XG4gICAgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL21vdmllcy9cIikgfHwgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FuaW1lL1wiKTtcblxuICBjb25zdCBoYW5kbGVTaGFyZUZhbGxiYWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoYXJlVVJMID0gYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgKX0mdGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC50aXRsZSl9YDtcblxuICAgIC8vIOaWsOOBl+OBhOOCpuOCo+ODs+ODieOCpuOBp1NOU+OBruOCt+OCp+OCouODmuODvOOCuOOCkumWi+OBj1xuICAgIHdpbmRvdy5vcGVuKHNoYXJlVVJMLCBcIl9ibGFua1wiLCBcIm5vb3BlbmVyLG5vcmVmZXJyZXJcIik7XG4gIH07XG5cbiAgLy8g5paw44GX44GE44Km44Kj44Oz44OJ44Km44GnU05T44Gu44K344Kn44Ki44Oa44O844K444KS6ZaL44GPXG4gIHdpbmRvdy5vcGVuKHNoYXJlVVJMLCBcIl9ibGFua1wiLCBcIm5vb3BlbmVyLG5vcmVmZXJyZXJcIik7XG5cbiAgLy8g44K344Kn44Ki44Oc44K/44Oz44Gu44Kk44OZ44Oz44OI44OP44Oz44OJ44OpXG4gIGNvbnN0IGhhbmRsZVNoYXJlID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIOOCt+OCp+OCouOBruODreOCuOODg+OCr+OCkuOBk+OBk+OBq+Wun+ijheOBl+OBvuOBmVxuICAgIGNvbnNvbGUubG9nKFwiU2hhcmUgYnV0dG9uIGNsaWNrZWRcIik7XG5cbiAgICBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyDnj77lnKjjga7jg5rjg7zjgrhVUkzjgpLlhbHmnIlcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUsXG4gICAgICAgICAgdGV4dDogXCLjgZPjga7kvZzlk4HjgpLjg4Hjgqfjg4Pjgq/jgZfjgabjgb/jgabjgY/jgaDjgZXjgYTvvIFcIixcbiAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCLjgrPjg7Pjg4bjg7Pjg4TjgpLlhbHmnInjgZfjgb7jgZfjgZ/jgIJcIik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44Kz44Oz44OG44Oz44OE44Gu5YWx5pyJ44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2ViIFNoYXJlIEFQSeOBjOWIqeeUqOOBp+OBjeOBquOBhOWgtOWQiOOBruODleOCqeODvOODq+ODkOODg+OCr1xuICAgICAgY29uc29sZS5sb2coXCJXZWIgU2hhcmUgQVBJ44Gv44GT44Gu44OW44Op44Km44K244Gn44Gv5Yip55So44Gn44GN44G+44Gb44KT44CCXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzTmFtZT17YGhlYWRlciBoZWFkZXJfX2JhY2sgJHtcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uID09PSBcImRvd25cIiA/IFwiZmFkZVwiIDogXCJcIlxuICAgICAgfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy0xMS8xMiBteC1hdXRvXCI+XG4gICAgICAgIHshaXNEZXRhaWxQYWdlID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8yIGN1c3RvbS1sZzp3LTUvMTIgaGVhZGVyX19sb2dvXCJcbiAgICAgICAgICAgICAgc3JjPVwiL2xvZ28uc3ZnXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XG4gICAgICAgICAgICAgIO+8nFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHtpc0RldGFpbFBhZ2VTaGVyYSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNoYXJlfSBjbGFzc05hbWU9XCJtci00IGN1c3RvbS1sZzptci04XCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYUFycm93VXBGcm9tQnJhY2tldH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGN1c3RvbS1sZzp0ZXh0LTJ4bFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIHtjdXJyZW50VXNlciA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvUHJvZmlsZX0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFVc2VyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBjdXN0b20tbGc6dGV4dC0yeGwgaG92ZXI6dGV4dC15ZWxsb3ctNDAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBweC00IHB5LTIgcm91bmRlZC1tZCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICDjg63jgrDjgqTjg7NcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VBdXRoIiwiTGluayIsInVzZVJvdXRlciIsInVzZVNjcm9sbERpcmVjdGlvbiIsIkZvbnRBd2Vzb21lSWNvbiIsImZhVXNlciIsImZhQXJyb3dVcEZyb21CcmFja2V0IiwiSGVhZGVyIiwiY3VycmVudFVzZXIiLCJzY3JvbGxEaXJlY3Rpb24iLCJyb3V0ZXIiLCJnb1RvUHJvZmlsZSIsInB1c2giLCJpc0RldGFpbFBhZ2UiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiaXNEZXRhaWxQYWdlU2hlcmEiLCJoYW5kbGVTaGFyZUZhbGxiYWNrIiwic2hhcmVVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkb2N1bWVudCIsInRpdGxlIiwib3BlbiIsImhhbmRsZVNoYXJlIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRvciIsInNoYXJlIiwidGV4dCIsInVybCIsImVycm9yIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW1nIiwic3JjIiwiYnV0dG9uIiwib25DbGljayIsImJhY2siLCJpY29uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});