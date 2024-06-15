<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    export let open;
    let showContactMe = false;
</script>

{#if open}
    <div class="menu">
        {#each ['Home', 'Days', 'About', 'Contact'] as link, i}
            <p> 
                {#if link === 'Contact'}
                    <a href="#" on:click={() => showContactMe = !showContactMe} transition:fly={{ y: -15, delay: 50 * i }}>
                        {link}
                    </a> 
                {:else}
                    <a href={`/${link.toLowerCase()}`} transition:fly={{ y: -15, delay: 50 * i }}>
                        {link}
                    </a>
                {/if}
            </p>
        {/each}
    </div>

    <div class="bar" transition:scale={{ duration: 850, easing: quadOut, opacity: 1 }} />
{/if}

{#if showContactMe}
    <div class="contact-form"> 
        <h3>Contact Me</h3>
        <p>Just Comment at the bottom of any <br> page of this website.
        </p>
        <p class="contact-form button"> 
            <a href="#chirpy-comment">
              <button>
                Click Here
              </button>
            </a>
        </p>
    </div>
    <div class="bar" transition:scale={{ duration: 850, easing: quadOut, opacity: 1 }} />
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
    .contact-form {
        text-align: center;
        font-weight: 50;
        letter-spacing: 0.15em;
        padding-top: 0;
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