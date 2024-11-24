<script lang="ts">
	let { totalRent, totalExpenses, cashFlow, monthlyLoanPayment } = $props();
</script>

<div>
	<h2 class="text-lg font-bold mb-2">Summary</h2>
	<p class="text-lg font-semibold text-gray-700">Total Rent: <span
		class="text-indigo-600">€{totalRent.toFixed(2)}</span></p>
	<p class="text-lg font-semibold text-gray-700">Monthly Loan: <span
		class="text-indigo-600">€{monthlyLoanPayment.toFixed(2)}</span></p>
	<p class="text-lg font-semibold text-gray-700">Total Expenses: <span
		class="text-indigo-600">€{totalExpenses.toFixed(2)}</span></p>
	<p class="text-lg font-semibold text-gray-700">Cash Flow (Monthly): <span
		class="text-indigo-600">€{cashFlow.toFixed(2)}</span></p>
	<p class="text-lg font-semibold text-gray-700">Cash Flow (Yearly): <span
		class="text-indigo-600">€{(cashFlow * 12).toFixed(2)}</span></p>
</div>
