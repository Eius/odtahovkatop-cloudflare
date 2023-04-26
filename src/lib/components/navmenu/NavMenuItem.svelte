<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let name: string;
</script>

<a {href} class="{$page.url.pathname == href ? 'active' : 'inactive'} py-4 px-3 text-white font-bold text-lg tracking-wide">
	<li>{name}</li>
</a>

<style lang="postcss">
	
	li {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			height: 3px;
			width: 0;
			bottom: -2px;
			right: 0;
			background-color: theme("colors.accent");
			transition: width 0.2s ease-in-out;
		}
	}

	a.active {
		li {
			&::after {
				width: 100%;
			}
		}
	}

	a.inactive {
		transition: color 0.06s linear;
		&:hover {
			li {
				&::after {
					width: 100%;
				}
			}
		}
	}
</style>
