es6string
=========

A polyfill for ES6 new String method    

include:

 - startsWith 
 - endsWith
 - includes
 - repeat
 - codePointAt

#Usage 

In browser:

> <script type="text/javascript" src="path/es6string.js">

In node:   

> npm i es6string 

then:  

> require("es6string")

#Example  
	
	require("es6string")
	var str = "hello world"
	console.log(str.startsWith("Hello")) // true
	console.log(str.endsWith("Hello")) // true
	console.log(str.includes("llo")) // true
	console.log(str.repeat(2)) // "hello worldhello world"
	console.log(str.codePointAt(0)) // 104

#Reference  

> The codePointAt function refer to [String.prototype.codePointAt](https://github.com/mathiasbynens/String.prototype.codePointAt) module by mathiasbynens, very impressive.  

#Lisence 

MIT


