<script>
  import Seo from "$lib/Seo.svelte";
  import Contact from "$lib/Contact.svelte";
</script>

<div class="container grid">
  <div class="what">
    <h3>About Us</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque
      tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel,
      porro, soluta unde debitis aliquam laboriosam. Repellat explicabo,
      maiores!
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio
      neque consectetur consequatur magni in nisi, natus beatae quidem quam odit
      commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque
      tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel,
      porro, soluta unde debitis aliquam laboriosam. Repellat explicabo,
      maiores!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque
      tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel,
      porro, soluta unde debitis aliquam laboriosam. Repellat explicabo,
      maiores!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque
      tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel,
      porro, soluta unde debitis aliquam laboriosam. Repellat explicabo,
      maiores!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque
      tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel,
      porro, soluta unde debitis aliquam laboriosam. Repellat explicabo,
      maiores!
    </p>
  </div>
  <Contact />
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
</style>
<Seo title="About | Business Frontpage" description="This is about page" type="WebPage" />