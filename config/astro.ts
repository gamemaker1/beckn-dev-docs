// Config/astro.ts
// Astro configuration file

import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
	// The `source/` folder contains the source code.
	srcDir: 'source/',
	// Enable Preact to support Preact JSX components.
	integrations: [preact()],
})
