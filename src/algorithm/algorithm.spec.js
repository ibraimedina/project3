describe('ALGORITHM TEST', function() {
	var Algorithm = require('./algorithm.js');
	
	describe('Given a "5" bill and "4.05" charge', function() {
		var bill = 5, charge = 4.05;
		
		it('should change for 0.5+0.25+0.1+0.1', function() {
			var change = [0.5, 0.25, 0.1, 0.1];
			expect(Algorithm.calcChange(bill, charge)).toEqual(change);
		})
		it('should change 4 coins', function() {
			expect(Algorithm.calcChange(bill, charge).length).toBe(4);
		})
		it('should change 0.95', function() {
			var sum = Algorithm.calcChange(bill, charge).reduce((p,c)=>p+c)
			expect(sum).toBe(0.95);
		})
	})
})
