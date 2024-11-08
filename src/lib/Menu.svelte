<script>
  import { fly, scale } from "svelte/transition";
  import { quadOut } from "svelte/easing";

  export let open;
  let showContactMe = false;
</script>

{#if open}
  <div class="menu">
    {#each ["Home", "Contents", "About", "Contact"] as mainlink, i}
      <p>
        {#if mainlink === "Contact"}
          <a
            href="#"
            on:click={() => (showContactMe = !showContactMe)}
            transition:fly={{ y: -15, delay: 50 * i }}
          >
            {mainlink}
          </a>
        {:else}
          <a
            href={`/${mainlink.toLowerCase()}`}
            transition:fly={{ y: -15, delay: 50 * i }}
          >
            {mainlink}
          </a>
        {/if}
      </p>
    {/each}
  </div>

  <div
    class="bar"
    transition:scale={{ duration: 850, easing: quadOut, opacity: 1 }}
  />
{/if}

{#if showContactMe}
  <script>
    window.open("https://t.me/AbhiTheM0dder", "_blank");
  </script>
{/if}

<style>
  .menu {
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.15em;
    padding: 1em;
    padding-top: 0;
    color: rgb(64, 64, 85);
  }

  p {
    cursor: pointer;
    width: max-content;
    margin: 1rem auto;
  }

  p:hover {
    text-decoration: underline;
  }

  .bar {
    border-style: solid;
    border-color: rgb(73, 69, 69);
    border-width: 1px;
    height: 0;
  }
</style>
