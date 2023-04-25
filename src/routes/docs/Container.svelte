<script lang="ts" >
    import { El, Card, CardBody, Tabs, CardHeader, TabList,TabItem, TabContent, TabPanel } from "yesvelte";
    export let title:any = undefined


</script>


<El  p=4 pe=5 style='width: 100% ; background-color: #ececec'>
    <El tag = 'h1'>{title}</El>
    <slot />
</El>

