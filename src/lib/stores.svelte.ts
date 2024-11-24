export function createLoan() {
	let monthlyLoanPayment = $state(0);

	return {
		get monthlyLoanPayment() {
			return monthlyLoanPayment;
		},

		calculateMonthlyPayment: (amount, annualRate, years) => {
			if (amount !== null && annualRate !== null && years !== null) {
				console.log(annualRate);
				const monthlyRate = annualRate / 100 / 12;
				const totalPayments = years * 12;
				monthlyLoanPayment = Math.round(
					(amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments))
				);
			}
		}
	};
}

export const loan = createLoan();
