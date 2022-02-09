// src/components/layout.tsx
// The layout to use to render all content.

import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Layout } from 'antd'

import { Header } from './header'
import { Sidebar } from './sidebar'

import { pathPrefix } from '../../gatsby-config'

const { Sider, Content } = Layout

// The root layout to render stuff inside
// The sidebar, page content and header/navbar are all located within the root layout
export const RootLayout = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
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
					<div style={{ width: '100%', padding: 0, overflow: 'hidden' }}>
						<Helmet
							title={data.site.siteMetadata.title}
							meta={[
								{ name: 'description', content: 'Sample' },
								{ name: 'keywords', content: 'sample, something' },
							]}
						>
							<html lang="en" />
						</Helmet>
						<Header siteTitle={title} />

						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'auto 1fr auto',
								height: '100%',
							}}
						>
							<Sidebar />
							<Layout>
								<Content
									style={{
										background: '#fff',
										padding: 24,
										margin: 0,
									}}
								>
									{children}
								</Content>
							</Layout>
						</div>
						<Layout>
							<Sider
								width={200}
								style={{ background: '#fff', height: '100%' }}
							/>
						</Layout>
					</div>
				)
			}}
		/>
	)
}

export default RootLayout
