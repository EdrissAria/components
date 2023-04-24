<script lang="ts">
	import { FormInput } from 'yesvelte';
	import Field from './FormField.svelte';
	import * as yup from 'yup';
	import { getFormContext } from './utils';

	export let name: string;
	export let value: any | undefined = undefined;
	export let type: string = 'text';
	export let min: string | number | undefined = undefined;
	export let max: string | number | undefined = undefined;
	export let pattern: string | RegExp | undefined = undefined;
	export let required: boolean | undefined = undefined;
	export let updateSchema: (schema: yup.Schema) => yup.Schema = (schema) => schema;
	export let errors: Record<string, (params?: any) => string> = {};

	const ctx = getFormContext();

	let schema: yup.NumberSchema | yup.StringSchema | any;
	let allErrors = { ...(ctx.errors ?? {}), ...errors };
	let state: 'invalid' | undefined = undefined;
	let hint: string | undefined = undefined;

	function invalid(message: string) {
		state = 'invalid';
		hint = message;

		return undefined;
	}

	function valid() {
		state = undefined;
		hint = undefined;
	}

	function getSchema({ type, min, max, required, pattern }: any): yup.Schema {
		let schema: yup.Schema;
		if (type !== 'number') {
			schema = yup.string().typeError(allErrors.string());

			if (min) {
				schema = schema.min(min, allErrors.min_string(min));
			}
			if (max) {
				schema = schema.max(max, allErrors.max_string(max));
			}

			if (type === 'email') {
				schema = schema.email(allErrors.email(value));
			}

			if (pattern) {
				schema = schema.matches(new RegExp(pattern), allErrors.pattern(pattern.toString()));
			}
		} else {
			schema = yup.number().typeError(allErrors.number());
			if (min) {
				schema = schema.min(min, allErrors.min_number(min));
			}
			if (max) {
				schema = schema.max(max, allErrors.max_number(max));
			}
		}

		if (required) {
			schema = schema.required(allErrors.required());
		} else {
			schema = schema.optional();
		}

		schema = updateSchema(schema);

		return schema;
	}

	async function get() {
		try {
			if (schema) {
				await schema.validate(value, { abortEarly: true });
				valid();
			}
		} catch (err: any) {
			invalid(err.message);
			throw err;
		}
		return value;
	}

	function set(newValue: string) {
		value = newValue;
	}

	$: schema = getSchema({ type, min, max, pattern, required });
</script>

<Field bind:value {name} {get} {set}>
	<FormInput {state} {hint} bind:value {...$$restProps} />
</Field>
