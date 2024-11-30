<script lang="ts">
	import { expenses, loan, rent } from '$lib/stores.svelte';

	const summary = $derived.by(() => {
		const totalExpenses =
			(expenses.expenses.vacancyPercentage / 100) * rent.rent +
			expenses.expenses.maintenance +
			expenses.expenses.taxes +
			expenses.expenses.insurance +
			expenses.expenses.replacementReserve;
		const cashFlow = rent.rent - totalExpenses - loan.monthlyLoanPayment;

		return {
			rent: rent.rent,
			loan: loan.monthlyLoanPayment,
			expenses: totalExpenses,
			cashFlow: cashFlow
		};
	});
</script>

<div>
	<h2 class="text-lg font-bold mb-2">Summary</h2>
	<p class="text-lg font-semibold text-gray-700">Total Rent: <span
		class="text-indigo-600">€{summary.rent.toFixed(2)}</span></p>
	<p class="text-lg font-semibold text-gray-700">Monthly Loan: <span
		class="text-indigo-600">€{summary.loan.toFixed(2)}</span></p>
	<p class="text-lg font-semibold text-gray-700">Total Expenses: <span
		class="text-indigo-600">€{summary.expenses.toFixed(2)}</span></p>
	<p class="text-lg font-semibold text-gray-700">Cash Flow (Monthly): <span
		class="text-indigo-600">€{summary.cashFlow.toFixed(2)}</span></p>
	<p class="text-lg font-semibold text-gray-700">Cash Flow (Yearly): <span
		class="text-indigo-600">€{(summary.cashFlow * 12).toFixed(2)}</span></p>
</div>
