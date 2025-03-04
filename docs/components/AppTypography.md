# Typography Component

The Typography component provides consistent text styling across the application.

## Display Variants

::: demo Display Typography
```vue
<template>
  <div class="space-y-4">
    <AppTypography variant="display-large">
      Display Large - 24px Medium (150% Line Height)
    </AppTypography>
    
    <AppTypography variant="display-medium">
      Display Medium - 18px Medium (145% Line Height)
    </AppTypography>
    
    <AppTypography variant="display-small">
      Display Small - 16px Medium (24px Line Height)
    </AppTypography>
    
    <AppTypography variant="display-xs">
      Display Extra Small - 14px Medium (20px Line Height)
    </AppTypography>
  </div>
</template>

<script setup>
// No script needed for this example
</script>
```
:::

## Header Variants

::: demo Header Typography
```vue
<template>
  <div class="space-y-4">
    <AppTypography variant="header-large">
      Header Large - 20px SemiBold (32px Line Height)
    </AppTypography>
    
    <AppTypography variant="header-medium">
      Header Medium - 18px SemiBold (145% Line Height)
    </AppTypography>
    
    <AppTypography variant="header-small">
      Header Small - 16px SemiBold (24px Line Height)
    </AppTypography>
    
    <AppTypography variant="header-xs">
      Header Extra Small - 14px SemiBold (20px Line Height)
    </AppTypography>
  </div>
</template>

<script setup>
// No script needed for this example
</script>
```
:::

## Body Variants

::: demo Body Typography
```vue
<template>
  <div class="space-y-4">
    <AppTypography variant="body">
      Body - 16px Regular (24px Line Height). Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </AppTypography>
    
    <AppTypography variant="body-small">
      Body Small - 14px Regular (20px Line Height, 1% Letter Spacing). Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </AppTypography>
  </div>
</template>

<script setup>
// No script needed for this example
</script>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | String | 'body' | Typography variant to use. Available variants: 'display-large', 'display-medium', 'display-small', 'display-xs', 'header-large', 'header-medium', 'header-small', 'header-xs', 'body', 'body-small' |
| tag | String | 'p' | HTML tag to render ('p', 'span', 'h1', etc.) |
| color | String | 'default' | Text color variant |

## Variants Specification

### Display Variants
- **Display Large**
  - Font: Poppins
  - Size: 24px
  - Weight: Medium
  - Line Height: 150%

- **Display Medium**
  - Font: Poppins
  - Size: 18px
  - Weight: Medium
  - Line Height: 145%

- **Display Small**
  - Font: Poppins
  - Size: 16px
  - Weight: Medium
  - Line Height: 24px

- **Display Extra Small**
  - Font: Poppins
  - Size: 14px
  - Weight: Medium
  - Line Height: 20px

### Header Variants
- **Header Large**
  - Font: Poppins
  - Size: 20px
  - Weight: SemiBold
  - Line Height: 32px

- **Header Medium**
  - Font: Poppins
  - Size: 18px
  - Weight: SemiBold
  - Line Height: 145%

- **Header Small**
  - Font: Poppins
  - Size: 16px
  - Weight: SemiBold
  - Line Height: 24px

- **Header Extra Small**
  - Font: Poppins
  - Size: 14px
  - Weight: SemiBold
  - Line Height: 20px

### Body Variants
- **Body**
  - Font: Poppins
  - Size: 16px
  - Weight: Regular
  - Line Height: 24px

- **Body Small**
  - Font: Poppins
  - Size: 14px
  - Weight: Regular
  - Line Height: 20px
  - Letter Spacing: 1%

## Examples

### Mixed Typography

::: demo Mixed Typography Example
```vue
<template>
  <div class="space-y-6">
    <div>
      <AppTypography variant="header-large">
        Product Features
      </AppTypography>
      <AppTypography variant="body" class="mt-2">
        Discover the amazing features that make our product stand out from the competition.
      </AppTypography>
    </div>
    
    <div>
      <AppTypography variant="header-medium">
        Easy Integration
      </AppTypography>
      <AppTypography variant="body-small" class="mt-2">
        Our API is designed to be developer-friendly, with comprehensive documentation and support.
      </AppTypography>
    </div>
    
    <div>
      <AppTypography variant="display-large">
        98% Customer Satisfaction
      </AppTypography>
      <AppTypography variant="display-small" class="mt-1">
        Based on recent surveys
      </AppTypography>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>
```
:::
