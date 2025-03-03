import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import * as components from '../../../src/components'
import './custom.css'

// Import your components
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register all components globally
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
} satisfies Theme
