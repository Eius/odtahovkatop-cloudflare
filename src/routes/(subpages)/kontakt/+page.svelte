<script lang="ts">
	import ContactList from '$lib/components/kontakt/ContactList.svelte';
	import GoogleMap from '$lib/components/kontakt/GoogleMap.svelte';
	import {PageTitle} from '$lib/stores/PageTitleStore'

	$: PageTitle.set('Kontakt')

</script>
<ContactList />
<GoogleMap />

<svelte:head>
	<meta name="title" content="Kontakt Odťahovka.TOP | Odťahová služba">
</svelte:head>


<style lang="postcss">

</style>
