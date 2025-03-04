# File Attachment Component

The File Attachment component allows users to upload files with preview support.

## Basic Usage

::: demo Basic File Attachment
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <fileAttachment
        v-model="files"
        label="Upload Documents"
        accept="image/*,.pdf"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const files = ref([])
</script>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | Array | [] | v-model binding for uploaded files |
| label | String | '' | Label text for the upload area |
| accept | String | '*' | Accepted file types (e.g., 'image/*,.pdf') |
| maxSize | Number | 5 | Maximum file size in MB |
| maxFiles | Number | 5 | Maximum number of files allowed |
| disabled | Boolean | false | Whether the upload is disabled |
| error | String | '' | Error message to display |

## Examples

### With File Preview

::: demo File Attachment with Preview
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <fileAttachment
        v-model="files"
        label="Upload Images"
        accept="image/*"
        :maxFiles="3"
        :maxSize="2"
      />
      <div v-if="files.length" class="mt-4">
        <h4 class="text-sm font-medium mb-2">Selected Files:</h4>
        <ul class="space-y-2">
          <li v-for="file in files" :key="file.name">
            {{ file.name }} ({{ formatFileSize(file.size) }})
          </li>
        </ul>
      </div>
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const files = ref([])

const formatFileSize = (bytes) => {
  return `${(bytes / 1024).toFixed(1)}KB`
}
</script>
```
:::

### With Validation

::: demo File Attachment with Validation
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <fileAttachment
        v-model="files"
        label="Upload PDF Documents"
        accept=".pdf"
        :maxSize="1"
        :maxFiles="2"
        :error="error"
        @error="handleError"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const files = ref([])
const error = ref('')

const handleError = (err) => {
  error.value = err
}
</script>
```
:::

### Drag and Drop

::: demo Drag and Drop File Upload
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <fileAttachment
        v-model="files"
        label="Drag files here or click to upload"
        accept="image/*,.pdf,.doc,.docx"
        :maxFiles="5"
        :maxSize="10"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const files = ref([])
</script>
```
:::
