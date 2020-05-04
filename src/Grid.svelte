<script>
  import Box from "./Box.svelte";
  export let rows;
  export let cols;
  $: console.log(cols);
</script>

<style>
  /* .grid {
    display: grid;
  } */
</style>

<div class="grid" style="grid-template-columns: repeat({cols}, 1fr);">
  {#each rows as boxes}
    {#each boxes as box, j}
      <Box active={box} on:click={() => (boxes[j] = !box)} />
    {/each}
    <br />
  {/each}
</div>
