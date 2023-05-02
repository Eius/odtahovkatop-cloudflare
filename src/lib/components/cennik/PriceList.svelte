<script lang="ts">
	import { PriceList } from '$lib/data/PriceList'; 
</script>

<div class="container py-12">
	{#each PriceList as { title, items }}
			<table class="table-fixed w-full mb-4 last-of-type:mb-0">
				<thead class="border-b-2 border-gray-2">
					<tr>
						<th colspan="3" class="text-start text-2xl py-4">{title}</th>
					</tr>
				</thead>
				<tbody>
					{#each items as { name, price }}
						<tr class="border-b-2 border-gray-2">
							<td colspan="2" class="py-2">{name}</td>
							<td class="text-center">{price}</td>
						</tr>
					{/each}
				</tbody>
			</table>
	{/each}
</div>
