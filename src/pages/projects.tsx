import * as React from 'react'
import { Link } from 'gatsby'
import { PostCard } from '../components/post-card'
import { StaticQuery, graphql } from 'gatsby'
import { Sidebar } from '../components/sidebar'
import { Header } from '../components/header'
import { Layout } from 'antd'

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
									<PostCard />
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
