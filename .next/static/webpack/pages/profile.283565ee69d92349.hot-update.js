"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n// pages/profile.js\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Profile = ()=>{\n    _s();\n    const { currentUser } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleLogout = async ()=>{\n        try {\n            await _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth.signOut();\n            router.push(\"/signin\");\n        } catch (error) {\n            console.error(\"Logout Error\", error);\n        }\n    };\n    //   const handleDeleteAccount = async () => {\n    //     try {\n    //       await currentUser.delete();\n    //       router.push(\"/signin\");\n    //     } catch (error) {\n    //       console.error(\"Account Deletion Error\", error);\n    //     }\n    //   };\n    const handleDeleteAccount = async ()=>{\n        try {\n            await _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth.currentUser.delete();\n            // ログアウト処理やリダイレクトなど\n            router.push(\"/signin\");\n        } catch (error) {\n            if (error.code === \"auth/requires-recent-login\") {\n                // ユーザーに再ログインを促すメッセージを表示\n                alert(\"セキュリティ上の理由から、アカウントを削除するには再度ログインが必要です。\");\n            // 再ログインフォームを表示するロジック（モーダルを使用するなど）\n            } else {\n                console.error(\"アカウント削除エラー\", error);\n            }\n        }\n    };\n    const openModal = ()=>setShowModal(true);\n    const closeModal = ()=>setShowModal(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-11/12 mx-auto mt-20 md:mt-20 custom-lg:mt-20 pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-8\",\n                children: \"アカウント情報\"\n            }, void 0, false, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            currentUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg\",\n                            children: [\n                                \"メールアドレス: \",\n                                currentUser.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg\",\n                            children: \"パスワード: ********\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                className: \"mt-20 py-4 w-full rounded-md bg-red-500 text-white\",\n                children: \"ログアウト\"\n            }, void 0, false, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: openModal,\n                className: \" py-4 mt-2 w-full rounded-md bg-red-500 text-white\",\n                children: \"アカウント削除\"\n            }, void 0, false, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal-overlay\",\n                        onClick: closeModal\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg mb-3\",\n                                    children: \"アカウントを削除しますか？\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs mb-10\",\n                                    children: \"この操作は元に戻せません。\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between w-4/5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleDeleteAccount,\n                                            className: \"rounded-2xl border border-red-500 bg-red-500 text-white p-4\",\n                                            children: \"削除\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: closeModal,\n                                            className: \"rounded-2xl border border-red-500 p-4\",\n                                            children: \"キャンセル\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"rumtLLtTPVOhYKEN+J1a0ZRvAN8=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUJBQW1COzs7QUFFcUI7QUFDQTtBQUNTO0FBQ1I7QUFFekMsTUFBTUssVUFBVTs7SUFDZCxNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHSCw2REFBT0E7SUFDL0IsTUFBTUksU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUyxlQUFlO1FBQ25CLElBQUk7WUFDRixNQUFNTixpREFBSUEsQ0FBQ08sT0FBTztZQUNsQkosT0FBT0ssSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQkFBZ0JBO1FBQ2hDO0lBQ0Y7SUFFQSw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHdEQUF3RDtJQUN4RCxRQUFRO0lBQ1IsT0FBTztJQUVQLE1BQU1FLHNCQUFzQjtRQUMxQixJQUFJO1lBQ0YsTUFBTVgsaURBQUlBLENBQUNFLFdBQVcsQ0FBQ1UsTUFBTTtZQUM3QixtQkFBbUI7WUFDbkJULE9BQU9LLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkLElBQUlBLE1BQU1JLElBQUksS0FBSyw4QkFBOEI7Z0JBQy9DLHdCQUF3QjtnQkFDeEJDLE1BQ0U7WUFFRixrQ0FBa0M7WUFDcEMsT0FBTztnQkFDTEosUUFBUUQsS0FBSyxDQUFDLGNBQWNBO1lBQzlCO1FBQ0Y7SUFDRjtJQUVBLE1BQU1NLFlBQVksSUFBTVYsYUFBYTtJQUNyQyxNQUFNVyxhQUFhLElBQU1YLGFBQWE7SUFFdEMscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OztZQUN2Q2hCLDZCQUNDOztrQ0FDRSw4REFBQ2U7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFFRixXQUFVOztnQ0FBVTtnQ0FBVWhCLFlBQVltQixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRXBELDhEQUFDSjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQUVGLFdBQVU7c0NBQVU7Ozs7Ozs7Ozs7Ozs7MEJBSTdCLDhEQUFDSTtnQkFDQ0MsU0FBU2pCO2dCQUNUWSxXQUFVOzBCQUNYOzs7Ozs7MEJBR0QsOERBQUNJO2dCQUNDQyxTQUFTUjtnQkFDVEcsV0FBVTswQkFDWDs7Ozs7O1lBSUFkLDJCQUNDOztrQ0FDRSw4REFBQ2E7d0JBQUlDLFdBQVU7d0JBQWdCSyxTQUFTUDs7Ozs7O2tDQUN4Qyw4REFBQ0M7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ007b0NBQUdOLFdBQVU7OENBQWU7Ozs7Ozs4Q0FDN0IsOERBQUNFO29DQUFFRixXQUFVOzhDQUFnQjs7Ozs7OzhDQUM3Qiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDSTs0Q0FDQ0MsU0FBU1o7NENBQ1RPLFdBQVU7c0RBQ1g7Ozs7OztzREFHRCw4REFBQ0k7NENBQ0NDLFNBQVNQOzRDQUNURSxXQUFVO3NEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCO0dBakdNakI7O1FBQ29CRix5REFBT0E7UUFDaEJELGtEQUFTQTs7O0tBRnBCRztBQW1HTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLmpzPzA4ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcHJvZmlsZS5qc1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlQ29uZmlnXCI7XG5cbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhdXRoLnNpZ25PdXQoKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ25pblwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkxvZ291dCBFcnJvclwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vICAgY29uc3QgaGFuZGxlRGVsZXRlQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGF3YWl0IGN1cnJlbnRVc2VyLmRlbGV0ZSgpO1xuICAvLyAgICAgICByb3V0ZXIucHVzaChcIi9zaWduaW5cIik7XG4gIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiQWNjb3VudCBEZWxldGlvbiBFcnJvclwiLCBlcnJvcik7XG4gIC8vICAgICB9XG4gIC8vICAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhdXRoLmN1cnJlbnRVc2VyLmRlbGV0ZSgpO1xuICAgICAgLy8g44Ot44Kw44Ki44Km44OI5Yem55CG44KE44Oq44OA44Kk44Os44Kv44OI44Gq44GpXG4gICAgICByb3V0ZXIucHVzaChcIi9zaWduaW5cIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5jb2RlID09PSBcImF1dGgvcmVxdWlyZXMtcmVjZW50LWxvZ2luXCIpIHtcbiAgICAgICAgLy8g44Om44O844K244O844Gr5YaN44Ot44Kw44Kk44Oz44KS5L+D44GZ44Oh44OD44K744O844K444KS6KGo56S6XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIFwi44K744Kt44Ol44Oq44OG44Kj5LiK44Gu55CG55Sx44GL44KJ44CB44Ki44Kr44Km44Oz44OI44KS5YmK6Zmk44GZ44KL44Gr44Gv5YaN5bqm44Ot44Kw44Kk44Oz44GM5b+F6KaB44Gn44GZ44CCXCJcbiAgICAgICAgKTtcbiAgICAgICAgLy8g5YaN44Ot44Kw44Kk44Oz44OV44Kp44O844Og44KS6KGo56S644GZ44KL44Ot44K444OD44Kv77yI44Oi44O844OA44Or44KS5L2/55So44GZ44KL44Gq44Gp77yJXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44Ki44Kr44Km44Oz44OI5YmK6Zmk44Ko44Op44O8XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4gc2V0U2hvd01vZGFsKHRydWUpO1xuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMS8xMiBteC1hdXRvIG10LTIwIG1kOm10LTIwIGN1c3RvbS1sZzptdC0yMCBwYi0xMFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi04XCI+44Ki44Kr44Km44Oz44OI5oOF5aCxPC9oMT5cbiAgICAgIHtjdXJyZW50VXNlciAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+44Oh44O844Or44Ki44OJ44Os44K5OiB7Y3VycmVudFVzZXIuZW1haWx9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPuODkeOCueODr+ODvOODiTogKioqKioqKio8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxuICAgICAgICBjbGFzc05hbWU9XCJtdC0yMCBweS00IHctZnVsbCByb3VuZGVkLW1kIGJnLXJlZC01MDAgdGV4dC13aGl0ZVwiXG4gICAgICA+XG4gICAgICAgIOODreOCsOOCouOCpuODiFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cbiAgICAgICAgY2xhc3NOYW1lPVwiIHB5LTQgbXQtMiB3LWZ1bGwgcm91bmRlZC1tZCBiZy1yZWQtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgPlxuICAgICAgICDjgqLjgqvjgqbjg7Pjg4jliYrpmaRcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIiBvbkNsaWNrPXtjbG9zZU1vZGFsfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgbWItM1wiPuOCouOCq+OCpuODs+ODiOOCkuWJiumZpOOBl+OBvuOBmeOBi++8nzwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbWItMTBcIj7jgZPjga7mk43kvZzjga/lhYPjgavmiLvjgZvjgb7jgZvjgpPjgII8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy00LzVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGVBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1yZWQtNTAwIGJnLXJlZC01MDAgdGV4dC13aGl0ZSBwLTRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOWJiumZpFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXJlZC01MDAgcC00XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDjgq3jg6Pjg7Pjgrvjg6tcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlQXV0aCIsImF1dGgiLCJQcm9maWxlIiwiY3VycmVudFVzZXIiLCJyb3V0ZXIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoYW5kbGVMb2dvdXQiLCJzaWduT3V0IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZURlbGV0ZUFjY291bnQiLCJkZWxldGUiLCJjb2RlIiwiYWxlcnQiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.js\n"));

/***/ })

});