(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{503:function(e,t,r){"use strict";r.r(t);r(118);var l={props:{title:{type:String,required:!0},value:{type:[Number,Array],required:!0},max:{type:Number,required:!0},step:{type:Number,required:!0},disabled:{type:Boolean,required:!0}},data:function(){return{}},methods:{passValue:function(e){this.$emit("change",e)}}},n=r(38),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"block"},[r("b-field",{staticStyle:{width:"90%"},attrs:{label:e.title}},[r("b-slider",{attrs:{value:e.value,max:e.max,step:e.step,disabled:e.disabled,indicator:"",lazy:""},on:{change:function(t){return e.passValue(t)}}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);