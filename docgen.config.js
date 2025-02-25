module.exports = {
  componentsRoot: "src/components", // Path to your components
  components: "**/*.vue", // Pattern to match component files
  outDir: "docs/components", // Output directory for generated docs
  getDestFile: (componentPath, config) => {
    // Extract folder and filename without extension
    const parts = componentPath.split("/");
    const folderName = parts[parts.length - 2]; // Folder name (e.g., AppButton)
    const fileName = parts[parts.length - 1].replace(/\.\w+$/, ""); // File name without extension

    // Combine folder and filename (e.g., AppFormCheckbox.md)
    const combinedName =
      folderName +
      (fileName.toLowerCase() !== "index"
        ? fileName.charAt(0).toUpperCase() + fileName.slice(1)
        : "");

    return `${config.outDir}/${combinedName}.md`;
  },
  apiOptions: {
    jsx: false, // Set to true if you use JSX
  },
};
