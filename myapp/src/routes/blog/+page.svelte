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
			//$inspect(data);

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
			'https://raw.githubusercontent.com/addy10s/Portfolio/refs/heads/main/myapp/src/routes/blog/blog.json'
		);
		data = await response.json();
		console.log(data);
	});
</script>

<svelte:head>
	<title>Addy's Blog!</title>
	<meta name="Blog" content="This is my blog :3" />
</svelte:head>

<div class="pointer-events-none flex grow-0 flex-col items-center text-center *:size-fit">
	<h1
		class="pointer-events-auto m-10 inline-flex size-fit justify-center justify-self-center text-[2rem] font-bold"
	>
		Welcome to my Blog
	</h1>
	<div class="inline-flex justify-center">
		<div
			class="grid grid-cols-none items-center justify-center gap-4 text-left *:pointer-events-auto"
		>
			{#each data?.entries ?? [] as entry, index}
				<!-- svelte-ignore event_directive_deprecated -->
				<button
					on:click={() => (modalStates[index] = true)}
					class="bg-ctp-surface1 size-fit max-w-[80vw] min-w-[80vw] cursor-pointer rounded-lg p-2 outline-0 outline-offset-0 transition-all duration-250 hover:outline-4 lg:max-w-[50vw] lg:min-w-[50vw]"
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
						classes={{ header: 'text-ctp-text', close: 'bg-ctp-text ! ' }}
						form
						bind:open={modalStates[index]}
						onaction={({ action }) => alert(`Handle "${action}"`)}
						class="bg-ctp-surface1 *:text-ctp-subtext1 text-ctp-subtext1 h-screen text-[140%] outline-3 outline-offset-0 outline-solid"
					>
						<h1>{@html snarkdown(entry?.Content)}</h1>
					</Modal>
				{/if}
			{/each}
		</div>
	</div>
</div>
