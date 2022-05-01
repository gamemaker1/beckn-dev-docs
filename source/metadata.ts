// Source/metadata.ts
// Website metadata

// Site details
export const siteDetails = {
	title: 'Beckn Developer Documentation',
	description:
		'Guides, Tutorials and Schema/API Reference for the Beckn Protocol',
	defaultLanguage: 'en_IN',
	logo: {
		src: '/assets/logo.png',
		alt: 'Beckn',
	},
	twitter: 'becknprotocol',
	github: {
		repo: 'gamemaker1/beckn-dev-docs',
		branch: 'astro',
		path: 'source/pages',
	},
	community: {
		discord: 'https://discord.gg/ejeMtuG2Gs',
	},
}

// A list of projects to show on the projects page
export const projects = [
	{
		title: 'Beckn In A Box BAP',
		description: 'A reference implementation of a Beckn Application (BAP).',
		image: '/assets/content/beckn-in-a-box-bap-cover.png',
		link: 'projects/beckn-in-a-box-bap',
	},
	{
		title: 'Transit Ticketing System',
		description:
			'The transit ticketing system is a BPP which manages inventory, issues tickets and validates tickets issued for a transit system.',
		image: '/assets/content/transit-ticketing-system-cover.png',
		link: 'projects/transit-ticketing-system',
	},
]

// A list of pages to show on the sidebar
export const sidebar = [
	{ title: 'Overview', header: true },
	{ title: 'Introduction to Beckn', link: 'overview/introduction-to-beckn' },

	{ title: 'Core APIs', header: true },
	{ title: 'search', link: 'reference/core/api/search' },
	{ title: 'on_search', link: 'reference/core/api/on-search' },

	{ title: 'Core Schemas', header: true },
	{ title: 'Catalog', link: 'reference/core/schemas/catalog' },
	{ title: 'User Intent', link: 'reference/core/schemas/user-intent' },

	// Includes the projects at the very end
	{ title: 'Projects', header: true },
	...projects,
]
