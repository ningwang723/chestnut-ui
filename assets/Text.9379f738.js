import"./UploadFile.vue_vue&type=style&index=0&lang.4e1238dc.js";import{h as m,q as f,o as a,c as n,a as v,s as _,u as o,g as u,j as p}from"./app.88231b44.js";const b={class:"cu-text"},x=["disabled","value"],g={key:0,class:"cu-text-addon cu-text-prepend"},y={key:1,class:"cu-text-addon cu-text-append"};function V(l,{emit:s}){const d=m(),r=f(),c=({target:e})=>{s("update:modelValue",e.value)};return(e,t)=>(a(),n("div",b,[v("input",_({type:"text",disabled:l.disabled,value:l.modelValue},o(r),{onChange:c,onBlur:t[0]||(t[0]=i=>s("blur")),onFocus:t[1]||(t[1]=i=>s("focus"))}),null,16,x),o(d).prepend?(a(),n("span",g,[u(e.$slots,"prepend")])):p("v-if",!0),o(d).append?(a(),n("span",y,[u(e.$slots,"append")])):p("v-if",!0)]))}const h={inheritAttrs:!1},k=Object.assign(h,{props:{disabled:Boolean,modelValue:{type:null,default:""},name:String},emits:["update:modelValue","blur","focus"],setup:V});export{k as _};