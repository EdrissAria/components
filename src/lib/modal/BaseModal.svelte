<script lang="ts">
	import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'yesvelte';

	export let title: string | undefined = undefined;
</script>

{#if title}
	<ModalHeader>
		<ModalTitle>
			{title}
		</ModalTitle>
	</ModalHeader>
{/if}
<slot>
	<ModalBody>
		<slot name="body" />
	</ModalBody>
	<ModalFooter>
		<slot name="footer" />
	</ModalFooter>
</slot>
