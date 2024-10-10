<script>
  import javaLogo from "../assets/java.svg";
  import { Footer, FooterCopyright } from "flowbite-svelte";
  import { fly } from "svelte/transition";
  import { cubicOut, circIn } from "svelte/easing";
  import { onMount } from "svelte";

  let showContent = false;
  let logoRotated = false;
  let showButton = false;

  onMount(() => {
    setTimeout(() => {
      showContent = true;
    }, 2000);

    document.addEventListener("click", () => {
      if (!logoRotated) {
        logoRotated = true;
        setTimeout(() => {
          logoRotated = false;
        }, 2000);
      }
    });

    window.addEventListener("scroll", () => {
      if (showContent) {
        showButton = true;
      }
    });

    setTimeout(() => {
      showButton = true;
    }, 2000);
  });
</script>

<main>
  <div>
    <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
    <img
      src={javaLogo}
      class="logo java {logoRotated ? 'rotate' : ''} {showContent
        ? 'small'
        : 'big'}"
      alt="Java Logo"
      on:click={() => {
        if (!logoRotated) {
          logoRotated = true;
          setTimeout(() => {
            logoRotated = false;
          }, 2000);
        }
      }}
      on:keydown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          if (!logoRotated) {
            logoRotated = true;
            setTimeout(() => {
              logoRotated = false;
            }, 2000);
          }
        }
      }}
      role="button"
      aria-label="Click to rotate & enter the wiki"
      tabindex="0"
    />
  </div>

  {#if showContent}
    <div
      class="content {showContent ? 'show' : ''}"
      in:fly={{ duration: 500, easing: cubicOut }}
      aria-label="Welcome to understand-smali wiki"
    >
      <h1 class="title">Welcome to <code>understand-smali</code> wiki</h1>

      {#if showButton}
        <p class="button Enter">
          <a href="/about" aria-label="Dive into the wiki">
            <button
              in:fly={{ duration: 900, easing: circIn }}
              aria-label="Dive In"
            >
              Dive In!
            </button>
          </a>
        </p>
      {/if}
    </div>
  {/if}
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
    font-weight: 600;
  }
  .logo {
    transform: rotate(180deg);
    height: 12em;
    padding: 1.5em;
    will-change: filter;
    transition:
      filter 300ms,
      transform 500ms,
      height 500ms ease-in-out;
  }
  .logo.rotate {
    transform: rotate(360deg);
    filter: drop-shadow(0 0 2em #646cff);
  }
  .logo:hover {
    transform: rotate(360deg);
    filter: drop-shadow(0 0 2em #646cff);
  }
  .logo.small {
    height: 6em;
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

  .content {
    opacity: 0;
    transform: scale(0.9);
    transition:
      opacity 300ms,
      transform 500ms;
  }
  .content.show {
    opacity: 1;
    transform: scale(1);
  }
</style>
