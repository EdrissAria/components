<script lang="ts">
    import FormInput from '$lib/form/FormInput.svelte';
    import FormDatePicker from '$lib/form/FormDatePicker.svelte';
    import FormRadioGroup from '$lib/form/FormRadioGroup.svelte';
    
    import {Form} from '$lib'
	import 'yesvelte/css/tabler.css';
    import {El,Card, CardBody, CardFooter, CardHeader, CardTitle, CardActions} from "yesvelte"
	import FormReset from '$lib/form/FormReset.svelte';
	import FormSubmit from '$lib/form/FormSubmit.svelte';
    let roles = ["Admin", "Editor", "Author", "Subscriber"]
	let value = {};
</script>
<El m="3">
    <Card>
        <CardHeader light>
            <CardTitle><El textColor="secondary" tag="h1">Create User</El></CardTitle>
        </CardHeader>
        <Form bind:value>
                <CardBody>
                    <El row>
                        <El col><FormInput name="firstname" label="First name"/></El>
                        <El col><FormInput name="lastname" label="Last name"/></El>
                    </El>
                    <El row>
                        <El col><FormInput name="username" label="Username"/></El>
                    </El>
                    <El row>
                        <El col><FormDatePicker name="birth_date" label="Birth Date"/></El>
                        <El col><FormInput name="phone" label="Phone"/></El>
                    </El>
                    <El row>
                        <El col><FormInput name="Email" label="Email"/></El>
                        <El mt="2" col><FormRadioGroup name="role" label="Roles" items={roles}/></El>
                    </El>
                    <El row>
                        <El col><FormInput name="password" label="Password"/></El>
                        <El col><FormInput name="confirm" label="Confirm"/></El>
                    </El>
                </CardBody>
        
                <CardFooter>
                    <El mx="2">
                        <FormReset>Reset</FormReset>
                    </El>
                    <El>
                        <FormSubmit>Create</FormSubmit>
                    </El>
                </CardFooter>
        </Form>
    </Card>    
</El>


