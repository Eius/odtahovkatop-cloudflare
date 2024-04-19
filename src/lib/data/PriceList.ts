interface PriceItem {
    name: string;
    price: string;
}

interface PriceGroup {
    title: string;
    items: PriceItem[];
}

export const PriceList: PriceGroup[] = [
    {
		title: 'Nitra a okolie',
		items: [
			{ name: 'Osobné vozidlá do 2t', price: '50€' },
			{ name: 'Dodávky a SUV od 2t do 3t', price: '60€' },
		]
	},
    {
		title: 'Kilometrovné mimo mesta',
		items: [
			{ name: 'Osobné vozidlá do 1,5t', price: '0,60€/km' },
			{ name: 'Osobné vozidlá od 1,5t do 2t', price: '0,80€/km' },
			{ name: 'Dodávky a SUV od 2t do 3t', price: '0,80€/km' },
		]
	},
	// {
	// 	title: 'Ostatné', 
	// 	items: [
	// 		{ name: 'Sťažené nakladanie', price: '20€/30min' },
	// 		{ name: 'Príplatok za sviatok/víkend/noc', price: '20€' },
	// 		{ name: 'Čakanie', price: '20€/hod*' },
	// 		{ name: 'Čistenie ložnej plochy (olej, pohonné hmoty)', price: '10€' },
	// 		{ name: 'Zrušený / márny výjazd ( po 10 min. od objednania )', price: '50€' },
	// 	]
	// },
]; 