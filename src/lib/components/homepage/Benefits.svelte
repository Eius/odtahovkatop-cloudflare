<script lang="ts">
	import Icon from "@iconify/svelte";

    interface Services {
        icon: string;
        title: string;
        text: string;
        button: string;
        id: string;
    }

    const services: Services[] = [
        {
            icon: "ic:outline-access-time", 
            title: "Nonstop", 
            text: "Sme vám dostupný nepretržite - 24 hodín denne, 7 dní v týždni.", 
            button: "Zistiť viac",
            id: "1"
        },
        {
            icon: "material-symbols:speed-outline", 
            title: "Rýchlosť", 
            text: "Sme u vás v priebehu 30 minút (Nitra a okolie)", 
            button: "Zistiť viac",
            id: "3"
        },
        {
            icon: "game-icons:european-flag", 
            title: "Pokrytie", 
            text: "Naše služby poskytujeme po celej Slovenskej republike a Európskej únii.", 
            button: "Zistiť viac",
            id: "2"
        },
    ]
</script>

<section class="bg-white py-24">
	<div class="container">
		<h1 class="text-center text-4xl text-black uppercase">
			<span class="font-light">Naše </span><span class="font-bold">výhody</span>
		</h1>
		<div class="h-1 w-[30px] bg-accent mx-auto my-4 -skew-x-30" />
        <p class="text-black text-center max-w-[500px] mx-auto leading-relaxed">
            Ponúkame vám rýchlu a odbornú pomoc s každým problémom, ktorý vás môže postihnúť na ceste.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 mt-8">
            {#each services as {icon, title, text, button, id}}
                <div class="col-span-1">
                    <div class="flex flex-col items-center text-black h-full">
                        <a href="/sluzby?service={id}" class="transition-all duration-150 text-accent text-8xl mb-6 hover:scale-110"> <!-- Icon Box -->
                            <Icon icon={icon} />
                        </a>
                        <h5 class="font-bold text-xl mb-4">
                            {title}
                        </h5>
                        <p class="text-center leading-relaxed flex-grow max-w-[220px] md:max-w-none">
                            {@html text}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
	</div>
</section>

<style lang="postcss">
</style>
