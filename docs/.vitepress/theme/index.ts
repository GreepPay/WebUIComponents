import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import * as components from '../../../src/components'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register all components globally
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
    // Register demo preview container
    app.component('demo-preview', AntDesignContainer)
  }
} satisfies Theme
