exports.ids = [8,6];
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputProps.vue?vue&type=template&id=31d0c044&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('b-collapse',{staticClass:"card",attrs:{"open":true,"animation":"slide","aria-id":"contentIdForA21y3"},scopedSlots:_vm._u([{key:"trigger",fn:function(props){return [_c('div',{staticClass:"card-header",attrs:{"role":"button","aria-controls":"contentIdForA21y3"}},[_c('p',{staticClass:"card-header-title"},[_vm._v("\n          Site inputs\n        ")]),_vm._v(" "),_c('a',{staticClass:"card-header-icon"},[_c('b-icon',{attrs:{"icon":props.open ? 'menu-down' : 'menu-up'}})],1)])]}}])},[_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"block"},_vm._l((_vm.getInputNodes),function(ref){
var label = ref.label;
var geneLabel = ref.geneLabel;
var max = ref.max;
var step = ref.step;
return _c('fuel-control',{key:label,attrs:{"title":label,"value":_vm.getValue(geneLabel),"max":max,"step":step,"indicator":"","lazy":""},on:{"change":function($event){return _vm.updateSiteInput(geneLabel, $event)},"input":function($event){return _vm.triggerArray(geneLabel, $event)}}})}),1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InputProps.vue?vue&type=template&id=31d0c044&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/FuelControl.vue + 4 modules
var FuelControl = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputProps.vue?vue&type=script&lang=js&
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


/* harmony default export */ var InputPropsvue_type_script_lang_js_ = ({
  components: {
    FuelControl: FuelControl["default"]
  },
  props: {
    nodeProps: {
      type: Array,
      required: true
    }
  },

  data() {
    return {};
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      siteInput: 'selector/siteInput'
    }),

    getInputNodes() {
      return this.nodeProps.filter(item => item.used === true);
    }

  },
  methods: {
    getValue(param) {
      return this.siteInput(param);
    },

    updateSiteInput(geneLabel, payload) {
      this.$store.dispatch('selector/updateSiteInputsProp', {
        geneLabel,
        payload
      });
      this.$emit('change');
    },

    triggerArray(param, payload) {
      console.log('trigger', param, payload);

      if (payload === true) {
        const orig = this.getValue(param);
        let val = [];
        console.log('trigger before', val);
        val = [orig, orig * 1.1];
        console.log('trigger after', val);
        this.updateSiteInput(param, val);
      } else {
        const val = [...this.getValue(param)];
        this.updateSiteInput(param, val[0]);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/InputProps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InputPropsvue_type_script_lang_js_ = (InputPropsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/InputProps.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InputPropsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "253961aa"
  
)

/* harmony default export */ var InputProps = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FuelControl: __webpack_require__(105).default})


/***/ })

};;
//# sourceMappingURL=input-props.js.map