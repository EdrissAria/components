<script lang="ts">
    import { FormField, Radio, RadioGroup } from "yesvelte";
    import { getContext, onDestroy, onMount } from "svelte";
    import type { FormContext } from "./Form.types";
    import * as yup from "yup";
  
    export let name: string | undefined = undefined;
  
    export let state: "valid" | "invalid" | undefined = undefined;
    export let hint: string | undefined = undefined;
    export let label: string | undefined = undefined;
    export let items: any[] = [];
    export let value: any | undefined = undefined;
    export let required: boolean = false;
    export let getKey: (item: any) => string = (item) => item;
    export let getText: (item: any) => string = (item) => item;
  
    let schema: yup.Schema;
  
    const { register, unregister, errors, dirty } =
      getContext<FormContext>("FORM");
  
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
        schema = yup.number();
      } else {
        schema = yup.string();
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
        const result = schema.validateSync(value);
        // state = "valid";
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
      value = undefined;
    }
  
    function onChange(e: any) {
      value = e.target.value;
    }
  
    $: {
      value;
      if ($dirty) {
        validate();
      }
    }
  </script>
  
  <FormField {required} {label} {state} {hint}>
    <RadioGroup on:change={onChange} {name} {...$$restProps} {items} bind:value/>
	<i>value: {JSON.stringify(value)}</i>
  </FormField>
  