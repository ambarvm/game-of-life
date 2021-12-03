<script>
  import Box from "./Box.svelte";

  export let rows, width, blockSize;
  let dragStart;

  function handleMousedown(event) {
    dragStart = event.target["data-coords"];
  }
  function handleMouseup(event) {
    const dragEnd = event.target["data-coords"];
    const start = {
      i: Math.min(dragStart.i, dragEnd.i),
      j: Math.min(dragStart.j, dragEnd.j)
    };
    const end = {
      i: Math.max(dragStart.i, dragEnd.i),
      j: Math.max(dragStart.j, dragEnd.j)
    };

    for (let i = start.i; i <= end.i; i++) {
      for (let j = start.j; j <= end.j; j++) {
        rows[i][j] = !rows[i][j];
      }
    }

    dragStart = null;
  }

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
  {#each rows as boxes, i}
    {#each boxes as box, j}
      <Box
        coords={{ i, j }}
        active={box}
        on:mousedown={handleMousedown}
        on:mouseup={handleMouseup} />
    {/each}
  {/each}
</div>
