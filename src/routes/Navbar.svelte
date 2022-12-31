<script>
  import { page } from "$app/stores";

  const navs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  $: routeId = $page.route.id;
</script>

<nav>
  <div class="container">
    <a class="logo" href="/">
      <h1>Start Bootstrap</h1>
    </a>
    <ul>
      {#each navs as { title, href }}
        <li>
          <a {href} class:active={routeId == href} {title}>{title}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    padding: 0.5em;
    background-color: #343a40;
    color: white;
  }

  .container {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    margin: 0;
    margin-left: auto;
    list-style: none;
    font-size: 1em;
  }
  li {
    margin-right: 20px;
  }
  h1 {
    margin: 0;
    font-size: 1.3em;
    font-weight: normal;
  }
  a {
    text-decoration: none;
    color: #aaa;
  }
  .logo {
    color: white;
  }
  .active {
    color: white;
  }
</style>
