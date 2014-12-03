/*
 * Author: Jabez128
 * Lisence: MIT
 * description: es6string is a library for ES6 new String method:
 * startsWith,endsWith,includes,repeat,codePointAt
 */

"use strict"

function es6string(window,undefined) {
	var proto = window.String.prototype
	proto.startsWith = proto.startsWith || function (substr) {
		if(!(typeof substr == "string")) {
			throw new Error("Parameter should be a string")
			return
		}
		return (new RegExp("^"+substr)).test(this)
	}
	proto.endsWith = proto.endsWith || function (substr) {
		if(!(typeof substr == "string")) {
			throw new Error("Parameter should be a string")
			return
		}
		return (new RegExp(substr+"$")).test(this)
	}
	proto.includes = proto.include || function (substr) {
		if(!(typeof substr == "string")) {
			throw new Error("Parameter should be a string")
			return
		}
		return (new RegExp(substr)).test(this)
	}
	proto.repeat = proto.repeatWith || function (num) {
		if(!(typeof num == "number")) {
			throw new Error("Parameter should be a number")
			return
		}
		var result = "" 
		for(var i = 0;i < num;i++) {
			result += this
		}
		return result 
	}
	proto.codePointAt = proto.codePointAt || function (pos) {
		if (!(typeof pos == "number")) {
			throw new Error("Parameter should be a number")
			return
		}
		var size = this.size
		if (pos < 0 || pos > size) {
			return undefined
		}
		var first = this.charCodeAt(pos);
		var second;
		if ( first >= 0xD800 && first <= 0xDBFF &&
			size > pos + 1 ) {
			second = this.charCodeAt(pos + 1);
			if (second >= 0xDC00 && second <= 0xDFFF) { 
				return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
			}
		}
		return first;
	}
}

if (global) {
	es6string(global,undefined)
} else if(window) {
	es6string(window,undefined)
}