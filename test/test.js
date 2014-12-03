require("../es6string.js")
var chai = require("chai")
chai.should()

describe("es6string library",function () {
	describe("startsWith",function () {
		it("should return true if the parameter is 'hello'",function () {
			var str = "hello world"
			str.startsWith("hello").should.equal(true)
		})
		it("should return false if the parameter is 'wello'",function () {
			var str = "hello world"
			str.startsWith("wello").should.equal(false)
		})
	})
	describe("endsWith",function () {
		it("should return true if the parameter is 'world'",function () {
			var str = "hello world"
			str.endsWith("world").should.equal(true)
		})
		it("should return false if the parameter is 'horld'",function () {
			var str = "hello world"
			str.endsWith("horld").should.equal(false)
		})
	})
	describe("includes",function () {
		it("should return true if the parameter is 'wor'",function () {
			var str = "hello world"
			str.includes("wor").should.equal(true)
		})
		it("should return false if the parameter is 'hor'",function () {
			var str = "hello world"
			str.includes("hor").should.equal(false)
		})
	})
	describe("repeat",function () {
		it("should return 'hahaha' if parameter is 3",function () {
			var str = "ha"
			str.repeat(3).should.equal('hahaha')
		})
	})
	describe("codePointAt",function () {
		it("should return 98 if parameter is 1", function () {
			var str = "abc"
			str.codePointAt(1).should.equal(98)
		})
	})

})