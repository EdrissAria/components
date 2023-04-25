<script lang='ts'>
    import {Form} from "$lib";
    import { Card, CardBody, CardHeader, CardFooter, CardActions, CardTitle } from "yesvelte";


    export const src : string = '/submit'
    
    let value : any = undefined
    let onSubmit:Function= ()=>{
        //submit

    }
    

</script>

<Form bind:value {onSubmit}>

    <Card>
        <CardTitle>
            comment
        </CardTitle>

        <CardHeader>Write your comment</CardHeader>
        <CardBody>
            <Form.Input value='Unnonimous' name='name' placeholder='write your name'  > </Form.Input>
            <textarea  name = 'comment' placeholder="your comments"></textarea>
        </CardBody>
        <CardFooter>
            <Form.Submit>Submit</Form.Submit>
        </CardFooter>
    </Card>
</Form>
<pre>
{JSON.stringify(value)}
</pre>

