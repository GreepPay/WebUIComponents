# Avatar Component

The Avatar component is used to represent a user with their image or initials.

## Basic Usage

```vue
<template>
  <AppAvatar
    src="https://example.com/avatar.jpg"
    name="John Doe"
    size="40"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | String | '' | Image source URL |
| alt | String | '' | Alternative text for the image |
| size | Number | 40 | Size of the avatar in pixels |
| shape | String | 'circle' | Shape of the avatar ('circle' or 'square') |
| name | String | '' | Name to generate initials from |
| bgColor | String | 'bg-gray-200' | Background color class (TailwindCSS) |
| textColor | String | 'text-gray-700' | Text color class (TailwindCSS) |

## Examples

### With Image

```vue
<template>
  <div class="flex space-x-4">
    <AppAvatar
      src="https://example.com/avatar1.jpg"
      name="John Doe"
      size="48"
    />
    <AppAvatar
      src="https://example.com/avatar2.jpg"
      name="Jane Smith"
      size="48"
      shape="square"
    />
  </div>
</template>
```

### With Initials

```vue
<template>
  <div class="flex space-x-4">
    <AppAvatar
      name="John Doe"
      size="48"
      bgColor="bg-blue-500"
      textColor="text-white"
    />
    <AppAvatar
      name="Jane Smith"
      size="48"
      shape="square"
      bgColor="bg-green-500"
      textColor="text-white"
    />
  </div>
</template>
```

### Different Sizes

```vue
<template>
  <div class="flex items-center space-x-4">
    <AppAvatar name="Small" size="32" />
    <AppAvatar name="Medium" size="48" />
    <AppAvatar name="Large" size="64" />
  </div>
</template>
```
