<script lang="ts">
	import { Form } from '$lib';
	import { Button, Card, CardActions, CardBody, CardFooter, Divider } from 'yesvelte';
	import 'yesvelte/css/tabler.css';

	export let signupUrl = '/signup';
	export let value: any | undefined = undefined;
	export let onSubmit: Function | undefined = undefined;
</script>

<Form {onSubmit} bind:value>
	<Card title="Login">
		<CardBody>
			<Form.Input label="Username" placeholder="Enter your username..." name="username" />
			<Form.Input
				label="Password"
				placeholder="Enter your password..."
				name="password"
				type="password"
			/>
			<Divider>Nested</Divider>
			<Form.Object name="nested">
				<Form.Input label="Test" name="test" />
				<Form.Input label="Test 2" name="test2" />
			</Form.Object>
		</CardBody>

		<CardFooter>
			<CardActions>
				<Button link href={signupUrl}>Signup</Button>
				<Form.Submit>Login</Form.Submit>
			</CardActions>
		</CardFooter>
	</Card>
</Form>
