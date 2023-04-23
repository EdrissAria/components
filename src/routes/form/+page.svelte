<script>
	import { Form } from '$lib';
	import { Card, CardActions, CardBody, CardFooter } from 'yesvelte';
	import 'yesvelte/css/tabler.css';

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
