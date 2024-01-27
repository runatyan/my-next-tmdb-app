"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n// // components / SignIn.js;\n// import React, { useState } from \"react\";\n// import { useRouter } from \"next/router\";\n// import { signInWithEmailAndPassword } from \"firebase/auth\";\n// import { auth } from \"../firebaseConfig\"; // Firebase設定ファイルをインポート\n// const SignIn = () => {\n//   const [email, setEmail] = useState(\"\");\n//   const [password, setPassword] = useState(\"\");\n//   const router = useRouter();\n//   const handleSignIn = async (e) => {\n//     e.preventDefault();\n//     try {\n//       await signInWithEmailAndPassword(auth, email, password);\n//       router.push(\"/\"); // ログイン後のリダイレクト先\n//     } catch (error) {\n//       console.error(error.message);\n//     }\n//   };\n//   return (\n//     <div className=\"w-11/12 mx-auto mt-20 pb-10\">\n//       <form onSubmit={handleSignIn}>\n//         <input\n//           type=\"email\"\n//           value={email}\n//           onChange={(e) => setEmail(e.target.value)}\n//           placeholder=\"メールアドレス\"\n//           style={{\n//             color: \"#000\",\n//           }}\n//           className=\"w-full p-3 mb-5\"\n//         />\n//         <input\n//           type=\"password\"\n//           value={password}\n//           onChange={(e) => setPassword(e.target.value)}\n//           placeholder=\"パスワード\"\n//           style={{\n//             color: \"#000\",\n//           }}\n//           className=\"w-full p-3 mb-5\"\n//         />\n//         <button className=\"w-full p-3\" type=\"submit\">\n//           ログイン\n//         </button>\n//       </form>\n//     </div>\n//   );\n// };\n// export default SignIn;\n// components/SignIn.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SignIn = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSignIn = async (e)=>{\n        e.preventDefault();\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__.auth, email, password);\n            router.push(\"/\"); // ログイン後のリダイレクト先\n        } catch (error) {\n            console.error(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-11/12 mx-auto mt-20 pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-1/4 mx-auto mb-10\",\n                src: \"/logo.svg\"\n            }, void 0, false, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSignIn,\n                className: \"pb-7 mb-7 border-b border-yellow-400 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        placeholder: \"メールアドレス\",\n                        style: {\n                            color: \"#000\"\n                        },\n                        className: \"w-full p-3 mb-5\"\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        placeholder: \"パスワード\",\n                        style: {\n                            color: \"#000\"\n                        },\n                        className: \"w-full p-3 mb-5\"\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full p-3 bg-yellow-400 text-black\",\n                        type: \"submit\",\n                        children: \"ログイン\"\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-400 mb-5\",\n                        children: \"アカウントをお持ちでないですか？\"\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/signup\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \" border-b border-white inline-block\",\n                            children: \"新規会員登録はこちら\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/components/SignIn.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignIn, \"Rc5QvcEU7xRaqjB2jUCdBs6Apgc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25Jbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBRTdCLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsOERBQThEO0FBQzlELG9FQUFvRTtBQUVwRSx5QkFBeUI7QUFDekIsNENBQTRDO0FBQzVDLGtEQUFrRDtBQUNsRCxnQ0FBZ0M7QUFFaEMsd0NBQXdDO0FBQ3hDLDBCQUEwQjtBQUMxQixZQUFZO0FBQ1osaUVBQWlFO0FBQ2pFLDJDQUEyQztBQUMzQyx3QkFBd0I7QUFDeEIsc0NBQXNDO0FBQ3RDLFFBQVE7QUFDUixPQUFPO0FBRVAsYUFBYTtBQUNiLG9EQUFvRDtBQUNwRCx1Q0FBdUM7QUFDdkMsaUJBQWlCO0FBQ2pCLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsdURBQXVEO0FBQ3ZELGtDQUFrQztBQUNsQyxxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLGVBQWU7QUFDZix3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQiw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLDBEQUEwRDtBQUMxRCxnQ0FBZ0M7QUFDaEMscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QixlQUFlO0FBQ2Ysd0NBQXdDO0FBQ3hDLGFBQWE7QUFDYix3REFBd0Q7QUFDeEQsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwseUJBQXlCO0FBRXpCLHVCQUF1Qjs7O0FBRWlCO0FBQ0E7QUFDWDtBQUM4QjtBQUNsQjtBQUV6QyxNQUFNTSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTVUsU0FBU1Qsc0RBQVNBO0lBRXhCLE1BQU1VLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNGLE1BQU1WLHlFQUEwQkEsQ0FBQ0MsaURBQUlBLEVBQUVFLE9BQU9FO1lBQzlDRSxPQUFPSSxJQUFJLENBQUMsTUFBTSxnQkFBZ0I7UUFDcEMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0EsTUFBTUUsT0FBTztRQUM3QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUQsV0FBVTtnQkFBc0JFLEtBQUk7Ozs7OzswQkFDekMsOERBQUNDO2dCQUNDQyxVQUFVWjtnQkFDVlEsV0FBVTs7a0NBRVYsOERBQUNLO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPcEI7d0JBQ1BxQixVQUFVLENBQUNmLElBQU1MLFNBQVNLLEVBQUVnQixNQUFNLENBQUNGLEtBQUs7d0JBQ3hDRyxhQUFZO3dCQUNaQyxPQUFPOzRCQUNMQyxPQUFPO3dCQUNUO3dCQUNBWixXQUFVOzs7Ozs7a0NBRVosOERBQUNLO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPbEI7d0JBQ1BtQixVQUFVLENBQUNmLElBQU1ILFlBQVlHLEVBQUVnQixNQUFNLENBQUNGLEtBQUs7d0JBQzNDRyxhQUFZO3dCQUNaQyxPQUFPOzRCQUNMQyxPQUFPO3dCQUNUO3dCQUNBWixXQUFVOzs7Ozs7a0NBRVosOERBQUNhO3dCQUFPYixXQUFVO3dCQUFzQ00sTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUl4RSw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDYzt3QkFBRWQsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbEMsOERBQUNqQixrREFBSUE7d0JBQUNnQyxNQUFLO2tDQUNULDRFQUFDRDs0QkFBRWQsV0FBVTtzQ0FBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdEO0dBeERNZDs7UUFHV0osa0RBQVNBOzs7S0FIcEJJO0FBMEROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lnbkluLmpzP2VlNDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gY29tcG9uZW50cyAvIFNpZ25Jbi5qcztcblxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VDb25maWdcIjsgLy8gRmlyZWJhc2XoqK3lrprjg5XjgqHjgqTjg6vjgpLjgqTjg7Pjg53jg7zjg4hcblxuLy8gY29uc3QgU2lnbkluID0gKCkgPT4ge1xuLy8gICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuLy8gICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gICBjb25zdCBoYW5kbGVTaWduSW4gPSBhc3luYyAoZSkgPT4ge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICB0cnkge1xuLy8gICAgICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbi8vICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgLy8g44Ot44Kw44Kk44Oz5b6M44Gu44Oq44OA44Kk44Os44Kv44OI5YWIXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4vLyAgICAgfVxuLy8gICB9O1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIG14LWF1dG8gbXQtMjAgcGItMTBcIj5cbi8vICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTaWduSW59PlxuLy8gICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuLy8gICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbi8vICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbi8vICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuODoeODvOODq+OCouODieODrOOCuVwiXG4vLyAgICAgICAgICAgc3R5bGU9e3tcbi8vICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbi8vICAgICAgICAgICB9fVxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgbWItNVwiXG4vLyAgICAgICAgIC8+XG4vLyAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuLy8gICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuLy8gICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44OR44K544Ov44O844OJXCJcbi8vICAgICAgICAgICBzdHlsZT17e1xuLy8gICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuLy8gICAgICAgICAgIH19XG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBtYi01XCJcbi8vICAgICAgICAgLz5cbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zXCIgdHlwZT1cInN1Ym1pdFwiPlxuLy8gICAgICAgICAgIOODreOCsOOCpOODs1xuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgIDwvZm9ybT5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcblxuLy8gY29tcG9uZW50cy9TaWduSW4uanNcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VDb25maWdcIjtcblxuY29uc3QgU2lnbkluID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTaWduSW4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgLy8g44Ot44Kw44Kk44Oz5b6M44Gu44Oq44OA44Kk44Os44Kv44OI5YWIXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIG14LWF1dG8gbXQtMjAgcGItMTBcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xLzQgbXgtYXV0byBtYi0xMFwiIHNyYz1cIi9sb2dvLnN2Z1wiIC8+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU2lnbklufVxuICAgICAgICBjbGFzc05hbWU9XCJwYi03IG1iLTcgYm9yZGVyLWIgYm9yZGVyLXllbGxvdy00MDAgXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLjg6Hjg7zjg6vjgqLjg4njg6zjgrlcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIG1iLTVcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuODkeOCueODr+ODvOODiVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgbWItNVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBiZy15ZWxsb3ctNDAwIHRleHQtYmxhY2tcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAg44Ot44Kw44Kk44OzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG1iLTVcIj7jgqLjgqvjgqbjg7Pjg4jjgpLjgYrmjIHjgaHjgafjgarjgYTjgafjgZnjgYvvvJ88L3A+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGJvcmRlci1iIGJvcmRlci13aGl0ZSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgIOaWsOimj+S8muWToeeZu+mMsuOBr+OBk+OBoeOCiVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxpbmsiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImF1dGgiLCJTaWduSW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsImhhbmRsZVNpZ25JbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJjb2xvciIsImJ1dHRvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignIn.js\n"));

/***/ })

});