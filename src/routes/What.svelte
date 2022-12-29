<script>
  import Button from "$lib/Button.svelte";
</script>

<div class="container grid">
  <div class="what">
    <h3>What We Do?</h3>
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

    <Button class="secondary" id="a-button" size="medium">Call To Action >></Button>
  </div>
  <div class="contact">
    <h3>Contact Us</h3>
    <p><strong>Start Bootstrap</strong></p>
    <p>3481 Melrose Place</p>
    <p>Beverly Hills, CA 90210</p>
    <p>P: (123) 456-7890</p>
    <p>E:<a href="mailto:name@example.com">name@example.com</a></p>
  </div>
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
  .contact {
    grid-column: span 4;
  }
  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
  a {
    text-decoration: none;
    color: var(--primary-color);
  }
  a:hover {
    text-decoration: underline;
  }
</style>
