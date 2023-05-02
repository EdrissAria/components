# Useful Components for Svelte

These components are based on YeSvelte component Library which aims to enable users to easily create projects using ready made components.

# Modals

## Forms

This is a simple form library for Svelte, allowing you to quickly and easily create forms with a variety of input types, including text inputs, radio buttons, checkboxes, and more. It's designed to be easy to use and highly customizable, with a range of options for styling and formatting your forms.

## Getting Started

To get started with the library, you'll first need to install it in your Svelte project. You can do this using npm:

```bash
npm install @minicms/
```

Once you've installed the library, you can import it into your Svelte component:

```html
<script>
	import { Form, Input } from 'svelte-form-library';
</script>

<form onSubmit="{handleSubmit}">
	<input label="Name" name="name" />
	<input label="Email" name="email" type="email" />
	<input label="Password" name="password" type="password" />
	<button type="submit">Submit</button>
</form>
```

## Input Types

The library supports a range of input types, including:

- `Form.Input` - for text inputs, email inputs, and password inputs
- `Form.Textarea` - for multi-line text inputs
- `Form.Select` - for dropdown menus
- `Form.Radios` - for radio buttons
- `Form.Checkboxes` - for checkboxes
- `Form.Array` - for repeating groups of inputs
- `Form.Object` - for grouping multiple inputs in one object

Each of these input types can be customized with a range of options, including labels, placeholder text, default values, validation rules, and more.

### Form

The `Form` component is the main component for creating a form. You can use this component to wrap your form inputs and include a submit button.

```html
<form onSubmit="{handleSubmit}">
	<!-- form inputs here -->
	<Form.Submit>Submit</Form.Submit>
</form>
```

### Form.Input

The `Form.Input` component creates a simple text input field. You can use this component to create input fields for text, numbers, and other simple data types.

```html
<form onSubmit="{handleSubmit}">
	<Form.Input label="Name" name="name" />
	<Form.Input label="Email" name="email" type="email" />
	<Form.Submit>Submit</Form.Submit>
</form>
```

### Form.Radios

The `Form.Radios` component creates a group of radio buttons. You can use this component to create a set of options where the user can only select one.

```svelte
<Form onSubmit={handleSubmit}>
	<Form.Radios label="Choose one" name="option" options={["Option 1", "Option 2", "Option 3"]} />
	<Form.Submit>Submit</Form.Submit>
</Form>
```

### Form.Checkboxes

The `Form.Checkboxes` component creates a group of checkboxes. You can use this component to create a set of options where the user can select multiple.

```svelte
<script>
    import {Form} from '@minicms/components'

    let options = ["Option 1", "Option 2", "Option 3"]
    
    function handleSubmit(e) {
        ...
    }
</script>

<Form onSubmit={handleSubmit}>
	<Form.Checkboxes label="Choose one or more" name="options" {options} />
	<Form.Submit>Submit</Form.Submit>
</Form>
```

### Form.Select

The `Form.Select` component creates a dropdown menu. You can use this component to create a list of options where the user can select one.

```svelte
<script>
    import {Form} from '@minicms/components'
    
    function handleSubmit(e) {
        console.log(e.detail)
    }
</script>
<Form onSubmit={handleSubmit}>
	<Form.Select label="Choose one" name="option" options={["Option 1", "Option 2", "Option 3"]} />
	<Form.Submit>Submit</Form.Submit>
</Form>
```

### Form.Array

The `Form.Array` component creates a set of form fields that can be added or removed by the user. You can use this component to create a dynamic list of inputs.

```svelte
<script>
    import {Form} from '@minicms/components'
    
    function handleSubmit(e) {
        console.log(e.detail)
    }
</script>
<Form onSubmit={handleSubmit}>
	<Form.Array name="items" let:index>
		<Form.Input label="Item {index + 1}" name="name" />
		<Form.Input label="Quantity" name="quantity" type="number" />
	</Form.Array>
	<Form.Submit>Submit</Form.Submit>
</Gorm>
```

### Form.Object

The `Form.Object` component creates a set of nested form fields. You can use this component to group related inputs together.

```svelte
<script>
    import {Form} from '@minicms/components'
    
    function handleSubmit(e) {
        console.log(e.detail)
    }
</script>
<Form onSubmit={handleSubmit}>
	<Form.Input label="Name" name="name" />
	<Form.Input label="Email" type="email" name="email" />
	<Form.Object name="address">
		<Form.Input label="Street" name="street" />
		<Form.Input label="City" name="city" />
		<Form.Input label="State" name="state" />
	</Form.Object>
	<Form.Submit>Submit</Form.Submit>
</Form>
```

## Modal store

With the modal store, you can easily manage modals in your Svelte project. To add this system to your project, you need to import the `ModalProvider.svelte` component and use it in your `src/routes/+layout.svelte` file.

```svelte
<script>
    import { ModalProvider } from '@minicms/components'
</script>

<slot>

<ModalProvider/>

```

Once you have added the `ModalProvider`, you can use the `modal` store to manage your modals.

### Open Modal

You can open modals using `modal.open(...)` method. Here is an example:

```svelte
<script>
	import { modal } from '@minicms/components';
	import DemoModal from './DemoModal.svelte';

	async function openModal() {
		const result = await modal.open(DemoModal, { name: 'This is name', email: 'This is email' });

		if (result) {
			// result: 1 | 2
			console.log(result);
		} else {
			// user didn't submit the modal form
		}
	}
</script>

<Button on:click={openModal}>Open Modal</Button>
```

Here is an example of a modal component:

```svelte
<script>
	import {Modal} from '@minicms/components';
</script>

<Modal title="Demo">
	this is a modal.

	<br />
	if you press this button, 1 will be logged in console.
	<Button on:click={() => $modal.resolve(1)}>One</Button>

	<br />
	if you press this button, 2 will be logged in console.
	<Button on:click={() => $modal.resolve(2)}>Two</Button>

	<br />

	modal will be closed and nothing happens.
	<Button on:click={$modal.close}>Close</Button>
</Modal>
```

### Close modal

to close modal you can use any of these methods:

- `$modal.close()` closes the modal and resolves undefined
- `$modal.resolve(data)` closes modal and resolves data
- `$modal.reject(reason)` close modal and reject with reason (you can use the value in catch block).
- `modal.open(...)` returns a promise which will be resolved or rejected based on above 3 methods.

## Styling

This library uses YeSvelte components and you can refer to [YeSvelte docs](https://www.yesvelte.com) for more information.

## Contributing

If you'd like to contribute to the library, feel free to open a pull request or submit an issue on the GitHub repository. We welcome contributions of all kinds, including bug fixes, new features, and documentation improvements.

## License

This library is licensed under the MIT license.
