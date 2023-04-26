<script lang="ts">
	import Icon from "@iconify/svelte";

    interface Benefit {
        icon: string;
        title: string;
        text: string;
        button: string;
        id: string;
    }

    const benefits: Benefit[] = [
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
			<span class="font-light">Naše </span><span class="font-bold">služby</span>
		</h1>
		<div class="h-1 w-[30px] bg-accent mx-auto my-4 -skew-x-30" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 mt-8">
            {#each benefits as {icon, title, text, button, id}}
                <div class="col-span-1">
                    <div class="flex flex-col items-center text-black h-full">
                        
                    </div>
                </div>
            {/each}
        </div>
	</div>
</section>

<style lang="postcss">
</style>
