<script lang="ts">
	import "../app.css";
	import "@fontsource/lato";
	import "@fontsource/roboto";
	import "@fontsource/roboto/300.css";
	import "@fontsource/roboto/900.css";
	import "$lib/styles/global.css"
	
	import NavMenu from "$lib/components/navmenu/NavMenu.svelte";
</script>

<svelte:head>
	<title>Odťahovka.TOP Nitra | Odťahová služba</title>
	<meta name="title" content="Odťahovka.TOP Nitra | Odťahová služba">
</svelte:head>

<div class="app">
	<NavMenu />
	<main>
		<slot />
	</main>

</div>

<style lang="scss">

</style>
