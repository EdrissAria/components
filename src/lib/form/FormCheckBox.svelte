<script lang="ts">
    import { FormField, Checkbox, CheckboxGroup } from "yesvelte";
    import type { FormCheckboxGroup } from "yesvelte";
    import { getContext, onDestroy, onMount } from "svelte";
    import type { FormContext } from "./Form.types";
    import * as yup from "yup";
  
    type $$Props = FormCheckboxGroup & {
      name?: string;
      getKey?: (item: any) => string;
      getText?: (item: any) => string;
      min?: number;
      max?: number;
    };
  
    export let name: string | undefined = undefined;
    export let hint: string | undefined = undefined;
    export let state: "invalid" | "valid" | undefined = undefined;
    export let label: string | undefined = undefined;
    export let value: any[] = [];
    export let required: boolean = false;
    export let items: any[] = [];
    export let min: number | undefined = undefined;
    export let max: number | undefined = undefined;
    export let getKey: (item: any) => string = (item) => item;
    export let getText: (item: any) => string = (item) => item;
  
    let schema: yup.ArraySchema<any, any>;
  
    const { register , unregister, dirty, errors }: FormContext =
      getContext("FORM");
  
    onMount(() => {
      if (name) {
        register(name, { set, reset, validate });
      }
    });
  
    onDestroy(() => {
      if (name) {
        unregister(name);
      }
    });
  
    function set(val: any) {
      value = val;
    }
  
    function getSchema() {
      function isNumber() {
        return items.length > 0
          ? !isNaN(Number(getKey(items[0])))
            ? true
            : false
          : false;
      }
  
      if (isNumber()) {
        schema = yup.array(yup.number());
      } else {
        schema = yup.array(yup.string());
      }
  
      if (min) {
        schema = schema.min(min, errors.min_array(min));
      }
      if (max) {
        schema = schema.max(max, errors.max_array(max));
      }
  
      if (required) {
        schema = schema.required(errors.required());
      } else {
        schema = schema.optional();
      }
    }
  
    function validate(throwError: boolean = false) {
      getSchema();
      try {
        if (!value) value = [];
  
        const result = schema.validateSync(value);
  
        state = "valid";
        hint = "";
  
        return result;
      } catch (err: any) {
        state = "invalid";
        hint = err.message;
        if (throwError) throw err;
      }
    }
  
    function reset() {
      state = undefined;
      hint = undefined;
      value = [];
    }
  
    $: {
      value;
      if ($dirty) {
        validate();
      }
    }
  
    function onChange(e: any) {
      const val = e.target.value;
      if (value.includes(val)) {
        value = value.filter((x) => x !== val);
      } else {
        value = [...value, val];
      }
    }

  </script>
  
  <FormField {required} {label} {hint} {state}>
    <CheckboxGroup {name} {items} bind:value inline on:change={onChange}/>    
		<i>value: {JSON.stringify(value)}</i>
  </FormField>
  