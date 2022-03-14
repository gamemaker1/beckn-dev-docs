import * as React from 'react'
import { Link } from 'gatsby'
import { ProjectCard } from '../components/project-card'
import { StaticQuery, graphql } from 'gatsby'
import { Sidebar } from '../components/sidebar'
import { Header } from '../components/header'
import { Layout, Row, Col } from 'antd'

const { Sider, Content } = Layout

const ProjectsPage = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<StaticQuery
			query={graphql`
				query siteTitleQueryAndSiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={(data) => {
				const projects = [
					{
						icon: ' ',
						title: 'Beck-in-a-box BAP',
						description:
							'Beckn In A Box BAP Beckn In A Box BAP This is a reference implementation of a BAP. A user can search for items, view catalogs of BPPs, place an order and view order updates',
					},
					{
						icon: '',
						title: 'Transit Ticketing System',
						description:
							'Transit Ticketing System The transit ticketing system is a BPP which manages inventory, issues tickets and validates tickets issued for a transit system. Issuing tickets and validating tickets is done via a mobile application that',
					},
				]
				const { title } = data.site.siteMetadata
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
							{/* <Sidebar /> */}

							<Layout>
								<Content
									style={{
										background: '#fff',
										padding: 24,
										margin: 0,
									}}
								>
									<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
										{projects.map((project, index) => (
											<Col span={12}>
												<ProjectCard {...project} key={index} />
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
