<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	const slides: { src: string; alt: string }[] = [
		{
			src: '/home-slide-1.jpg',
			alt: 'Slide 1'
		},
		{
			src: '/home-slide-1.jpg',
			alt: 'Slide 2'
		}
	];
</script>

<div class="splide-wrapper">
	<Splide
		aria-label="Kolotoč obrázkov na úvodnej stránke"
		options={{
			type: 'loop',
			arrows: false,
			pagination: false,
			autoplay: true,
			interval: 5000
		}}
	>
		{#each slides as {src, alt}}
		<SplideSlide>
			<img src={src} alt={alt} width="1600" height="600" class="min-h-[200px] object-cover object-top w-full h-auto" />
		</SplideSlide>
		{/each}
	</Splide>
    <div class="overlay">

    </div>
</div>

<style lang="postcss">
	

    /* .splide-wrapper {
        position: relative;
    }

	img {
		width: 100%;
		height: auto;
		min-height: 210px;
		object-position: top;
		object-fit: cover;
	} */
</style>
