<script>
	import Grid from '$lib/Grid.svelte';
	import { updateGrid } from '$lib/game';
	import '$lib/global.css';

	let height = 30,
		width = 60,
		interval,
		paused = true,
		blockSize = 20,
		rows;

	reset();

	function play() {
		interval = setInterval(step, 1000);
		paused = false;
	}

	function step() {
		rows = updateGrid(rows, width, height);
	}

	function pause() {
		clearInterval(interval);
		paused = true;
	}

	function reset() {
		rows = Array(height)
			.fill(null)
			.map(() => Array(width).fill(false));
	}
</script>

<main>
	<div class="grid-container">
		<Grid {rows} {width} {blockSize} />
	</div>

	<div class="controls">
		{#if paused}
			<button on:click={play}>play</button>
			<button on:click={step}>step</button>
		{:else}
			<button on:click={pause}>pause</button>
		{/if}
		<div>
			{blockSize}
			<input type="range" bind:value={blockSize} min="10" max="40" />
		</div>
		<button on:click={reset}>reset</button>
	</div>
</main>

<style>
	.controls {
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 1.5rem;
		padding: 1rem;
		background-color: #f7f7f7;

		display: flex;
		align-items: center;
	}
	.grid-container {
		overflow: auto;
		width: 100vw;
		height: calc(100vh - 3.5rem);
	}
</style>
