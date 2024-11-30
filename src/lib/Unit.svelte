<script lang="ts">
	import type { Unit } from '$lib/types';

	let { unit = $bindable() }: { unit: Unit } = $props();

	let size = $state(0);
	let pricePerSquaredMeter = $state(13);

	$effect(() => {
		unit.rent = size * pricePerSquaredMeter;
	});

	function multiplyRent(e) {
		const numberOfUnits = +e.target.value;
		if (numberOfUnits !== 0) {
			unit.rent = unit.rent * numberOfUnits;
		}
	}
</script>

<label class="block font-medium text-gray-700 text-sm">Rent
	<input
		bind:value={unit.rent}
		class="p-2 border border-gray-300 rounded-md w-full"
		type="number"
	/>
</label>

<label class="block font-medium text-gray-700 text-sm">Size
	<input
		bind:value={size}
		class="p-2 border border-gray-300 rounded-md w-full"
		type="number"
	/>
</label>

<label class="block font-medium text-gray-700 text-sm">Price Per m²
	<input
		bind:value={pricePerSquaredMeter}
		class="p-2 border border-gray-300 rounded-md w-full"
		type="number"
	/>
</label>

<label class="block font-medium text-gray-700 text-sm">Number of Units
	<input
		class="p-2 border border-gray-300 rounded-md w-full"
		oninput={multiplyRent}
		type="number"
		value="1"
	/>
</label>
