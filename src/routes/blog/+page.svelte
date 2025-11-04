<script lang="ts">
	import Modal from 'flowbite-svelte/Modal.svelte';
	import snarkdown from 'snarkdown';
	import { onMount } from 'svelte';
	let modalStates = $state<boolean[]>([]);

	let data = $state<{
		entries: { Title: string; Content: string; PublishedDate: string }[];
	} | null>(null);

	$effect(() => {
		if (data) {
			$inspect(data);

			if (data.entries) {
				modalStates = Array(data.entries.length).fill(false);
				for (let i in data.entries) {
					$inspect(i);
				}
			} else {
				console.log('an error has occurred');
			}
		}
	});

	onMount(async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/TheSillyBoi/Portfolio/refs/heads/main/myapp/src/routes/blog/blog.json'
		);
		data = await response.json();
		console.log(data);
	});
</script>

<svelte:head>
	<title>Adrian's Blog!</title>
	<meta name="Blog" content="This is my blog :3" />
</svelte:head>

<div class="text-ctp-text items-center justify-center text-center">
	<h1 class="m-10 text-[2rem] font-bold">Welcome to my Blog</h1>
	<div class="grid grid-cols-none items-center justify-center gap-4 text-left">
		{#each data?.entries ?? [] as entry, index}
			<!-- svelte-ignore event_directive_deprecated -->
			<button
				on:click={() => (modalStates[index] = true)}
				class="bg-ctp-surface1 size-fit max-w-[56rem] min-w-[56rem] cursor-pointer rounded-lg p-2 outline-0 outline-offset-0 transition-all duration-250 hover:outline-4"
			>
				{#if entry?.Title}
					<h1 class="text-[1.25rem] font-bold">{entry.Title}({entry.PublishedDate})</h1>
				{:else}
					<p>No title available</p>
				{/if}
				<div class="line-clamp-3">
					{@html snarkdown(entry.Content)}
				</div>
			</button>
			{#if index < modalStates.length}
				<Modal
					size="lg"
					title={entry.Title}
					classes={{ header: 'text-ctp-text' }}
					form
					bind:open={modalStates[index]}
					onaction={({ action }) => alert(`Handle "${action}"`)}
					class="bg-ctp-surface1 text-ctp-subtext1 h-screen outline-3 outline-offset-0 outline-solid"
					><h1>{@html snarkdown(entry?.Content)}</h1>
					<!-- <Button type="submit" color="alternative">Add a comment</Button> -->
				</Modal>
			{/if}
		{/each}
	</div>
</div>
