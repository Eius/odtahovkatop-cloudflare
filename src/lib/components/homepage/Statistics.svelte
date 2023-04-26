<script lang="ts">
    import {onMount, onDestroy } from 'svelte';
	import Icon from '@iconify/svelte';
	import {fly} from 'svelte/transition';

	interface T {
		icon: string;
		number: number;
		suffix: string;
		text: string;
	}

	const numberStats: T[] = [
		{
			icon: 'mdi:car-sports-utility-vehicle',
			number: 956,
			suffix: '',
			text: 'odtiahnutých vozidiel'
		},
		{
			icon: 'mdi:truck',
			number: 312,
			suffix: '',
			text: 'odtiahnutých dodávok'
		},
        {
			icon: 'game-icons:path-distance',
			number: 250,
			suffix: 'tis.',
			text: 'najazdených kilometrov'
		},
		{
			icon: 'material-symbols:person',
			number: 100,
			suffix: '%',
			text: ' spokojných zákazníkov'
		},
		
	];
    
    function startCounter() {
        let highestNumber = 0;
        for (let i = 0; i < numberStats.length; i++) {
            const number = numberStats[i].number;
            if (number > highestNumber) {
                highestNumber = number;
            }
        }

        for (let i = 0; i < numberStats.length; i++) {
            const stat = document.getElementById(`stat-${i}`);
            if(!stat) {return}
            const number = numberStats[i].number;
            const suffix = numberStats[i].suffix;
            let counter = 0;
            let delay = 4 * (highestNumber / number);
            const interval = setInterval(() => {
                if (counter < number) {
                    counter++;
                    stat.innerHTML = `${counter} ${suffix}`;
                } else {
                    clearInterval(interval);
                }
            }, delay);
        }
    }
    
	let targetElement: HTMLElement;
	let observer: IntersectionObserver;
	let visible = false;
    onMount(() => {
		if (!targetElement) {return;}
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					observer?.disconnect();
					visible = true;
					startCounter();
				}
			});
		});
		observer.observe(targetElement);
    });

	onDestroy(() => {
		observer?.disconnect();
	});
    
    </script>

<section class="bg-primary py-8">
	<div class="container grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4" bind:this={targetElement}>
		{#if visible}
		{#each numberStats as { icon, number, suffix, text }, index}
			<div class="col-span-1" transition:fly={{delay: 200, duration: 500, x: -100}}>
				<div class="flex flex-col items-center">
					<div class="text-accent text-7xl mb-4">
						<!-- Icon Box -->
						<Icon {icon} />
					</div>
					<p class="text-white font-bold text-3xl mb-2" id="stat-{index}">{number} {suffix}</p>
					<p class="text-white text-center uppercase">{text}</p>
				</div>
			</div>
		{/each}
		{/if}
	</div>
</section>
