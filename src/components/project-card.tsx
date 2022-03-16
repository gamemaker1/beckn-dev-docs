// src/components/project-card.tsx
// The card showing a project on the Projects page.

import * as React from 'react'

import { Card, Button } from 'antd'
import { Link } from 'gatsby'
import { FileSearchOutlined, ArrowRightOutlined } from '@ant-design/icons'

// An object representing a project to render
interface Project {
	id: string
	title: string
	description?: string
	link: string
}

export const ProjectCard = (project: Project) => {
	return (
		<Card>
			<FileSearchOutlined />
			<h2>{project.title}</h2>
			<div>{project.description}</div>
			<Link to={project.link}>
				<Button type="link" style={{ float: 'right' }}>
					Continue Reading <ArrowRightOutlined />
				</Button>
			</Link>
		</Card>
	)
}
