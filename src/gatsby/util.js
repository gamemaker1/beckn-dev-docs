// gatsby/util.js
// Utility functions for content processing work.

// Remove the trailing slash in the path
const replacePath = (path) => (path === `/` ? path : path.replace(/\/$/, ``))

// Create a link to a file (relative to domain)
const createLinkToFile = (path) =>
	path.replace(/\.mdx?$/, '').replace(/index$/, '')

module.exports = { replacePath, createLinkToFile }
