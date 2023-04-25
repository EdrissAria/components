<script lang="ts">
	import { modal, confirmModal, ConfirmModal, ModalProvider } from '@minicms/components';
	import { Button } from 'yesvelte';
	import 'yesvelte/css/tabler.css';

	let message = '';
    const openConfirmModal = async ( )=>{
        const result = await confirmModal.open({
            title: 'Confirm modal',
            description: 'do you agree? '
        })
        message = result
    }
</script>

<Button on:click={openConfirmModal}>Confirm Modal</Button>

<br />
{#if message}
	<pre>
        {message}
    </pre>
{/if}

<ModalProvider>something </ModalProvider>
