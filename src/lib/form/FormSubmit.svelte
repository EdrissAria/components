<script>
	import { Button } from 'yesvelte';
</script>

<Button type="submit" color="primary" {...$$restProps}>
	<slot />
</Button>
