import { App } from "vue"
import "./styles/index.css"

import * as components from "./components"

const AppUI = {
  install(app: App) {
    // Auto import all components
    for (const componentKey in components) {
      app.use((components as any)[componentKey])
    }
  },
}

export default AppUI

// export all components as vue plugin
export * from "./components"

// export all composables
export * from "./composable"
