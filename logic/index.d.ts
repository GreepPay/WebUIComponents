declare module "../../logic" {
  export interface Logic {
    version: string;
    // Add other Logic interface properties here as needed
  }

  declare const Logic: Logic;
  export { Logic };
}

// Add this to ensure the file is treated as a module
export {};
