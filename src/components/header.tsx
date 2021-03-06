// src/components/header.tsx
// The header component on each page

import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Button, Menu, Row, Col } from 'antd'

// The header/navbar to show at the top of the site
export const Header = (props: { siteTitle: string }) => {
	const { siteTitle } = props
	return (
		<Row justify="space-between">
			<Col>
				<Menu mode="horizontal">
					<Menu.Item>
						<Link to="/">{siteTitle}</Link>
					</Menu.Item>
				</Menu>
			</Col>
			<Col>
				<Menu mode="horizontal">
					<Menu.Item>
						<Link to="/overview">Overview</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/reference">Specification and API</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/build-with-beckn">Build with Beckn</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/projects">Projects</Link>
					</Menu.Item>
					<Menu.Item>
						<a href="https://github.com/beckn" target="_blank">
							GitHub
						</a>
					</Menu.Item>
				</Menu>
			</Col>
		</Row>
	)
}
