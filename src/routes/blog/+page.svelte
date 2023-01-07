<script>
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
