<script lang="ts">
    import { El, Button } from "yesvelte";
    import {Container, Doc, Preview} from '../index'
    import ConfirmModal from "./ConfirmModal.svelte";
	import InputModal from "./InputModal.svelte";
    
    
    
</script>

<Container title ='Model' >
    <Doc  title ='confirm modal' description='confirm modal'>
        <Preview markup = "./ConfirmModal.svelte" > 
            <ConfirmModal />
        </Preview>
    </Doc>
    <Doc  title ='Input modal' description='Input modal'>
        <Preview markup = "./Input.svelte" > 
            <InputModal />
        </Preview>
    </Doc>
</Container>
