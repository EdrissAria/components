<script lang="ts">
	import { Form, modal } from '$lib';
	import { Button, Card, CardActions, CardBody, CardFooter } from 'yesvelte';
	import 'yesvelte/css/tabler.css';
	import LoginForm from './LoginForm.svelte';
	import ConfirmModal from '$lib/modal/ConfirmModal.svelte';
	import ModalProvider from '$lib/modal/ModalProvider.svelte';

	function openLoginForm() {
		modal.open(LoginForm, {
			async onSubmit(value: any) {
				if (value.username === 'admin' && value.password === '123') {
					modal.open(ConfirmModal, {
						title: 'Login success',
						description: 'Hello Admin! welcome to dashboard',
						textNegative: 'Close',
						textPositive: 'Okay'
					});
					return;
				} else {
					const choice = await modal.open(ConfirmModal, {
						title: 'Login failed',
						description:
							'Sorry! you entered wrong username and password. the correct username and password is: (admin, 123)',
						textNegative: 'Close',
						textPositive: 'Try Again'
					});

					if (choice) openLoginForm();

					return;
				}
			}
		});
	}

	let value = {};
</script>

<Form bind:value>
	<Card>
		<CardBody>
			<Form.Input label="Input 1" name="test" />
			<Form.Input label="Input 2" name="test2" />
		</CardBody>

		<CardFooter>
			<CardActions>
				<Form.Reset>Reset</Form.Reset>
				<Form.Submit>Submit</Form.Submit>
			</CardActions>
		</CardFooter>
	</Card>
</Form>

<pre> 
    {JSON.stringify(value, null, 2)}
</pre>

<ModalProvider />
<Button m="5" on:click={openLoginForm} color="primary">Open Login Form</Button>
