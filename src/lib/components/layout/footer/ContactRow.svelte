<script lang="ts">
    import Icon from "@iconify/svelte";

    export let icon: string;
    export let text: string;
</script>

<li class="flex">
    <span class="text-white text-2xl mr-4"> <!-- Icon Box -->
        <Icon icon={icon} />
    </span>
    <p class="text-white">{text}</p>
</li>