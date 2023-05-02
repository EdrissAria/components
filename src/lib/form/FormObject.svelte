<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { getFormContext } from './utils';
	import type { FormContext } from '.';
	import { onDestroy } from 'svelte';
	import { El } from 'yesvelte';

	const ctx = getFormContext();

	export let name: string | undefined = undefined;
	export let value: Record<string, any> = {};
	export let errorMessages: Record<string, (params?: any) => string> = {};
	export let errors: Record<string, string> = {};

	let fields: Record<string, { get: any; set: any }> = {};

	export let set = async function (newValue: typeof value) {
		console.log('set', newValue);

		Object.keys(fields).map((key) => {
			if (fields[key]) {
				fields[key].set(newValue?.[key] ?? undefined);
			}
		});
	};

	export let get = async function () {
		await Promise.all(
			Object.entries(fields).map(async ([key, val]) => {
				try {
					const v = await val.get();
					if (typeof v !== 'undefined') {
						value[key] = v;
					}
				} catch (err) {
					console.log(err);
					delete value[key];
				} finally {
					console.log('finally');
				}
			})
		);
		if (name) {
			ctx.update(name, value);
		}
		return value;
	};

	setContext<FormContext>('FORM', {
		register(name, val) {
			fields[name] = val;
		},
		unregister(name) {
			delete fields[name];
		},
		update(nam, val) {
			if (typeof val !== 'undefined') {
				value[nam] = val;
			}

			if (name) {
				ctx.update(name, value);
			}
		},
		errors: { ...ctx.errors, ...errorMessages },
		setError(nam, error) {
			if (name) {
				ctx.setError(`${name}.${nam}`, error);
			} else {
				if (!error) {
					delete errors[nam];
				} else {
					errors[nam] = error;
				}
				errors = errors;
			}
		}
	});

	onMount(() => {
		if (name) {
			ctx.register(name, { set, get });
		}
	});

	onDestroy(() => {
		if (name) {
			ctx.unregister(name);
		}
	});

	$: if (value) {
		set(value);
	}
</script>

{#if name}
	<El row {...$$restProps}>
		<slot />
	</El>
{:else}
	<slot />
{/if}
