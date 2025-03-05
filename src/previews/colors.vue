<template>
  <div class="space-y-8">
    <!-- Color System -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">Color System</h3>
      
      <!-- Primary Colors -->
      <div class="space-y-2">
        <h4 class="font-medium">Primary Colors</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="space-y-2">
            <div class="h-16 w-full bg-primary rounded-lg"></div>
            <p class="text-sm">Primary (Green)<br/>#10BB76</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-black rounded-lg"></div>
            <p class="text-sm">Black<br/>#0A141E</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-white border rounded-lg"></div>
            <p class="text-sm">White<br/>#FFFFFF</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-darkGreen rounded-lg"></div>
            <p class="text-sm">Dark Green<br/>#1F8F69</p>
          </div>
        </div>
      </div>

      <!-- Grays -->
      <div class="space-y-2">
        <h4 class="font-medium">Grays</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="space-y-2">
            <div class="h-16 w-full bg-gray-one rounded-lg"></div>
            <p class="text-sm">Gray One<br/>#1F8F69</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-gray-two rounded-lg"></div>
            <p class="text-sm">Gray Two<br/>#616161</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-light-gray-one rounded-lg"></div>
            <p class="text-sm">Light Gray One<br/>#F0F3F6</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-light-gray-two rounded-lg"></div>
            <p class="text-sm">Light Gray Two<br/>#E0E2E4</p>
          </div>
        </div>
      </div>

      <!-- Accent Colors -->
      <div class="space-y-2">
        <h4 class="font-medium">Accent Colors</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="space-y-2">
            <div class="h-16 w-full bg-blue-green rounded-lg"></div>
            <p class="text-sm">Blue Green<br/>#00A0B4</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-blue rounded-lg"></div>
            <p class="text-sm">Blue<br/>#009DE3</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-purple rounded-lg"></div>
            <p class="text-sm">Purple<br/>#8E3BE0</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-orange rounded-lg"></div>
            <p class="text-sm">Orange<br/>#FFAA1F</p>
          </div>
        </div>
      </div>

      <!-- State Colors -->
      <div class="space-y-2">
        <h4 class="font-medium">State Colors</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="space-y-2">
            <div class="h-16 w-full bg-green rounded-lg"></div>
            <p class="text-sm">Success<br/>#10BB76</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-red rounded-lg"></div>
            <p class="text-sm">Error<br/>#FA1919</p>
          </div>
          <div class="space-y-2">
            <div class="h-16 w-full bg-orange rounded-lg"></div>
            <p class="text-sm">Warning<br/>#FFAA1F</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tailwind Configuration -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">Tailwind Configuration</h3>
      <div class="bg-light-gray-one rounded-lg p-4">
        <pre class="text-sm">
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        green: "#10BB76",
        primary: "#10BB76",
        black: "#0A141E",
        white: "#ffffff",
        darkGreen: "#1F8F69",
        "gray-one": "#1F8F69",
        "gray-two": "#616161",
        "light-gray-one": "#F0F3F6",
        "light-gray-two": "#E0E2E4",
        "blue-green": "#00A0B4",
        blue: "#009DE3",
        red: "#FA1919",
        purple: "#8E3BE0",
        orange: "#FFAA1F"
      }
    }
  }
}</pre>
      </div>

      <!-- Usage Examples -->
      <div class="space-y-2">
        <h4 class="font-medium">Usage Examples</h4>
        <div class="bg-light-gray-one rounded-lg p-4">
          <pre class="text-sm">
// Text Colors
text-primary    // Primary green text
text-red        // Error text
text-green      // Success text

// Background Colors
bg-primary      // Primary green background
bg-light-gray-one  // Light gray background
bg-white        // White background

// Border Colors
border-gray-two  // Gray border
border-red       // Error border</pre>
        </div>
      </div>
    </section>
  </div>
</template>
