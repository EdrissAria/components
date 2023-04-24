<script lang="ts">
	import { Form } from '$lib';
	import FormObject from '$lib/form/FormObject.svelte';
	import { Button, Card, CardActions, CardBody, CardFooter, Divider } from 'yesvelte';
	import 'yesvelte/css/tabler.css';

	export let signupUrl = '/signup';
	export let value: any | undefined = undefined;
	export let onSubmit: Function | undefined = undefined;
</script>

<Form {onSubmit} bind:value>
	<Card title="Login">
		<CardBody>
			<Form.Input required label="Username" placeholder="Enter your username..." name="username" />
			<Form.Input
				required
				min={3}
				max={8}
				label="Password"
				placeholder="Enter your password..."
				name="password"
				type="password"
			/>
			{#if false}
				<Divider>Nested</Divider>
				<Form.Object name="nested">
					<Form.Input required min={2} max={8} label="Test" name="test" />
					<Form.Input label="Test 2" name="test2" />

					<FormObject name="nest2">
						<Form.Input required min={2} max={8} label="Test" name="test" />
						<Form.Input label="Test 2" name="test2" />

						<FormObject name="nest3">
							<Form.Input required min={2} max={8} label="Test" name="test" />
							<Form.Input label="Test 2" name="test2" />
						</FormObject>
					</FormObject>
				</Form.Object>
			{/if}
		</CardBody>

		<CardFooter>
			<CardActions>
				<Button link href={signupUrl}>Signup</Button>
				<Form.Submit>Login</Form.Submit>
			</CardActions>
		</CardFooter>
	</Card>
</Form>
