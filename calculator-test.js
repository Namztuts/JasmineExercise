describe('Loan calculator tests', function () {
   it('should calculate the monthly rate correctly', function () {
      const values = { amount: 100000, years: 30, rate: 6 };
      expect(calculateMonthlyPayment(values)).toEqual('599.55');
   });

   it('should grab the values from the form inputs', function () {
      let amountUI = +document.getElementById('loan-amount').value;
      let yearsUI = +document.getElementById('loan-years').value;
      let rateUI = +document.getElementById('loan-rate').value;

      expect(getCurrentUIValues()).toEqual({
         amount: +amountUI,
         years: +yearsUI,
         rate: +rateUI,
      });
   });

   it('should return a result with 2 decimal places and account for large intrest rate', function () {
      const values = {
         amount: 1000,
         years: 40,
         rate: 99,
      };
      expect(calculateMonthlyPayment(values)).toEqual('82.50');
   });

   // end of Describe
});

// I want to know why the above does not work
// It is grabbing a value from the input
// That value is a string notated by the '100000' quotations around it
// When i try to test this out in the Console it works and i just can't figure out