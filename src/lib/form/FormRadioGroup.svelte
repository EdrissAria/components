<script lang="ts">
	import { FormRadioGroup } from 'yesvelte';
    import FormField  from './FormField.svelte'

	export let name: string;

	export let items: any[] = [];
	export let value: any | undefined = undefined;
	export let label: string;

	function set(val: any) {
		value = val;
	}

	function get() {
		return value;
	}

	function onChange(e: any) {
		value = e.target.value;
	}
  
</script>

<FormField {name} {get} {set} bind:value>
	<FormRadioGroup {items} inline {label} {...$$props} bind:value on:change={onChange}/>
</FormField>
