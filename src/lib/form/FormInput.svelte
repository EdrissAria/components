<script lang="ts">
	// TODO: Validation

	import { FormInput } from 'yesvelte';
	import Field from './Field.svelte';

	export let name: string;
	export let value: any | undefined = undefined;

	let state: 'invalid' | undefined = undefined;
	let hint: string | undefined = undefined;

	function get() {
		hint = undefined;
		state = undefined;

		if (value === 'error') {
			state = 'invalid';
			hint = 'Value equals to error';
			// throw new Error('Value equals to error');
			return undefined;
		}

		return value;
	}

	function set(newValue: string) {
		console.log('set value input: ', name, newValue);

		value = newValue;
	}
</script>

<Field bind:value {name} {get} {set}>
	<FormInput {state} {hint} bind:value {...$$restProps} />
</Field>
