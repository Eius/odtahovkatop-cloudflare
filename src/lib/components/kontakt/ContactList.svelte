<script lang="ts">
	import { Email, PhoneNumber } from '$lib/data/ContactInfo';
    import Icon from '@iconify/svelte';

    interface ContactBox {
        href?: string;
		icon: string;
        title: string;
        contact: string;
	}

    const contactBoxes: ContactBox[] = [
        {
            href: "mailto:",
            icon: 'mdi:email',
            title: 'Email',
            contact: Email
        },
        {
            href: undefined,
            icon: 'ic:outline-access-time-filled',
            title: 'Nonstop',
            contact: "24 hodín denne, 7 dní v týždni"
        },
        {
            href: "tel:",
            icon: 'mdi:phone',
            title: 'Zavolajte nám',
            contact: PhoneNumber
        }
    ]
</script>

<div class="container py-12">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
        {#each contactBoxes as {href, icon, title, contact}}
            {#if href != undefined}
                <a href={href + contact} class="col-span-1 flex flex-col gap-2 items-center group {href === "tel:" ? "plausible-event-name=PhoneNumberClick" : ""}">
                    <div class="flex text-5xl text-accent-1 group-hover:scale-110 transition-transform duration-150">
                        <Icon icon={icon} />
                    </div>
                    <h2 class="text-2xl font-bold">{title}</h2>
                    <p class="text-lg group-hover:underline">{contact}</p>
                </a>
            {:else}
                <div class="col-span-1 flex flex-col gap-2 items-center group">
                    <div class="flex text-5xl text-accent-1 group-hover:scale-110 transition-transform duration-150">
                        <Icon icon={icon} />
                    </div>
                    <h2 class="text-2xl font-bold text-center">{title}</h2>
                    <p class="text-lg text-center">{contact}</p>
                </div>
            {/if}
        {/each}
    </div>
</div>