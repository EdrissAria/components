<script>
    import {Sidebar, SidebarItem, El} from 'yesvelte'
    import componentList from './components'
    import { goto } from '$app/navigation';

   

</script>

<El style=';display: flex; flex-direction:row ;height: 100vh'>
    <Sidebar style='position:relative ;height:100%'>
        {#each componentList as list}
            <SidebarItem on:click={()=>{window.location.pathname = "docs/" + list.href  }} title={list.name}, icon={list.icon} ></SidebarItem>
        {/each}
    </Sidebar>
    <El style=" width: 100%">
        <slot></slot>
    </El>
</El>
