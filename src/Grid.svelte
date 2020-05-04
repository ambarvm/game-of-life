<script>
  import Box from "./Box.svelte";
  export let rows;
  export let width;
  export let blockSize;

  $: style = `
    grid-template-columns: repeat(${width}, ${blockSize}px);
    grid-auto-rows: ${blockSize}px;
  `;
</script>

<style>
  .grid {
    display: grid;
    gap: 2px;
  }
</style>

<div class="grid" {style}>
  {#each rows as boxes}
    {#each boxes as box, j}
      <Box active={box} on:click={() => (boxes[j] = !box)} />
    {/each}
  {/each}
</div>
