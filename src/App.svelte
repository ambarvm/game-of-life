<script>
  import Grid from "./Grid.svelte";
  import { updateGrid } from "./game";
  let title = "Game of Life";

  let height = 18,
    width = 40;

  $: rows = Array(height)
    .fill(null)
    .map(() => Array(width).fill(false));

  let interval;

  function play() {
    interval = setInterval(step, 1000);
  }

  function step() {
    rows = updateGrid(rows, width, height);
  }

  function pause() {
    clearInterval(interval);
  }
</script>

<style>
  h1 {
    font-size: 1.3rem;
  }
</style>

<main>
  <h1>{title}</h1>

  <Grid {rows} cols={width} />

  <button on:click={play}>play</button>
  <button on:click={pause}>pause</button>
  <button on:click={step}>step</button>
  <span>
    {width}
    <input id="width" type="range" bind:value={width} min="1" max="40" />
  </span>
</main>
