// src/templates/index.tsx
// The template to render a page.

import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { RootLayout as Layout } from '../components/layout'

export const PageTemplate = (content: {
	data: {
		mdx: {
			body: string
		}
	}
}) => {
	// Render the page's contents within the Layout tag
	return (
		<Layout>
			<MDXRenderer>{content.data.mdx.body}</MDXRenderer>
		</Layout>
	)
}

// The query needed to get the page data passed to the above component
export const pageQuery = graphql`
	query PageQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
		}
	}
`

export default PageTemplate
