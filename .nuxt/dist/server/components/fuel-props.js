exports.ids = [7,6];
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

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FuelProps.vue?vue&type=template&id=5c1df33e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('b-collapse',{staticClass:"card",attrs:{"open":false,"animation":"slide","aria-id":"contentIdForA11y3"},scopedSlots:_vm._u([{key:"trigger",fn:function(props){return [_c('div',{staticClass:"card-header",attrs:{"role":"button","aria-controls":"contentIdForA11y3"}},[_c('p',{staticClass:"card-header-title"},[_vm._v("\n          "+_vm._s(_vm.getFuelModelLabel)+", \""+_vm._s(_vm.fuelModelCode)+"\"\n        ")]),_vm._v(" "),_c('a',{staticClass:"card-header-icon"},[_c('b-icon',{attrs:{"icon":props.open ? 'menu-down' : 'menu-up'}})],1)])]}}])},[_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"content"},[_c('b-button',{attrs:{"type":"is-danger","icon-left":"delete"},on:{"click":function($event){return _vm.removeFuel(_vm.fuelModelCode)}}},[_vm._v("\n          Remove\n        ")])],1),_vm._v(" "),_c('div',{staticClass:"block"},_vm._l((_vm.getFuelNodes),function(ref){
var label = ref.label;
var catalogParam = ref.catalogParam;
var max = ref.max;
var step = ref.step;
return _c('fuel-control',{key:label+_vm.fuelModelCode,attrs:{"title":label,"value":_vm.getValue(catalogParam),"max":max,"step":step,"indicator":"","lazy":""},on:{"change":function($event){return _vm.setValue(catalogParam, $event)},"input":function($event){return _vm.triggerArray(catalogParam, $event)}}})}),1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FuelProps.vue?vue&type=template&id=5c1df33e&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/FuelControl.vue + 4 modules
var FuelControl = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FuelProps.vue?vue&type=script&lang=js&
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


/* harmony default export */ var FuelPropsvue_type_script_lang_js_ = ({
  components: {
    FuelControl: FuelControl["default"]
  },
  props: {
    fuelModelCode: {
      type: String,
      required: true
    },
    nodeProps: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      fuelModel: {}
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      fuelMod: 'selector/fuelMod'
    }),

    getFuelModelLabel() {
      return this.fuelMod(this.fuelModelCode).label;
    },

    getFuelNodes() {
      return this.nodeProps.filter(item => item.used === true);
    }

  },
  methods: {
    getArrayMode(geneLabel) {
      const val = this.getValue(geneLabel);

      if (val.length > 1) {
        return true;
      } else {
        return false;
      }
    },

    getValue(param) {
      return this.fuelMod(this.fuelModelCode)[param];
    },

    getValueConvert(param) {
      const val = this.fuelMod(this.fuelModelCode)[param];

      if (param === 'deadHeat' || param === 'liveHeat') {
        if (Array.isArray(val)) {
          const valCopy = [...val];
          valCopy.forEach((element, index) => {
            valCopy[index] = Math.round(element / 1000);
          });
          return valCopy;
        } else {
          console.log('gete');
          return Math.round(val / 1000);
        }
      }
    },

    removeFuel(payload) {
      console.log('removing fuel', payload);
      this.$store.dispatch('selector/removeSelectedFuel', payload);
    },

    setValue(param, payload) {
      this.$store.dispatch('selector/updateFuelProp', {
        fuel: this.fuelModelCode,
        prop: param,
        value: payload
      });
      this.$emit('change');
    },

    setValueConvert(param, payload) {
      if (param === 'deadHeat' || param === 'liveHeat') {
        if (Array.isArray(payload)) {
          const copyPayload = [...payload];
          copyPayload.forEach((element, index) => {
            copyPayload[index] = Math.round(element * 1000);
          });
          this.$store.dispatch('selector/updateFuelProp', {
            fuel: this.fuelModelCode,
            prop: param,
            value: copyPayload
          });
        } else {
          const copyPayload = payload.valueOf() * 1000;
          this.$store.dispatch('selector/updateFuelProp', {
            fuel: this.fuelModelCode,
            prop: param,
            value: copyPayload
          });
        }
      }

      this.$emit('change');
    },

    triggerArray(param, payload) {
      console.log('trigger', param, payload);

      if (payload === true) {
        const orig = this.getValue(param);
        let val = [];
        console.log('trigger before', orig);
        val = [orig, orig * 1.1];
        console.log('trigger after', val);
        this.setValue(param, val);
      } else {
        const val = [...this.getValue(param)];
        this.setValue(param, val[0]);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/FuelProps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FuelPropsvue_type_script_lang_js_ = (FuelPropsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/FuelProps.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FuelPropsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0715fcf6"
  
)

/* harmony default export */ var FuelProps = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FuelControl: __webpack_require__(105).default})


/***/ })

};;
//# sourceMappingURL=fuel-props.js.map