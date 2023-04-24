<script lang="ts">
	import FormObject from './FormObject.svelte';

	export let onSubmit: Function | undefined = undefined;
	export let value: Record<string, any> = {};

	let get: any;
	let set: any;
	let errors: any = {};

	const errorMessages = {
		string: () => 'this should be string',
		number: () => 'this should be number',
		required: () => 'this field is required',
		min_string: (min: number) => `this should be at least ${min} characters`,
		max_string: (max: number) => `this should not be more than ${max} characters`,
		min_number: (min: number) => `this value should be at least ${min}`,
		max_number: (max: number) => `this value should not be more than ${max}`,
		min_array: (max: number) => `should be at least ${max} items`,
		max_array: (max: number) => `should not be more than ${max} items`,
		pattern: (pattern: string) => `this field should match pattern: ${pattern}`,
		email: () => `this field should be a vaild email adderss`
	};

	async function onFormSubmit(e: SubmitEvent) {
		if (Object.keys(errors).length > 0) return;

		if (onSubmit) {
			onSubmit(value);
		}
	}

	async function onFormReset(e: any) {
		value = {};
	}
</script>

<form novalidate on:reset|preventDefault={onFormReset} on:submit|preventDefault={onFormSubmit}>
	<FormObject bind:errors {errorMessages} bind:get bind:set bind:value>
		<slot />
	</FormObject>
</form>
