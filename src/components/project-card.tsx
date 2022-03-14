import { Card } from 'antd'
import React, { Component } from 'react'
import { FileSearchOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link } from 'gatsby'

export const ProjectCard = (props: any) => {
	const { title, description } = props
	const createLinkToFile = (path: string): string =>
		`/projects/${path.toLowerCase().replace(/\s/g, '-')}`
	return (
		<Card>
			<FileSearchOutlined />
			<h2>{title}</h2>
			<div>{description}</div>
			<Link to={createLinkToFile(title)}>
				<Button type="link">
					Continue Reading <ArrowRightOutlined />
				</Button>
			</Link>
		</Card>
	)
}

const styles = {}
