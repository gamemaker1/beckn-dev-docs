// src/pges/build-with-beckn.tsx
// The advanced search pge that allows readers to find content based on language, area, spec version, tags, etc.

import * as React from 'react'

import { graphql, StaticQuery, Link } from 'gatsby'
import { Menu, Select, Row, Col } from 'antd'

import { createLinkToFile } from '../gatsby/util'

// The page
export const BuildWithBecknPage = () => (
	<StaticQuery
		// Make a query to retrieve all files and subdirectories in the
		// `content/examples` folder
		query={graphql`
			query ExamplesQuery {
				allFile {
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
									layer
									domain
									actor
									api
									language
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => {
			// Get all of the files and subdirectories within the `content/examples`
			// folder
			const pages = [
				...data.allFile.edges.filter(
					({ node }) => node.relativeDirectory === 'examples'
				),
			]

			// The tags a page can be tagged with via its frontmatter
			const tags = {
				layer: [],
				domain: [],
				actor: [],
				api: [],
				language: [],
			}

			// Turn that into a list of pages tagged with certain info
			const examples = pages.map(({ node }) => {
				// Check if any files or subdirs are located inside this directory (if it is a
				// file, the array will be empty)
				const subItems = [
					...data.allFile.edges.filter(
						({ node: child }) => child.relativeDirectory === node.relativePath
					),
				]
				const nodeId = node.id
				const frontmatter = node.childMarkdownRemark?.frontmatter
				const pageTitle = frontmatter?.title ?? node.base ?? node.name

				if (subItems.length !== 0) {
					// If this node is a folder, skip it
					return
				}

				// Update the possible values the user could filter by
				for (const tag of Object.keys(tags))
					if (frontmatter[tag]) tags[tag].push(frontmatter[tag])

				// Else return a `PageData` object
				return {
					id: nodeId,
					name: pageTitle,
					link: `/${createLinkToFile(node.relativePath)}`,
					tags: {
						layer: frontmatter?.layer,
						domain: frontmatter?.domain,
						actor: frontmatter?.actor,
						api: frontmatter?.api,
						language: frontmatter?.language,
					},
				}
			})

			// The list of examples to display when a filter is applied
			const [filteredExamples, setFilteredExamples] = React.useState(examples)

			return (
				<div>
					<Row justify="space-between" style={{ align: 'center', margin: 100 }}>
						{Object.keys(tags).map((tag) => {
							return (
								<Col>
									<Select
										showSearch
										placeholder={`Filter by ${tag}`}
										optionFilterProp="children"
										onChange={(option) =>
											setFilteredExamples(
												filteredExamples.filter(
													(page) => page.tags[tag] === option
												)
											)
										}
										filterOption={(input, option) =>
											option.children
												.toLowerCase()
												.indexOf(input.toLowerCase()) >= 0
										}
									>
										{tags[tag].map((option) => (
											<Select.Option value={option}>{option}</Select.Option>
										))}
									</Select>
								</Col>
							)
						})}
					</Row>
					<Row justify="space-between" style={{ align: 'center', margin: 100 }}>
						<Col>
							{filteredExamples.map((page) => {
								return (
									<Row>
										<Link to={page.link}>
											<div>{page.name}</div>
										</Link>
									</Row>
								)
							})}
						</Col>
					</Row>
				</div>
			)
		}}
	/>
)

export default BuildWithBecknPage
