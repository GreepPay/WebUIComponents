# Avatar Component

The Avatar component is used to represent a user with their image or initials.

## Basic Usage

::: demo Basic Avatar Examples
```vue
<template>
  <div class="flex space-x-4">
    <AppAvatar
      src="https://i.pravatar.cc/150?img=1"
      name="John Doe"
      size="40"
    />
    <AppAvatar
      name="Jane Smith"
      size="40"
      bgColor="bg-blue-500"
      textColor="text-white"
    />
  </div>
</template>
```
:::

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

::: demo Avatar with Image
```vue
<template>
  <div class="flex space-x-4">
    <AppAvatar
      src="https://i.pravatar.cc/150?img=2"
      name="John Doe"
      size="48"
    />
    <AppAvatar
      src="https://i.pravatar.cc/150?img=3"
      name="Jane Smith"
      size="48"
      shape="square"
    />
  </div>
</template>
```
:::

### With Initials

::: demo Avatar with Initials
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
:::

### Different Sizes

::: demo Avatar Sizes
```vue
<template>
  <div class="flex items-center space-x-4">
    <AppAvatar name="Small" size="32" bgColor="bg-purple-500" textColor="text-white" />
    <AppAvatar name="Medium" size="48" bgColor="bg-pink-500" textColor="text-white" />
    <AppAvatar name="Large" size="64" bgColor="bg-indigo-500" textColor="text-white" />
  </div>
</template>
```
:::

### Different Shapes

::: demo Avatar Shapes
```vue
<template>
  <div class="flex space-x-4">
    <AppAvatar
      name="Circle"
      size="48"
      shape="circle"
      bgColor="bg-teal-500"
      textColor="text-white"
    />
    <AppAvatar
      name="Square"
      size="48"
      shape="square"
      bgColor="bg-orange-500"
      textColor="text-white"
    />
  </div>
</template>
```
:::
