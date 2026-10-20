// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://vertx.app',
  // Fully static output; Vercel serves `dist/` directly with no serverless runtime.
  output: 'static',
  image: {
    // Screenshots are 1206x2622 @3x; let Astro emit optimized responsive variants.
    responsiveStyles: true,
  },
});
