<script>
  import javaLogo from './assets/java.svg'
  import { Footer, FooterCopyright } from 'flowbite-svelte';
</script>

<main>
  <div>
    <img src={javaLogo} class="logo java" alt="Java Logo" />
  </div>
  <h1 class="title">Welcome to <code>understand-smali</code> wiki</h1>

  <p class="button Enter"> 
    <a href="/about" aria-label="Dive into the wiki">
      <button aria-label="Dive In">
        Dive In!
      </button>
    </a>
  </p>
</main>

<Footer>
  <div class="footer">
    <FooterCopyright aClass="hover:underline" href="https://github.com/AbhiTheModder" by="AbhiTheModder" year={2024} copyrightMessage="" />
  </div>
</Footer>

<style>
  .title {
    font-weight: 600;
  }
  .logo {
    transform: rotate(180deg);
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms, transform 500ms;
  }
  .logo:hover {
    transform: rotate(360deg);
    filter: drop-shadow(0 0 2em #646cff);
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  @media (prefers-color-scheme: light) {
    .footer {
      color: black;
    }
  }
</style>