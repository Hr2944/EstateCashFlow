<script lang="ts">
	import { expenses, rent } from '$lib/stores.svelte';

	let taxesRate = $state(43.63);
	let vacancyPercentage = $state(12);
	let maintenance = $state(50);
	let insurance = $state(150);
	let replacementReserve = $state(50);

	$effect(() => {
		expenses.updateExpenses(
			rent.rent,
			taxesRate,
			maintenance,
			insurance,
			replacementReserve,
			vacancyPercentage
		)
	});
</script>


<h2 class="text-lg font-bold mb-2">Expenses</h2>

<label class="block text-sm font-medium text-gray-700" for="vacancy">Vacancy Percentage</label>
<input bind:value={vacancyPercentage} class="mb-3 p-2 border border-gray-300 rounded-md w-full" id="vacancy"
			 type="number" />

<label class="block text-sm font-medium text-gray-700" for="maintenance">Maintenance</label>
<input bind:value={maintenance} class="mb-3 p-2 border border-gray-300 rounded-md w-full" id="maintenance"
			 type="number" />

<label class="block text-sm font-medium text-gray-700" for="insurance">Insurance</label>
<input bind:value={insurance} class="mb-3 p-2 border border-gray-300 rounded-md w-full" id="insurance" type="number" />

<label class="block text-sm font-medium text-gray-700" for="replacementReserve">Replacement Reserve</label>
<input bind:value={replacementReserve} class="mb-3 p-2 border border-gray-300 rounded-md w-full" id="replacementReserve"
			 type="number" />

<label class="block text-sm font-medium text-gray-700" for="taxesRate">Taxes Rate</label>
<input bind:value={taxesRate} class="mb-2 p-2 border border-gray-300 rounded-md w-full" id="taxesRate" type="number" />

<p class="block font-medium text-gray-700">Taxes: €{expenses.expenses.taxes.toFixed(2)}</p>
