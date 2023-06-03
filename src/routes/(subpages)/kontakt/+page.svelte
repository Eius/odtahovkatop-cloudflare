<script lang="ts">
	import ContactList from '$lib/components/kontakt/ContactList.svelte';
	import GoogleMap from '$lib/components/kontakt/GoogleMap.svelte';
	import {PageTitle} from '$lib/stores/PageTitleStore'

	$: PageTitle.set('Kontakt')
</script>
<svelte:head>
	<!-- Event snippet for Phone call lead conversion page --> 
	<script> 
		gtag('event', 'conversion', {'send_to': 'AW-11202024357/tPgBCIeilqcYEKWnxd0p'}); 
	</script>
</svelte:head>
<ContactList />
<GoogleMap />

<style lang="postcss">

</style>
