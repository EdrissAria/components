<script>
	import { onMount } from 'svelte';
	import LoginForm from '../form/LoginForm.svelte';
	import { modal } from '$lib';
	import 'yesvelte/css/tabler.css';
	import ModalProvider from '$lib/modal/ModalProvider.svelte';

	// function onSubmit() {
	//     console.log('should login', value)

	// }

	onMount(() => {
		modal.open(LoginForm, {
			onSubmit(value) {
				console.log('login', value);
			}
		});
	});
</script>

<ModalProvider />
<!-- <LoginForm {onSubmit}/> -->
