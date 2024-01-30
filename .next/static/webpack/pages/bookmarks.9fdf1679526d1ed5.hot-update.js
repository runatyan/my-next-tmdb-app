"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/bookmarks",{

/***/ "./pages/bookmarks.js":
/*!****************************!*\
  !*** ./pages/bookmarks.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BookmarksPage = ()=>{\n    _s();\n    const { currentUser } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [bookmarks, setBookmarks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const API_KEY = \"29ddb4606480823262ca1015b1993619\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchBookmarks = async ()=>{\n            if (!currentUser) return;\n            const bookmarkRef = _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.firestore.collection(\"bookmarks\").doc(currentUser.uid);\n            const doc = await bookmarkRef.get();\n            if (doc.exists) {\n                const bookmarksData = doc.data().bookmarks || [];\n                // IDとタイプを基に詳細情報を取得\n                const details = await Promise.all(bookmarksData.map(async (bookmark)=>{\n                    const url = \"https://api.themoviedb.org/3/\".concat(bookmark.type === \"movie\" ? \"movie\" : \"tv\", \"/\").concat(bookmark.id, \"?api_key=\").concat(API_KEY, \"&language=ja-JP\");\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url);\n                        return {\n                            ...response.data,\n                            ...bookmark\n                        }; // APIの応答とブックマークデータを組み合わせる\n                    } catch (error) {\n                        console.error(\"Error fetching details:\", error);\n                        return null;\n                    }\n                }));\n                // nullを除外し、ブックマーク日付でソート\n                const validBookmarks = details.filter((detail)=>detail !== null);\n                const sortedBookmarks = validBookmarks.sort((a, b)=>new Date(b.timestamp) - new Date(a.timestamp));\n                setBookmarks(sortedBookmarks);\n            }\n        };\n        fetchBookmarks();\n    }, [\n        currentUser,\n        API_KEY\n    ]);\n    // ここにブックマークデータを表示するロジックを追加\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-11/12 mx-auto mt-14 md:mt-20 custom-lg:mt-20 pb-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap justify-between bookmark-last\",\n            children: bookmarks.map((bookmark, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: \"30%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\".concat(bookmark.type === \"movie\" ? \"movies\" : \"anime\", \"/\").concat(bookmark.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4 custom-lg:mb-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://image.tmdb.org/t/p/original\".concat(bookmark.poster_path),\n                                alt: bookmark.title || bookmark.name,\n                                className: \"w-full h-full object-cover rounded-md\"\n                            }, void 0, false, {\n                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/bookmarks.js\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/bookmarks.js\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/bookmarks.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/bookmarks.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/bookmarks.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/bookmarks.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BookmarksPage, \"HFcgKGDAa1mc597itMAE0KJA4tk=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = BookmarksPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookmarksPage);\nvar _c;\n$RefreshReg$(_c, \"BookmarksPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib29rbWFya3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDRztBQUNvQjtBQUNIO0FBRTlDLE1BQU1PLGdCQUFnQjs7SUFDcEIsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0gsNkRBQU9BO0lBQy9CLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU1VLFVBQVVDLGtDQUFvQztJQUVwRFYsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxpQkFBaUI7WUFDckIsSUFBSSxDQUFDUCxhQUFhO1lBRWxCLE1BQU1RLGNBQWNWLHNEQUFTQSxDQUMxQlcsVUFBVSxDQUFDLGFBQ1hDLEdBQUcsQ0FBQ1YsWUFBWVcsR0FBRztZQUN0QixNQUFNRCxNQUFNLE1BQU1GLFlBQVlJLEdBQUc7WUFFakMsSUFBSUYsSUFBSUcsTUFBTSxFQUFFO2dCQUNkLE1BQU1DLGdCQUFnQkosSUFBSUssSUFBSSxHQUFHZCxTQUFTLElBQUksRUFBRTtnQkFDaEQsbUJBQW1CO2dCQUNuQixNQUFNZSxVQUFVLE1BQU1DLFFBQVFDLEdBQUcsQ0FDL0JKLGNBQWNLLEdBQUcsQ0FBQyxPQUFPQztvQkFDdkIsTUFBTUMsTUFBTSxnQ0FFUkQsT0FERkEsU0FBU0UsSUFBSSxLQUFLLFVBQVUsVUFBVSxNQUN2QyxLQUEwQm5CLE9BQXZCaUIsU0FBU0csRUFBRSxFQUFDLGFBQW1CLE9BQVJwQixTQUFRO29CQUNuQyxJQUFJO3dCQUNGLE1BQU1xQixXQUFXLE1BQU03Qiw2Q0FBS0EsQ0FBQ2lCLEdBQUcsQ0FBQ1M7d0JBQ2pDLE9BQU87NEJBQUUsR0FBR0csU0FBU1QsSUFBSTs0QkFBRSxHQUFHSyxRQUFRO3dCQUFDLEdBQUcsMEJBQTBCO29CQUN0RSxFQUFFLE9BQU9LLE9BQU87d0JBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO3dCQUN6QyxPQUFPO29CQUNUO2dCQUNGO2dCQUdGLHdCQUF3QjtnQkFDeEIsTUFBTUUsaUJBQWlCWCxRQUFRWSxNQUFNLENBQUMsQ0FBQ0MsU0FBV0EsV0FBVztnQkFDN0QsTUFBTUMsa0JBQWtCSCxlQUFlSSxJQUFJLENBQ3pDLENBQUNDLEdBQUdDLElBQU0sSUFBSUMsS0FBS0QsRUFBRUUsU0FBUyxJQUFJLElBQUlELEtBQUtGLEVBQUVHLFNBQVM7Z0JBR3hEakMsYUFBYTRCO1lBQ2Y7UUFDRjtRQUVBdkI7SUFDRixHQUFHO1FBQUNQO1FBQWFHO0tBQVE7SUFFekIsMkJBQTJCO0lBRTNCLHFCQUNFLDhEQUFDaUM7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWnBDLFVBQVVrQixHQUFHLENBQUMsQ0FBQ0MsVUFBVWtCLHNCQUN4Qiw4REFBQ0Y7b0JBQWdCRyxPQUFPO3dCQUFFQyxPQUFPO29CQUFNOzhCQUNyQyw0RUFBQzVDLGtEQUFJQTt3QkFDSDZDLE1BQU0sSUFDSnJCLE9BRFFBLFNBQVNFLElBQUksS0FBSyxVQUFVLFdBQVcsU0FBUSxLQUV4RCxPQURDRixTQUFTRyxFQUFFO3dCQUVibUIsUUFBUTtrQ0FFUiw0RUFBQ047NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNNO2dDQUNDQyxLQUFLLHNDQUEyRCxPQUFyQnhCLFNBQVN5QixXQUFXO2dDQUMvREMsS0FBSzFCLFNBQVMyQixLQUFLLElBQUkzQixTQUFTNEIsSUFBSTtnQ0FDcENYLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBWFJDOzs7Ozs7Ozs7Ozs7Ozs7QUFvQnBCO0dBeEVNdkM7O1FBQ29CRix5REFBT0E7OztLQUQzQkU7QUEwRU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9va21hcmtzLmpzPzYyNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIi4uL2ZpcmViYXNlQ29uZmlnXCI7XG5cbmNvbnN0IEJvb2ttYXJrc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW2Jvb2ttYXJrcywgc2V0Qm9va21hcmtzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RNREJfQVBJX0tFWTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQm9va21hcmtzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuO1xuXG4gICAgICBjb25zdCBib29rbWFya1JlZiA9IGZpcmVzdG9yZVxuICAgICAgICAuY29sbGVjdGlvbihcImJvb2ttYXJrc1wiKVxuICAgICAgICAuZG9jKGN1cnJlbnRVc2VyLnVpZCk7XG4gICAgICBjb25zdCBkb2MgPSBhd2FpdCBib29rbWFya1JlZi5nZXQoKTtcblxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcbiAgICAgICAgY29uc3QgYm9va21hcmtzRGF0YSA9IGRvYy5kYXRhKCkuYm9va21hcmtzIHx8IFtdO1xuICAgICAgICAvLyBJROOBqOOCv+OCpOODl+OCkuWfuuOBq+ips+e0sOaDheWgseOCkuWPluW+l1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgYm9va21hcmtzRGF0YS5tYXAoYXN5bmMgKGJvb2ttYXJrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy8ke1xuICAgICAgICAgICAgICBib29rbWFyay50eXBlID09PSBcIm1vdmllXCIgPyBcIm1vdmllXCIgOiBcInR2XCJcbiAgICAgICAgICAgIH0vJHtib29rbWFyay5pZH0/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWphLUpQYDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLnJlc3BvbnNlLmRhdGEsIC4uLmJvb2ttYXJrIH07IC8vIEFQSeOBruW/nOetlOOBqOODluODg+OCr+ODnuODvOOCr+ODh+ODvOOCv+OCkue1hOOBv+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRldGFpbHM6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBudWxs44KS6Zmk5aSW44GX44CB44OW44OD44Kv44Oe44O844Kv5pel5LuY44Gn44K944O844OIXG4gICAgICAgIGNvbnN0IHZhbGlkQm9va21hcmtzID0gZGV0YWlscy5maWx0ZXIoKGRldGFpbCkgPT4gZGV0YWlsICE9PSBudWxsKTtcbiAgICAgICAgY29uc3Qgc29ydGVkQm9va21hcmtzID0gdmFsaWRCb29rbWFya3Muc29ydChcbiAgICAgICAgICAoYSwgYikgPT4gbmV3IERhdGUoYi50aW1lc3RhbXApIC0gbmV3IERhdGUoYS50aW1lc3RhbXApXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0Qm9va21hcmtzKHNvcnRlZEJvb2ttYXJrcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoQm9va21hcmtzKCk7XG4gIH0sIFtjdXJyZW50VXNlciwgQVBJX0tFWV0pO1xuXG4gIC8vIOOBk+OBk+OBq+ODluODg+OCr+ODnuODvOOCr+ODh+ODvOOCv+OCkuihqOekuuOBmeOCi+ODreOCuOODg+OCr+OCkui/veWKoFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIG14LWF1dG8gbXQtMTQgbWQ6bXQtMjAgY3VzdG9tLWxnOm10LTIwIHBiLTEwXCI+XG4gICAgICB7Lyog44OW44OD44Kv44Oe44O844Kv44Gu44OH44O844K/44KS44Oe44OD44OU44Oz44Kw44GX44Gm6KGo56S6ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW4gYm9va21hcmstbGFzdFwiPlxuICAgICAgICB7Ym9va21hcmtzLm1hcCgoYm9va21hcmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogXCIzMCVcIiB9fT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e2AvJHtib29rbWFyay50eXBlID09PSBcIm1vdmllXCIgPyBcIm1vdmllc1wiIDogXCJhbmltZVwifS8ke1xuICAgICAgICAgICAgICAgIGJvb2ttYXJrLmlkXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgY3VzdG9tLWxnOm1iLThcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCR7Ym9va21hcmsucG9zdGVyX3BhdGh9YH1cbiAgICAgICAgICAgICAgICAgIGFsdD17Ym9va21hcmsudGl0bGUgfHwgYm9va21hcmsubmFtZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9va21hcmtzUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJMaW5rIiwidXNlQXV0aCIsImZpcmVzdG9yZSIsIkJvb2ttYXJrc1BhZ2UiLCJjdXJyZW50VXNlciIsImJvb2ttYXJrcyIsInNldEJvb2ttYXJrcyIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVE1EQl9BUElfS0VZIiwiZmV0Y2hCb29rbWFya3MiLCJib29rbWFya1JlZiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJnZXQiLCJleGlzdHMiLCJib29rbWFya3NEYXRhIiwiZGF0YSIsImRldGFpbHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiYm9va21hcmsiLCJ1cmwiLCJ0eXBlIiwiaWQiLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsInZhbGlkQm9va21hcmtzIiwiZmlsdGVyIiwiZGV0YWlsIiwic29ydGVkQm9va21hcmtzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInRpbWVzdGFtcCIsImRpdiIsImNsYXNzTmFtZSIsImluZGV4Iiwic3R5bGUiLCJ3aWR0aCIsImhyZWYiLCJwYXNzSHJlZiIsImltZyIsInNyYyIsInBvc3Rlcl9wYXRoIiwiYWx0IiwidGl0bGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/bookmarks.js\n"));

/***/ })

});