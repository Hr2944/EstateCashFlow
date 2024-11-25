<script lang="ts">
	let { unit = $bindable(), i } = $props();

	let size = $state(0);
	let pricePerSquaredMeter = $state(13);

	$effect(() => {
		unit.rent = size * pricePerSquaredMeter;
	});
</script>

<div class="mb-4">
	<p class="font-medium text-gray-700">Unit {i + 1}</p>
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
</div>
