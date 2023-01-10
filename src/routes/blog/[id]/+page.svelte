<script>
  import Seo from "$lib/Seo.svelte";

  export let data;

  const { post } = data;
</script>

<div class="container">
  <h1>{post.title}</h1>
  <p>{post.body}</p>
</div>

<Seo
  title="{post.title} | Business Frontpage"
  description={post.body}
  type="BlogPosting"
/>
