import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify/functions';
import svelte from '@astrojs/svelte';

const env = loadEnv('', process.cwd(), 'STORYBLOK');
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    svelte(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: true,
      components: {
        food: 'food',
      },
      apiOptions: {
        // Choose your Storyblok space region
        // 'eu' (default)
        //
      },
    }),
  ],
});
