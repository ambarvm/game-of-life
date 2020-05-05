<script>
  import { onMount } from "svelte";
  export let active, coords;

  let div;
  onMount(() => {
    div["data-coords"] = coords;
  });
</script>

<style>
  div {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    display: inline-block;
    transition: background-color 0.3s ease-in;
    cursor: pointer;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
  }
  div.active {
    background-color: #ff3e00;
  }
</style>

<div class:active on:click on:mousedown on:mouseup bind:this={div} />
