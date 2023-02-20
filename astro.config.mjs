import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify/functions';
import svelte from '@astrojs/svelte';
//INFO

//WICHTIG für Storyblok
// third parameter filters the prefix like ony env staring with STORYBLOK
let env = loadEnv('', process.cwd(), '');
if (!env) env = process.env;
// https://astro.build/config
export default defineConfig({
  output: env.PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: env.PUBLIC_ENV === 'preview' ? netlify() : undefined,
  integrations: [
    svelte({
      kit: {
        alias: {
          '@storyblok/svelte': './node_modules/@storyblok/svelte',
        },
      },
    }),
    storyblok({
      // use: [apiPlugin], // added for svelte life editing //INFO
      accessToken: env.STORYBLOK_TOKEN,
      bridge: env.PUBLIC_ENV !== 'production',
      components: {
        food: 'storyblok/Food',
        blogPost: 'storyblok/BlogPost',
      },
      // apiOptions: {
      // Choose your Storyblok space region
      // 'eu' (default)
      //
      //},
    }),
  ],
});
