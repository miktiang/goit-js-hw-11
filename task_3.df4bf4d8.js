parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"YrHM":[function(require,module,exports) {
"use strict";require("../sass/main.scss"),console.log("%c -----Task 3.1-----","color: tomato");const e=document.querySelector(".markup-task"),t=e=>{return new Promise((t,o)=>{setTimeout(()=>{t(e)},e)})},o=t=>{console.log(`Fulfilled after ${t}ms`),e.insertAdjacentHTML("beforeend",`<li>Fulfilled after ${t}ms</li>`)};t(2e3).then(o),t(1e3).then(o),t(1500).then(o),t(3e3).then(()=>{e.insertAdjacentHTML("beforeend",'<p class="task">Task 3.2</p> <p>Please check Console --\x3e</p>')}),setTimeout(()=>{console.log("%c -----Task 3.2-----","color: tomato")},3e3);const s=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!1}],a=(e,t)=>{const o=e.map(e=>e.name===t?{...e,active:!e.active}:e);return Promise.all(o)};setTimeout(()=>{a(s,"Mango").then(console.table)},3e3),setTimeout(()=>{a(s,"Ajax").then(console.table)},4e3),t(5e3).then(()=>{e.insertAdjacentHTML("beforeend",'<p class="task">Task 3.3</p> <p>Please check Console --\x3e</p>')}),setTimeout(()=>{console.log("%c -----Task 3.3-----","color: tomato")},5e3);const n=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),c=e=>new Promise((t,o)=>{const s=n(200,500);setTimeout(()=>{Math.random()>.3?t({id:e.id,time:s}):o(e.id)},s)}),i=({id:e,time:t})=>{console.log(`✅Transaction ${e} processed in ${t}ms`)},l=e=>{console.warn(`❌Error processing transaction ${e}. Please try again later.`)};setTimeout(()=>{c({id:70,amount:150}).then(i).catch(l)},5e3),setTimeout(()=>{c({id:71,amount:230}).then(i).catch(l)},6e3);
},{"../sass/main.scss":"clu1"}]},{},["YrHM"], null)
//# sourceMappingURL=/goit-js-hw-11/task_3.df4bf4d8.js.map