import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify/functions';
import svelte from '@astrojs/svelte';

const env = loadEnv('', process.cwd(), 'STORYBLOK');
// https://astro.build/config
export default defineConfig({
  output: env.PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: env.PUBLIC_ENV === 'preview' ? netlify() : undefined,
  integrations: [
    svelte(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: env.PUBLIC_ENV !== 'production',
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
