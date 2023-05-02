<script lang="ts">
	import { FormSelect } from 'yesvelte';
	import FormField from './FormField.svelte';

	export let name: string;

	export let value: any | any[] = undefined;

	let state: 'invalid' | undefined = undefined;
	let hint: string | undefined = undefined;

	function get() {
		return value;
	}

	function set(newValue: any) {
		value = newValue;
	}
</script>

<FormField {name} {get} {set} bind:value>
	<FormSelect {...$$restProps} {hint} {state} bind:value />
</FormField>
