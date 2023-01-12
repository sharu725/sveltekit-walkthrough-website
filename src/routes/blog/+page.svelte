<script>
  import Seo from "$lib/Seo.svelte";

  export let data;

  const { posts } = data;
</script>

<div class="container">
  <h1>Blog Posts</h1>

  {#each posts as post}
    <a href="/blog/{post.id}">
      <h2>{post.title}</h2>
    </a>
  {/each}
</div>

<Seo
  title="Blog | Business Frontpage"
  description="This is blog"
  type="WebPage"
/>

<style>
  a {
    text-decoration: underline;
    color: var(--color);
  }
  a:hover {
    color: var(--primary-color);
  }
</style>
