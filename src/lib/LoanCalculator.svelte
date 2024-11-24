<script>
	import { loan } from '$lib/stores.svelte';

	let loanAmount = $state(0);
	let annualInterestRate = $state(4); // Default annual interest rate (%)
	let loanDuration = $state(25);

	$effect(() => {
		loan.calculateMonthlyPayment(loanAmount, annualInterestRate, loanDuration);
	});
</script>

<h2 class="text-lg font-bold mb-2">Loan</h2>

<div class="mb-4">
	<label class="block text-sm font-medium text-gray-700" for="loanAmount">
		Loan Amount (€)
	</label>
	<input
		bind:value={loanAmount}
		class="mt-1 p-2 border border-gray-300 rounded-md w-full"
		id="loanAmount"
		type="number"
	/>
</div>

<div class="mb-4">
	<label
		class="block text-sm font-medium text-gray-700"
		for="annualInterestRate"
	>
		Annual Interest Rate (%)
	</label>
	<input
		bind:value={annualInterestRate}
		class="mt-1 p-2 border border-gray-300 rounded-md w-full"
		id="annualInterestRate"
		step="0.01"
		type="number"
	/>
</div>

<div class="mb-4">
	<label class="block text-sm font-medium text-gray-700" for="loanDuration">
		Loan Duration (years)
	</label>
	<input
		bind:value={loanDuration}
		class="mt-1 p-2 border border-gray-300 rounded-md w-full"
		id="loanDuration"
		type="number"
	/>
</div>
