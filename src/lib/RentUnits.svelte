<script lang="ts">
	let { units }: { units: { rent: number }[] } = $props();
</script>

<h2 class="text-lg font-bold mb-2">Rental Units</h2>
{#each units as unit, i (i)}
	<div class="mb-2">
		<label class="text-sm font-medium text-gray-700">Unit {i + 1} Rent</label>
		<input
			type="number"
			bind:value={unit.rent}
			class="mt-1 p-2 border border-gray-300 rounded-md w-full"
		/>
	</div>
{/each}

<button class="bg-blue-500 text-white p-2 rounded" onclick={() => units.push({ rent: 0 })}>
	Add Unit
</button>
