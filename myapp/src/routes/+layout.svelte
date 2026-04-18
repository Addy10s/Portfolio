<script lang="ts">
	import '../app.css';
	import NavBar from './NavBar.svelte';
	let { children } = $props();
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>


<div class="ui">
	<NavBar />



	
	<div class="bg-container">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
	
	
	{@render children()}
	
</div>
	


<style>
	.bg-container {
		position: fixed !important;
		top: 0;
		left: 0;
		width: 100vw;
		background-color: none;
		opacity: 70%;
		height: 100vh;
		z-index: -1;
		pointer-events: all;
	}

	.ui {
		position: relative;
		z-index: 10;
		pointer-events: all;

		min-height: 100vh;
		color: white;
	}
</style>
