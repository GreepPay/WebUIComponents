# @greep/mobile-ui-components

This package provides UI components for the AppName application.

## Key Features

*   **Reusable UI Elements:** Offers a collection of pre-built, customizable UI components.
*   **Tailwind CSS:**  Leverages Tailwind CSS for styling, ensuring consistency and ease of customization.
*   **Vue.js Based:** Built using Vue.js 3 for a reactive and component-based architecture.
*   **Documentation:**  Includes documentation using VitePress for easy understanding and usage.

## Getting Started

### Installation

```bash
npm install @greep/mobile-ui-components or add as ../file_path to your package.json
```

### Prerequisites

*   Vue.js (version 3.2.21 or higher)
*   Vue Router (version 4.2.0 or higher)
*   Node.js and npm (or yarn)

### Usage

1.  **Import the components:**

    ```javascript
    import { MyComponent } from '@app_name/ui-components';

    export default {
      components: {
        MyComponent
      },
      // ...
    }
    ```

2.  **Use the components in your Vue templates:**

    ```vue
    <template>
      <MyComponent />
    </template>
    ```

## Development

### Available Scripts

*   **`build:style`**:  Builds and minifies the Tailwind CSS styles.
*   **`build:style:watch`**:  Watches for changes in the CSS files and rebuilds the styles.
*   **`build:lib`**: Cleans the `dist` directory, builds the Vue components, and builds the styles.
*   **`publish:lib`**: Builds the library and publishes it to npm.
*   **`watch`**: Watches for changes in the code and rebuilds using webpack.
*   **`build`**:  Builds the library for production.
*   **`build:dev`**:  Builds the library in development mode.
*   **`build:prod`**: Builds the library for production with style minification.
*   **`serve`**:  Starts a development server using webpack.
*   **`docs:dev`**:  Starts the VitePress development server for the documentation.
*   **`docs:build`**:  Builds the VitePress documentation.
*   **`docs:preview`**:  Previews the built VitePress documentation.
*   **`docs:generate`**:  Generates documentation from Vue components using `vue-docgen`.

### Build Process

*   **Webpack:** Used for bundling the Vue components.
*   **Tailwind CSS:**  Used for styling.  Configuration is likely located in `tailwind.config.js` (though not explicitly shown in the package.json).
*   **`clean-css-cli`**: Used to minify the CSS after Tailwind builds it.

### Documentation

The documentation is located in the `docs` directory and built using VitePress.

To run the documentation locally:

```bash
npm run docs:dev
```

### Contributing

Please refer to the contributing guidelines (if available) before submitting pull requests.

### License

ISC (See the LICENSE file for more information).
