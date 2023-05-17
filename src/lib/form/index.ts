export const something = true;

import AppForm from './Form.svelte';
import FormInput from './FormInput.svelte';
// import AppFormObject from "./AppFormObject.svelte";
// import AppSelect from "./AppSelect.svelte";
// import AppRadios from "./AppRadios.svelte";
// import AppCheckboxes from "./AppCheckboxes.svelte";
// import AppFormArray from "./AppFormArray.svelte";
import FormField from './FormField.svelte';
import FormObject from './FormObject.svelte';
import FormSubmit from './FormSubmit.svelte';
import FormReset from './FormReset.svelte';
import FormSelect from './FormSelect.svelte';
import FormRadio from './FormRadioGroup.svelte'

export type FormContext = {
	register: (name: string, { set, get }: { set: (value: any) => void; get: () => any }) => void;
	unregister: (name: string) => void;
	update: (name: string, value: any) => void;
	errors: Record<string, (param?: any) => string>;
	setError: (name: string, error: string | undefined) => void;
};

export type FormType = typeof AppForm & {
	Field: typeof FormField;
	Input: typeof FormInput;
	Submit: typeof FormSubmit;
	Reset: typeof FormReset;
	Object: typeof FormObject;
	Select: typeof FormSelect;
	//   Input: typeof AppInput;
	//   Select: typeof AppSelect;
	//   Checkboxes: typeof AppCheckboxes;
	//   Radios: typeof AppRadios;
	//   Array: typeof AppFormArray;
	//   Object: typeof AppFormObject;
	//   Field: typeof AppFormField;
};

const Form = AppForm as unknown as FormType;
Form.Field = FormField;
Form.Input = FormInput;
Form.Submit = FormSubmit;
Form.Select = FormSelect;
Form.Reset = FormReset;
Form.Object = FormObject;
// Form.Select = AppSelect;
// Form.Checkboxes = AppCheckboxes;
// Form.Radios = AppRadios;
// Form.Array = AppFormArray;
// Form.Object = AppFormObject;
// Form.Field = AppFormField;

export { Form };
