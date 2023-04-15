<script lang="ts">
	import type { ComponentProps } from "svelte";
    import { modal } from "./modal";
    import { Modal  } from "yesvelte";

    const defaultModalProps: ComponentProps<Modal> = {
        placement: 'center',
        backdrop: true,
        size: 'md'
    };

</script>
  
{#if $modal}
    {#key $modal.open}
        <Modal bind:show={$modal.open} {...defaultModalProps} {...$modal.config}>
            <svelte:component this={$modal.component} {...$modal.props} />
        </Modal>
    {/key}
{/if}