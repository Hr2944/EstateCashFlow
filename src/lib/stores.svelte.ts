import type { Expenses, Unit } from '$lib/types';

export function createLoan() {
	let monthlyLoanPayment = $state(0);
	let loanDuration = $state(25);

	return {
		get monthlyLoanPayment() {
			return monthlyLoanPayment;
		},

		get loanDuration() {
			return loanDuration;
		},

		updateMonthlyPayment(amount: number, annualRate: number, years: number) {
			if (amount !== null && annualRate !== null && years !== null) {
				const monthlyRate = annualRate / 100 / 12;
				const totalPayments = years * 12;
				monthlyLoanPayment = Math.round(
					(amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments))
				);
				loanDuration = years;
			}
		}
	};
}

export const loan = createLoan();

export function createRent() {
	let rent = $state(0);

	return {
		get rent() {
			return rent;
		},

		updateRent(units: Unit[]) {
			rent = units.reduce((sum, unit) => sum + unit.rent, 0);
		}
	};
}

export const rent = createRent();

function calculateTaxes(rent: number, rate: number) {
	return (rent / 2) * (rate / 100);
}

export function createExpenses() {
	let expenses: Expenses = $state({
		maintenance: 0,
		insurance: 0,
		replacementReserve: 0,
		taxes: 0,
		vacancyPercentage: 0
	});

	return {
		get expenses() {
			return expenses;
		},

		updateExpenses(
			rent: number,
			taxesRate: number,
			maintenance: number,
			insurance: number,
			replacementReserve: number,
			vacancyPercentage: number
		) {
			expenses = {
				maintenance: maintenance,
				insurance: insurance,
				replacementReserve: replacementReserve,
				taxes: calculateTaxes(rent, taxesRate),
				vacancyPercentage: vacancyPercentage
			};
		}
	};
}

export const expenses = createExpenses();
