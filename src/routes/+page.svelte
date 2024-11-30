<script lang="ts">
	import RentUnits from '$lib/RentUnits.svelte';
	import Expenses from '$lib/Expenses.svelte';
	import Summary from '$lib/Summary.svelte';
	import LoanCalculator from '$lib/LoanCalculator.svelte';
</script>

<main class="min-h-screen bg-gray-50 p-6 w-full">
	<div class="bg-white shadow-md rounded-lg p-6 w-full">
		<h1 class="text-xl font-bold mb-4">Real Estate Cash Flow Calculator</h1>
		<div class="flex flex-wrap gap-6 justify-around">
			<div>
				<LoanCalculator />
			</div>
			<div>
				<RentUnits />
			</div>
			<div>
				<Expenses />
			</div>
			<div>
				<Summary />
			</div>
		</div>
	</div>
</main>
