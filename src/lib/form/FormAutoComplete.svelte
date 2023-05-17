<script lang="ts">
    import {FormAutocomplete} from "yesvelte";

    import FormField  from './FormField.svelte'
  
    export let name: string
    export let label: string | undefined = undefined;
    export let value: any[] = [];
  
    function set(val: any) {
      value = val;
    }
  
    function get() {
		return value;
	}

    let items = ["Apple", "Orange", "Peach", "Banana", "Apricot"];

  </script>
  
  <FormField {name} {get} {set} bind:value>
    <FormAutocomplete  bind:value {items} {name} {label} />
  </FormField>
  