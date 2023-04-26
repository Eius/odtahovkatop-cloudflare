<script lang="ts">
    import {onMount} from 'svelte';
	import Icon from '@iconify/svelte';

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
    // TODO: add intersection observer to start counter when in viewport
    onMount(() => {
        startCounter();
    });
    
    </script>

<section class="bg-primary py-8">
	<div class="container grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
		{#each numberStats as { icon, number, suffix, text }, index}
			<div class="col-span-1">
				<div class="flex flex-col items-center">
					<div class="text-accent text-7xl mb-4">
						<!-- Icon Box -->
						<Icon {icon} />
					</div>
					<p class="text-white font-bold text-3xl mb-2" id="stat-{index}">{number} {suffix}</p>
					<p class="text-white uppercase">{text}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
