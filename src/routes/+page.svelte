<script lang="ts">
	import RentUnits from '$lib/RentUnits.svelte';
	import Expenses from '$lib/Expenses.svelte';
	import Summary from '$lib/Summary.svelte';
	import LoanCalculator from '$lib/LoanCalculator.svelte';
	import { loan } from '$lib/stores.svelte';

	let units = $state<{ rent: number }[]>([{ rent: 0 }]);
	let vacancyPercentage = $state(5);
	let maintenance = $state(0);
	let taxes = $state(0);
	let insurance = $state(0);
	let replacementReserve = $state(0);

	let totalRent = $derived(units.reduce((sum, unit) => sum + unit.rent, 0));
	let totalExpenses = $derived(
		(vacancyPercentage / 100) * totalRent +
		maintenance +
		taxes +
		insurance +
		replacementReserve
	);
	let cashFlow = $derived(totalRent - totalExpenses - loan.monthlyLoanPayment);
</script>

<main class="min-h-screen bg-gray-50 p-6 w-full">
	<div class="bg-white shadow-md rounded-lg p-6 w-full">
		<h1 class="text-xl font-bold mb-4">Real Estate Cash Flow Calculator</h1>
		<div class="flex flex-wrap gap-6 justify-around">
			<div>
				<LoanCalculator></LoanCalculator>
			</div>
			<div>
				<RentUnits {units} />
			</div>
			<div>
				<Expenses
					bind:insurance
					bind:maintenance
					bind:replacementReserve
					bind:taxes
					bind:vacancyPercentage
				/>
			</div>
			<div>
				<Summary {cashFlow} monthlyLoanPayment={loan.monthlyLoanPayment} {totalExpenses} {totalRent} />
			</div>
		</div>
	</div>
</main>
