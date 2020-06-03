!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.printJS=t():e.printJS=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r={isFirefox:function(){return"undefined"!=typeof InstallTrigger},isIE:function(){return-1!==navigator.userAgent.indexOf("MSIE")||!!document.documentMode},isEdge:function(){return!r.isIE()&&!!window.StyleMedia},isChrome:function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return!!e.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||-1!==navigator.userAgent.toLowerCase().indexOf("safari")},isIOSChrome:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("crios")}},o=r,i={show:function(e){var t=document.createElement("div");t.setAttribute("style","font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"),t.setAttribute("id","printJS-Modal");var n=document.createElement("div");n.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),n.appendChild(r);var o=document.createElement("span");o.setAttribute("class","printSpinner"),n.appendChild(o);var a=document.createTextNode(e.modalMessage);n.appendChild(a),t.appendChild(n),document.getElementsByTagName("body")[0].appendChild(t),document.getElementById("printClose").addEventListener("click",(function(){i.close()}))},close:function(){var e=document.getElementById("printJS-Modal");e.parentNode.removeChild(e)}},a=i;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var n=document.defaultView||window,r="",o=n.getComputedStyle(e,"");return Object.keys(o).map((function(e){(-1!==t.targetStyles.indexOf("*")||-1!==t.targetStyle.indexOf(o[e])||function(e,t){for(var n=0;n<e.length;n++)if("object"===l(t)&&-1!==t.indexOf(e[n]))return!0;return!1}(t.targetStyles,o[e]))&&o.getPropertyValue(o[e])&&(r+=o[e]+":"+o.getPropertyValue(o[e])+";")})),r+="max-width: "+t.maxWidth+"px !important;"+t.font_size+" !important;"}function c(e,t){var n,r=document.createElement("div");if(n=t.header,new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>").test(n))r.innerHTML=t.header;else{var o=document.createElement("h1"),i=document.createTextNode(t.header);o.appendChild(i),o.setAttribute("style",t.headerStyle),r.appendChild(o)}e.insertBefore(r,e.childNodes[0])}function s(e){if(e.showModal&&a.close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable),e.onPrintDialogClose){var t="mouseover";(o.isChrome()||o.isFirefox())&&(t="focus");window.addEventListener(t,(function n(){window.removeEventListener(t,n),e.onPrintDialogClose()}))}}function u(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){try{if(e.focus(),o.isEdge()||o.isIE())try{e.contentWindow.document.execCommand("print",!1,null)}catch(n){e.contentWindow.print()}else e.contentWindow.print()}catch(r){t.onError(r)}finally{s(t)}}var b={send:function(e,t){document.getElementsByTagName("body")[0].appendChild(t);var n=document.getElementById(e.frameId);n.onload=function(){if("pdf"!==e.type){var t=n.contentWindow||n.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),e.onHtmlLoad(t),"pdf"!==e.type&&e.style){var r=document.createElement("style");r.innerHTML=e.style,t.head.appendChild(r)}var o=t.getElementsByTagName("img");o.length>0?function(e){var t=u(e).map((function(e){if(e.src&&e.src!==window.location.href)return function(e){return new Promise((function(t){!function n(){e&&"undefined"!=typeof e.naturalWidth&&0!==e.naturalWidth&&e.complete?t():setTimeout(n,500)}()}))}(e)}));return Promise.all(t)}(o).then((function(){return f(n,e)})):f(n,e)}else f(n,e)}}},m=function(e,t){if(e.base64){var n=Uint8Array.from(atob(e.printable),(function(e){return e.charCodeAt(0)}));y(e,t,n)}else{e.printable=/^(blob|http)/i.test(e.printable)?e.printable:window.location.origin+("/"!==e.printable.charAt(0)?"/"+e.printable:e.printable);var r=new window.XMLHttpRequest;r.responseType="arraybuffer",r.addEventListener("load",(function(){if(-1===[200,201].indexOf(r.status))return s(e),void e.onError(r.statusText);y(e,t,r.response)})),r.open("GET",e.printable,!0),r.send()}};function y(e,t,n){var r=new window.Blob([n],{type:"application/pdf"});r=window.URL.createObjectURL(r),t.setAttribute("src",r),b.send(e,t)}var h=function(e,t){var n=document.getElementById(e.printable);n?(e.printableElement=function r(e,t){for(var n=e.cloneNode(),o=Array.prototype.slice.call(e.childNodes),i=0;i<o.length;i++)if(-1===t.ignoreElements.indexOf(o[i].id)){var a=r(o[i],t);n.appendChild(a)}t.scanStyles&&1===e.nodeType&&n.setAttribute("style",d(e,t));switch(e.tagName){case"SELECT":n.value=e.value;break;case"CANVAS":n.getContext("2d").drawImage(e,0,0)}return n}(n,e),e.header&&c(e.printableElement,e),b.send(e,t)):window.console.error("Invalid HTML element id: "+e.printable)};var g=function(e,t){e.printableElement=document.createElement("div"),e.printableElement.setAttribute("style","width:100%"),e.printableElement.innerHTML=e.printable,b.send(e,t)},w=function(e,t){e.printable.constructor!==Array&&(e.printable=[e.printable]),e.printableElement=document.createElement("div"),e.printable.forEach((function(t){var n=document.createElement("img");n.setAttribute("style",e.imageStyle),n.src=t;var r=document.createElement("div");r.appendChild(n),e.printableElement.appendChild(r)})),e.header&&c(e.printableElement,e),b.send(e,t)};function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=function(e,t){if("object"!==v(e.printable))throw new Error("Invalid javascript data object (JSON).");if("boolean"!=typeof e.repeatTableHeader)throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!e.properties||!Array.isArray(e.properties))throw new Error("Invalid properties array for your JSON data.");e.properties=e.properties.map((function(t){return{field:"object"===v(t)?t.field:t,displayName:"object"===v(t)?t.displayName:t,columnSize:"object"===v(t)&&t.columnSize?t.columnSize+";":100/e.properties.length+"%;"}})),e.printableElement=document.createElement("div"),e.header&&c(e.printableElement,e),e.printableElement.innerHTML+=function(e){var t=e.printable,n=e.properties,r='<table style="border-collapse: collapse; width: 100%;">';e.repeatTableHeader&&(r+="<thead>");r+="<tr>";for(var o=0;o<n.length;o++)r+='<th style="width:'+n[o].columnSize+";"+e.gridHeaderStyle+'">'+((i=n[o].displayName).charAt(0).toUpperCase()+i.slice(1)+"</th>");var i;r+="</tr>",e.repeatTableHeader&&(r+="</thead>");r+="<tbody>";for(var a=0;a<t.length;a++){r+="<tr>";for(var l=0;l<n.length;l++){var d=t[a],c=n[l].field.split(".");if(c.length>1)for(var s=0;s<c.length;s++)d=d[c[s]];else d=d[n[l].field];r+='<td style="width:'+n[l].columnSize+e.gridStyle+'">'+d+"</td>"}r+="</tr>"}return r+="</tbody></table>"}(e),b.send(e,t)};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var x=["pdf","html","image","json","raw-html"],A=function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onHtmlLoad:function(e){},onError:function(e){throw e},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:null,onPdfOpen:null,onBrowserIncompatible:function(){return!0},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],imageStyle:"max-width: 100%;",repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1},t=arguments[0];if(t===undefined)throw new Error("printJS expects at least 1 attribute.");switch(S(t)){case"string":e.printable=encodeURI(t),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":for(var n in e.printable=t.printable,e.base64="undefined"!=typeof t.base64,e.fallbackPrintable="undefined"!=typeof t.fallbackPrintable?t.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable,e)"printable"!==n&&"fallbackPrintable"!==n&&"base64"!==n&&(e[n]="undefined"!=typeof t[n]?t[n]:e[n]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+S(t))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||"string"!=typeof e.type||-1===x.indexOf(e.type.toLowerCase()))throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&a.show(e),e.onLoadingStart&&e.onLoadingStart();var r,i=document.getElementById(e.frameId);switch(i&&i.parentNode.removeChild(i),(r=document.createElement("iframe")).setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute;"),r.setAttribute("id",e.frameId),"pdf"!==e.type&&(r.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach((function(e){r.srcdoc+='<link rel="stylesheet" href="'+e+'">'}))),r.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(o.isFirefox()||o.isEdge()||o.isIE())try{if(console.info("PrintJS currently doesn't support PDF printing in Firefox, Internet Explorer and Edge."),!0===e.onBrowserIncompatible()){var l=window.open(e.fallbackPrintable,"_blank");l.focus(),e.onPdfOpen&&e.onPdfOpen()}}catch(d){e.onError(d)}finally{e.showModal&&a.close(),e.onLoadingEnd&&e.onLoadingEnd()}else m(e,r);break;case"image":w(e,r);break;case"html":h(e,r);break;case"raw-html":g(e,r);break;case"json":E(e,r)}};"undefined"!=typeof window&&(window.printJS=A);t["default"]=A}])["default"]}));
//# sourceMappingURL=print.map