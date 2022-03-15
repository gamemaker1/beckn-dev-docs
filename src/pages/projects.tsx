// src/pages/projects.tsx
// The page that displays projects using the Beckn Protocol.

import * as React from 'react'
import { Link } from 'gatsby'
import { ProjectCard } from '../components/project-card'
import { StaticQuery, graphql } from 'gatsby'
import { Sidebar } from '../components/sidebar'
import { Header } from '../components/header'
import { Layout, Row, Col } from 'antd'

const { Sider, Content } = Layout

const createLinkToFile = (path: string): string =>
	path.replace(/\.mdx?$/, '').replace(/index$/, '')

const ProjectsPage = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<StaticQuery
			query={graphql`
				query ProjectsQuery {
					site {
						siteMetadata {
							title
						}
					}
					allDirectory(filter: { relativeDirectory: { eq: "projects" } }) {
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
						filter: { relativePath: { regex: "/projects/.*/index.md/" } }
					) {
						edges {
							node {
								id
								base
								relativeDirectory
								relativePath
								childMarkdownRemark {
									frontmatter {
										title
										description
									}
								}
							}
						}
					}
				}
			`}
			render={(data) => {
				// Get the title of the site so we can place it in the header
				const { title } = data.site.siteMetadata

				// Get all of the folders within the `content/projects` folder. Each sub-folder
				// within the main `content/projects` folder is a project.
				const folders = data.allDirectory.edges
				// Get the index page for each project
				const indexPages = data.allFile.edges

				// Turn the nodes into a nice project object with id, title, description
				// and link
				const projects = folders.map(({ node }) => {
					const id = node.id

					// Get the index page for the project, and then the title and description
					// from that page's frontmatter
					const indexPage = indexPages.find(
						({ node: child }) => node.relativePath === child.relativeDirectory
					)?.node
					const title = !indexPage?.childMarkdownRemark?.frontmatter?.title
						? node.base ?? node.name
						: indexPage.childMarkdownRemark.frontmatter.title
					const description =
						indexPage?.childMarkdownRemark?.frontmatter?.description

					return {
						id,
						title,
						description,
						link: `/${createLinkToFile(node.relativePath)}`,
					}
				})

				return (
					<div>
						<Header siteTitle={title} />
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'auto 1fr auto',
								height: '100%',
							}}
						>
							<Layout>
								<Content
									style={{
										background: '#fff',
										padding: 24,
										margin: 0,
									}}
								>
									<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
										{projects.map((project) => (
											<Col span={12} key={project.id}>
												<ProjectCard {...project} />
											</Col>
										))}
									</Row>
								</Content>
							</Layout>
						</div>
					</div>
				)
			}}
		/>
	)
}

export default ProjectsPage
