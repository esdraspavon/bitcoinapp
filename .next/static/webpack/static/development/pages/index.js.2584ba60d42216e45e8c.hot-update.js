webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/esdras/Documentos/bitcoinapp/components/News.js";


var News = function News(props) {
  var _props$news = props.news,
      urlToImage = _props$news.urlToImage,
      url = _props$news.url,
      title = _props$news.title,
      description = _props$news.description,
      source = _props$news.source;
  var image = "";

  if (urlToImage !== "") {
    imagen = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: urlToImage,
      alt: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.news.title);
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=index.js.2584ba60d42216e45e8c.hot-update.js.map