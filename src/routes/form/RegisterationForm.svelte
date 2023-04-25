<script lang='ts'>
    import {Form} from "$lib";
    import { Card, CardBody, CardHeader, CardFooter, CardActions, CardTitle } from "yesvelte";
    import { modal, confirmModal, ConfirmModal, ModalProvider } from '@minicms/components';
    let value : any = undefined
    let onSubmit:Function= ()=>{
        //submit
        confirmModal.open({
            title: 'rigerter user',
            description: 'are you sure to rigester'
        })
    }
</script>

<Form bind:value {onSubmit}>

    <Card>
        <CardTitle>
            regiter
        </CardTitle>

        <CardHeader>Regiter the user</CardHeader>
        <CardBody>
            <Form.Input type='text' required label='Name' value='Unnonimous' name='name' placeholder='name'  > </Form.Input>
            <Form.Input type='number' min=10 max =14 required label='Phone' name='phone' placeholder='phone'   > </Form.Input>
            <Form.Input required type='email' label='Email'  name='email' placeholder='emial...'  > </Form.Input>
            <Form.Input label = 'Gender' type='radio'   name='name' placeholder='name' > </Form.Input>
        </CardBody>
        <CardFooter>
            <Form.Submit>Register</Form.Submit>
        </CardFooter>
    </Card>
</Form>
<ModalProvider />
<pre>
{JSON.stringify(value)}
</pre>

