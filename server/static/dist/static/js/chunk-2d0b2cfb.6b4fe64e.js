(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2cfb"],{2667:function(r,t,e){"use strict";e.r(t);var i=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("v-container",[e("v-card",{staticClass:"mx-auto mt-3 rounded-lg",attrs:{width:r.width,outlined:"",shaped:"",tile:"",elevation:"1"}},[e("v-row",{attrs:{align:"center",justify:"space-around"}},[e("v-card-title",{attrs:{justify:"center"}},[r._v("Find Two Words Similarity Measure")])],1),e("v-divider"),e("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),r.Find(t)}}},[e("v-card-text",[e("v-text-field",{attrs:{"error-messages":r.wordErrors1,label:"Word1",required:"",outlined:"",filled:"",autocomplete:"on"},model:{value:r.word1,callback:function(t){r.word1=t},expression:"word1"}}),e("v-text-field",{attrs:{"error-messages":r.wordErrors2,label:"Word2",required:"",outlined:"",filled:"",autocomplete:"on"},model:{value:r.word2,callback:function(t){r.word2=t},expression:"word2"}})],1),e("v-card-actions",[e("v-row",{attrs:{align:"center",justify:"space-around"}},[e("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"success",large:""}},[r._v(" Find ")])],1)],1)],1)],1),e("v-row",{attrs:{align:"center",justify:"space-around"}},[r.chip&&r.error?e("v-chip",{staticClass:"ma-2",attrs:{close:"",color:"red","text-color":"white"},on:{"click:close":function(t){r.chip=!1}}},[r._v(" "+r._s(r.error)+" ")]):r._e()],1),r.similarityMeasure?e("v-row",{staticClass:"green--text",attrs:{align:"center",justify:"space-around"}},[r._v("Similarity Score: "+r._s(r.similarityMeasure))]):r._e()],1)},o=[],a=(e("b0c0"),e("5530")),s=e("1dce"),d=e("b5ae"),n=e("2f62"),c={mixins:[s["validationMixin"]],validations:{word1:{required:d["required"]},word2:{required:d["required"]}},data:function(){return{chip:!0,word1:"",word2:""}},computed:Object(a["a"])({wordErrors1:function(){var r=[];return this.$v.word1.$dirty?(!this.$v.word1.required&&r.push("Word1 is required."),r):r},wordErrors2:function(){var r=[];return this.$v.word2.$dirty?(!this.$v.word2.required&&r.push("Word2 is required."),r):r},width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 450;case"sm":return 450;case"md":return 450;case"lg":return 450;case"xl":return 500}}},Object(n["b"])({error:"getError",similarityMeasure:"getSimilarityMeasure"})),methods:{Find:function(){if(this.$v.$touch(),this.chip=!0,this.$v.$dirty&&!this.$v.$error){var r={word1:this.word1,word2:this.word2};this.$store.dispatch("SimilarityMeasure",r)}},clear:function(){this.$v.$reset(),this.word1="",this.word2=""}},mounted:function(){this.$store.commit("SET_ERROR",""),this.$store.commit("SET_SIMILARITY_MEASURE","")}},u=c,l=e("2877"),v=e("6544"),w=e.n(v),h=e("8336"),f=e("b0af"),m=e("99d9"),p=e("cc20"),b=e("a523"),$=e("ce7e"),y=e("4bd4"),x=e("0fd9"),_=e("8654"),g=Object(l["a"])(u,i,o,!1,null,null,null);t["default"]=g.exports;w()(g,{VBtn:h["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VChip:p["a"],VContainer:b["a"],VDivider:$["a"],VForm:y["a"],VRow:x["a"],VTextField:_["a"]})}}]);
//# sourceMappingURL=chunk-2d0b2cfb.6b4fe64e.js.map