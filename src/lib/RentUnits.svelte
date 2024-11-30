<script lang="ts">
	import Unit from '$lib/Unit.svelte';
	import type { Unit as UnitType } from './types';
	import { rent } from '$lib/stores.svelte';

	let units: UnitType[] = $state([{ rent: 0 }]);

	$effect(() => {
		rent.updateRent(units);
	});
</script>

<h2 class="text-lg font-bold mb-2">Rental Units</h2>
{#each units as _, i (i)}
	<div class="mb-4">
		<div class="flex items-center justify-between">
			<p class="font-medium text-gray-700">Unit {i + 1}</p>
		</div>
		<Unit bind:unit={units[i]}></Unit>
	</div>
{/each}

<button class="bg-blue-500 text-white p-2 rounded" onclick={() => units.push({ rent: 0 })}>
	Add Unit
</button>
