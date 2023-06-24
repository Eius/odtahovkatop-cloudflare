<script lang="ts">
	import "../app.css";
	import "@fontsource/lato";
	import "@fontsource/roboto";
	import "@fontsource/roboto/300.css";
	import "@fontsource/roboto/700.css";
	import "@fontsource/roboto/900.css";
	import "$lib/styles/global.css"
	
	import Nav from "$lib/components/layout/navmenu/Nav.svelte";
	import Footer from "$lib/components/layout/footer/Footer.svelte";
	import { plausible } from "$lib/stores/plausibleStore";
	import { onMount } from "svelte";
	
	const { enableAutoPageviews } = $plausible;
	onMount(() => {
		enableAutoPageviews();
	})
</script>

<svelte:head>
	<title>Odťahovka.TOP Nitra | Odťahová služba</title>
	<meta name="title" content="Odťahovka.TOP Nitra | Odťahová služba">
	<meta name="description" content="Máte problém s autom? Potrebujete spoľahlivú odťahovku? 
	Poskytujeme rýchle a profesionálne služby odťahovky pre osobné vozidlá v okolí Nitry a celej Slovenskej republike. 
	Kontaktujte nás a zabezpečte si profesionálny odťah vozidla.">
</svelte:head>

<div class="app">
	<Nav />
	<main>
		<slot />
	</main>
	<Footer />
</div>
