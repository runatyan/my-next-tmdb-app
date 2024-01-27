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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n// pages/profile.js\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Profile = ()=>{\n    _s();\n    const { currentUser } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleLogout = async ()=>{\n        try {\n            await _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth.signOut();\n            router.push(\"/signin\");\n        } catch (error) {\n            console.error(\"Logout Error\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex justify-center items-center flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\"\n            }, void 0, false, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            currentUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg\",\n                    children: [\n                        \"メールアドレス: \",\n                        currentUser.email\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                className: \"px-4 py-2 rounded-md bg-blue-500 text-white\",\n                children: \"ログアウト\"\n            }, void 0, false, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/profile.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"GrE6YWMlClvvAspbypUyV/XvV0M=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUJBQW1COzs7QUFFTztBQUNjO0FBQ1M7QUFDUjtBQUV6QyxNQUFNSSxVQUFVOztJQUNkLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdILDZEQUFPQTtJQUMvQixNQUFNSSxTQUFTTCxzREFBU0E7SUFFeEIsTUFBTU0sZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTUosaURBQUlBLENBQUNLLE9BQU87WUFDbEJGLE9BQU9HLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0JBQWdCQTtRQUNoQztJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTs7Ozs7O1lBQ2JSLDZCQUNDLDhEQUFDTztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUVGLFdBQVU7O3dCQUFVO3dCQUFVUixZQUFZVyxLQUFLOzs7Ozs7Ozs7Ozs7MEJBR3RELDhEQUFDQztnQkFDQ0MsU0FBU1g7Z0JBQ1RNLFdBQVU7MEJBQ1g7Ozs7Ozs7Ozs7OztBQUtQO0dBN0JNVDs7UUFDb0JGLHlEQUFPQTtRQUNoQkQsa0RBQVNBOzs7S0FGcEJHO0FBK0JOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUuanM/MDhkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9wcm9maWxlLmpzXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlQ29uZmlnXCI7XG5cbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhdXRoLnNpZ25PdXQoKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ25pblwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkxvZ291dCBFcnJvclwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPjwvaDE+XG4gICAgICB7Y3VycmVudFVzZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+44Oh44O844Or44Ki44OJ44Os44K5OiB7Y3VycmVudFVzZXIuZW1haWx9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQtbWQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiXG4gICAgICA+XG4gICAgICAgIOODreOCsOOCouOCpuODiFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwidXNlQXV0aCIsImF1dGgiLCJQcm9maWxlIiwiY3VycmVudFVzZXIiLCJyb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJzaWduT3V0IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImVtYWlsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n"));

/***/ })

});