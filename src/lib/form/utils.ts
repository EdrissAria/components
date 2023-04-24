import { getContext } from 'svelte';
import type { FormContext } from '.';

export function getFormContext(): FormContext {
	return getContext('FORM') ?? {};
}
