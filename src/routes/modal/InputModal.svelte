<script lang="ts">
	import { FormInput, Button, El } from 'yesvelte';
	import BaseModal from '$lib/modal/BaseModal.svelte';
	import { modal } from '$lib/modal';

    export let title: string | undefined = undefined
	export let label: string = 'Label';
	export let placeholder: string = 'Placeholder...';

	export let value: any = undefined;
</script>

<BaseModal {title}>
	<FormInput slot="body" {label} {placeholder} bind:value />
	<El slot="footer" d="flex" gap="2">
		<Button on:click={() => $modal.resolve(undefined)}>Cancel</Button>
		<Button on:click={() => $modal.resolve(value)} color="primary">Ok</Button>
	</El>
</BaseModal>
