<script lang="ts">
	export let data;

	/**
	 * @typedef {Object} Project
	 * @property {number} id
	 * @property {string} name
	 * @property {string} description
	 * @property {string} url
	 * @property {number} stars
	 * @property {string} updated
	 * @property {string|undefined} avatar_url
	 */
</script>

<svelte:head>
	<title>Adrian's Projects</title>
	<meta name="Projects" content="These are the projects that I (Adrian Tennies), have created" />
</svelte:head>

<h1 class="text-ctp-text mt-7 text-center text-[3rem] font-semibold">My Projects</h1>

{#if data.error}
	<div class="text-ctp-red text-center text-xl">
		{data.error}
	</div>
{:else if data.projects.length === 0}
	<div class="text-ctp-subtext1 text-center text-xl">No projects found</div>
{:else}
	<div class="m-7 grid grid-cols-1 gap-7 p-1 md:grid-cols-2 lg:grid-cols-3">
		{#each data.projects as project}
			<div
				class=" bg-ctp-surface1 hover:bg-ctp-surface2 outline-ctp-subtext1 rounded-[.75rem] p-3 text-center outline-5 outline-offset-0 transition-all duration-250 outline-none hover:outline-solid"
			>
				<h2 class="text-ctp-text mb-2 text-[2rem] font-bold">
					{project.name}
				</h2>

				<p
					class="text-ctp-subtext0 mb-4 line-clamp-4 text-[1.2rem] font-semibold hover:line-clamp-none"
				>
					{project.description}
				</p>

				<div class="mb-4 flex items-center justify-center gap-4">
					<span class="text-ctp-yellow">
						<i class="fa-solid fa-star"></i>
						{project.stars}
					</span>
				</div>

				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					class="bg-ctp-overlay0 text-ctp-text hover:bg-ctp-overlay1 inline-block rounded-lg px-4 py-2 font-semibold transition-colors"
				>
					View on GitHub
				</a>
			</div>
		{/each}
	</div>
{/if}
