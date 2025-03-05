# Card Component

The Card component is a flexible container that can hold various types of content including headers, media, and actions.

## Basic Usage

::: demo Basic Card Example
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
:::

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

::: demo Simple Card
```vue
<template>
  <AppCard>
    <p>Simple card with just content.</p>
  </AppCard>
</template>
```
:::

### Basic Card with Media

::: demo Media Card
```vue
<template>
  <AppCard>
    <template #media>
      <img
        src="https://picsum.photos/600/300"
        alt="Card media"
        class="w-full h-48 object-cover"
      />
    </template>
    <template #header>
      <h3 class="text-xl font-semibold">Media Card</h3>
    </template>
    <p class="text-gray-600">
      This card includes a media section at the top. The media section can contain images,
      videos, or any other media content you want to display.
    </p>
  </AppCard>
</template>
```
:::

### Different Elevations

::: demo Card Elevations
```vue
<template>
  <div class="space-y-4">
    <AppCard elevation="0">
      <p class="p-4">No elevation (flat)</p>
    </AppCard>
    <AppCard elevation="2">
      <p class="p-4">Medium elevation</p>
    </AppCard>
    <AppCard elevation="5">
      <p class="p-4">High elevation</p>
    </AppCard>
  </div>
</template>
```
:::

### Custom Styling

::: demo Custom Styled Card
```vue
<template>
  <AppCard
    customClass="bg-primary"
    headerClass="bg-primary-dark text-white"
    contentClass="text-white"
    footerClass="bg-primary-light"
  >
    <template #header>
      <h3 class="text-xl font-semibold p-4">Custom Styled Card</h3>
    </template>
    <p class="p-4">Content with custom styling applied through props.</p>
    <template #footer>
      <div class="flex justify-end p-4">
        <button class="text-white">Action</button>
      </div>
    </template>
  </AppCard>
</template>
```
:::

### Interactive Card

::: demo Interactive Card Example
```vue
<template>
  <AppCard class="hover:shadow-lg transition-shadow duration-300">
    <template #header>
      <div class="flex items-center space-x-4 p-4">
        <AppAvatar
          name="John Doe"
          size="40"
          bgColor="bg-blue-500"
          textColor="text-white"
        />
        <div>
          <h3 class="text-lg font-semibold">John Doe</h3>
          <p class="text-sm text-gray-500">Software Engineer</p>
        </div>
      </div>
    </template>
    <div class="p-4">
      <p class="text-gray-600">
        This is an example of an interactive card that combines multiple components
        and includes hover effects.
      </p>
    </div>
    <template #footer>
      <div class="flex justify-between items-center p-4 bg-gray-50">
        <AppChip variant="outlined" textColor="text-blue-500" borderColor="border-blue-500">
          Follow
        </AppChip>
        <button class="text-primary hover:text-primary-dark">
          View Profile
        </button>
      </div>
    </template>
  </AppCard>
</template>
```
:::
