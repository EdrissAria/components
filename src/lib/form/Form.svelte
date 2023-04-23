<script lang="ts">
	import Object from './Object.svelte';

	export let onSubmit: Function | undefined = undefined;
	export let value: Record<string, any> = {};

	let get: any;
	let set: any;

	async function onFormSubmit(e: SubmitEvent) {
		if (onSubmit) {
			onSubmit(value);
		}
	}
</script>

<form novalidate on:submit|preventDefault={onFormSubmit}>
	<Object bind:get bind:set bind:value>
		<slot />
	</Object>
</form>
