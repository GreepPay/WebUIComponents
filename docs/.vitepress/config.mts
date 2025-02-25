import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Greep UI Components",
  description: "A doc for Mobile UI Components",
  themeConfig: {
    sidebar: [
      {
        text: "Components",
        items: [
          { text: "Button", link: "/components/AppButton" },
          {
            text: "Forms",
            items: [
              { text: "Checkbox", link: "/components/AppFormCheckbox" },
              {
                text: "File Attachment",
                link: "/components/AppFormFileAttachment",
              },
              { text: "Keyboard", link: "/components/AppFormKeyboard" },
              { text: "OTP Input", link: "/components/AppFormOtpInput" },
              { text: "Radio", link: "/components/AppFormRadio" },
              { text: "Select", link: "/components/AppFormSelect" },
              { text: "TextField", link: "/components/AppFormTextField" },
              { text: "Wrapper", link: "/components/AppFormWrapper" },
            ],
          },
          { text: "Icon", link: "/components/AppIcon" },
          { text: "Image Loader", link: "/components/AppImageLoader" },
          { text: "Modal", link: "/components/AppModal" },
          { text: "QR Code", link: "/components/AppQrCode" },
          { text: "Transaction", link: "/components/AppTransaction" },
          {
            text: "Typography",
            items: [
              {
                text: "Header Text",
                link: "/components/AppTypographyHeaderText",
              },
              {
                text: "Body Text",
                link: "/components/AppTypographyNormalText",
              },
            ],
          },
        ],
      },
    ],
  },
});
