// Source/components/table-of-contents.astro
// Scrape a table of contents from the current page, and display it

import type { FunctionalComponent } from 'preact'

import { h, Fragment } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'

const TableOfContents: FunctionalComponent<{ headers: any[] }> = ({
	headers = [],
}) => {
	const itemOffsets = useRef([])
	const [activeId, setActiveId] = useState<string>(undefined)

	useEffect(() => {
		const getItemOffsets = () => {
			// Find all the headings on the page, within the `article` element
			const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)')
			// Store them in an array
			itemOffsets.current = Array.from(titles).map((title) => ({
				id: title.id,
				topOffset: title.getBoundingClientRect().top + window.scrollY,
			}))
		}

		getItemOffsets()

		// Remember to refresh the scroll offsets for the headings when the page
		// resizes
		window.addEventListener('resize', getItemOffsets)
		return () => {
			window.removeEventListener('resize', getItemOffsets)
		}
	}, [])

	return (
		<>
			<h2 class="heading">On this page</h2>
			<ul>
				<li
					class={`header-link depth-2 ${
						activeId === 'overview' ? 'active' : ''
					}`.trim()}
				>
					<a href="#overview">Overview</a>
				</li>
				{headers
					.filter(({ depth }) => depth > 1 && depth < 4)
					.map((header) => (
						<li
							class={`header-link depth-${header.depth} ${
								activeId === header.slug ? 'active' : ''
							}`.trim()}
						>
							<a href={`#${header.slug}`}>{header.text}</a>
						</li>
					))}
			</ul>
		</>
	)
}

export default TableOfContents
