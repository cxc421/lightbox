!function(e){var n={};function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/assets",o(o.s=0)}([function(e,n,o){o(2),e.exports=o(1)},function(e,n,o){},function(e,n,o){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=[],t=!0,i=!1,c=void 0;try{for(var r,s=e[Symbol.iterator]();!(t=(r=s.next()).done)&&(o.push(r.value),!n||o.length!==n);t=!0);}catch(e){i=!0,c=e}finally{try{t||null==s.return||s.return()}finally{if(i)throw c}}return o}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}o.r(n);var c=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var o,i,c,r=document.querySelector(".lightbox-v2"),s=r.querySelector(".lightbox-v2-image-area"),l=s.querySelector(".lightbox-v2-image-wrapper"),u=l.querySelector(".lightbox-v2-loading-icon"),a=l.querySelector("img"),f=l.querySelector(".left-icon"),v=l.querySelector(".right-icon"),y=l.querySelector(".cancel-icon"),g=r.querySelector(".lightbox-v2-text-page"),p=r.querySelector(".lightbox-v2-text-quote"),d=t(g.querySelectorAll("span"),2),x=d[0],b=d[1];this.elms={container:r,loadingIcon:u,imageArea:s,imageWrapper:l,image:a,leftIcon:f,rightIcon:v,cancelIcon:y,curPage:x,totalPage:b},this.boxIdx=-1,this.imgPaths=n,f.addEventListener("click",this.toPrevBox.bind(this)),v.addEventListener("click",this.toNextBox.bind(this)),y.addEventListener("click",this.hide.bind(this)),window.addEventListener("resize",(o=this.adjustImageSize.bind(this),i=50,c=null,function(){clearTimeout(c);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];c=setTimeout.apply(void 0,[o,i].concat(n))}));var m=function(e){return e.stopPropagation()};l.addEventListener("click",m),g.addEventListener("click",m),p.addEventListener("click",m),r.addEventListener("click",this.hide.bind(this))}var n,o,c;return n=e,(o=[{key:"toNextBox",value:function(){var e=this.boxIdx<this.imgPaths.length-1?this.boxIdx+1:0;this.changeBox(e)}},{key:"toPrevBox",value:function(){var e=this.boxIdx>0?this.boxIdx-1:this.imgPaths.length-1;this.changeBox(e)}},{key:"toggleDisplayElems",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];n.forEach(function(n){var o=e.elms[n];o.classList.remove("lightbox-icons-show"),o.classList.add("lightbox-icons-hide")}),o.forEach(function(n){var o=e.elms[n];o.classList.remove("lightbox-icons-hide"),o.classList.add("lightbox-icons-show")})}},{key:"toLoadingStatus",value:function(){this.toggleDisplayElems(["image","leftIcon","rightIcon","cancelIcon"],["loadingIcon"])}},{key:"toShowImageStatus",value:function(){this.toggleDisplayElems(["loadingIcon"],["image","leftIcon","rightIcon","cancelIcon"])}},{key:"adjustImageSize",value:function(){var e,n,o=this.elms,t=o.image,i=o.imageWrapper,c=o.imageArea,r=c.clientHeight,s=c.clientWidth,l=t.naturalHeight,u=t.naturalWidth;if(l&&u){if(l<r&&u<s)e=u,n=l;else{var a=u/l;s/r>a?(n=r,e=r*a):(e=s,n=s/a)}var f=getComputedStyle(i).borderWidth,v=f?f.split("px")[0]:0;t.style.width=e-2*v+"px",i.style.width=e+"px",i.style.height=n+"px"}else console.error("adjustImageSize: invalid natural size")}},{key:"changeBox",value:function(e){var n=this;if(e!==this.boxIdx){var o=this.elms,t=o.image,i=o.totalPage,c=o.curPage;this.toLoadingStatus(),t.onload=function(){setTimeout(function(){n.adjustImageSize(),n.toShowImageStatus()},500)},t.onerror=function(){console.error("load image failed")},t.src=this.imgPaths[e],this.boxIdx=e,c.textContent=e+1,i.textContent="/"+this.imgPaths.length}}},{key:"show",value:function(e){this.changeBox(e),this.elms.container.style.display="block"}},{key:"hide",value:function(){this.elms.container.style.display="none"}}])&&i(n.prototype,o),c&&i(n,c),e}();function r(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var s=["fox-02.jpg","fox-04.jpg","fox-01.jpg","fox-06.jpg","fox-05.jpg","fox-03.jpg"],l=s.map(function(e){return"./assets/images/"+e.split(".").join("-s.")}),u=s.map(function(e){return"./assets/images/"+e});new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.initPreviewBox(),this.lightBox=new c(u)}var n,o,t;return n=e,(o=[{key:"initPreviewBox",value:function(){var e=this,n=document.querySelector(".img-box-area");l.forEach(function(o,t){var i=document.createElement("div");i.className="img-box",i.addEventListener("click",function(){e.lightBox.show(t)});var c=document.createElement("div");c.style.backgroundImage="url(".concat(o,")"),i.appendChild(c),n.appendChild(i)})}}])&&r(n.prototype,o),t&&r(n,t),e}())}]);