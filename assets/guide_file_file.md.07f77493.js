import"./UploadFile.vue_vue&type=style&index=0&lang.4e1238dc.js";import{_ as j}from"./Button.7c7db9a7.js";import{q as _,f as h,o as s,c,u as l,s as k,j as v,a as m,v as f,w,x as b,F as q,y as A,i as $,b as g,e as S}from"./app.88231b44.js";const C={class:"cu-file-uploader"},R=["name","id"],B=["for"],U={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor"},z=m("path",{"fill-rule":"evenodd",d:"M11.75 4.5a.75.75 0 01.75.75V11h5.75a.75.75 0 010 1.5H12.5v5.75a.75.75 0 01-1.5 0V12.5H5.25a.75.75 0 010-1.5H11V5.25a.75.75 0 01.75-.75z"},null,-1),F=[z],H=["src","alt"],O=m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor"},[m("path",{"fill-rule":"evenodd",d:"M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"}),m("path",{d:"M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"}),m("path",{d:"M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"})],-1);function T(a,{emit:o}){const t=a,u=_(),e=h(()=>{const d=t.modelValue||t.file;return Object.prototype.toString.call(d)==="[object File]"?URL.createObjectURL(d):d}),p=({target:d})=>{if(d.files.length===0)return;const n=Array.from(d.files);d.files=void 0,o("update:modelValue",n)};return(d,n)=>(s(),c("div",C,[l(u).readonly?v("v-if",!0):(s(),c("input",k({key:0,type:"file",name:a.name,id:a.name},l(u),{onChange:p}),null,16,R)),m("label",{for:a.name},[a.file?(s(),c("img",{key:1,src:l(e),alt:a.file.name},null,8,H)):(s(),c("svg",U,F)),a.canRemove?(s(),f(j,{key:2,type:"text",color:"danger",size:"xs",class:"remove-icon",onClick:n[0]||(n[0]=i=>o("remove"))},{default:w(()=>[O]),_:1})):v("v-if",!0)],8,B)]))}const L={inheritAttrs:!1},y=Object.assign(L,{props:{name:{type:String,required:!0},modelValue:null,file:null,canRemove:Boolean},emits:["update:modelValue","remove"],setup:T}),M={class:"cu-file"};function N(a,{emit:o}){const t=a,u=_(),e=h({get(){if(t.modelValue===void 0)return t.multiple?[]:null;const n=Object.prototype.toString.call(t.modelValue)==="[object Array]"?t.modelValue:[t.modelValue];return t.multiple?n:n[0]},set(n){if(t.modelValue&&u.max&&t.modelValue.length+n.length>u.max){alert(`\u8D85\u8FC7\u6700\u5927\u4E0A\u4F20\u6570\u91CF\uFF0C\u6700\u591A\u5141\u8BB8\u9009\u62E9 [ ${u.max} ] \u4E2A\u6587\u4EF6,\u8BF7\u91CD\u65B0\u9009\u62E9\u3002`);return}if(t.modelValue!==void 0&&Object.prototype.toString.call(t.modelValue)==="[object Array]"){const i=t.modelValue.concat(n);return o("update:modelValue",i)}o("update:modelValue",n)}}),p=n=>{e.value.splice(n,1)},d=h(()=>t.modelValue===void 0?!0:u.max!=t.modelValue.length);return(n,i)=>(s(),c("div",M,[a.multiple?(s(),c(q,{key:1},[(s(!0),c(q,null,A(l(e),(r,V)=>(s(),f(y,{key:r,name:`${a.name}-${V}`,file:r,readonly:!0,canRemove:!0,onRemove:K=>p(V)},null,8,["name","file","onRemove"]))),128)),l(d)?(s(),f(y,k({key:0,name:`${a.name}-multiple`,modelValue:l(e),"onUpdate:modelValue":i[1]||(i[1]=r=>b(e)?e.value=r:null)},l(u),{multiple:a.multiple}),null,16,["name","modelValue","multiple"])):v("v-if",!0)],64)):(s(),f(y,k({key:0,name:a.name,file:l(e),modelValue:l(e),"onUpdate:modelValue":i[0]||(i[0]=r=>b(e)?e.value=r:null)},l(u)),null,16,["name","file","modelValue"]))]))}const P={inheritAttrs:!1},x=Object.assign(P,{props:{name:{type:String,required:!0},modelValue:null,multiple:Boolean},emits:["update:modelValue"],setup:N}),D={style:{display:"grid",gap:"8px"}},E={setup(a){const o=$("https://v3.cn.vuejs.org/logo.png"),t=$(void 0);return(u,e)=>(s(),c("div",D,[g(l(x),{name:"uploader",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=p=>o.value=p)},null,8,["modelValue"]),g(l(x),{name:"uploader",modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=p=>t.value=p),multiple:"",max:"9"},null,8,["modelValue"]),g(l(x),{name:"uploader1",modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=p=>o.value=p),disabled:""},null,8,["modelValue"])]))}},I=S(`<h1 id="\u6587\u4EF6\u4E0A\u4F20" tabindex="-1">\u6587\u4EF6\u4E0A\u4F20 <a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a></h1><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u5C5E\u6027\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>disabled</code></td><td style="text-align:left;">\u662F\u5426\u7981\u7528\u9009\u62E9\u6846</td><td style="text-align:left;"><code>true</code> or <code>false</code></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;"><code>multiple</code></td><td style="text-align:left;">\u662F\u5426\u591A\u9009</td><td style="text-align:left;"><code>true</code> or <code>false</code></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;"><code>accept</code></td><td style="text-align:left;">\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B</td><td style="text-align:left;">\u4E0EHTML\u4E0A\u4F20\u7EC4\u4EF6\u4E00\u81F4</td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>max</code></td><td style="text-align:left;">\u5141\u8BB8\u7684\u6700\u5927\u4E0A\u4F20\u6570\u91CF</td><td style="text-align:left;">-</td><td style="text-align:left;"><code>undefined</code></td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u65F6\u95F4</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;"><code>update:modelValue</code></td><td style="text-align:left;">\u9009\u62E9\u6846\u72B6\u6001\u66F4\u65B0</td><td style="text-align:left;"><code>modelValue</code></td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span> <span class="token property">gap</span><span class="token punctuation">:</span>8px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>File</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploader<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>single<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>File</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploader<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multiple<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>File</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploader1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>single<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,7),Y='{"title":"\u6587\u4EF6\u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"}],"relativePath":"guide/file/file.md","lastUpdated":1637632582300}',G={};function J(a){return(o,t)=>(s(),c("div",null,[I,g(E)]))}const Z=Object.assign(G,{setup:J});export{Y as __pageData,Z as default};
