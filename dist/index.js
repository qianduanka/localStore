!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).index={})}(this,(function(e){"use strict";const t=(e=localStorage)=>{const t={setItem:function(t,n,o=!0){let r={val:n};if(o)try{let n=JSON.stringify(r);e.setItem(t,n)}catch(e){console.error(e)}else e.setItem(t,txt)},getItem:function(t){let n=e.getItem(t);if(null===n)return n;try{return JSON.parse(n).val}catch(e){return n}},removeItem:function(t){e.removeItem(t)},clear:function(){e.clear()},keys:function(){return Object.keys(e)},values:function(){return Object.keys(e).map((e=>t.getItem(e)))},entries:function(){return Object.keys(e).map((e=>[e,t.getItem(e)]))}};return new Proxy(t,{get:(t,n,o)=>"length"===n?e.length:["setItem","getItem","removeItem","clear","keys","values","entries"].includes(n)?t[n]:t.getItem(n)})},n=t(localStorage),o=t(o);var r={localStore:n,sesstionStore:o};e.default=r,e.localStore=n,e.sesstionStore=o,Object.defineProperty(e,"__esModule",{value:!0})}));