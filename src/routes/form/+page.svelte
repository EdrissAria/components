<script lang="ts">
	import { Form, modal } from '$lib';
	import { Button, Card, CardActions, CardBody, CardFooter, El } from 'yesvelte';
	import 'yesvelte/css/tabler.css';
	import LoginForm from './LoginForm.svelte';
	import ConfirmModal from '$lib/modal/ConfirmModal.svelte';
	import ModalProvider from '$lib/modal/ModalProvider.svelte';
	import FormCheckBox from '$lib/form/FormCheckBox.svelte';
	import FormRadio from '$lib/form/FormRadioGroup.svelte';
	import FormAutoComplete from '$lib/form/FormAutoComplete.svelte';
	import FormDatePicker from '$lib/form/FormDatePicker.svelte';

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

	function showFormValue(value: any) {
		modal.open(ConfirmModal, {
			title: 'Form Submitted',
			description: `Form value: ` + JSON.stringify(value)
		});
	}
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

<h2>Another Example</h2>

<El container>
	<El row p="3">
		<El bgColor="light" col="11" colMd="5" m="3" p="3" border>
			<Form onSubmit={showFormValue}>
				<Form.Submit>Submit</Form.Submit>
			</Form>
		</El>

		<El bgColor="light" col="11" colMd="5" m="3" p="3" border>
			<Form onSubmit={showFormValue}>
				<Form.Input label="Name" name="name" />
				<Form.Submit>Submit</Form.Submit>
			</Form>
		</El>

		<El bgColor="light" col="11" colMd="5" m="3" p="3" border>
			<Form onSubmit={showFormValue}>
				<Form.Input label="Username" name="username" />
				<Form.Input label="Password" name="password" type="password" />
				<Form.Submit>Submit</Form.Submit>
			</Form>
		</El>

		<El bgColor="light" col="11" colMd="5" m="3" p="3" border>
			<Form onSubmit={showFormValue}>
				<Form.Input label="Username *" name="username" required />
				<Form.Input name="password" type="password" min={8} max={12} />
				<Form.Submit>Submit</Form.Submit>
			</Form>
		</El>

		<El bgColor="light" col="11" colMd="5" m="3" p="3" border>
			<Form onSubmit={showFormValue}>
				<Form.Input label="Test 1" name="test1" />
				<Form.Object name="object">
					<Form.Input name="first" label="First in object" />
					<Form.Input name="second" label="Second in object" />
				</Form.Object>
				<Form.Submit>Submit</Form.Submit>
			</Form>
		</El>

		<El bgColor="light" col="11" colMd="5" m="3" p="3" border>
			<Form onSubmit={showFormValue}>
				<Form.Input label="Test 1" name="test1" />
				<Form.Object name="object">
					<Form.Input col="6" name="first" label="First in object" />
					<Form.Input col="3" name="second" label="Second in object" />
					<Form.Select label="select" name="select" items={['item1', 'item2']} col="3" />
				</Form.Object>
				<Form.Select label="select2" name="select2" items={['item1', 'item2', 'item3']} />
				<Form.Submit>Submit</Form.Submit>
			</Form>
		</El>
	</El>
	<El p=4>
		<Form>
			<FormCheckBox
				name="Cities"
				label="Cities"
				items={['Herat', 'Kabul', 'Balkh', 'Kandahar']}
			/>
		</Form>
	</El>
	<El px=4>
		<Form>
			<FormRadio
				name="Gender"
				label="Gender"
				items={["Male", "Female"]}
			/>
		</Form>
	</El>
	<El px=4>
		<Form>
			<FormAutoComplete
				name="fruits"
				label="Fruits"
			/>
		</Form>
	</El>
	<El px=4>
		<Form>
			<FormDatePicker
				name="birth_date"
				label="Birth Date"
			/>
		</Form>
	</El>
</El>
