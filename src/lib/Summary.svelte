<script lang="ts">
	import type { Expenses } from '$lib/types';
	import { expenses, loan, rent } from '$lib/stores.svelte';

	function createSummary(expenses: Expenses, rent: number, loan: number, taxes: number) {
		const totalExpenses =
			(expenses.vacancyPercentage / 100) * rent +
			expenses.maintenance +
			taxes +
			expenses.insurance +
			expenses.replacementReserve;
		const cashFlow = rent - totalExpenses - loan;

		return {
			rent: rent.toFixed(2),
			loan: loan.toFixed(2),
			expenses: totalExpenses.toFixed(2),
			taxes: taxes.toFixed(2),
			cashFlow: cashFlow.toFixed(2),
			yearlyCashFlow: (cashFlow * 12).toFixed(2)
		};
	}

	function microBICSystemTaxesReduction(taxes: number) {
		return taxes / 2;
	}

	function realSystemTaxesReduction(totalLoan: number, expenses: Expenses) {
		const depreciation = (totalLoan * 0.8) / (30 * 12); // 30 * 12 is the number of months of the depreciation
		const taxesToPay = expenses.taxes - depreciation - expenses.replacementReserve - expenses.insurance - expenses.maintenance;
		if (taxesToPay < 0) return 0;
		return taxesToPay;
	}

	const summaryBicSystem = $derived(
		createSummary(
			expenses.expenses,
			rent.rent,
			loan.monthlyLoanPayment,
			microBICSystemTaxesReduction(expenses.expenses.taxes)
		)
	);

	const summaryRealSystem = $derived(
		createSummary(
			expenses.expenses,
			rent.rent,
			loan.monthlyLoanPayment,
			realSystemTaxesReduction(loan.totalLoan, expenses.expenses)
		)
	);
</script>


<table class="border border-gray-300 rounded-md border-separate border-spacing-0">
	<thead>
	<tr>
		<th class="border-r border-b border-gray-300 py-2 px-3">Summary</th>
		<th class="border-r border-b border-gray-300  py-2 px-3">LMNP Micro-BIC</th>
		<th class="border-b border-gray-300  py-2 px-3">LMNP Régime Réel</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="border-r border-b border-gray-300 p-2 text-md font-semibold text-gray-700">Total Rent</td>
		<td class="border-r border-b border-gray-300 p-2 text-indigo-600 font-semibold">{summaryBicSystem.rent}€</td>
		<td class="border-b border-gray-300 p-2 text-indigo-600 font-semibold">{summaryRealSystem.rent}€</td>
	</tr>
	<tr>
		<td class="border-r border-b border-gray-300 p-2 text-md font-semibold text-gray-700">Monthly Loan</td>
		<td class="border-r border-b border-gray-300 p-2 text-indigo-600 font-semibold">{summaryBicSystem.loan}€</td>
		<td class="border-b border-gray-300 p-2 text-indigo-600 font-semibold">{summaryRealSystem.loan}€</td>
	</tr>
	<tr>
		<td class="border-r border-b border-gray-300 p-2 text-md font-semibold text-gray-700">Total Expenses</td>
		<td class="border-r border-b border-gray-300 p-2 text-indigo-600 font-semibold">{summaryBicSystem.expenses}€</td>
		<td class="border-b border-gray-300 p-2 text-indigo-600 font-semibold">{summaryRealSystem.expenses}€</td>
	</tr>
	<tr>
		<td class="border-r border-b border-gray-300 p-2 text-sm font-semibold text-gray-500">Of Which Taxes</td>
		<td class="border-r border-b border-gray-300 p-2 text-indigo-500 font-semibold text-sm">{summaryBicSystem.taxes}€
		</td>
		<td class="border-b border-gray-300 p-2 text-indigo-500 font-semibold text-sm">{summaryRealSystem.taxes}€</td>
	</tr>
	<tr>
		<td class="border-r border-b border-gray-300 p-2 text-md font-semibold text-gray-700">Cash Flow (Monthly)</td>
		<td class="border-r border-b border-gray-300 p-2 text-indigo-600 font-semibold">{summaryBicSystem.cashFlow}€</td>
		<td class="border-b border-gray-300 p-2 text-indigo-600 font-semibold">{summaryRealSystem.cashFlow}€</td>
	</tr>
	<tr>
		<td class="border-r border-gray-300 p-2 text-md font-semibold text-gray-700">Cash Flow (Yearly)</td>
		<td class="border-r border-gray-300 p-2 text-indigo-600 font-semibold">{summaryBicSystem.yearlyCashFlow}€</td>
		<td class="p-2 text-indigo-600 font-semibold">{summaryRealSystem.yearlyCashFlow}€</td>
	</tr>
	</tbody>
</table>
