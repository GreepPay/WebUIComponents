# Getting Started

Welcome to GreepPay UI Components! This library provides a collection of Vue 3 components designed for building modern and responsive web applications.

## Installation

You can install the package using npm or yarn:

```bash
# Using npm
npm install @greeppay/ui-components

# Using yarn
yarn add @greeppay/ui-components
```

## Setup

### 1. Add the Package

First, import and use the library in your Vue 3 application:

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import GreepPayUI from '@greeppay/ui-components'
import '@greeppay/ui-components/dist/style.css'

const app = createApp(App)
app.use(GreepPayUI)
app.mount('#app')
```

### 2. Configure TailwindCSS

The components are built with TailwindCSS. Add these configurations to your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@greeppay/ui-components/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10BB76',
        secondary: '#1F8F69',
        'blue-green': '#00A0B4',
        blue: '#009DE3',
        red: '#FA1919',
        purple: '#8E3BE0',
        orange: '#FFAA1F'
      }
    }
  },
  plugins: []
}
```

## Basic Usage

After installation, you can start using the components in your Vue files:

```vue
<template>
  <div>
    <AppButton variant="primary">Click Me</AppButton>
    
    <AppTextField
      v-model="text"
      label="Username"
      placeholder="Enter your username"
    />
    
    <AppCard>
      <template #title>Card Title</template>
      <p>Card content goes here</p>
    </AppCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
</script>
```

## Available Components

Here's a list of available components:

### General
- [Button](/components/AppButton) - Versatile button component with multiple variants
- [Card](/components/AppCard) - Container component for content organization
- [Chip](/components/AppChip) - Compact component for displaying status or tags
- [Icon](/components/AppIcon) - Icon component with customizable styles
- [Image Loader](/components/AppImageLoader) - Image component with loading states
- [Modal](/components/AppModal) - Dialog component for overlaying content
- [QR Code](/components/AppQrCode) - QR code generator component
- [Transaction](/components/AppTransaction) - Transaction display component
- [Typography](/components/AppTypography) - Text components with consistent styling

### Form Components
- [Checkbox](/components/form/checkbox) - Checkbox input component
- [File Attachment](/components/form/file-attachment) - File upload component
- [Keyboard](/components/form/keyboard) - Virtual keyboard component
- [OTP Input](/components/form/otp-input) - One-time password input component
- [Radio](/components/form/radio) - Radio button component
- [Select](/components/form/select) - Dropdown select component
- [Text Field](/components/form/text-field) - Text input component
- [Form Wrapper](/components/form/form-wrapper) - Form container with validation

## Browser Support

GreepPay UI Components supports modern browsers and is tested on the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please read our [Contributing Guide](https://github.com/greeppay/ui-components/blob/main/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/greeppay/ui-components/blob/main/LICENSE) file for details.
