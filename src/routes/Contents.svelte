<script>
  import { Footer, FooterCopyright } from "flowbite-svelte";
</script>

<main>
  <h1 class="title">Table of Contents</h1>
  <li id="li"><a href="/days">Days</a></li>
  <li id="li">
    <a href="/instructions">Instructions</a>
  </li>
  <p class="home">
    <a href="/about" aria-label="Go To Home Page">
      <button> Back to Home </button>
    </a>
  </p>
</main>

<Footer>
  <div class="footer">
    <FooterCopyright
      aClass="hover:underline"
      href="https://github.com/AbhiTheModder"
      by="AbhiTheModder"
      year={2024}
      copyrightMessage=""
    />
  </div>
</Footer>

<style>
  .title {
    font-weight: 800;
    font-size: larger;
    /* top:0; */
    left: 0;
    right: 0;
    text-align: center;
    text-decoration: underline;
    margin-top: 20px;
    position: fixed;
    margin: -100px;
  }
  #li {
    list-style-type: square;
    text-decoration: dotted underline;
    font-weight: 500;
    font-size: medium;
    text-align: center;
    position: inherit;
    margin-top: 5px;
    margin: 0;
    padding: 5px;
  }
  .home {
    padding: 5px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 20px;
    margin-bottom: 70px;
    text-align: center;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    margin-bottom: 5px;
    margin-right: 5px;
    width: 100%;
    color: white;
    text-align: center;
  }
  @media (prefers-color-scheme: light) {
    .footer {
      color: black;
    }
  }
</style>
