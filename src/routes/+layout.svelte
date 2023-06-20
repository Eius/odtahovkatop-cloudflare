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
</script>

<svelte:head>
	<title>Odťahovka.TOP Nitra | Odťahová služba</title>
	<meta name="title" content="Odťahovka.TOP Nitra | Odťahová služba">
	<meta name="description" content="Máte problém s autom? Potrebujete spoľahlivú odťahovku? 
	Poskytujeme rýchle a profesionálne služby odťahovky pre osobné vozidlá v okolí Nitry a celej Slovenskej republike. 
	Kontaktujte nás a zabezpečte si profesionálny odťah vozidla.">
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-PBCHJ94L5W">
	</script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-PBCHJ94L5W');
	</script>
</svelte:head>

<div class="app">
	<Nav />
	<main>
		<slot />
	</main>
	<Footer />
</div>
