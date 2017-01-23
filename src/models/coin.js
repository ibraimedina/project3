function Coin(){
	this.value = null;
	this.volume = null;
	this.weight = null;
}

Coin.prototype.density = function() {
	return this.weight / this.volume;
};

Coin.getCurrencyCoins = function(currency) {
	return availableCoins[currency].slice();
};

var availableCoins = {
	brl: [1, 0.5, 0.25, 0.1, 0.05],
	eur: [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
	usd: [1, 0.5, 0.25, 0.1, 0.05, 0.01]
};

module.exports = Coin;