// src/components/sidebar.tsx
// The sidebar component that allows a reader to pick a certain page.

import 'antd/lib/menu/style/css'

import * as React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Affix, Menu } from 'antd'

import { pathPrefix } from '../../gatsby-config'

// An object representing a page to show on the sidebar
interface PageMenuItem {
	id: string
	name: string
	link: string
}
// An object representing a collapsible section of pages to show on the sidebar
interface SectionMenuItem {
	id: string
	name: string
	pages: MenuItem[]
}
// The menu is a list of items - either pages or sections
type MenuItem = PageMenuItem | SectionMenuItem

const createLinkToFile = (path: string): string =>
	path.replace(/\.mdx?$/, '').replace(/index$/, '')
const isPageMenuItem = (item: MenuItem): item is PageMenuItem =>
	typeof (item as PageMenuItem).link === 'string'

// A function to render a menu item depending on its type
const renderMenuItem = (item: MenuItem, id: string) => {
	if (isPageMenuItem(item)) {
		// If it is a link to a page, just render it as a link
		return (
			<Menu.Item key={item.link}>
				<Link to={item.link}>
					<div>{item.title ?? item.name}</div>
				</Link>
			</Menu.Item>
		)
	} else {
		// Else show a collapsible submenu, with all the subitems inside it
		return (
			<Menu.SubMenu
				key={id}
				title={<span style={{ fontWeight: 900 }}>{item.name}</span>}
			>
				{item.pages &&
					item.pages.map((item, index) =>
						renderMenuItem(item, id + '.' + item.id)
					)}
			</Menu.SubMenu>
		)
	}
}

// The sidebar
export const Sidebar = () => (
	<StaticQuery
		// Make a query to retrieve all files and subdirectories in the `content/` folder
		query={graphql`
			query MyQuery {
				allDirectory {
					edges {
						node {
							id
							base
							relativeDirectory
							relativePath
						}
					}
				}
				allFile(
					sort: {
						order: ASC
						fields: childMarkdownRemark___frontmatter___order
					}
				) {
					edges {
						node {
							id
							name
							relativeDirectory
							relativePath
							childMarkdownRemark {
								frontmatter {
									title
									order
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => {
			// Get the section the user is viewing currently
			// It should be either 'overview', 'reference', 'build-with-beckn' or 'projects'
			const currentPath =
				typeof window !== 'undefined'
					? window.location.pathname.replace(pathPrefix, '')
					: '/'
			const currentSection = currentPath.split('/')[1]

			// Get all of the files and subdirectories within the section
			// For example, if the view is viewing the 'reference' section, get everything
			// from the `content/reference` folder
			const pages = [
				...data.allDirectory.edges.filter(
					({ node }) => node.relativeDirectory === currentSection
				),
				...data.allFile.edges.filter(
					({ node }) => node.relativeDirectory === currentSection
				),
			]

			// Turn that into a nice menu
			const menuItems = pages.map(({ node }) => {
				// Check if any files or subdirs are located inside this directory (if it is a
				// file, the array will be empty)
				const subItems = [
					...data.allDirectory.edges.filter(
						({ node: child }) => child.relativeDirectory === node.relativePath
					),
					...data.allFile.edges.filter(
						({ node: child }) => child.relativeDirectory === node.relativePath
					),
				]

				if (subItems.length !== 0) {
					// If there are sub items, return a `SectionMenuItem`
					return {
						id: node.id,
						name:
							node?.childMarkdownRemark?.frontmatter?.title ??
							node.base ??
							node.name,
						items: subItems.map(({ node: child }) => {
							return {
								id: child.id,
								name: child.base ?? child.name,
								link: `/${createLinkToFile(child.relativePath)}`,
							}
						}),
					}
				}

				// Else return a `PageMenuItem`
				return {
					id: node.id,
					title: node.childMarkdownRemark.frontmatter.title,
					name: node.base ?? node.name,
					link: `/${createLinkToFile(node.relativePath)}`,
				}
			})

			// Start out with all the sections un-collapsed
			const defaultOpenKeys = menuItems.map((item) => item.id)

			return (
				<Affix>
					<Menu
						mode="inline"
						style={{ minWidth: 250, height: '100%', borderRight: 0 }}
						defaultOpenKeys={defaultOpenKeys}
						selectedKeys={[currentPath]}
					>
						{menuItems.map((item) => renderMenuItem(item, item.id))}
					</Menu>
				</Affix>
			)
		}}
	/>
)
