<script lang="ts">
	import { El, Button } from 'yesvelte';
	import BaseModal from './BaseModal.svelte';
	import { modal } from './modal';

	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;

	export let textNegative: string = 'Cancel';
	export let textPositive: string = 'Ok';
</script>

<BaseModal {title}>
	<svelte:fragment slot="body">
		{description}
	</svelte:fragment>

	<El slot="footer" gap="2" d="flex">
		<Button on:click={() => $modal.resolve(false)}>{textNegative}</Button>
		<Button on:click={() => $modal.resolve(true)} color="primary">{textPositive}</Button>
	</El>
</BaseModal>
