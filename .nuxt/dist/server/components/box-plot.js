exports.ids = [2];
exports.modules = {

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BoxPlot.vue?vue&type=template&id=68ee96de&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',[_c('VueApexCharts',{staticStyle:{"width":"100%"},attrs:{"type":"boxPlot","options":_vm.chartOptions,"series":_vm.dataset,"title":_vm.title}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BoxPlot.vue?vue&type=template&id=68ee96de&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BoxPlot.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BoxPlotvue_type_script_lang_js_ = ({
  components: {
    VueApexCharts: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 61, 7))
  },
  props: {
    dataset: {
      type: Array,
      required: true
    },
    title: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      chartOptions: {
        chart: {
          id: 'boxplot-1',
          type: 'boxPlot',
          height: 350
        },
        yaxis: {
          decimalsInFloat: 2
        },
        tooltip: {
          enebled: false,
          x: {
            show: true
          },
          y: {
            formatter: value => {
              return value.toFixed(2);
            }
          }
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#5C4742',
              lower: '#A5978B'
            }
          }
        }
      }
    };
  },

  created() {
    this.chartOptions.title = this.title;
  },

  methods: {
    getChartOptions() {
      return this.chartOptions;
    }

  }
});
// CONCATENATED MODULE: ./components/BoxPlot.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BoxPlotvue_type_script_lang_js_ = (BoxPlotvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/BoxPlot.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BoxPlotvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0220ed92"
  
)

/* harmony default export */ var BoxPlot = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=box-plot.js.map