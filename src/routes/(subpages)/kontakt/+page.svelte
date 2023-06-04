<script lang="ts">
	import ContactList from '$lib/components/kontakt/ContactList.svelte';
	import GoogleMap from '$lib/components/kontakt/GoogleMap.svelte';
	import {PageTitle} from '$lib/stores/PageTitleStore'

	$: PageTitle.set('Kontakt')
</script>
<ContactList />
<GoogleMap />

<style lang="postcss">

</style>
