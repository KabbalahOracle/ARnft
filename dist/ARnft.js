!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("three")):"function"==typeof define&&define.amd?define(["three"],t):"object"==typeof exports?exports.ARnft=t(require("three")):e.ARnft=t(e.THREE)}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=37)}([function(e,t,n){"use strict";var r=n(8),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,n){t.exports=e},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){e.exports=n(18)},function(e,t){function n(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,c,"next",e)}function c(e){n(a,o,i,s,c,"throw",e)}s(void 0)}))}}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){var r;e.exports=((r=function(){function e(e){return o.appendChild(e.dom),e}function t(e){for(var t=0;t<o.children.length;t++)o.children[t].style.display=t===e?"block":"none";n=e}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",(function(e){e.preventDefault(),t(++n%o.children.length)}),!1);var i=(performance||Date).now(),a=i,s=0,c=e(new r.Panel("FPS","#0ff","#002")),u=e(new r.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=e(new r.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:o,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(u.update(e-i,200),e>a+1e3&&(c.update(1e3*s/(e-a),100),a=e,s=0,f)){var t=performance.memory;f.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:o,setMode:t}}).Panel=function(e,t,n){var r=1/0,o=0,i=Math.round,a=i(window.devicePixelRatio||1),s=80*a,c=48*a,u=3*a,f=2*a,l=3*a,d=15*a,p=74*a,h=30*a,m=document.createElement("canvas");m.width=s,m.height=c,m.style.cssText="width:80px;height:48px";var v=m.getContext("2d");return v.font="bold "+9*a+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=n,v.fillRect(0,0,s,c),v.fillStyle=t,v.fillText(e,u,f),v.fillRect(l,d,p,h),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(l,d,p,h),{dom:m,update:function(c,g){r=Math.min(r,c),o=Math.max(o,c),v.fillStyle=n,v.globalAlpha=1,v.fillRect(0,0,s,d),v.fillStyle=t,v.fillText(i(c)+" "+e+" ("+i(r)+"-"+i(o)+")",u,f),v.drawImage(m,l+a,d,p-a,h,l,d,p-a,h),v.fillRect(l+p-a,d,a,h),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(l+p-a,d,a,i((1-c/g)*h))}}},r)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(25),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(12)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n(24))},function(e,t,n){"use strict";var r=n(0),o=n(26),i=n(9),a=n(28),s=n(31),c=n(32),u=n(13);e.exports=function(e){return new Promise((function(t,f){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var v=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,f,r),p=null}},p.onabort=function(){p&&(f(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n(33),y=(e.withCredentials||c(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),f(e),p=null)})),void 0===l&&(l=null),p.send(l)}))}},function(e,t,n){"use strict";var r=n(27);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(a,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=o.concat(i).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){e.exports=n(19)},function(e,t,n){e.exports=function(){return n(36)('!function(e){var t={};function a(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t){self.onmessage=e=>{const t=e.data;switch(t.type){case"load":return void n(t);case"process":a=t.imagedata,d()}};let a=null,r=null,o=null;const n=e=>{const t=self.origin;let a,n,d;console.debug("Base path:",t);const s=/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#()?&//=]*)/gim.test(e.artoolkitUrl);1==s?a=e.addPath?t+"/"+e.addPath+"/"+e.artoolkitUrl:e.artoolkitUrl:0==s&&(e.addPath?(console.debug("addPath exist: ",e.addPath),a=t+"/"+e.addPath+"/"+e.artoolkitUrl):a=t+"/"+e.artoolkitUrl),console.debug("Importing WASM lib from: ",a),importScripts(a),self.addEventListener("artoolkitNFT-loaded",(function(){const a=/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#()?&//=]*)/gim.test(e.camera_para);1==a?n=e.addPath?t+"/"+e.addPath+"/"+e.camera_para:e.camera_para:0==a&&(n=e.addPath?t+"/"+e.addPath+"/"+e.camera_para:t+"/"+e.camera_para),console.debug("Loading camera at:",n);const s=new ARCameraParamNFT(n,()=>{r=new ARControllerNFT(e.pw,e.ph,s);const a=r.getCameraMatrix();r.addEventListener("getNFTMarker",e=>{o={type:"found",matrixGL_RH:JSON.stringify(e.data.matrixGL_RH),proj:JSON.stringify(a)}});const n=/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#()?&//=]*)/gim.test(e.marker);1==n?d=e.addPath?t+"/"+e.addPath+"/"+e.marker:e.marker:0==n&&(d=e.addPath?t+"/"+e.addPath+"/"+e.marker:t+"/"+e.marker),console.debug("Loading NFT marker at: ",d),r.loadNFTMarker(d,e=>{postMessage({type:"nftData",nft:JSON.stringify(e)}),r.trackNFTMarkerId(e.id),console.log("loadNFTMarker -> ",e.id),console.log(e),postMessage({type:"endLoading",end:!0})}),postMessage({type:"loaded",proj:JSON.stringify(a)})},e=>{console.error(e)})}))},d=()=>{o=null,r&&r.process&&r.process(a),o?postMessage(o):postMessage({type:"not found"}),a=null}}]);',null)}},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var f=c(e,t,n);if("normal"===f.type){if(r=n.done?"completed":"suspendedYield",f.arg===u)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(r="completed",n.method="throw",n.arg=f.arg)}}}(e,n,a),i}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u={};function f(){}function l(){}function d(){}var p={};p[o]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(E([])));m&&m!==t&&n.call(m,o)&&(p=m);var v=d.prototype=f.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,s){var u=c(e[o],e,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(l).then((function(e){f.value=e,a(f)}),(function(e){return r("throw",e,a,s)}))}s(u.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return l.prototype=v.constructor=d,d.constructor=l,d[a]=l.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[i]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new y(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=E,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),b(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){"use strict";var r=n(0),o=n(8),i=n(20),a=n(14);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(11));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(15),c.CancelToken=n(34),c.isCancel=n(10),c.all=function(e){return Promise.all(e)},c.spread=n(35),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),o=n(9),i=n(21),a=n(22),s=n(14);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(23),i=n(10),a=n(11);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!f){var e=s(d);f=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||f||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(13);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(29),o=n(30);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(15);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";var r=window.URL||window.webkitURL;e.exports=function(e,t){try{try{var n;try{(n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(e),n=n.getBlob()}catch(t){n=new Blob([e])}return new Worker(r.createObjectURL(n))}catch(t){return new Worker("data:application/javascript,"+encodeURIComponent(e))}}catch(e){if(!t)throw Error("Inline worker is not supported");return new Worker(t)}}},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),i=n(5),a=n.n(i),s=n(2),c=n.n(s),u=n(3),f=n.n(u),l=n(6),d=n.n(l),p=n(16),h=n.n(p),m=n(17),v=n.n(m),g=n(1),y=function(){function e(){c()(this,e)}var t,n;return f()(e,null,[{key:"getUserMedia",value:(n=a()(o.a.mark((function e(t){var n,r,i,a,s,c,u,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.getElementById("video"),r=t.videoSettings.facingMode||"environment",i=t.onError||function(e){console.error("ARnft internal getUserMedia",e)},a=null,s={},c={},u=function(e){if(window.URL.createObjectURL)try{n.srcObject=e}catch(e){}n.srcObject=e,n.autoplay=!0,n.playsInline=!0},t.videoSettings.width&&(c.width=t.videoSettings.width,"object"===d()(t.videoSettings.width)?(t.videoSettings.width.max&&(s.maxWidth=t.videoSettings.width.max),t.videoSettings.width.min&&(s.minWidth=t.videoSettings.width.min)):s.maxWidth=t.videoSettings.width),t.videoSettings.height&&(c.height=t.videoSettings.height,"object"===d()(t.videoSettings.height)?(t.videoSettings.height.max&&(s.maxHeight=t.videoSettings.height.max),t.videoSettings.height.min&&(s.minHeight=t.videoSettings.height.min)):s.maxHeight=t.videoSettings.height),c.facingMode=r,c.deviceId=t.videoSettings.deviceId,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,f={audio:!1,video:s},!navigator.mediaDevices&&!window.MediaStreamTrack.getSources){e.next=31;break}if(!navigator.mediaDevices){e.next=28;break}return console.log("inside mediaDevices"),e.prev=16,e.next=19,navigator.mediaDevices.getUserMedia({audio:!1,video:c});case 19:a=e.sent,u(a),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(16),console.error(e.t0);case 26:e.next=29;break;case 28:window.MediaStreamTrack.getSources((function(e){var t=c.facingMode;r&&r.exact&&(t=r.exact);for(var n=0;n<e.length;n++)if("video"===e[n].kind&&e[n].facing===t){f.video.mandatory.sourceId=e[n].id;break}r&&r.exact&&!f.video.mandatory.sourceId?i("Failed to get camera facing the wanted direction"):navigator.getUserMedia?a=navigator.getUserMedia(f,u,i):i("navigator.getUserMedia is not supported on your browser")}));case 29:e.next=32;break;case 31:navigator.getUserMedia?navigator.getUserMedia(f,u,i):i("navigator.getUserMedia is not supported on your browser");case 32:return e.abrupt("return",new Promise((function(e){n.onloadedmetadata=function(){e(n)}})));case 33:case"end":return e.stop()}}),e,null,[[16,23]])}))),function(e){return n.apply(this,arguments)})},{key:"_startWorker",value:function(e,t,n,r,o,i,a,s,c,u){var f,l,d,p,h,m,g,y,w,x,b,S,E=this,k=document.createElement("canvas"),L=k.getContext("2d"),j=function(e){if(e){S=JSON.parse(e.matrixGL_RH);var t=new CustomEvent("getMatrixGL_RH",{detail:{matrixGL_RH:S}});document.dispatchEvent(t)}else S=null},T=(Date.now(),function(){L.fillStyle="black",L.fillRect(0,0,g,y),L.drawImage(n,0,0,f,l,w,x,h,m);var e=L.getImageData(0,0,g,y);b.postMessage({type:"process",imagedata:e},[e.data.buffer])});f=r,l=o,d=320/Math.max(f,l/3*4),p=E.isMobile()?window.outerWidth/r:1,h=f*d,m=l*d,g=Math.max(h,m/3*4),y=Math.max(m,h/4*3),w=(g-h)/2,x=(y-m)/2,k.style.clientWidth=g+"px",k.style.clientHeight=y+"px",k.width=g,k.height=y,(b=new v.a).postMessage({type:"load",pw:g,ph:y,camera_para:u.cameraPara,marker:t,artoolkitUrl:u.artoolkitUrl,addPath:u.addPath}),b.onmessage=function(e){var t=e.data;switch(t.type){case"loaded":var n=JSON.parse(t.proj),r=g/h,o=y/m;n[0]*=r,n[4]*=r,n[8]*=r,n[12]*=r,n[1]*=o,n[5]*=o,n[9]*=o,n[13]*=o;var i=new CustomEvent("getProjectionMatrix",{detail:{proj:n}});document.dispatchEvent(i);break;case"endLoading":if(!0===t.end){var a=document.getElementById("loading");a&&(a.querySelector(".loading-text").innerText="Start the tracking!",setTimeout((function(){a.parentElement.removeChild(a)}),2e3))}break;case"nftData":var c=JSON.parse(t.nft),u=new CustomEvent("getNFTData",{detail:{dpi:c.dpi,width:c.width,height:c.height}});document.dispatchEvent(u);break;case"found":j(t);break;case"not found":j(null)}s(),T()},T()}},{key:"isMobile",value:function(){return/Android|mobile|iPad|iPhone/i.test(navigator.userAgent)}},{key:"setMatrix",value:function(e,t){var n=[];for(var r in t)n[r]=t[r];"function"==typeof e.elements.set?e.elements.set(n):e.elements=[].slice.call(n)}},{key:"jsonParser",value:(t=a()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(t,{responseType:"json"}).then((function(e){return e.data})).catch((function(e){console.error(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),w=function(){function e(){c()(this,e)}return f()(e,null,[{key:"createContainer",value:function(){var e=document.createElement("div");e.id="app";var t=document.createElement("canvas");t.id="canvas";var n=document.createElement("video");n.id="video",n.setAttribute("autoplay",""),n.setAttribute("muted",""),n.setAttribute("playsinline",""),e.appendChild(n),e.appendChild(t);var r=document.getElementById("loading");return document.body.insertBefore(e,r),{container:e,canvas:t,video:n}}},{key:"createStats",value:function(e){if(e){var t=document.createElement("div");t.id="stats",t.className="ui stats";var n=document.createElement("div");n.id="stats1",n.className="stats-item";var r=document.createElement("p");r.className="stats-item-title",r.innerText="Main",n.appendChild(r),t.appendChild(n);var o=document.createElement("div");o.id="stats2",o.className="stats-item";var i=document.createElement("p");i.className="stats-item-title",i.innerText="Worker",o.appendChild(i),t.appendChild(o);var a=document.getElementById("loading");document.body.insertBefore(t,a)}}},{key:"createLoading",value:function(e){var t=document.createElement("div");t.id="loading";var n=document.createElement("img");n.src=e.loading.logo.src,n.alt=e.loading.logo.alt;var r=document.createElement("span");r.setAttribute("class","loading-text"),r.innerText=e.loading.loadingMessage,t.appendChild(n),t.appendChild(r),document.body.insertBefore(t,document.body.firstChild)}}]),e}(),x=n(7),b=n.n(x),S=function(){function e(t,n,r){c()(this,e),this.root=r,this.renderer=new g.WebGLRenderer({canvas:n,alpha:t.renderer.alpha,antialias:t.renderer.antialias,precision:t.renderer.precision}),this.renderer.setPixelRatio(window.devicePixelRatio),this.scene=new g.Scene,this.camera=new g.Camera}return f()(e,[{key:"initRenderer",value:function(){this.camera.matrixAutoUpdate=!1,this.scene.add(this.camera);var e=new g.AmbientLight(16777215);this.scene.add(e),this.scene.add(this.root),this.renderer.setSize(640,480)}},{key:"draw",value:function(){this.renderer.render(this.scene,this.camera)}}]),e}(),E=function(){function e(t,n,r){c()(this,e),this.width=t,this.height=n,this.root=new g.Object3D,this.root.matrixAutoUpdate=!1,this.config=r,this.listeners={},this.version="0.6.7",console.log("ARnft ",this.version)}var t;return f()(e,[{key:"_initialize",value:function(e,t){console.log("ARnft init() %cstart...","color: yellow; background-color: blue; border-radius: 4px; padding: 2px");var n=this.root,r=this.config;return y.jsonParser(r).then((function(r){w.createLoading(r),w.createStats(t);var o,i,a=w.createContainer(),s=a.container,c=a.canvas;t&&((o=new b.a).showPanel(0),document.getElementById("stats1").appendChild(o.dom),(i=new b.a).showPanel(0),document.getElementById("stats2").appendChild(i.dom));var u={statsMain:o,statsWorker:i,stats:t};y.getUserMedia(r).then((function(t){y._startWorker(s,e,t,t.videoWidth,t.videoHeight,c,(function(){u.stats&&u.statsMain.update()}),(function(){u.stats&&u.statsWorker.update()}),n,r)}));var f=new S(r,c,n);f.initRenderer();!function e(){f.draw(),window.requestAnimationFrame(e)}()})),this}},{key:"add",value:function(e){var t=this.root;document.addEventListener("getNFTData",(function(t){var n=t.detail;e.position.y=n.height/n.dpi*2.54*10/2,e.position.x=n.width/n.dpi*2.54*10/2})),t.add(e)}},{key:"loadModel",value:function(e,t,n,r,o){var i,a=this.root;(new g.GLTFLoader).load(e,(function(e){(i=e.scene).scale.set(o,o,o),i.rotation.x=Math.PI/2,i.position.x=t,i.position.y=n,i.position.z=r,i.matrixAutoUpdate=!1,a.add(i)}))}},{key:"dispatchEvent",value:function(e){var t=this.listeners[e.name];if(t)for(var n=0;n<t.length;n++)t[n].call(this,e)}},{key:"addEventListener",value:function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"removeEventListener",value:function(e,t){if(this.listeners[e]){var n=this.listeners[e].indexOf(t);n>-1&&this.listeners[e].splice(n,1)}}},{key:"_teardownVideo",value:function(e){e.srcObject.getVideoTracks()[0].stop(),e.srcObject=null,e.src=null}}],[{key:"init",value:(t=a()(o.a.mark((function t(n,r,i,a,s){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=new e(n,r,a),t.next=3,c._initialize(i,s);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(e,n,r,o,i){return t.apply(this,arguments)})}]),e}();t.default={ARnft:E}}]).default}));