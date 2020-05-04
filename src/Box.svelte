<script>
  export let active;
</script>

<style>
  div {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    display: inline-block;
    transition: background-color 0.3s ease-in;
    cursor: pointer;
  }
  div.active {
    background-color: #ff3e00;
  }
</style>

<div class:active on:click />
