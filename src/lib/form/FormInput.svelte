<script lang="ts">
	// TODO: Validation

	import { FormInput } from 'yesvelte';
	import Field from './Field.svelte';

	export let name: string;
	export let value: any | undefined = undefined;

	let state: 'invalid' | undefined = undefined;
	let hint: string | undefined = undefined;

	function invalid(message: string) {
		state = 'invalid';
		hint = message;

		return undefined;
	}

	function get() {
		hint = undefined;
		state = undefined;

		if (value === 'error') {
			return invalid('Value equals to error');
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
