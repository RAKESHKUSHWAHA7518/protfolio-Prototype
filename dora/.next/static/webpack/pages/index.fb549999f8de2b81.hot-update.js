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

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Contact = (param)=>{\n    let { info  } = param;\n    _s();\n    const [mailData, setMailData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const { social_handles  } = info.user;\n    console.log(\"https://\".concat(social_handles.platform, \".com\"));\n    const { name , email , message  } = mailData;\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const onChange = (e)=>setMailData({\n            ...mailData,\n            [e.target.name]: e.target.value\n        });\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        if (name.length === 0 || email.length === 0 || message.length === 0) {\n            setError(true);\n            clearError();\n        } else {\n            emailjs_com__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(\"service_seruhwu\", \"template_21aw58z\", mailData, \"Q3pccdLZhU-mZT7tQ\" // public api\n            ).then((response)=>{\n                setError(false);\n                clearError();\n                setMailData({\n                    name: \"\",\n                    email: \"\",\n                    message: \"\"\n                });\n            }, (err)=>{\n                console.log(err.text);\n            });\n        }\n    };\n    const clearError = ()=>{\n        setTimeout(()=>{\n            setError(null);\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"contact-section\",\n        id: \"contact\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"contact-info-cont\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"contact-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"section_title wow fadeInUp\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Let's Connect\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"wow fadeInUp\",\n                                children: \"Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"contact-social wow fadeInUp\",\n                                children: social_handles.map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: social.url ? social.url : \"https://\".concat(social.platform.toLowerCase(), \".com\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fab fa-\".concat(social.platform.toLowerCase())\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 51\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"contact-form wow fadeInUp\",\n                        onSubmit: (e)=>onSubmit(e),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Let's message me and mack something together\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"input-control\",\n                                placeholder: \"Your Name\",\n                                name: \"name\",\n                                onChange: (e)=>onChange(e),\n                                value: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"input-control\",\n                                placeholder: \"Your Email\",\n                                name: \"email\",\n                                onChange: (e)=>onChange(e),\n                                value: email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"input-control\",\n                                placeholder: \"Message\",\n                                defaultValue: \"\",\n                                name: \"message\",\n                                onChange: (e)=>onChange(e),\n                                value: message\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: error ? \"empty_notice\" : \"returnmessage\",\n                                style: {\n                                    display: error == null ? \"none\" : \"block\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: error ? \"Please Fill Required Fields\" : \"Your message has been received, We will contact you soon.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn primary-btn\",\n                                    children: \"Send Message\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                    lineNumber: 137,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 136,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"eC4TUMhM+0HN7p89ed5CamuCHDc=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEM7Z0NBQ0NwQixXQUFVO2dDQUNWbUIsYUFBWTtnQ0FDWkUsY0FBYztnQ0FDZDlDLE1BQUs7Z0NBQ0xVLFVBQVUsQ0FBQ0MsSUFBTUQsU0FBU0M7Z0NBQzFCRSxPQUFPWDs7Ozs7OzBDQUVULDhEQUFDeUI7Z0NBQ0NGLFdBQVdqQixRQUFRLGlCQUFpQixlQUFlO2dDQUNuRHVDLE9BQU87b0NBQUVDLFNBQVN4QyxTQUFTLElBQUksR0FBRyxTQUFTLE9BQU87Z0NBQUM7MENBRW5ELDRFQUFDeUM7OENBQ0V6QyxRQUNHLGdDQUNBLDJEQUEyRDs7Ozs7Ozs7Ozs7MENBR25FLDhEQUFDbUI7Z0NBQUlGLFdBQVU7MENBQ2IsNEVBQUN5QjtvQ0FBT3pCLFdBQVU7OENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEQ7R0E1SU03QjtLQUFBQTtBQTZJTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250YWN0LmpzPzVhMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVtYWlsanMgZnJvbSBcImVtYWlsanMtY29tXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250YWN0ID0gKHtpbmZvfSkgPT4ge1xuICBjb25zdCBbbWFpbERhdGEsIHNldE1haWxEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIG1lc3NhZ2U6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHtzb2NpYWxfaGFuZGxlc309IGluZm8udXNlclxuXG4gIGNvbnNvbGUubG9nKGBodHRwczovLyR7c29jaWFsX2hhbmRsZXMucGxhdGZvcm19LmNvbWApO1xuXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IG1haWxEYXRhO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PlxuICAgIHNldE1haWxEYXRhKHsgLi4ubWFpbERhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG5hbWUubGVuZ3RoID09PSAwIHx8IGVtYWlsLmxlbmd0aCA9PT0gMCB8fCBtZXNzYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICBjbGVhckVycm9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtYWlsanNcbiAgICAgICAgLnNlbmQoXG4gICAgICAgICAgXCJzZXJ2aWNlX3NlcnVod3VcIiwgLy8gc2VydmljZSBpZFxuICAgICAgICAgIFwidGVtcGxhdGVfMjFhdzU4elwiLCAvLyB0ZW1wbGF0ZSBpZFxuICAgICAgICAgIG1haWxEYXRhLFxuICAgICAgICAgIFwiUTNwY2NkTFpoVS1tWlQ3dFFcIiAvLyBwdWJsaWMgYXBpXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICAgICAgICBjbGVhckVycm9yKCk7XG4gICAgICAgICAgICBzZXRNYWlsRGF0YSh7IG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBtZXNzYWdlOiBcIlwiIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNsZWFyRXJyb3IgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICB9LCAyMDAwKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWN0LXNlY3Rpb25cIiBpZD1cImNvbnRhY3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvLWNvbnRcIj5cbiAgICAgICAgICB7LyogQ29udGFjdCBsZWZ0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fdGl0bGUgd293IGZhZGVJblVwXCI+XG4gICAgICAgICAgICAgIDxoMj5MZXQncyBDb25uZWN0PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCI+XG4gICAgICAgICAgICAgIFBsZWFzZSBmaWxsIG91dCB0aGUgZm9ybSBvbiB0aGlzIHNlY3Rpb24gdG8gY29udGFjdCB3aXRoIG1lLiBPclxuICAgICAgICAgICAgICBjYWxsIGJldHdlZW4gOTowMCBhLm0uIGFuZCA4OjAwIHAubS4gRVQsIE1vbmRheSB0aHJvdWdoIEZyaWRheVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRhY3Qtc29jaWFsIHdvdyBmYWRlSW5VcFwiPlxuICAgICAgICAgICAgIHtzb2NpYWxfaGFuZGxlcy5tYXAoKHNvY2lhbCxpbmRleCk9Pig8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17c29jaWFsLnVybCA/IHNvY2lhbC51cmwgOiBgaHR0cHM6Ly8ke3NvY2lhbC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpfS5jb21gfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtzb2NpYWwucGxhdGZvcm0udG9Mb3dlckNhc2UoKX1gfSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT4pKSBcblxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtaW5zdGFncmFtJyAvPlxuXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtzb2NpYWxfaGFuZGxlc1sxXS5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpfWB9IC8+XG5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWRyaWJiYmxlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+ICAqL31cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIENvbnRhY3QgcmlnaHQgKi99XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybSB3b3cgZmFkZUluVXBcIlxuICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+TGV0J3MgbWVzc2FnZSBtZSBhbmQgbWFjayBzb21ldGhpbmcgdG9nZXRoZXI8L2gzPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9yID8gXCJlbXB0eV9ub3RpY2VcIiA6IFwicmV0dXJubWVzc2FnZVwifVxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA9PSBudWxsID8gXCJub25lXCIgOiBcImJsb2NrXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge2Vycm9yXG4gICAgICAgICAgICAgICAgICA/IFwiUGxlYXNlIEZpbGwgUmVxdWlyZWQgRmllbGRzXCJcbiAgICAgICAgICAgICAgICAgIDogXCJZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gcmVjZWl2ZWQsIFdlIHdpbGwgY29udGFjdCB5b3Ugc29vbi5cIn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYnRuXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHByaW1hcnktYnRuXCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwibmFtZXMiOlsiZW1haWxqcyIsInVzZVN0YXRlIiwiQ29udGFjdCIsImluZm8iLCJtYWlsRGF0YSIsInNldE1haWxEYXRhIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsInNvY2lhbF9oYW5kbGVzIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwbGF0Zm9ybSIsImVycm9yIiwic2V0RXJyb3IiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJjbGVhckVycm9yIiwic2VuZCIsInRoZW4iLCJyZXNwb25zZSIsImVyciIsInRleHQiLCJzZXRUaW1lb3V0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiZGl2IiwiaDIiLCJwIiwidWwiLCJtYXAiLCJzb2NpYWwiLCJpbmRleCIsImxpIiwiYSIsImhyZWYiLCJ1cmwiLCJ0b0xvd2VyQ2FzZSIsImkiLCJmb3JtIiwiaDMiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiZGVmYXVsdFZhbHVlIiwic3R5bGUiLCJkaXNwbGF5Iiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Contact.js\n"));

/***/ })

});