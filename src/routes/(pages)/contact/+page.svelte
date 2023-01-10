<script>
  import { enhance, applyAction } from "$app/forms";
  import Button from "$lib/Button.svelte";
  import Seo from "$lib/Seo.svelte";

  export let form;

</script>

<div class="container">
  <h2>Contact us</h2>
  {#if form?.success}
    <p class="success">{form?.status || ""}</p>
  {:else}
    <form
      method="POST"
      use:enhance={() => {
        return async ({ result }) => {
          await applyAction(result);
        };
      }}
    >
      <div class="form-group">
        <label class="col-md-3 control-label" for="name">Name</label>
        <div class="col-md-9">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            class="form-control"
            value={form?.name || ""}
            class:error={form?.errors?.name}
          />
          {#if form?.errors?.name}
            <p class="red">{form?.errors?.name}</p>
          {/if}
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-3 control-label" for="email">Your E-mail</label>
        <div class="col-md-9">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Your email"
            class="form-control"
            value={form?.email || ""}
            class:error={form?.errors?.email}
          />
          {#if form?.errors?.email}
            <p class="red">{form?.errors?.email}</p>
          {/if}
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-3 control-label" for="message">Your message</label>
        <div class="col-md-9">
          <textarea
            class="form-control"
            id="message"
            name="message"
            placeholder="Please enter your message here..."
            rows="5"
            value={form?.message || ""}
            class:error={form?.errors?.message}
          />
          {#if form?.errors?.message}
            <p class="red">{form?.errors?.message}</p>
          {/if}
        </div>
      </div>

      <div class="form-group">
        <div class="col-md-12">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  {/if}
</div>
<Seo
  title="Contact | Business Frontpage"
  description="This is contact page"
  type="WebPage"
/>

<style>
  .container {
    width: 100%;
    padding: 2em 0;
  }
  h2 {
    font-weight: 500;
    font-size: 2em;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: lightgreen;
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }
</style>
