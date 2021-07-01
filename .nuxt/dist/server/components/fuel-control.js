exports.ids = [6];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FuelControl.vue?vue&type=template&id=2d2855be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block"},[_c('b-field',{staticStyle:{"width":"100%"},attrs:{"label":_vm.title}},[_c('div',{staticClass:"level"},[_c('div',{staticClass:"level-left",staticStyle:{"width":"80%"}},[_c('b-slider',{attrs:{"value":_vm.value,"max":_vm.max,"step":_vm.step,"indicator":"","lazy":""},on:{"change":function($event){return _vm.passValue($event)}}})],1),_vm._v(" "),_c('div',{staticClass:"level-right",staticStyle:{"width":"20%"}},[_c('b-switch',{on:{"input":function($event){return _vm.passEvent($event)}},model:{value:(_vm.isDisabled),callback:function ($$v) {_vm.isDisabled=$$v},expression:"isDisabled"}}),_vm._v("\n        Range\n      ")],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FuelControl.vue?vue&type=template&id=2d2855be&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FuelControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FuelControlvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [Number, Array],
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      isDisabled: false
    };
  },

  created() {
    this.checkDisabled();
  },

  methods: {
    checkDisabled() {
      if (Array.isArray(this.value)) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },

    passValue(payload) {
      this.$emit('change', payload);
    },

    passEvent(payload) {
      console.log('switch', this.isDisabled);
      this.$emit('input', this.isDisabled);
    }

  }
});
// CONCATENATED MODULE: ./components/FuelControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FuelControlvue_type_script_lang_js_ = (FuelControlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/FuelControl.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FuelControlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e94d189c"
  
)

/* harmony default export */ var FuelControl = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=fuel-control.js.map