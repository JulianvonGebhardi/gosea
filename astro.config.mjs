import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

import svelte from '@astrojs/svelte';

const env = loadEnv('', process.cwd(), 'STORYBLOK');
// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        food: 'food',
      },
      apiOptions: {
        // Choose your Storyblok space region
        // 'eu' (default)
      },
    }),
  ],
});
