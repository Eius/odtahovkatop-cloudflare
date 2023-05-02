<script lang="ts">
	import PriceList from '$lib/components/cennik/PriceList.svelte';
	import {PageTitle} from '$lib/stores/PageTitleStore'

	$: PageTitle.set('Cenník')
</script>

<PriceList />
