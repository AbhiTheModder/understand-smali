<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "../lib/Menu.svelte";
  import { parse } from "yaml";
  import { onMount } from "svelte";

  const yaml_file = "../../smali-opcodes/grammar.yaml";

  let yamlData = [];
  let filteredData = [];
  let searchQuery = "";

  onMount(async () => {
    const response = await fetch(yaml_file);
    const text = await response.text();
    yamlData = parse(text);
    filteredData = yamlData;
  });

  $: filteredData = yamlData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  let open;
  import { FooterCopyright } from "flowbite-svelte";
</script>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />
  <div class="search-container">
    <input type="text" placeholder="Search..." bind:value={searchQuery} />
  </div>
  <div class="content">
    <h1>Smali Opcodes</h1>
    <pre>{#if filteredData.length > 0}
        <table>
        <thead>
          <tr>
            <th>Opcode</th>
            <th>Name</th>
            <th>Format</th>
            <th>Syntax</th>
            <th>Short Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {#each filteredData as instruction}
              <tr>
              <td>{instruction.opcode}</td>
              <td>{instruction.name}</td>
              <td>{instruction.format}</td>
              <td>{instruction.syntax}</td>
              <td>{instruction.short_desc}</td>
              <td>
                <strong>{instruction.example}</strong><br />
                <small>{instruction.example_desc}</small>
              </td>
            </tr>
            {/each}
        </tbody>
      </table>
      {:else}
        <p>No results found.</p>
      {/if}</pre>
  </div>
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<FooterCopyright
  aClass="hover:underline"
  href="https://github.com/AbhiTheModder"
  by="AbhiTheModder"
  year={2024}
  copyrightMessage=""
/>

<style>
  .content {
    text-align: left;
  }

  .search-container {
    margin-bottom: 1rem;
  }

  input[type="text"] {
    padding: 8px;
    width: 100%;
    max-width: 300px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    table-layout: fixed;
    max-width: 100%;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }

  th {
    font-weight: bold;
  }

  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
