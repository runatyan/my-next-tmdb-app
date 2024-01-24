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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst API_KEY = \"29ddb4606480823262ca1015b1993619\";\nconst BASE_URL = \"https://api.themoviedb.org/3/discover\";\nconst GenrePage = ()=>{\n    _s();\n    const [selectedGenre, setSelectedGenre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"movies\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const buttonStyle = (genre)=>{\n        return selectedGenre === genre ? \"bg-yellow-400 text-black rounded-3xl w-16 p-1\" : \"text-white p-1\";\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchContent = async ()=>{\n            let fetchedContent = [];\n            let page = 1;\n            const maxItems = 30; // 取得するアイテムの最大数\n            const maxPages = 10; // 最大ページ数\n            while(fetchedContent.length < maxItems && page <= maxPages){\n                let url = \"\";\n                switch(selectedGenre){\n                    case \"movies\":\n                        url = \"\".concat(BASE_URL, \"/movie?api_key=\").concat(API_KEY, \"&language=ja-JP&page=\").concat(page);\n                        break;\n                    case \"anime\":\n                        url = \"\".concat(BASE_URL, \"/tv?api_key=\").concat(API_KEY, \"&language=ja-JP&with_genres=16&page=\").concat(page);\n                        break;\n                    case \"tv\":\n                        url = \"\".concat(BASE_URL, \"/tv?api_key=\").concat(API_KEY, \"&language=ja-JP&page=\").concat(page);\n                        break;\n                }\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(url);\n                    const newContent = response.data.results.filter((item)=>item.overview && item.overview);\n                    //   console.log(newContent);\n                    fetchedContent = [\n                        ...fetchedContent,\n                        ...newContent\n                    ].slice(0, maxItems);\n                } catch (error) {\n                    console.error(\"Error fetching content:\", error);\n                    break; // エラーが発生した場合はループを中断\n                }\n                page++;\n            }\n            setContent(fetchedContent);\n        };\n        fetchContent();\n    }, [\n        selectedGenre\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-11/12 mx-auto mt-10  md:mt-20 custom-lg:mt-20 pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                slidesPerView: 5,\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"movies\"),\n                            className: buttonStyle(\"movies\"),\n                            children: \"映画\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"anime\"),\n                            className: buttonStyle(\"anime\"),\n                            children: \"アニメ\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectedGenre(\"tv\"),\n                            className: buttonStyle(\"tv\"),\n                            children: \"TV番組\"\n                        }, void 0, false, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-display\",\n                children: content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\".concat(selectedGenre === \"movies\" ? \"movies\" : \"anime\", \"/\").concat(item.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between flex-wrap items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-2/5\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://image.tmdb.org/t/p/original\".concat(item.backdrop_path),\n                                                alt: item.title || item.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-7/12\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"custom-lg:text-xl\",\n                                                    children: item.title || item.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-xs text-gray-500 custom-lg:pt-2\",\n                                                    children: item.release_date ? item.release_date.split(\"-\")[0] : item.first_air_date ? item.first_air_date.split(\"-\")[0] : \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm text-gray-500 mt-10 hidden custom-lg:block\",\n                                                    children: item.overview.length > 200 ? item.overview.substring(0, 200) + \"...\" : item.overview\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs text-gray-500 mt-2 custom-lg:hidden\",\n                                    children: item.overview.length > 80 ? item.overview.substring(0, 80) + \"...\" : item.overview\n                                }, void 0, false, {\n                                    fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/it222206/Desktop/my-next-tmdb-app/pages/genres.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GenrePage, \"TOc8TzxKLTvklih/Pu+TAHqs6So=\");\n_c = GenrePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenrePage);\nvar _c;\n$RefreshReg$(_c, \"GenrePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3REMsS0FBS2pCLEtBQUtrQixLQUFLLElBQUlsQixLQUFLbUIsSUFBSTs7Ozs7Ozs7Ozs7c0RBR2hDLDhEQUFDZDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNjO29EQUFFZCxXQUFVOzhEQUFxQk4sS0FBS2tCLEtBQUssSUFBSWxCLEtBQUttQixJQUFJOzs7Ozs7OERBQ3pELDhEQUFDQztvREFBRWQsV0FBVTs4REFDVk4sS0FBS3FCLFlBQVksR0FDZHJCLEtBQUtxQixZQUFZLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUMvQnRCLEtBQUt1QixjQUFjLEdBQ25CdkIsS0FBS3VCLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQ2pDOzs7Ozs7OERBRU4sOERBQUNGO29EQUFFZCxXQUFVOzhEQUNWTixLQUFLQyxRQUFRLENBQUNULE1BQU0sR0FBRyxNQUNwQlEsS0FBS0MsUUFBUSxDQUFDdUIsU0FBUyxDQUFDLEdBQUcsT0FBTyxRQUNsQ3hCLEtBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJdkIsOERBQUNtQjtvQ0FBRWQsV0FBVTs4Q0FDVk4sS0FBS0MsUUFBUSxDQUFDVCxNQUFNLEdBQUcsS0FDcEJRLEtBQUtDLFFBQVEsQ0FBQ3VCLFNBQVMsQ0FBQyxHQUFHLE1BQU0sUUFDakN4QixLQUFLQyxRQUFROzs7Ozs7Ozs7Ozs7dUJBaENoQlU7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q2pCO0dBOUhNL0I7S0FBQUE7QUFnSU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2VucmVzLmpzPzE0ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5cbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UTURCX0FQSV9LRVk7XG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3ZlclwiO1xuXG5jb25zdCBHZW5yZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEdlbnJlLCBzZXRTZWxlY3RlZEdlbnJlXSA9IHVzZVN0YXRlKFwibW92aWVzXCIpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYnV0dG9uU3R5bGUgPSAoZ2VucmUpID0+IHtcbiAgICByZXR1cm4gc2VsZWN0ZWRHZW5yZSA9PT0gZ2VucmVcbiAgICAgID8gXCJiZy15ZWxsb3ctNDAwIHRleHQtYmxhY2sgcm91bmRlZC0zeGwgdy0xNiBwLTFcIlxuICAgICAgOiBcInRleHQtd2hpdGUgcC0xXCI7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENvbnRlbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgZmV0Y2hlZENvbnRlbnQgPSBbXTtcbiAgICAgIGxldCBwYWdlID0gMTtcbiAgICAgIGNvbnN0IG1heEl0ZW1zID0gMzA7IC8vIOWPluW+l+OBmeOCi+OCouOCpOODhuODoOOBruacgOWkp+aVsFxuICAgICAgY29uc3QgbWF4UGFnZXMgPSAxMDsgLy8g5pyA5aSn44Oa44O844K45pWwXG5cbiAgICAgIHdoaWxlIChmZXRjaGVkQ29udGVudC5sZW5ndGggPCBtYXhJdGVtcyAmJiBwYWdlIDw9IG1heFBhZ2VzKSB7XG4gICAgICAgIGxldCB1cmwgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkR2VucmUpIHtcbiAgICAgICAgICBjYXNlIFwibW92aWVzXCI6XG4gICAgICAgICAgICB1cmwgPSBgJHtCQVNFX1VSTH0vbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWphLUpQJnBhZ2U9JHtwYWdlfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiYW5pbWVcIjpcbiAgICAgICAgICAgIHVybCA9IGAke0JBU0VfVVJMfS90dj9hcGlfa2V5PSR7QVBJX0tFWX0mbGFuZ3VhZ2U9amEtSlAmd2l0aF9nZW5yZXM9MTYmcGFnZT0ke3BhZ2V9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJ0dlwiOlxuICAgICAgICAgICAgdXJsID0gYCR7QkFTRV9VUkx9L3R2P2FwaV9rZXk9JHtBUElfS0VZfSZsYW5ndWFnZT1qYS1KUCZwYWdlPSR7cGFnZX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IHJlc3BvbnNlLmRhdGEucmVzdWx0cy5maWx0ZXIoXG4gICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5vdmVydmlldyAmJiBpdGVtLm92ZXJ2aWV3XG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKG5ld0NvbnRlbnQpO1xuICAgICAgICAgIGZldGNoZWRDb250ZW50ID0gWy4uLmZldGNoZWRDb250ZW50LCAuLi5uZXdDb250ZW50XS5zbGljZShcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBtYXhJdGVtc1xuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvbnRlbnQ6XCIsIGVycm9yKTtcbiAgICAgICAgICBicmVhazsgLy8g44Ko44Op44O844GM55m655Sf44GX44Gf5aC05ZCI44Gv44Or44O844OX44KS5Lit5patXG4gICAgICAgIH1cblxuICAgICAgICBwYWdlKys7XG4gICAgICB9XG5cbiAgICAgIHNldENvbnRlbnQoZmV0Y2hlZENvbnRlbnQpO1xuICAgIH07XG5cbiAgICBmZXRjaENvbnRlbnQoKTtcbiAgfSwgW3NlbGVjdGVkR2VucmVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMS8xMiBteC1hdXRvIG10LTEwICBtZDptdC0yMCBjdXN0b20tbGc6bXQtMjAgcGItMTBcIj5cbiAgICAgIDxTd2lwZXIgc2xpZGVzUGVyVmlldz17NX0gY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRHZW5yZShcIm1vdmllc1wiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uU3R5bGUoXCJtb3ZpZXNcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg5pig55S7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgIDxTd2lwZXJTbGlkZT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEdlbnJlKFwiYW5pbWVcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvblN0eWxlKFwiYW5pbWVcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg44Ki44OL44OhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgIDxTd2lwZXJTbGlkZT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEdlbnJlKFwidHZcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvblN0eWxlKFwidHZcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVFbnlarntYRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgIDwvU3dpcGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWRpc3BsYXlcIj5cbiAgICAgICAge2NvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgaHJlZj17YC8ke3NlbGVjdGVkR2VucmUgPT09IFwibW92aWVzXCIgPyBcIm1vdmllc1wiIDogXCJhbmltZVwifS8ke1xuICAgICAgICAgICAgICBpdGVtLmlkXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvNVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCR7aXRlbS5iYWNrZHJvcF9wYXRofWB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZSB8fCBpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03LzEyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXN0b20tbGc6dGV4dC14bFwiPntpdGVtLnRpdGxlIHx8IGl0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgY3VzdG9tLWxnOnB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ucmVsZWFzZV9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLnJlbGVhc2VfZGF0ZS5zcGxpdChcIi1cIilbMF1cbiAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uZmlyc3RfYWlyX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uZmlyc3RfYWlyX2RhdGUuc3BsaXQoXCItXCIpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG10LTEwIGhpZGRlbiBjdXN0b20tbGc6YmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ub3ZlcnZpZXcubGVuZ3RoID4gMjAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLm92ZXJ2aWV3LnN1YnN0cmluZygwLCAyMDApICsgXCIuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5vdmVydmlld31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtdC0yIGN1c3RvbS1sZzpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5vdmVydmlldy5sZW5ndGggPiA4MFxuICAgICAgICAgICAgICAgICAgPyBpdGVtLm92ZXJ2aWV3LnN1YnN0cmluZygwLCA4MCkgKyBcIi4uLlwiXG4gICAgICAgICAgICAgICAgICA6IGl0ZW0ub3ZlcnZpZXd9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJMaW5rIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RNREJfQVBJX0tFWSIsIkJBU0VfVVJMIiwiR2VucmVQYWdlIiwic2VsZWN0ZWRHZW5yZSIsInNldFNlbGVjdGVkR2VucmUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImJ1dHRvblN0eWxlIiwiZ2VucmUiLCJmZXRjaENvbnRlbnQiLCJmZXRjaGVkQ29udGVudCIsInBhZ2UiLCJtYXhJdGVtcyIsIm1heFBhZ2VzIiwibGVuZ3RoIiwidXJsIiwicmVzcG9uc2UiLCJnZXQiLCJuZXdDb250ZW50IiwiZGF0YSIsInJlc3VsdHMiLCJmaWx0ZXIiLCJpdGVtIiwib3ZlcnZpZXciLCJzbGljZSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsInNsaWRlc1BlclZpZXciLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaW5kZXgiLCJocmVmIiwiaWQiLCJpbWciLCJzcmMiLCJiYWNrZHJvcF9wYXRoIiwiYWx0IiwidGl0bGUiLCJuYW1lIiwicCIsInJlbGVhc2VfZGF0ZSIsInNwbGl0IiwiZmlyc3RfYWlyX2RhdGUiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/genres.js\n"));

/***/ })

});