# AppFileAttachment

> A file attachment component that provides a visually customizable way to handle file uploads.
> It supports single or multiple file selection, custom placeholders, icons, and allows for wrapping custom content around the file input.

## Props

| Prop name   | Description                                                                                                                                                                             | Type    | Values | Default       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------------- |
| placeholder | The placeholder text to display when no file is selected.                                                                                                                               | string  | -      | "Upload File" |
| iconName    | The name of the icon to display.                                                                                                                                                        | string  | -      | "upload"      |
| accept      | The accept attribute for the file input, specifying the allowed file types.                                                                                                             | string  | -      | "\*"          |
| modelValue  | The model value for the selected file(s).<br/>This is a two-way binding property. It can be a single `File` object or an array of `File` objects depending on `isMultiple`.             | -       | -      |               |
| isWrapper   | Determines whether to use the wrapper style. If true, the component will render without the default visual style,<br/> allowing you to provide your own content via the `content` slot. | boolean | -      | false         |
| isMultiple  | Determines whether multiple files can be selected.                                                                                                                                      | boolean | -      | false         |

## Events

| Event name          | Properties                                                                                                                                                       | Description                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| update:modelValue   | **value** `File \| File[]` - The selected file(s). If `isMultiple` is true, it will be an array of `File` objects; otherwise, it will be a single `File` object. | Emitted when the file(s) are selected.                                                                                    |
| update:localFileUrl | **url** `string` - The local file URL as a string.                                                                                                               | Emitted when a single file is selected (when `isMultiple` is false).<br/>Provides a local file URL for preview purposes.  |
| update:base64Data   | **data** `string` - The base64 data URL representing the file content.                                                                                           | Emitted when a single file is selected (when `isMultiple` is false).<br/> Provides the file content as a base64 data URL. |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| content | content     |          |

---
