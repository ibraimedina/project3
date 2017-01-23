var Algorithm = {
	availableCoins: [1, 0.5, 0.25, 0.1, 0.05], // arranged in preference order

	bestChange: function(paid, charge) {
		var factor = 1 / this.availableCoins[this.availableCoins.length - 1];
		paid *= factor;
		charge *= factor;
		if (paid - charge <= 0) return [];

		var coins = roundValues(this.availableCoins, factor);
		var result = algorithm(paid, charge, coins);
		return unroundValues(result, factor);
	}
};

var roundValues = function(values, factor) {
	var rounded = [];
	for (v in values) rounded.push(values[v] * factor);
	return rounded;
};

var unroundValues = function(values, factor) {
	var unrounded = [];
	for (v in values) unrounded.push(values[v] / factor);
	return unrounded;
};

var algorithm = function(paid, charge, availableCoins) {
	var changeSum = paid - charge;
	var coinsResult = [];
	var sumResult = 0;
	var curIdx;
	for (curIdx = 0; curIdx < availableCoins.length && sumResult < changeSum; curIdx++) {
		var curCoin = availableCoins[curIdx];
		var ifAdded = sumResult + curCoin;
		for (; ifAdded <= changeSum; ifAdded += curCoin) {
			coinsResult.push(curCoin);
			sumResult += curCoin;
		}
	}

	if (changeSum - sumResult > 0) {
		coinsResult.push(availableCoins[availableCoins.length - 1]);
	}
	return coinsResult;
}

module.exports = Algorithm;