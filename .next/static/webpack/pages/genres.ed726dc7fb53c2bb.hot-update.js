"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/genres",{

/***/ "./pages/genres.js":
/*!*************************!*\
  !*** ./pages/genres.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst API_KEY = \"29ddb4606480823262ca1015b1993619\";\nconst BASE_URL = \"https://api.themoviedb.org/3/discover\";\nconst GenrePage = ()=>{\n    _s();\n    const [selectedGenre, setSelectedGenre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"movies\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const buttonStyle = (genre)=>{\n        return selectedGenre === genre ? \"bg-yellow-400 text-black rounded-3xl w-16 p-1\" : \"text-white p-1\";\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchContent = async ()=>{\n            let fetchedContent = [];\n            let page = 1;\n            const maxItems = 30; // 取得するアイテムの最大数\n            const maxPages = 10; // 最大ページ数\n            while(fetchedContent.length < maxItems && page <= maxPages){\n                let url = \"\";\n                switch(selectedGenre){\n                    case \"movies\":\n                        url = \"\".concat(BASE_URL, \"/movie?api_key=\").concat(API_KEY, \"&language=ja-JP&page=\").concat(page);\n                        break;\n                    case \"anime\":\n                        url = \"\".concat(BASE_URL, \"/tv?api_key=\").concat(API_KEY, \"&language=ja-JP&with_genres=16&page=\").concat(page);\n                        break;\n                    case \"tv\":\n                        url = \"\".concat(BASE_URL, \"/tv?api_key=\").concat(API_KEY, \"&language=ja-JP&page=\").concat(page);\n                        break;\n                    case \"documentary\":\n                        url = \"\".concat(BASE_URL, \"/movie?api_key=\").concat(API_KEY, \"&language=ja-JP&with_genres=99&page=\").concat(page);\n                        break;\n                    case \"comedy\":\n                        url = \"\".concat(BASE_URL, \"/movie?api_key=\").concat(API_KEY, \"&language=ja-JP&with_genres=35&page=\").concat(page);\n                        break;\n                    case \"romance\":\n                        url = \"\".concat(BASE_URL, \"/movie?api_key=\").concat(API_KEY, \"&language=ja-JP&with_genres=10749&page=\").concat(page);\n                        break;\n                    case \"sci-fi\":\n                        url = \"\".concat(BASE_URL, \"/movie?api_key=\").concat(API_KEY, \"&language=ja-JP&with_genres=878&page=\").concat(page);\n                        break;\n                }\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url);\n                    const newContent = response.data.results.filter((item)=>item.overview && item.overview);\n                    //   console.log(newContent);\n                    fetchedContent = [\n                        ...fetchedContent,\n                        ...newContent\n                    ].slice(0, maxItems);\n                } catch (error) {\n                    console.error(\"Error fetching content:\", error);\n                    break; // エラーが発生した場合はループを中断\n                }\n                page++;\n            }\n            setContent(fetchedContent);\n        };\n        fetchContent();\n    }, [\n        selectedGenre\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-11/12 mx-auto mt-14  md:mt-20 custom-lg:mt-20 pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                slidesPerView: 5,\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"movies\"),\n                            className: buttonStyle(\"movies\"),\n                            children: \"映画\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"anime\"),\n                            className: buttonStyle(\"anime\"),\n                            children: \"アニメ\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"tv\"),\n                            className: buttonStyle(\"tv\"),\n                            children: \"TV番組\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"documentary\"),\n                            className: buttonStyle(\"documentary\"),\n                            children: \"ドキュメンタリー\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"comedy\"),\n                            className: buttonStyle(\"comedy\"),\n                            children: \"コメディ\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"romance\"),\n                            className: buttonStyle(\"romance\"),\n                            children: \"恋愛\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"sci-fi\"),\n                            className: buttonStyle(\"sci-fi\"),\n                            children: \"SF\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-display\",\n                children: content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\".concat(selectedGenre === \"movies\" ? \"movies\" : \"anime\", \"/\").concat(item.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between flex-wrap items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-2/5\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://image.tmdb.org/t/p/original\".concat(item.backdrop_path),\n                                                alt: item.title || item.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                                lineNumber: 148,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                            lineNumber: 147,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-7/12\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"custom-lg:text-xl\",\n                                                    children: item.title || item.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                                    lineNumber: 154,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-xs text-gray-500 custom-lg:pt-2\",\n                                                    children: item.release_date ? item.release_date.split(\"-\")[0] : item.first_air_date ? item.first_air_date.split(\"-\")[0] : \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                                    lineNumber: 155,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm text-gray-500 mt-10 hidden custom-lg:block\",\n                                                    children: item.overview.length > 200 ? item.overview.substring(0, 200) + \"...\" : item.overview\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                                    lineNumber: 162,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                            lineNumber: 153,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                    lineNumber: 146,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs text-gray-500 mt-2 custom-lg:hidden\",\n                                    children: item.overview.length > 80 ? item.overview.substring(0, 80) + \"...\" : item.overview\n                                }, void 0, false, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                    lineNumber: 169,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 145,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GenrePage, \"TOc8TzxKLTvklih/Pu+TAHqs6So=\");\n_c = GenrePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenrePage);\nvar _c;\n$RefreshReg$(_c, \"GenrePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWQsV0FBVTs4REFDVk4sS0FBS3FCLFlBQVksR0FDZHJCLEtBQUtxQixZQUFZLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUMvQnRCLEtBQUt1QixjQUFjLEdBQ25CdkIsS0FBS3VCLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQ2pDOzs7Ozs7OERBRU4sOERBQUNGO29EQUFFZCxXQUFVOzhEQUNWTixLQUFLQyxRQUFRLENBQUNULE1BQU0sR0FBRyxNQUNwQlEsS0FBS0MsUUFBUSxDQUFDdUIsU0FBUyxDQUFDLEdBQUcsT0FBTyxRQUNsQ3hCLEtBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJdkIsOERBQUNtQjtvQ0FBRWQsV0FBVTs4Q0FDVk4sS0FBS0MsUUFBUSxDQUFDVCxNQUFNLEdBQUcsS0FDcEJRLEtBQUtDLFFBQVEsQ0FBQ3VCLFNBQVMsQ0FBQyxHQUFHLE1BQU0sUUFDakN4QixLQUFLQyxRQUFROzs7Ozs7Ozs7Ozs7dUJBaENoQlU7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q2pCO0dBMUtNL0I7S0FBQUE7QUE0S04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2VucmVzLmpzPzE0ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5cbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UTURCX0FQSV9LRVk7XG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3ZlclwiO1xuXG5jb25zdCBHZW5yZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEdlbnJlLCBzZXRTZWxlY3RlZEdlbnJlXSA9IHVzZVN0YXRlKFwibW92aWVzXCIpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYnV0dG9uU3R5bGUgPSAoZ2VucmUpID0+IHtcbiAgICByZXR1cm4gc2VsZWN0ZWRHZW5yZSA9PT0gZ2VucmVcbiAgICAgID8gXCJiZy15ZWxsb3ctNDAwIHRleHQtYmxhY2sgcm91bmRlZC0zeGwgdy0xNiBwLTFcIlxuICAgICAgOiBcInRleHQtd2hpdGUgcC0xXCI7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENvbnRlbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgZmV0Y2hlZENvbnRlbnQgPSBbXTtcbiAgICAgIGxldCBwYWdlID0gMTtcbiAgICAgIGNvbnN0IG1heEl0ZW1zID0gMzA7IC8vIOWPluW+l+OBmeOCi+OCouOCpOODhuODoOOBruacgOWkp+aVsFxuICAgICAgY29uc3QgbWF4UGFnZXMgPSAxMDsgLy8g5pyA5aSn44Oa44O844K45pWwXG5cbiAgICAgIHdoaWxlIChmZXRjaGVkQ29udGVudC5sZW5ndGggPCBtYXhJdGVtcyAmJiBwYWdlIDw9IG1heFBhZ2VzKSB7XG4gICAgICAgIGxldCB1cmwgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkR2VucmUpIHtcbiAgICAgICAgICBjYXNlIFwibW92aWVzXCI6XG4gICAgICAgICAgICB1cmwgPSBgJHtCQVNFX1VSTH0vbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWphLUpQJnBhZ2U9JHtwYWdlfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiYW5pbWVcIjpcbiAgICAgICAgICAgIHVybCA9IGAke0JBU0VfVVJMfS90dj9hcGlfa2V5PSR7QVBJX0tFWX0mbGFuZ3VhZ2U9amEtSlAmd2l0aF9nZW5yZXM9MTYmcGFnZT0ke3BhZ2V9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJ0dlwiOlxuICAgICAgICAgICAgdXJsID0gYCR7QkFTRV9VUkx9L3R2P2FwaV9rZXk9JHtBUElfS0VZfSZsYW5ndWFnZT1qYS1KUCZwYWdlPSR7cGFnZX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImRvY3VtZW50YXJ5XCI6XG4gICAgICAgICAgICB1cmwgPSBgJHtCQVNFX1VSTH0vbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWphLUpQJndpdGhfZ2VucmVzPTk5JnBhZ2U9JHtwYWdlfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiY29tZWR5XCI6XG4gICAgICAgICAgICB1cmwgPSBgJHtCQVNFX1VSTH0vbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWphLUpQJndpdGhfZ2VucmVzPTM1JnBhZ2U9JHtwYWdlfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwicm9tYW5jZVwiOlxuICAgICAgICAgICAgdXJsID0gYCR7QkFTRV9VUkx9L21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZsYW5ndWFnZT1qYS1KUCZ3aXRoX2dlbnJlcz0xMDc0OSZwYWdlPSR7cGFnZX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInNjaS1maVwiOlxuICAgICAgICAgICAgdXJsID0gYCR7QkFTRV9VUkx9L21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZsYW5ndWFnZT1qYS1KUCZ3aXRoX2dlbnJlcz04NzgmcGFnZT0ke3BhZ2V9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSByZXNwb25zZS5kYXRhLnJlc3VsdHMuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0ub3ZlcnZpZXcgJiYgaXRlbS5vdmVydmlld1xuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhuZXdDb250ZW50KTtcbiAgICAgICAgICBmZXRjaGVkQ29udGVudCA9IFsuLi5mZXRjaGVkQ29udGVudCwgLi4ubmV3Q29udGVudF0uc2xpY2UoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgbWF4SXRlbXNcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb250ZW50OlwiLCBlcnJvcik7XG4gICAgICAgICAgYnJlYWs7IC8vIOOCqOODqeODvOOBjOeZuueUn+OBl+OBn+WgtOWQiOOBr+ODq+ODvOODl+OCkuS4reaWrVxuICAgICAgICB9XG5cbiAgICAgICAgcGFnZSsrO1xuICAgICAgfVxuXG4gICAgICBzZXRDb250ZW50KGZldGNoZWRDb250ZW50KTtcbiAgICB9O1xuXG4gICAgZmV0Y2hDb250ZW50KCk7XG4gIH0sIFtzZWxlY3RlZEdlbnJlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEvMTIgbXgtYXV0byBtdC0xNCAgbWQ6bXQtMjAgY3VzdG9tLWxnOm10LTIwIHBiLTEwXCI+XG4gICAgICA8U3dpcGVyIHNsaWRlc1BlclZpZXc9ezV9IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPFN3aXBlclNsaWRlPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkR2VucmUoXCJtb3ZpZXNcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvblN0eWxlKFwibW92aWVzXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOaYoOeUu1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRHZW5yZShcImFuaW1lXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25TdHlsZShcImFuaW1lXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOOCouODi+ODoVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRHZW5yZShcInR2XCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25TdHlsZShcInR2XCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRW55Wq57WEXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgIDxTd2lwZXJTbGlkZT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEdlbnJlKFwiZG9jdW1lbnRhcnlcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvblN0eWxlKFwiZG9jdW1lbnRhcnlcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg44OJ44Kt44Ol44Oh44Oz44K/44Oq44O8XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgIDxTd2lwZXJTbGlkZT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEdlbnJlKFwiY29tZWR5XCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25TdHlsZShcImNvbWVkeVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDjgrPjg6Hjg4fjgqNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgPFN3aXBlclNsaWRlPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkR2VucmUoXCJyb21hbmNlXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25TdHlsZShcInJvbWFuY2VcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg5oGL5oSbXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgIDxTd2lwZXJTbGlkZT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEdlbnJlKFwic2NpLWZpXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25TdHlsZShcInNjaS1maVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTRlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgPC9Td2lwZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZGlzcGxheVwiPlxuICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBocmVmPXtgLyR7c2VsZWN0ZWRHZW5yZSA9PT0gXCJtb3ZpZXNcIiA/IFwibW92aWVzXCIgOiBcImFuaW1lXCJ9LyR7XG4gICAgICAgICAgICAgIGl0ZW0uaWRcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi81XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsJHtpdGVtLmJhY2tkcm9wX3BhdGh9YH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlIHx8IGl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcvMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1c3RvbS1sZzp0ZXh0LXhsXCI+e2l0ZW0udGl0bGUgfHwgaXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBjdXN0b20tbGc6cHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5yZWxlYXNlX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0ucmVsZWFzZV9kYXRlLnNwbGl0KFwiLVwiKVswXVxuICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5maXJzdF9haXJfZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5maXJzdF9haXJfZGF0ZS5zcGxpdChcIi1cIilbMF1cbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbXQtMTAgaGlkZGVuIGN1c3RvbS1sZzpibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5vdmVydmlldy5sZW5ndGggPiAyMDBcbiAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0ub3ZlcnZpZXcuc3Vic3RyaW5nKDAsIDIwMCkgKyBcIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLm92ZXJ2aWV3fVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG10LTIgY3VzdG9tLWxnOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLm92ZXJ2aWV3Lmxlbmd0aCA+IDgwXG4gICAgICAgICAgICAgICAgICA/IGl0ZW0ub3ZlcnZpZXcuc3Vic3RyaW5nKDAsIDgwKSArIFwiLi4uXCJcbiAgICAgICAgICAgICAgICAgIDogaXRlbS5vdmVydmlld31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2VucmVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkxpbmsiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVE1EQl9BUElfS0VZIiwiQkFTRV9VUkwiLCJHZW5yZVBhZ2UiLCJzZWxlY3RlZEdlbnJlIiwic2V0U2VsZWN0ZWRHZW5yZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYnV0dG9uU3R5bGUiLCJnZW5yZSIsImZldGNoQ29udGVudCIsImZldGNoZWRDb250ZW50IiwicGFnZSIsIm1heEl0ZW1zIiwibWF4UGFnZXMiLCJsZW5ndGgiLCJ1cmwiLCJyZXNwb25zZSIsImdldCIsIm5ld0NvbnRlbnQiLCJkYXRhIiwicmVzdWx0cyIsImZpbHRlciIsIml0ZW0iLCJvdmVydmlldyIsInNsaWNlIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2xpZGVzUGVyVmlldyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJpbmRleCIsImhyZWYiLCJpZCIsImltZyIsInNyYyIsImJhY2tkcm9wX3BhdGgiLCJhbHQiLCJ0aXRsZSIsIm5hbWUiLCJwIiwicmVsZWFzZV9kYXRlIiwic3BsaXQiLCJmaXJzdF9haXJfZGF0ZSIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/genres.js\n"));

/***/ })

});