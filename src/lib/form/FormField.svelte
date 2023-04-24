<script lang="ts">
	import { onMount } from 'svelte';
	import { getFormContext } from './utils';

	export let value: any | undefined = undefined;
	export let name: string;
	const { register, unregister, update, setError } = getFormContext();

	export let set = function (newValue: any) {
		value = newValue;
	};

	export let get = function () {
		return value;
	};

	onMount(() => {
		register(name, { set, get });
		return () => unregister(name);
	});

	async function sync(value: any) {
		try {
			update(name, await get());
			setError(name, undefined);
		} catch (err: any) {
			setError(name, err.message);
		}
	}

	$: sync(value);
</script>

<slot />
