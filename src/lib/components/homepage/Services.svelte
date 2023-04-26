<script lang="ts">
	import Icon from "@iconify/svelte";

    interface Service {
        img: string;
        title: string;
        text: string;
        id: string;
    }

    const services: Service[] = [
        {
            img: "https://placehold.co/400x250", 
            title: "Lorem Ipsum Dolor 1", 
            text: "Sed quis dui in enim sagittis accumsan non at dui. Proin consectetur, sapien in dictum.",
            id: "1"
        },
        {
            img: "https://placehold.co/400x250", 
            title: "Lorem Ipsum Dolor 2", 
            text: "Nam ante dolor, bibendum vitae ligula quis, imperdiet dignissim leo. Sed non venenatis tellus.",
            id: "3"
        },
        {
            img: "https://placehold.co/400x250", 
            title: "Lorem Ipsum Dolor 3", 
            text: "Proin malesuada volutpat velit id condimentum. Suspendisse nec mi quis turpis convallis aliquet.",
            id: "2"
        },
        {
            img: "https://placehold.co/400x250", 
            title: "Lorem Ipsum Dolor 4", 
            text: "Sed quis dui in enim sagittis accumsan non at dui. Proin consectetur, sapien in dictum.",
            id: "1"
        },
        {
            img: "https://placehold.co/400x250", 
            title: "Lorem Ipsum Dolor 5", 
            text: "Nam ante dolor, bibendum vitae ligula quis, imperdiet dignissim leo. Sed non venenatis tellus.",
            id: "3"
        },
        {
            img: "https://placehold.co/400x250", 
            title: "Lorem Ipsum Dolor 6", 
            text: "Proin malesuada volutpat velit id condimentum. Suspendisse nec mi quis turpis convallis aliquet.",
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8">
            {#each services as {img, title, text, id}}
                <div class="col-span-1">
                    <div class="flex flex-col text-center text-black h-full">
                        <img src={img} alt={title} class="mb-4 rounded">
                        <h1 class="text-3xl font-medium mb-2">{title}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            {/each}
            <div class="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-12">
                <a href="/sluzby" class="group bg-accent hover:bg-white border-accent border-2 transition-colors rounded py-4 px-8">
                    <span class="text-white group-hover:text-accent transition-colors">Všetky služby</span>
                </a>
            </div>
        </div>
	</div>
</section>

<style lang="postcss">
</style>
