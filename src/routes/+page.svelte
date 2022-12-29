<script>
  import What from "./What.svelte";

  export let data;

  const { posts } = data;
</script>


<What />


<div class="container">
  <div class="grid">
    {#each posts as { title, url }}
      <div>
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    {/each}
  </div>
</div>
<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    padding: 2em 0;
  }
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>
