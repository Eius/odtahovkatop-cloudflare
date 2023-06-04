<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	export let contentAlign: 'start' | 'center' | 'end' = 'center';

	interface Slide {
		src: string;
		alt: string;
		title1: string;
		title2: string;
		text1: string;
		text2: string;
	}

	const slides: Slide[] = [
		{
			src: '/home-slide-1.jpg',
			alt: 'Slide 2',
			title1: 'Sme vám vždy k dispozícii',
			title2: '24 hodín denne, 7 dní v týždni',
			text1: 'Rýchla a spoľahlivá odťahová',
			text2: 'služba po celom Nitrianskom kraji.'
		},	
		{
			src: '/home-slide-2.jpg',
			alt: 'Slide 1',
			title1: 'Ponúkame vám kvalitné',
			title2: 'odťahové služby',
			text1: 'Rýchla a spoľahlivá odťahová',
			text2: 'služba po celom Slovensku.'
		},
	];
</script>

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
	{#each slides as {src, alt, title1, title2, text1, text2}}
	<SplideSlide>
		<img src={src} alt={alt} width="1600" height="600" class="min-h-[200px] object-cover object-top w-full h-auto" />
		<div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center">
			<div class="container flex flex-col items-{contentAlign}">
				<h2 class="text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight text-{contentAlign} uppercase mb-3">
					<span class="text-white font-light">{title1}</span><br>
					<span class="text-accent-1 font-bold">{title2}</span>
				</h2>
				<p class="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug text-center">
					<span class="text-white">
						{text1}<br>
						{text2}
					</span>
				</p>
			</div>
		</div>
	</SplideSlide>
	{/each}
</Splide>

<style lang="postcss">
	
</style>
