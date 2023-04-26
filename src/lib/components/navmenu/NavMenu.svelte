<script lang="ts">
	import NavMenuItem from './NavMenuItem.svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let logoWrapper: HTMLElement;
	let mobileMenu: HTMLElement;
	let mobileMenuOpen = false;
	// TODO: Fix mobile menu
	function toggleMobileMenu() {
		if (mobileMenuOpen) {
			console.log('close');
			mobileMenu.style.display = 'none';
			mobileMenuOpen = false;
		} else {
			console.log('open');
			mobileMenu.style.display = 'block';
			mobileMenuOpen = true;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		const scrollY = window.scrollY;
		if (scrollY > 0) {
			logoWrapper.style.maxWidth = '220px';
			logoWrapper.style.padding = '0.5rem 0';
		} else {
			logoWrapper.style.maxWidth = '270px';
			logoWrapper.style.padding = '1rem 0';
		}
	});

	function handleScroll() {
		const scrollY = window.scrollY;
		if (scrollY > 0) {
			logoWrapper.style.maxWidth = '220px';
			logoWrapper.style.padding = '0.5rem 0';
		} else {
			logoWrapper.style.maxWidth = '270px';
			logoWrapper.style.padding = '1rem 0';
		}
	}
</script>

<nav class="sticky top-0 z-40 bg-primary">
	<div class="container mx-auto flex justify-between items-center">
		<div class="transition-all ease-in-out max-w-[270px] py-4 duration-150" bind:this={logoWrapper}>
			<img src="https://placehold.co/400x100" alt="" height="100" width="400" />
		</div>
		<ul class="hidden md:flex items-center gap-6">
			<NavMenuItem href="/" name="Úvod" />
			<NavMenuItem href="/sluzby" name="Služby" />
			<NavMenuItem href="/cennik" name="Cenník" />
			<NavMenuItem href="/kontakt" name="Kontakt" />
		</ul>
		<button class="flex md:hidden text-white text-5xl" on:click={toggleMobileMenu}>
			<Icon icon="mdi:menu" />
		</button>
	</div>
</nav>
<!-- <div class="mobile-menu" bind:this={mobileMenu}>
	<div class="container-fluid">
		<div class="container">
			<button on:click={toggleMobileMenu}>
				<Icon icon="mdi:close" />
			</button>
		</div>
	</div>
	<ul>
		<NavMenuItem href="/" name="Úvod" />
		<NavMenuItem href="/o-nas" name="O nás" />
		<NavMenuItem href="/sluzby" name="Služby" />
		<NavMenuItem href="/kontakt" name="Kontakt" />
	</ul>
</div> -->

<style lang="postcss">
	/* 
			button {
				background-color: transparent;
				color: $text-light;
				border: none;
				cursor: pointer;
				font-size: 3.25em;
				&:focus {
					outline: none;
				}
			}
		}
	}
	.mobile-menu {
		z-index: 9999;
		background-color: $primary;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: none;
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
	} */
</style>