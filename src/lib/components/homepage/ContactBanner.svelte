<script lang="ts">
	import { PhoneNumber } from '$lib/data/ContactInfo';
	import { plausibleEvent } from '$lib/stores/eventStore';
	import Icon from '@iconify/svelte';
</script>

<div class="bg-secondary text-white">
	<div class="container md:flex items-center md:justify-between">
		<div class="py-2 hidden md:block">
			<div class="flex justify-center">
				<div class="flex items-center mr-2 text-2xl">
					<Icon icon="mdi:tow-truck" />
				</div>
				<p>Odťahové služby po celej SR</p>
			</div>
		</div>
		<div class="py-2">
			<div class="flex justify-center">
				<div class="flex items-center mr-2 text-2xl">
					<Icon icon="material-symbols:phone-iphone" />
				</div>
				<p class="underline underline-offset-4">
					<a href="tel:{PhoneNumber}" class="text-xl md:text-base text-accent-2 plausible-event-name=PhoneNumberClick" on:click={() => {plausibleEvent.set("PhoneNumberClick")}}>{PhoneNumber}</a>
				</p>
			</div>
		</div>
		<div class="py-2 hidden md:block">
			<div class="flex justify-center">
				<div class="flex items-center mr-2 text-2xl">
					<Icon icon="ic:outline-access-time-filled" />
				</div>
				<p>Sme Vám k dispozícii <span class="text-accent-2">NONSTOP</span></p>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	

	
</style>
