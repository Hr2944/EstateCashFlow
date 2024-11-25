<script lang="ts">
	import Unit from '$lib/Unit.svelte';

	let { units = $bindable() }: { units: { rent: number }[] } = $props();
</script>

<h2 class="text-lg font-bold mb-2">Rental Units</h2>
{#each units as unit, i (i)}
	<Unit {i} {unit}></Unit>
{/each}

<button class="bg-blue-500 text-white p-2 rounded" onclick={() => units.push({ rent: 0 })}>
	Add Unit
</button>
