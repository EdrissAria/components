export const something = true;

import AppForm from './Form.svelte';
import FormInput from './FormInput.svelte';
// import AppFormObject from "./AppFormObject.svelte";
// import AppSelect from "./AppSelect.svelte";
// import AppRadios from "./AppRadios.svelte";
// import AppCheckboxes from "./AppCheckboxes.svelte";
// import AppFormArray from "./AppFormArray.svelte";
import Field from './Field.svelte';
import FormObject from './Object.svelte';
import FormSubmit from './FormSubmit.svelte';
import FormReset from './FormReset.svelte';

export type FormContext = {
	register: (name: string, { set, get }: { set: (value: any) => void; get: () => any }) => void;
	unregister: (name: string) => void;
	update: (name: string, value: any) => void;
};

export type FormType = typeof AppForm & {
	Field: typeof Field;
	Input: typeof FormInput;
	Submit: typeof FormSubmit;
	Reset: typeof FormReset;
	Object: typeof FormObject;
	//   Input: typeof AppInput;
	//   Select: typeof AppSelect;
	//   Checkboxes: typeof AppCheckboxes;
	//   Radios: typeof AppRadios;
	//   Array: typeof AppFormArray;
	//   Object: typeof AppFormObject;
	//   Field: typeof AppFormField;
};

const Form = AppForm as unknown as FormType;
Form.Field = Field;
Form.Input = FormInput;
Form.Submit = FormSubmit;
Form.Reset = FormReset;
Form.Object = FormObject;
// Form.Select = AppSelect;
// Form.Checkboxes = AppCheckboxes;
// Form.Radios = AppRadios;
// Form.Array = AppFormArray;
// Form.Object = AppFormObject;
// Form.Field = AppFormField;

export { Form };
