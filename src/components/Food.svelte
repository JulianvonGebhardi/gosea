<script>
  import { storyblokEditable } from '@storyblok/svelte';
  import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    useStoryblokBridge(story.id, (newStory) => (story = newStory));
  });

  export let story = {};

  let { title, description, images, options, tags } = story.content;

  function changeTitle(add) {
    title += add;
  }
</script>

{#if story.content}
  <StoryblokComponent blok={story.content} />
{/if}

{#key title}
  <section
    use:storyblokEditable={story}
    class="is-relative section pt-24 py-40-desktop"
  >
    <h2 on:click={() => changeTitle('!')}>{title}</h2>
    <p>{description}</p>
    <p>{tags}</p>
    <input type="text" bind:value={title} />
    <img
      class="image is-hidden-mobile is-hidden-tablet-only is-absolute is-top-0 is-left-0 is-fullheight has-mw-md has-mw-xl-desktop has-mw-3xl-widescreen clip-path-right-top"
      style="object-fit: cover;"
      src={images[0].filename}
      alt=""
    /><img
      class="image is-hidden-desktop mb-16"
      style="object-fit: cover;"
      src={images[0].filename}
      alt=""
    />
    <div class="container">
      <div class="has-mw-md mx-auto mr-0-desktop">
        <h1 class="title is-size-3 has-leading-3 has-text-primary mb-8">
          Lorem ipsum
        </h1>
        <div class="is-flex mb-8">
          <div class="is-flex-shrink-0">
            <svg
              width="26"
              height="21"
              viewBox="0 0 26 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.8075 15.5254L23.3675 0.965393L26 3.59789L8.8075 20.8229L0 12.0479L2.665 9.38289L8.8075 15.5254Z"
                fill="#3C74F9"
              /></svg
            >
          </div>
          <div class="ml-4">
            <h3
              class="is-size-5 has-leading-4 has-text-primary has-text-weight-semibold mb-2"
            >
              Quick problem-solving contact
            </h3>
            <p class="has-text-grey has-leading-6">
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus vestibulum.
            </p>
          </div>
        </div>
        <div class="is-flex mb-8">
          <div class="is-flex-shrink-0">
            <svg
              width="26"
              height="21"
              viewBox="0 0 26 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.8075 15.5254L23.3675 0.965393L26 3.59789L8.8075 20.8229L0 12.0479L2.665 9.38289L8.8075 15.5254Z"
                fill="#3C74F9"
              /></svg
            >
          </div>
          <div class="ml-4">
            <h3
              class="is-size-5 has-leading-4 has-text-primary has-text-weight-semibold mb-2"
            >
              Quick problem-solving contact
            </h3>
            <p class="has-text-grey has-leading-6">
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus vestibulum.
            </p>
          </div>
        </div>
        <div class="is-flex">
          <div class="is-flex-shrink-0">
            <svg
              width="26"
              height="21"
              viewBox="0 0 26 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.8075 15.5254L23.3675 0.965393L26 3.59789L8.8075 20.8229L0 12.0479L2.665 9.38289L8.8075 15.5254Z"
                fill="#3C74F9"
              /></svg
            >
          </div>
          <div class="ml-4">
            <h3
              class="is-size-5 has-leading-4 has-text-primary has-text-weight-semibold mb-2"
            >
              Quick problem-solving contact
            </h3>
            <p class="has-text-grey has-leading-6">
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus vestibulum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
{/key}
