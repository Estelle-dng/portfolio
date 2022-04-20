// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'CGLLS',
		category: 'Website',
		thumb: require('@/assets/images/projects/cglls-cropped.jpg'),
		img: require('@/assets/images/projects/cglls.jpg'),
	},
	{
		id: 2,
		title: 'Coopex Discography',
		category: 'UI/UX Design',
		thumb: require('@/assets/images/projects/coopexhome-cropped.jpg'),
		img: require('@/assets/images/projects/coopexhome.jpg'),
	},
	{
		id: 3,
		title: 'Dali',
		category: 'Art',
		thumb: require('@/assets/images/projects/Dali-cropped.jpg'),
		img: require('@/assets/images/projects/Dali.jpg'),
	},
	{
		id: 4,
		title: 'ALUR',
		category: 'Website',
		thumb: require('@/assets/images/projects/minifiedalur-cropped.jpg'),
		img: require('@/assets/images/projects/minifiedalur.png'),
	},
	{
		id: 5,
		title: 'Acrylic painting : Snake',
		category: 'Art',
		thumb: require('@/assets/images/projects/Serpent-cropped.jpg'),
		img: require('@/assets/images/projects/Serpent.jpg'),
	},
	{
		id: 6,
		title: 'Camping de la Jamonière : Logo',
		category: 'UI/UX Design',
		thumb: require('@/assets/images/projects/campinglogo-cropped.jpg'),
		img: require('@/assets/images/projects/campinglogo.png'),
	},
	{
		id: 7,
		title: 'Digital Africa',
		category: 'Website',
		thumb: require('@/assets/images/projects/digitalconstellation-cropped.jpg'),
		img: require('@/assets/images/projects/digitalconstellation.png'),
	},
	{
		id: 8,
		title: 'Photography : Elephant',
		category: 'Art',
		thumb: require('@/assets/images/projects/elephant-cropped.jpg'),
		img: require('@/assets/images/projects/elephant.jpg'),
	},
	{
		id: 9,
		title: 'Wireframes',
		category: 'UI/UX Design',
		thumb: require('@/assets/images/projects/Wireframe-cropped.jpg'),
		img: require('@/assets/images/projects/Wireframe.png'),
	},
	{
		id: 10,
		title: 'Inking : Hellboy',
		category: 'Art',
		thumb: require('@/assets/images/projects/hellboy-cropped.jpg'),
		img: require('@/assets/images/projects/hellboy.jpg'),
	},
	{
		id: 11,
		title: 'Photography : Jellyfish',
		category: 'Art',
		thumb: require('@/assets/images/projects/meduses-cropped.jpg'),
		img: require('@/assets/images/projects/meduses.jpg'),
	},
	{
		id: 12,
		title: 'Réfectoire des cordeliers',
		category: 'Website',
		thumb: require('@/assets/images/projects/refectoire-cropped.jpg'),
		img: require('@/assets/images/projects/refectoire.jpg'),
	},
	{
		id: 13,
		title: 'Speed painting : Barbossa',
		category: 'Art',
		thumb: require('@/assets/images/projects/barbossa-cropped.jpg'),
		img: require('@/assets/images/projects/barbossa.jpg'),
	},
	{
		id: 14,
		title: 'Acadamical drawing : Anatomy',
		category: 'Art',
		thumb: require('@/assets/images/projects/Tableau-cropped.jpg'),
		img: require('@/assets/images/projects/tableau.jpg'),
	},
	{
		id: 15,
		title: 'Créativ\'été',
		category: 'Website',
		thumb: require('@/assets/images/projects/creativite-cropped.jpg'),
		img: require('@/assets/images/projects/creativete.png'),
	},
	{
		id: 16,
		title: 'Photography : Red Panda',
		category: 'Art',
		thumb: require('@/assets/images/projects/pandaroux-cropped.jpg'),
		img: require('@/assets/images/projects/pandaroux.jpg'),
	},
	{
		id: 17,
		title: 'Mock-up : Tindzik',
		category: 'UI/UX Design',
		thumb: require('@/assets/images/projects/tindzik-cropped.jpg'),
		img: require('@/assets/images/projects/tindzikhome.jpg'),
	},
	{
		id: 18,
		title: 'Photography : Zebra',
		category: 'Art',
		thumb: require('@/assets/images/projects/zebra-cropped.jpg'),
		img: require('@/assets/images/projects/zèbre.jpg'),
	},
];

export default projects;
