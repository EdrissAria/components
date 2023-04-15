<script lang="ts">
	import { modal, confirmModal, ConfirmModal, ModalProvider } from '@minicms/components';
	import { Button } from 'yesvelte';
	import 'yesvelte/css/tabler.css';
	import InputModal from './InputModal.svelte';

	let message = '';

	async function openSimpleModal() {
		const result = await modal.open(ConfirmModal, {
			title: 'Remove files',
			description: 'Are you sure to remove these files?',
			textNegative: 'No',
			textPositive: 'Yes'
		});
		console.log(result);

		message = `you clicked on: "${
			typeof result === 'undefined' ? 'Outside' : result === false ? 'No' : 'Yes'
		}"`;
	}

	async function openConfirmModal() {
		await confirmModal.open({ title: 'Loacalhost says', description: 'Hello' });
	}

	async function openInputModal() {
		const result = await modal.open(InputModal, { value: 3 });

		message = `result is: ` + result;
	}

	async function openInputModal2() {
		const inputModal = modal.create(InputModal, { label: 'Custom Label' });

		const value1 = await inputModal.open({ title: 'Enter first number' });
		if (!value1) return;

		const value2 = await inputModal.open({ title: 'Enter second number' });
		if (!value2) return;

		const result = +value1 + +value2;

		message = `${value1} + ${value2} = ${result}`;
		await confirmModal.open({ title: 'Result', description: `${value1} + ${value2} = ${result}` });
	}
</script>

<h1>Modal store</h1>

<Button on:click={openSimpleModal}>Open Simple Modal</Button>

<Button on:click={openConfirmModal}>Open confirmModal</Button>

<Button on:click={openInputModal}>Open Input Modal</Button>

<Button on:click={openInputModal2}>Open Modal Chain</Button>

{#if message}
	<pre>
        {message}
    </pre>
{/if}

<ModalProvider />
