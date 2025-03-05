import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import path from 'path'

export default defineConfig({
  title: "GreepPay UI Components",
  description: "Documentation for GreepPay UI Components",
  base: '/',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
        '~': path.resolve(__dirname, '../../')
      }
    },
    assetsInclude: ['**/*.svg']
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          {
            text: 'General',
            items: [
              { text: 'Avatar', link: '/components/AppAvatar' },
              { text: 'Button', link: '/components/AppButton' },
              { text: 'Card', link: '/components/AppCard' },
              { text: 'Chip', link: '/components/AppChip' },
              { text: 'Icon', link: '/components/AppIcon' },
              { text: 'Image Loader', link: '/components/AppImageLoader' },
              { text: 'Modal', link: '/components/AppModal' },
              { text: 'QR Code', link: '/components/AppQrCode' },
              { text: 'Transaction', link: '/components/AppTransaction' },
              { text: 'Typography', link: '/components/AppTypography' }
            ]
          },
          {
            text: 'Form',
            items: [
              { text: 'Checkbox', link: '/components/form/checkbox' },
              { text: 'File Attachment', link: '/components/form/file-attachment' },
              { text: 'Keyboard', link: '/components/form/keyboard' },
              { text: 'OTP Input', link: '/components/form/otp-input' },
              { text: 'Radio', link: '/components/form/radio' },
              { text: 'Select', link: '/components/form/select' },
              { text: 'Text Field', link: '/components/form/text-field' },
              { text: 'Form Wrapper', link: '/components/form/form-wrapper' }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/greep/ui-components' }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})
