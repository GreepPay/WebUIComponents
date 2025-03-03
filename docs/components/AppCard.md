# Card Component

The Card component is a flexible container that can hold various types of content including headers, media, and actions.

## Basic Usage

```vue
<template>
  <AppCard>
    <template #header>
      <h3 class="text-xl font-semibold">Card Title</h3>
    </template>
    
    <p>This is the main content of the card.</p>
    
    <template #footer>
      <div class="flex justify-end">
        <button class="text-primary">Action</button>
      </div>
    </template>
  </AppCard>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| elevation | Number | 1 | Shadow elevation level (0-5) |
| customClass | String | '' | Custom class for the card container |
| headerClass | String | '' | Custom class for the header section |
| contentClass | String | '' | Custom class for the content section |
| footerClass | String | '' | Custom class for the footer section |

## Examples

### Basic Card

```vue
<template>
  <AppCard>
    <p>Simple card with just content.</p>
  </AppCard>
</template>
```

### Card with Media

```vue
<template>
  <AppCard>
    <template #media>
      <img
        src="https://example.com/image.jpg"
        alt="Card media"
        class="w-full h-48 object-cover"
      />
    </template>
    <template #header>
      <h3 class="text-xl font-semibold">Media Card</h3>
    </template>
    <p>Card content with media.</p>
  </AppCard>
</template>
```

### Different Elevations

```vue
<template>
  <div class="space-y-4">
    <AppCard elevation="0">
      <p>No elevation</p>
    </AppCard>
    <AppCard elevation="2">
      <p>Medium elevation</p>
    </AppCard>
    <AppCard elevation="5">
      <p>High elevation</p>
    </AppCard>
  </div>
</template>
```

### Custom Styling

```vue
<template>
  <AppCard
    customClass="bg-primary"
    headerClass="bg-primary-dark text-white"
    contentClass="text-white"
    footerClass="bg-primary-light"
  >
    <template #header>
      <h3 class="text-xl font-semibold">Custom Styled Card</h3>
    </template>
    <p>Content with custom styling.</p>
    <template #footer>
      <div class="flex justify-end">
        <button class="text-white">Action</button>
      </div>
    </template>
  </AppCard>
</template>
```
