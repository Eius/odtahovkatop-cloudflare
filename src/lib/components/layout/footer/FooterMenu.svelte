<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";


</script>

<footer class="bg-primary">
    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
        <div class="col-span-1">
            <div class="flex flex-col items-center">
                <h3 class="text-white uppercase">
                    <span class="font-light">Lorem</span>
                    <span class="font-bold">Ipsum</span>
                </h3>
                <Divider />
            </div>
        </div>
        <div class="col-span-1">
            <div class="flex flex-col items-center">
                <h3 class="text-white uppercase">
                    <span class="font-light">Užitočné</span>
                    <span class="font-bold">odkazy</span>
                </h3>
                <Divider />
            </div>
        </div>
        <div class="col-span-1">
            <div class="flex flex-col items-center">
                <h3 class="text-white uppercase">
                    <span class="font-light">Kontaktujte</span>
                    <span class="font-bold">nás</span>
                </h3>
                <Divider />
            </div>
        </div>
    </div>
</footer>