# Components

Welcome to the Greep UI Components library. Our components are designed with mobile-first principles, ensuring optimal performance and user experience on mobile devices.

## Core Components

### Layout Components
- [Card](/components/AppCard) - Flexible container for content
- [Modal](/components/AppModal) - Overlay dialog component

### Form Components
- [Text Field](/components/AppFormTextField) - Text input component
- [Select](/components/AppFormSelect) - Dropdown selection component
- [Checkbox](/components/AppFormCheckbox) - Checkbox input component
- [Radio](/components/AppFormRadio) - Radio button component
- [OTP Input](/components/AppFormOtpInput) - One-time password input
- [File Attachment](/components/AppFormFileAttachment) - File upload component
- [Form Wrapper](/components/AppFormWrapper) - Form container with validation

### UI Elements
- [Button](/components/AppButton) - Interactive button component
- [Avatar](/components/AppAvatar) - User avatar display
- [Chip](/components/AppChip) - Compact interactive elements
- [Icon](/components/AppIcon) - Icon component
- [Image Loader](/components/AppImageLoader) - Image loading component
- [QR Code](/components/AppQrCode) - QR code generator

### Typography
- [Header Text](/components/AppTypographyHeaderText) - Heading text styles
- [Normal Text](/components/AppTypographyNormalText) - Body text styles

### Data Display
- [Transaction](/components/AppTransaction) - Transaction display component

## Component Design Principles

Our components follow these key principles:

1. **Mobile-First**: Optimized for touch interactions and mobile screens
2. **Customizable**: Extensive prop system for styling and behavior customization
3. **Accessible**: Built with accessibility in mind
4. **Type-Safe**: Full TypeScript support
5. **Performance**: Lightweight and optimized for mobile devices

## Getting Started

To use a component, import it from the library:

```typescript
import { AppButton, AppTextField } from '@greep/mobile-ui-components'
```

Then use it in your template:

```vue
<template>
  <AppButton>Click Me</AppButton>
  <AppTextField
    label="Username"
    v-model="username"
  />
</template>
```

## Styling

All components use Tailwind CSS for styling and can be customized using Tailwind classes or our built-in prop system. For example:

```vue
<template>
  <AppButton
    customClass="bg-primary hover:bg-primary-dark"
  >
    Custom Styled Button
  </AppButton>
</template>
```

## Best Practices

1. Always provide labels and aria-labels for form components
2. Use appropriate color contrast for accessibility
3. Consider touch target sizes for mobile interactions
4. Utilize form validation through FormWrapper when applicable
5. Follow the component documentation for proper prop usage
