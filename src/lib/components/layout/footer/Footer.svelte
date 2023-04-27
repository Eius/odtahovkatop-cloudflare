<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";
	import { PhoneNumber } from "$lib/data/ContactInfo";
	import ContactRow from "./ContactRow.svelte";
	import FooterMenuItem from "./FooterMenuItem.svelte";
</script>

<footer class="bg-primary">
    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 py-8">
        <div class="col-span-1">
            <div class="flex flex-col items-center">
                <h3 class="text-white uppercase">
                    <span class="font-light">Sociálne</span>
                    <span class="font-bold">siete</span>
                </h3>
                <Divider />
                <img src="/Logo.png" alt="" height="100" width="400" class="max-w-[230px]" />
                <a href="https://www.facebook.com/profile.php?id=100063504850544" class="text-white group">
                    Sledujte nás na <span class="transition-colors duration-150 group-hover:text-facebook">Facebooku</span>!
                </a>
            </div>
        </div>
        <div class="col-span-1">
            <div class="flex flex-col items-center">
                <h3 class="text-white uppercase">
                    <span class="font-light">Užitočné</span>
                    <span class="font-bold">odkazy</span>
                </h3>
                <Divider />
                <ul class="flex flex-col gap-2 items-center">
                    <FooterMenuItem href="/" name="Úvod" />
                    <FooterMenuItem href="/sluzby" name="Služby" />
                    <FooterMenuItem href="/cennik" name="Cenník" />
                    <FooterMenuItem href="/kontakt" name="Kontakt" />
                </ul>
            </div>
        </div>
        <div class="col-span-1">
            <div class="flex flex-col items-center">
                <h3 class="text-white uppercase">
                    <span class="font-light">Kontaktujte</span>
                    <span class="font-bold">nás</span>
                </h3>
                <Divider />
                <ul class="flex flex-col gap-2 items-center">
                    <ContactRow icon="material-symbols:mail-rounded" text="info@odtahovka.top" />
                    <ContactRow icon="material-symbols:phone-enabled" text={PhoneNumber} />
                    <ContactRow icon="ic:outline-access-time" text="24 hodín denne, 7 dní v týždni" />
                </ul>
            </div>
        </div>
    </div>
    <div class="bg-secondary">
        <p class="text-white text-center py-4">24/7 - Odťahovka TOP Nonstop | Všetky práva vyhradené © 2023</p>
    </div>
</footer>