<script>
	import ModalProvider from '$lib/modal/ModalProvider.svelte';
	import { Button } from 'yesvelte';
	import { modal } from '$lib/modal/modal';
	import { onMount } from 'svelte';

	import 'yesvelte/css/tabler.css';
	import { confirmModal } from '$lib/modal';

	onMount(() => {
		confirmModal.open({ description: '123', title: 'sdfas' }).then((res) => {
			console.log(res);
		});
	});

</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ModalProvider />
