<script lang="ts">
	import { FormDatePicker } from 'yesvelte';

	import FormField from './FormField.svelte';

	export let name: string;
	export let value: any[] = [];
	export let label: string;

	function set(val: any) {
		value = val;
	}

	function get() {
		return value;
	}
</script>

<FormField {name} {get} {set} bind:value>
	<FormDatePicker {...$$props} {label} bind:value {name} />
</FormField>
