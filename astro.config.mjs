import { defineConfig } from "astro/config";
import icon from "astro-icon";
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: vercel(),
});
