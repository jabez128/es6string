"use strict";function es6string(t,r){var e=t.String.prototype;e.startsWith=e.startsWith||function(t){if("string"!=typeof t)throw new Error("Parameter should be a string");return new RegExp("^"+t).test(this)},e.endsWith=e.endsWith||function(t){if("string"!=typeof t)throw new Error("Parameter should be a string");return new RegExp(t+"$").test(this)},e.includes=e.include||function(t){if("string"!=typeof t)throw new Error("Parameter should be a string");return new RegExp(t).test(this)},e.repeat=e.repeatWith||function(t){if("number"!=typeof t)throw new Error("Parameter should be a number");for(var r="",e=0;t>e;e++)r+=this;return r},e.codePointAt=e.codePointAt||function(t){if("number"!=typeof t)throw new Error("Parameter should be a number");var e=this.size;if(0>t||t>e)return r;var n,i=this.charCodeAt(t);return i>=55296&&56319>=i&&e>t+1&&(n=this.charCodeAt(t+1),n>=56320&&57343>=n)?1024*(i-55296)+n-56320+65536:i}}global?es6string(global,void 0):window&&es6string(window,void 0);