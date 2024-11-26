export function createLoan() {
	let monthlyLoanPayment = $state(0);

	return {
		get monthlyLoanPayment() {
			return monthlyLoanPayment;
		},

		updateMonthlyPayment: (amount, annualRate, years) => {
			if (amount !== null && annualRate !== null && years !== null) {
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

export function createTaxes() {
	let taxes = $state(0);

	return {
		get taxes() {
			return taxes;
		},

		updateTaxes(rent, taxesRate) {
			if (rent !== null && taxesRate !== null) {
				taxes = (rent / 2) * (taxesRate / 100);
			}
		}
	};
}

export const taxes = createTaxes();
