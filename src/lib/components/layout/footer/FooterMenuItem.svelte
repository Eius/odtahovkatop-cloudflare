<script lang="ts">
	export let href: string;
	export let name: string;
</script>

<a {href} class="text-white font-light text-md tracking-wide">
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
			background-color: theme('colors.accent.1');
			transition: width 0.2s ease-in-out;
		}
	}

	a {
		&:hover {
			li {
				&::after {
					width: 100%;
				}
			}
		}
	}
</style>
