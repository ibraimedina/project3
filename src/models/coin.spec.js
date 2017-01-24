var Coin = require("./coin.js");

describe("Given BRL currency", function() {
	var currency = "brl";

	it("should have 1, 0.5, 0.25, 0.1, 0.05 as options", function() {
		var options = [1, 0.5, 0.25, 0.1, 0.05];
		expect(Coin.getCurrencyCoins(currency)).toEqual(options);
	});
});

describe("Given EUR currency", function() {
	var currency = "eur";

	it("should have 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01 as options", function() {
		var options = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
		expect(Coin.getCurrencyCoins(currency)).toEqual(options);
	});
});

describe("Given USD currency", function() {
	var currency = "usd";

	it("should have 1, 0.5, 0.25, 0.1, 0.05, 0.01 as options", function() {
		var options = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
		expect(Coin.getCurrencyCoins(currency)).toEqual(options);
	});
});