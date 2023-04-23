<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { getFormContext } from './utils';
	import type { FormContext } from '.';
	import { onDestroy } from 'svelte';

	let fields: Record<string, { get: any; set: any }> = {};

	export let name: string | undefined = undefined;
	export let value: Record<string, any> = {};

	export let set = async function (newValue: typeof value) {
		Object.keys(newValue).map((key) => {
			if (fields[key]) {
				fields[key].set(newValue[key]);
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
					// value[key] = undefined;
				} finally {
					//
					console.log('finally');
				}
			})
		);
		if (name) {
			ctx.update(name, value);
		}
		return value;
	};

	const ctx = getFormContext();

	setContext<FormContext>('FORM', {
		register(name, val) {
			fields[name] = val;
		},
		unregister(name) {
			delete fields[name];
		},
		update(nam, val) {
            if(typeof val !== 'undefined') {
                value[nam] = val;

            }
			if (name) {
				ctx.update(name, value);
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

<slot />
