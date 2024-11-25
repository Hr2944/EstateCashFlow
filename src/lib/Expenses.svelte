<script lang="ts">
	import { taxes } from '$lib/stores.svelte';

	let {
		vacancyPercentage = $bindable(),
		maintenance = $bindable(),
		insurance = $bindable(),
		replacementReserve = $bindable(),
		rent
	} = $props();

	let taxesRate = $state(9.65);

	$effect(() => {
		taxes.updateTaxes(rent, taxesRate);
	});
</script>


<h2 class="text-lg font-bold mb-2">Expenses</h2>

<label class="block text-sm font-medium text-gray-700">Vacancy Percentage</label>
<input bind:value={vacancyPercentage} class="mb-3 p-2 border border-gray-300 rounded-md w-full" type="number" />

<label class="block text-sm font-medium text-gray-700">Maintenance</label>
<input bind:value={maintenance} class="mb-3 p-2 border border-gray-300 rounded-md w-full" type="number" />

<label class="block text-sm font-medium text-gray-700">Insurance</label>
<input bind:value={insurance} class="mb-3 p-2 border border-gray-300 rounded-md w-full" type="number" />

<label class="block text-sm font-medium text-gray-700">Replacement Reserve</label>
<input bind:value={replacementReserve} class="mb-3 p-2 border border-gray-300 rounded-md w-full" type="number" />

<label class="block text-sm font-medium text-gray-700">Taxes Rate</label>
<input bind:value={taxesRate} class="mb-2 p-2 border border-gray-300 rounded-md w-full" type="number" />

<p class="block font-medium text-gray-700">Taxes: €{taxes.taxes}</p>
