<script lang="ts">
	let {
		vacancyPercentage = $bindable(),
		maintenance = $bindable(),
		taxes = $bindable(),
		insurance = $bindable(),
		replacementReserve = $bindable()
	} = $props();
</script>


<h2 class="text-lg font-bold mb-2">Expenses</h2>

<label class="block text-sm font-medium text-gray-700">Vacancy Percentage</label>
<input bind:value={vacancyPercentage} class="mb-3 p-2 border border-gray-300 rounded-md w-full" type="number" />

<label class="block text-sm font-medium text-gray-700">Maintenance</label>
<input bind:value={maintenance} class="mb-3 p-2 border border-gray-300 rounded-md w-full" type="number" />

<label class="block text-sm font-medium text-gray-700">Taxes</label>
<input bind:value={taxes} class="mb-3 p-2 border border-gray-300 rounded-md w-full" type="number" />

<label class="block text-sm font-medium text-gray-700">Insurance</label>
<input bind:value={insurance} class="mb-3 p-2 border border-gray-300 rounded-md w-full" type="number" />

<label class="block text-sm font-medium text-gray-700">Replacement Reserve</label>
<input bind:value={replacementReserve} class="p-2 border border-gray-300 rounded-md w-full" type="number" />
