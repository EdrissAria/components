<script lang='ts'>
    import {Form} from "$lib";
    import { Card, CardBody, CardHeader, CardFooter, CardActions, CardTitle } from "yesvelte";

    import { modal, confirmModal, ModalProvider, } from '@minicms/components'


    export const reciver: string = 'email@example.com'
    
    let value : any = undefined
    let onSubmit:Function= ()=>{
        //submit
        let result = confirmModal.open({
            title: 'send Email',
            description: 'are you soure to send this emssage',            
        })
        console.log('result', result)

    }
    

</script>

<Form bind:value {onSubmit}>

    <Card>
        <CardTitle>
            contact
        </CardTitle>
        <CardHeader>Contact us</CardHeader>
        <CardBody>
            <Form.Input type='text' value='anonimous' name='name' placeholder='write your name'  > </Form.Input>
            <Form.Input type='email' required name='email ' placeholder='email...'  > </Form.Input>
            <textarea required name = 'message' placeholder="your message"></textarea>
        </CardBody>
        <CardFooter>
            <Form.Submit>Send</Form.Submit>
        </CardFooter>
    </Card>
</Form>
<pre>
{JSON.stringify(value)}
</pre>

