<script lang="ts">
	import { onMount } from "svelte";
    import {fly} from 'svelte/transition';
	import Divider from "../Divider.svelte";
	import { page } from "$app/stores";

    let serviceEl: HTMLElement | undefined;

    onMount(() => {
        const scroll = $page.url.searchParams.get("sluzby");
        if (scroll !== null && serviceEl !== undefined) {
            setTimeout(() => {
                window.scroll({
                    top: serviceEl?.offsetTop,
                    left: 0,
                    behavior: "smooth"
                })
                console.log("Should scroll")
            }, 500)
        }
    })

    interface Service {
        img: string;
        title: string;
        text: string;
        id: string;
        link?: string;
    }

    const services: Service[] = [
        {
            img: "/services/osobne_vozidlo.jpg", 
            title: "Odťah osobných vozidiel", 
            text: "Nam ante dolor, bibendum vitae ligula quis, imperdiet dignissim leo. Sed non venenatis tellus.",
            id: "3"
        },
        {
            img: "/services/dodavka.jpg", 
            title: "Odťah SUV a dodávok", 
            text: "Proin malesuada volutpat velit id condimentum. Suspendisse nec mi quis turpis convallis aliquet.",
            id: "2"
        },
        {
            img: "/services/autoservis.jpg", 
            title: "Autoservis u nášho partnera", 
            text: "Proin malesuada volutpat velit id condimentum. Suspendisse nec mi quis turpis convallis aliquet.",
            id: "2",
            link: "https://sgar-servis.sk"
        },
        {
            img: "/services/stvorkolka.jpg", 
            title: "Odťah štvorkoliek a motocyklov", 
            text: "Sed quis dui in enim sagittis accumsan non at dui. Proin consectetur, sapien in dictum.",
            id: "1"
        },
        {
            img: "services/burane_vozidlo.jpg", 
            title: "Odťah búraných vozidiel", 
            text: "Nam ante dolor, bibendum vitae ligula quis, imperdiet dignissim leo. Sed non venenatis tellus.",
            id: "3"
        },
        {
            img: "/services/vystavne_vozidlo.jpg", 
            title: "Preprava výstavných vozidiel", 
            text: "Nam ante dolor, bibendum vitae ligula quis, imperdiet dignissim leo. Sed non venenatis tellus.",
            id: "1"
        },
    ]

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
				}
			});
		});
		observer.observe(targetElement);
    });
</script>

<section class="bg-white py-24" bind:this={serviceEl}>
	<div class="container">
        <h1 class="text-center text-4xl text-black uppercase">
            <span class="font-light">Naše </span><span class="font-bold">služby</span>
        </h1>
        <Divider />
        <div bind:this={targetElement}>
            {#if visible}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8" in:fly={{delay: 200, duration: 500, x: -100}}>
                {#each services as {img, title, text, id, link}}
                    <div class="col-span-1">
                        {#if link}
                            <a href={link} class="flex flex-col text-center text-black h-full">
                                <img src={img} alt={title} class="mb-4 mx-auto image-shadow" width="350" height="210" loading="lazy">
                                <h3 class="text-xl font-semibold mb-2 flex-grow uppercase underline">{title}</h3>
                            </a>
                        {:else}
                            <div class="flex flex-col text-center text-black h-full">
                                <img src={img} alt={title} class="mb-4 mx-auto image-shadow"  width="350" height="210" loading="lazy">
                                <h3 class="text-xl font-semibold mb-2 flex-grow uppercase">{title}</h3>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
            {/if}
        </div>
	</div>
</section>

<style class="postcss">
    .image-shadow {
        /* box-shadow: 0 0 5px .1px theme("colors.primary"); */
        border: 1px solid theme("colors.primary");
        border-radius: 3px;
    }
</style>
