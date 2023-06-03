<script lang="ts">
	import NavMenuItem from './NavMenuItem.svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let logoWrapper: HTMLElement;
	let mobileMenu: HTMLElement;
	let mobileMenuOpen = false;
	
	function closeMobileMenu() {
		if (mobileMenuOpen) {
			mobileMenu.style.display = 'none';
			mobileMenuOpen = false;
		}
	}

	function toggleMobileMenu() {
		if (mobileMenuOpen) {
			mobileMenu.style.display = 'none';
			mobileMenuOpen = false;
		} else {
			mobileMenu.style.display = 'block';
			mobileMenuOpen = true;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
	});

	function handleScroll() {
		const scrollY = window.scrollY;
		if (scrollY > 0 && logoWrapper) {
			logoWrapper.style.maxWidth = '220px';
			logoWrapper.style.padding = '0.5rem 0';
		} else if (logoWrapper) {
			logoWrapper.style.maxWidth = '270px';
			logoWrapper.style.padding = '1rem 0';
		}
	}
</script>

<nav class="sticky top-0 z-40 bg-primary border-b border-white">
	<div class="container mx-auto flex justify-between items-center">
		<a href="/" class="transition-all ease-in-out py-4 duration-150" bind:this={logoWrapper}>
			<img src="/Logo.png" alt="" width="400" height="100" class="w-full max-w-[200px] sm:max-w-[270px]" />
		</a>
		<ul class="hidden md:flex items-center gap-6">
			<NavMenuItem href="/" name="Úvod" />
			<!-- <NavMenuItem href="/sluzby" name="Služby" /> -->
			<NavMenuItem href="/cennik" name="Cenník" />
			<NavMenuItem href="/kontakt" name="Kontakt" />
		</ul>
		<button class="flex md:hidden text-white text-5xl" on:click={toggleMobileMenu}>
			<Icon icon="mdi:menu" />
		</button>
	</div>
</nav>
<div class="fixed top-0 bottom-0 left-0 right-0 hidden bg-primary z-50" bind:this={mobileMenu}>
	<div class="flex justify-end">
		<button on:click={toggleMobileMenu} class="text-white flex text-5xl py-4 pr-4">
			<Icon icon="mdi:close" />
		</button>
	</div>
	<ul class="flex flex-col items-center">
		<NavMenuItem href="/" name="Úvod" clickCallback={closeMobileMenu} />
		<!-- <NavMenuItem href="/o-nas" name="O nás" />
		<NavMenuItem href="/sluzby" name="Služby" /> -->
		<NavMenuItem href="/cennik" name="Cenník" clickCallback={closeMobileMenu} />
		<NavMenuItem href="/kontakt" name="Kontakt" clickCallback={closeMobileMenu} />
	</ul>
</div>

<style lang="postcss">
	/* 
	.container-fluid {
			background-color: $accent;

			.container {
				display: flex;
				justify-content: flex-end;
				button {
					color: $text-light;
					background: transparent;
					border: none;
					display: flex;
					font-size: 3.5em;
				}
			}
		}
		ul {
			padding-top: 1rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			list-style: none;
		}
	*/
</style>