var Algorithm = require(`./algorithm.js`);

describe(`Given a currency`, function() {	
	
	describe(`when has a "5" bill and "4.05" charge`, function() {
		var bill = 5, charge = 4.05;
		
		it(`should change for 0.5+0.25+0.1+0.1`, function() {
			var change = [0.5, 0.25, 0.1, 0.1];
			expect(Algorithm.bestChange(bill, charge)).toEqual(change);
		});
	});

	describe(`when has a "5" bill and "4.13" charge`, function() {
		var bill = 5, charge = 4.13;
		
		it(`should change for 0.5+0.25+0.1+0.05`, function() {
			var change = [0.5, 0.25, 0.1, 0.05];
			expect(Algorithm.bestChange(bill, charge)).toEqual(change);
		});
	});
});
