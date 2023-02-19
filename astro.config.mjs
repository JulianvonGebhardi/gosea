import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
//import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify/functions';
import svelte from '@astrojs/svelte';

//WICHTIG für Storyblok
// env = loadEnv('', process.cwd(), 'STORYBLOK');
// DOES NOT WORK FOR SOME REASONs

// https://astro.build/config
export default defineConfig({
  output: process.env.PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: process.env.PUBLIC_ENV === 'preview' ? netlify() : undefined,
  integrations: [
    svelte(),
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      bridge: process.env.PUBLIC_ENV !== 'production',
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
