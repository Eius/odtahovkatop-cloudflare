<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";
	import { PhoneNumber, Email } from "$lib/data/ContactInfo";
	import ContactRow from "./ContactRow.svelte";
	import FooterMenuItem from "./FooterMenuItem.svelte";

    const currentYear = new Date().getFullYear();
</script>

<footer class="bg-primary">
    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 py-8">
        <div class="col-span-1">
            <div class="flex flex-col items-center md:items-start">
                <h3 class="text-white uppercase">
                    <span class="font-light">Sociálne</span>
                    <span class="font-bold">siete</span>
                </h3>
                <Divider marginY="mb-4" marginX="mx-0" width="w-[120px]" />
                <a href="https://www.facebook.com/profile.php?id=100063504850544" class="text-white group">
                <img src="/Logo.png" alt="" height="100" width="400" class="max-w-[230px]" />
                    Sledujte nás na <span class="transition-colors duration-150 group-hover:text-facebook">Facebooku</span>!
                </a>
            </div>
        </div>
        <div class="col-span-1">
            <div class="flex flex-col items-center md:items-start">
                <h3 class="text-white uppercase">
                    <span class="font-light">Užitočné</span>
                    <span class="font-bold">odkazy</span>
                </h3>
                <Divider marginY="mb-4" marginX="mx-0" width="w-[140px]" />
                <ul class="flex flex-col gap-2 items-center md:items-start">
                    <FooterMenuItem href="/" name="Úvod" />
                    <FooterMenuItem href="/cennik" name="Cenník" />
                    <FooterMenuItem href="/kontakt" name="Kontakt" />
                </ul>
            </div>
        </div>
        <div class="col-span-1">
            <div class="flex flex-col items-center md:items-start">
                <h3 class="text-white uppercase">
                    <span class="font-light">Kontaktujte</span>
                    <span class="font-bold">nás</span>
                </h3>
                <Divider marginY="mb-4" marginX="mx-0" width="w-[144px]" />
                <ul class="flex flex-col gap-2 items-center md:items-start">
                    <a href="mailto:{Email}" class="text-white underline">
                        <ContactRow icon="material-symbols:mail-rounded" text={Email} />
                    </a>
                    <a href="tel:{PhoneNumber}" class="text-white underline">
                        <ContactRow icon="material-symbols:phone-enabled" text={PhoneNumber} />
                    </a>
                    <ContactRow icon="ic:outline-access-time" text="24 hodín denne, 7 dní v týždni" />
                </ul>
            </div>
        </div>
    </div>
    <div class="bg-secondary">
        <p class="text-white text-center py-4">24/7 - Odťahovka TOP Nonstop | Všetky práva vyhradené © {currentYear}</p>
    </div>
</footer>