<script lang="ts">
	import "../app.css";
	import "@fontsource/lato";
	import "@fontsource/roboto";
	import "@fontsource/roboto/300.css";
	import "@fontsource/roboto/900.css";
	import "$lib/styles/global.css"
	
	import Nav from "$lib/components/layout/navmenu/Nav.svelte";
	import Footer from "$lib/components/layout/footer/Footer.svelte";
</script>

<svelte:head>
	<title>Odťahovka.TOP Nitra | Odťahová služba</title>
	<meta name="title" content="Odťahovka.TOP Nitra | Odťahová služba">
</svelte:head>

<div class="app">
	<Nav />
	<main>
		<slot />
	</main>
	<Footer />
</div>
