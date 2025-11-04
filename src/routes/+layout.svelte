<script lang="ts">
	import '../app.css';
	import NavBar from './NavBar.svelte';
	//import { svelte } from '@sveltejs/vite-plugin-svelte';
	let { children } = $props();
</script>

<NavBar />

{@render children()}
