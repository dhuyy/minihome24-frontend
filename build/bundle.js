/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProductsPage = __webpack_require__(13);

var _ProductsPage2 = _interopRequireDefault(_ProductsPage);

var _CartPage = __webpack_require__(18);

var _CartPage2 = _interopRequireDefault(_CartPage);

var _OrdersPage = __webpack_require__(20);

var _OrdersPage2 = _interopRequireDefault(_OrdersPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _ProductsPage2.default, {
  path: '/',
  exact: true
}), _extends({}, _CartPage2.default, {
  path: '/cart'
}), _extends({}, _OrdersPage2.default, {
  path: '/orders'
})];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectProduct = exports.fetchProducts = undefined;

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(5);

var _apiConstants = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchProducts = exports.fetchProducts = function fetchProducts() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var request;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('' + _apiConstants.AWS_SERVER.url + _apiConstants.AWS_SERVER.endpoints.products.getAll);

            case 2:
              request = _context.sent;


              dispatch({
                type: _actionTypes.FETCH_PRODUCTS,
                payload: request
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var selectProduct = exports.selectProduct = function selectProduct(product) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _actionTypes.SELECT_PRODUCT,
                payload: product
              });

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_PRODUCTS = exports.FETCH_PRODUCTS = 'FETCH_PRODUCTS';
var SELECT_PRODUCT = exports.SELECT_PRODUCT = 'SELECT_PRODUCT';

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement(
    'div',
    { className: 'header-wrapper' },
    _react2.default.createElement(_reactRouterDom.Link, { to: '/orders', className: 'point-click' }),
    _react2.default.createElement('img', { src: 'images/header.png', alt: 'Header' })
  );
};

exports.default = Header;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("img", { src: "images/footer.png", alt: "Footer" })
  );
};

exports.default = Footer;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _createStore = __webpack_require__(21);

var _createStore2 = _interopRequireDefault(_createStore);

var _renderer = __webpack_require__(25);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)();

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(function () {
    res.send((0, _renderer2.default)(req, store));
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(8);

var _Footer2 = _interopRequireDefault(_Footer);

var _Products = __webpack_require__(16);

var _Products2 = _interopRequireDefault(_Products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductsPage = function (_Component) {
  _inherits(ProductsPage, _Component);

  function ProductsPage() {
    _classCallCheck(this, ProductsPage);

    return _possibleConstructorReturn(this, (ProductsPage.__proto__ || Object.getPrototypeOf(ProductsPage)).apply(this, arguments));
  }

  _createClass(ProductsPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchProducts();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'main-wrapper' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Products2.default, { products: this.props.products, selectProduct: this.props.selectProduct }),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return ProductsPage;
}(_react.Component);

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchProducts)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchProducts: _actions.fetchProducts, selectProduct: _actions.selectProduct })(ProductsPage)
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AWS_SERVER = exports.AWS_SERVER = {
  url: 'http://18.216.180.137',
  endpoints: {
    products: {
      getAll: '/products/find',
      getById: '/products/find/'
    },
    pricing: {
      getAll: '/pricing/find',
      getById: '/pricing/find/',
      calculate: '/pricing/calculate/'
    },
    orders: {
      getAll: '/orders/find'
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Products = function (_Component) {
  _inherits(Products, _Component);

  function Products(props) {
    _classCallCheck(this, Products);

    return _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).call(this, props));
  }

  _createClass(Products, [{
    key: 'onClickProduct',
    value: function onClickProduct(product) {
      var _this2 = this;

      this.props.selectProduct(product).then(function () {
        return _this2.props.history.push('/cart');
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: 'renderProducts',
    value: function renderProducts() {
      var _this3 = this;

      return this.props.products.map(function (product) {
        return _react2.default.createElement(
          'div',
          { key: product._id, className: 'product-box' },
          _react2.default.createElement('div', { className: 'point-click product', onClick: function onClick() {
              _this3.onClickProduct(product);
            } }),
          _react2.default.createElement('img', { src: product.picture, className: 'product-image', alt: 'Product Image' }),
          _react2.default.createElement(
            'p',
            { className: 'product-name' },
            product.name
          ),
          _react2.default.createElement(
            'p',
            { className: 'product-price' },
            'ab ',
            product.price,
            '.00 \u20AC'
          ),
          _react2.default.createElement('img', { src: 'images/product-delivery-stars.png', className: 'product-delivery-stars', alt: 'Delivery & Stars' })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'products-wrapper' },
        _react2.default.createElement('img', { src: 'images/sidebar.png', alt: 'Sidebar' }),
        _react2.default.createElement(
          'div',
          { className: 'products-content-wrapper' },
          _react2.default.createElement('img', { src: 'images/products_header.png', className: 'product-header', alt: 'Products Header' }),
          _react2.default.createElement(
            'div',
            { className: 'products-wrapper' },
            this.renderProducts()
          )
        )
      );
    }
  }]);

  return Products;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(Products);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouter = __webpack_require__(17);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(8);

var _Footer2 = _interopRequireDefault(_Footer);

var _Cart = __webpack_require__(19);

var _Cart2 = _interopRequireDefault(_Cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartPage = function (_Component) {
  _inherits(CartPage, _Component);

  function CartPage() {
    _classCallCheck(this, CartPage);

    return _possibleConstructorReturn(this, (CartPage.__proto__ || Object.getPrototypeOf(CartPage)).apply(this, arguments));
  }

  _createClass(CartPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.selectedProduct.length === 0) {
        this.props.history.push('/');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'main-wrapper' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Cart2.default, { selectedProduct: this.props.selectedProduct }),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return CartPage;
}(_react.Component);

function mapStateToProps(state) {
  return {
    selectedProduct: state.selectedProduct
  };
}

exports.default = {
  component: (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps)(CartPage))
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_Component) {
  _inherits(Cart, _Component);

  function Cart() {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
  }

  _createClass(Cart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'cart-wrapper' },
        _react2.default.createElement(
          'form',
          { className: 'form-coupon' },
          _react2.default.createElement('input', { type: 'text' }),
          _react2.default.createElement('div', { className: 'point-click coupon' })
        ),
        _react2.default.createElement(_reactRouterDom.Link, { to: '/orders', className: 'point-click cart' }),
        _react2.default.createElement(
          'div',
          { className: 'selected-product-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'product-picture-name' },
            _react2.default.createElement(
              'p',
              null,
              this.props.selectedProduct.name
            ),
            _react2.default.createElement('img', { src: this.props.selectedProduct.picture, alt: '' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-product-price' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                'Subtotal:'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Discount:'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Total:'
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                this.props.selectedProduct.price,
                '.00 \u20AC'
              ),
              _react2.default.createElement(
                'p',
                null,
                '0 %'
              ),
              _react2.default.createElement(
                'p',
                null,
                this.props.selectedProduct.price,
                '.00 \u20AC'
              )
            )
          )
        ),
        _react2.default.createElement('img', { src: 'images/cart-content.png', alt: 'Cart' })
      );
    }
  }]);

  return Cart;
}(_react.Component);

exports.default = Cart;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrdersPage = function OrdersPage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      'I\'m the orders page component'
    ),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return console.log('Hi there!');
        } },
      'Press me!'
    )
  );
};

exports.default = {
  component: OrdersPage
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(23);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _productsReducer = __webpack_require__(24);

var _productsReducer2 = _interopRequireDefault(_productsReducer);

var _cartReducer = __webpack_require__(28);

var _cartReducer2 = _interopRequireDefault(_cartReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  products: _productsReducer2.default,
  selectedProduct: _cartReducer2.default
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.FETCH_PRODUCTS:
      return action.payload.data;

    default:
      return state;
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(26);

var _reactRouterDom = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(27);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  return '\n    <html>\n      <head>\n        <link rel="stylesheet" href="bundle.css">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + JSON.stringify((0, _serializeJavascript2.default)(store.getState())) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SELECT_PRODUCT:
      return action.payload;

    default:
      return state;
  }
};

/***/ })
/******/ ]);