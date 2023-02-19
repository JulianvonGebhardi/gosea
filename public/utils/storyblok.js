import {
  storyblokInit,
  apiPlugin,
  storyblokEditable,
  loadStoryblokBridge,
} from '@storyblok/js';

const dev = import.meta.env.DEV;
const storyblokToken = import.meta.env.STORYBLOK_TOKEN;

const { storyblokApi } = storyblokInit({
  accessToken: storyblokToken,
  apiOptions: {
    cache: { type: 'memory' },
  },
  use: [apiPlugin],
});

export async function getLinks() {
  const { data } = await storyblokApi.get('cdn/links', {
    version: 'draft',
  });

  const links = data ? data.links : null;

  return links;
}

export async function getStory(slug) {
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  });

  const story = data ? data.story : null;

  return story;
}
