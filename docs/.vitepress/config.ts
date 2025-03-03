import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Greep Mobile UI Components',
  description: 'UI Components for Greep Mobile Apps',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' }
    ],
    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Avatar', link: '/components/AppAvatar' },
          { text: 'Button', link: '/components/AppButton' },
          { text: 'Card', link: '/components/AppCard' },
          { text: 'Chip', link: '/components/AppChip' },
          { text: 'Form Components', items: [
            { text: 'Checkbox', link: '/components/AppFormCheckbox' },
            { text: 'File Attachment', link: '/components/AppFormFileAttachment' },
            { text: 'Keyboard', link: '/components/AppFormKeyboard' },
            { text: 'OTP Input', link: '/components/AppFormOtpInput' },
            { text: 'Radio', link: '/components/AppFormRadio' },
            { text: 'Select', link: '/components/AppFormSelect' },
            { text: 'Text Field', link: '/components/AppFormTextField' },
            { text: 'Form Wrapper', link: '/components/AppFormWrapper' },
          ]},
          { text: 'Icon', link: '/components/AppIcon' },
          { text: 'Image Loader', link: '/components/AppImageLoader' },
          { text: 'Modal', link: '/components/AppModal' },
          { text: 'QR Code', link: '/components/AppQrCode' },
          { text: 'Transaction', link: '/components/AppTransaction' },
          { text: 'Typography', items: [
            { text: 'Header Text', link: '/components/AppTypographyHeaderText' },
            { text: 'Normal Text', link: '/components/AppTypographyNormalText' },
          ]},
        ]
      }
    ]
  }
})
