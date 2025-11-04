<script lang="ts">
	import { onMount } from 'svelte';
	let container: HTMLDivElement;

	function setMinHeight() {
		const navbar = document.getElementById('global-navbar');
		if (navbar && container) {
			const navbarHeight = navbar.offsetHeight;
			container.style.minHeight = `calc(100vh - ${navbarHeight}px - 6rem)`;
		}
	}

	onMount(() => {
		setMinHeight();

		window.addEventListener('resize', setMinHeight);
		return () => window.removeEventListener('resize', setMinHeight);
	});
</script>

<svelte:head>
	<title>Contact Adrian!</title>
	<meta
		name="Contact Adrian!"
		content="This is where people can find contact information for Adrian Tennies"
	/>
</svelte:head>

<div>
	<h1
		class="text-bold text-ctp-text m-1 flex w-full flex-nowrap justify-center text-center text-[3rem]"
	>
		If you want to find me, I'm somewhat active on these accounts:
	</h1>

	<div bind:this={container} class="flex flex-wrap items-center justify-center text-center">
		<div class=" bg-ctp-surface1 text-ctp-sky rounded-xl px-6 py-3 text-center">
			<div class="text-left text-[4rem]">
				<a href="https://bsky.app/profile/thesillyb0y.bsky.social" target="_blank">
					<i class="fa-brands fa-bluesky px-4"> </i>
					thesillyb0y.bsky.social
				</a>
				<br />

				<a href="https://github.com/thesillyboi" target="_blank">
					<i class="fa-brands fa-github px-4"> </i>
					TheSillyBoi
				</a>
				<br />

				<a href="mailto:adrian@tennies.us" target="_blank">
					<i class="fa-solid fa-envelope px-4"></i>
					Adrian@tennies.us
				</a>
				<br />

				<a href="https://steamcommunity.com/profiles/76561199097336926/" target="_blank">
					<i class="fa-brands fa-steam px-4"> </i>
					TheMonkeyBoi
				</a>

				<br />
			</div>
		</div>
	</div>
</div>
