const e=(e=localStorage)=>{const t={setItem:function(t,r,n=!0){let o={val:r};if(n)try{let r=JSON.stringify(o);e.setItem(t,r)}catch(e){console.error(e)}else e.setItem(t,txt)},getItem:function(t){let r=e.getItem(t);if(null===r)return r;try{return JSON.parse(r).val}catch(e){return r}},removeItem:function(t){e.removeItem(t)},clear:function(){e.clear()},keys:function(){return Object.keys(e)},values:function(){return Object.keys(e).map((e=>t.getItem(e)))},entries:function(){return Object.keys(e).map((e=>[e,t.getItem(e)]))}};return new Proxy(t,{get:(t,r,n)=>"length"===r?e.length:["setItem","getItem","removeItem","clear","keys","values","entries"].includes(r)?t[r]:t.getItem(r)})},t=e(localStorage),r=e(sessionStorage);var n={localStore:t,sesstionStore:r};export{n as default,t as localStore,r as sesstionStore};
