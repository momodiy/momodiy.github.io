(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/order/user.vue?vue&type=template&id=54b7a586":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/views/order/user.vue?vue&type=template&id=54b7a586 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_a_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"a-button\");\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_a_button, {\n    onClick: $setup.createOrder\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"H5支付测试\")]),\n    _: 1 /* STABLE */\n  })]);\n}\n\n//# sourceURL=webpack:///./src/views/order/user.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/order/user.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/views/order/user.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_pay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/pay */ \"./src/api/pay.js\");\n\n// import WxPay from 'wechatpay-node-v3'; // 支持使用require\n// import fs from 'fs';\n// import request from 'superagent';\n\n// const pay = new WxPay({\n//   appid: 'wxb02dc7d4bb4442cc',\n//   mchid: '1626035885',\n//   // publicKey: fs.readFileSync('./apiclient_cert.pem'), // 公钥\n//   // privateKey: fs.readFileSync('./apiclient_key.pem'), // 秘钥\n// })\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'user',\n  setup(__props, {\n    expose\n  }) {\n    expose();\n    const createOrder = async () => {\n      // TODO 先查询签名，放入Authorization\n      const h5Param = {\n        mchid: '1626035885',\n        out_trade_no: 'H51217752501201407033233368018',\n        // 随机\n        appid: 'wxb02dc7d4bb4442cc',\n        description: '薇薇洗面奶',\n        notify_url: 'https://weixin.qq.com/',\n        amount: {\n          total: 1,\n          currency: 'CNY'\n        },\n        scene_info: {\n          payer_client_ip: '127.0.0.1',\n          h5_info: {\n            type: 'Wap'\n          }\n        }\n      };\n      const res = await Object(_api_pay__WEBPACK_IMPORTED_MODULE_0__[\"h5CreateOrder\"])(h5Param);\n      console.log(res, '创建订单结果');\n    };\n    const __returned__ = {\n      createOrder,\n      get h5CreateOrder() {\n        return _api_pay__WEBPACK_IMPORTED_MODULE_0__[\"h5CreateOrder\"];\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack:///./src/views/order/user.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./src/api/pay.js":
/*!************************!*\
  !*** ./src/api/pay.js ***!
  \************************/
/*! exports provided: h5CreateOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h5CreateOrder\", function() { return h5CreateOrder; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\");\n\nfunction h5CreateOrder(data) {\n  console.log(data, '入参来了？？');\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    // baseURL: 'https://api.mch.weixin.qq.com',\n    url: '/v3/pay/transactions/h5',\n    method: 'post',\n    data\n  });\n}\n\n//# sourceURL=webpack:///./src/api/pay.js?");

/***/ }),

/***/ "./src/views/order/user.vue":
/*!**********************************!*\
  !*** ./src/views/order/user.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_vue_vue_type_template_id_54b7a586__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=54b7a586 */ \"./src/views/order/user.vue?vue&type=template&id=54b7a586\");\n/* harmony import */ var _user_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&setup=true&lang=js */ \"./src/views/order/user.vue?vue&type=script&setup=true&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var E_code_planB_shuhe_weiui_manage_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var E_code_planB_shuhe_weiui_manage_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_code_planB_shuhe_weiui_manage_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/E_code_planB_shuhe_weiui_manage_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_user_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_user_vue_vue_type_template_id_54b7a586__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/views/order/user.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/views/order/user.vue?");

/***/ }),

/***/ "./src/views/order/user.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************!*\
  !*** ./src/views/order/user.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_user_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./user.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/order/user.vue?vue&type=script&setup=true&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_user_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/order/user.vue?");

/***/ }),

/***/ "./src/views/order/user.vue?vue&type=template&id=54b7a586":
/*!****************************************************************!*\
  !*** ./src/views/order/user.vue?vue&type=template&id=54b7a586 ***!
  \****************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_user_vue_vue_type_template_id_54b7a586__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./user.vue?vue&type=template&id=54b7a586 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/order/user.vue?vue&type=template&id=54b7a586\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_user_vue_vue_type_template_id_54b7a586__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/order/user.vue?");

/***/ })

}]);