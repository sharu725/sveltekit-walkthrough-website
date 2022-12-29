<script>
  import "../../static/style.css"
  import Footer from "./Footer.svelte";
  import Hero from "./Hero.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<Navbar />
<Hero />
<slot />
<Footer />
