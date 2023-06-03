<script lang="ts">
	import Icon from "@iconify/svelte";
    import {fly} from "svelte/transition"
    import {onMount} from "svelte"
	import Divider from "../Divider.svelte";

    let visible = false;

    interface Services {
        icon: string;
        title: string;
        text: string;
    }

    const services: Services[] = [
        {
            icon: "eos-icons:compass", 
            title: "Pokrytie", 
            text: "Naše služby poskytujeme po celej Slovenskej republike"
        },
        {
            icon: "material-symbols:speed-outline", 
            title: "Rýchlosť", 
            text: "Sme u vás v priebehu 30 minút (Nitra a okolie)"
        },
        {
            icon: "ic:outline-access-time", 
            title: "Nonstop", 
            text: "Sme vám dostupný nepretržite - 24 hodín denne, 7 dní v týždni"
        },
    ]

    let targetElement: HTMLElement;
	let observer: IntersectionObserver;
    onMount(() => {
		if (!targetElement) {return;}
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					observer?.disconnect();
					visible = true;
				}
			});
		});
		observer.observe(targetElement);
    });
</script>

<section class="bg-white py-24">
	<div class="container">
        <h1 class="text-center text-4xl text-black uppercase">
            <span class="font-light">Naše </span><span class="font-bold">výhody</span>
        </h1>
        <Divider />
        <p class="text-black text-sm md:text-base text-center max-w-[500px] mx-auto leading-relaxed">
            Ponúkame vám rýchlu a odbornú pomoc s každým problémom, ktorý vás môže postihnúť na ceste.
        </p>
        <div bind:this={targetElement}>
        {#if visible}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 mt-8" in:fly={{delay: 200, duration: 500, x: -100}}>
            {#each services as {icon, title, text}}
                <div class="col-span-1">
                    <div class="flex flex-col items-center text-black h-full">
                        <span class="transition-all duration-150 text-accent-1 text-8xl mb-6 hover:scale-110"> <!-- Icon Box -->
                            <Icon icon={icon} />
                        </span>
                        <h5 class="font-bold text-xl mb-4">
                            {title}
                        </h5>
                        <p class="text-center text-sm md:text-base leading-relaxed flex-grow max-w-[220px] md:max-w-none">
                            {@html text}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
        {/if}
    </div>
</section>

<style lang="postcss">
</style>
