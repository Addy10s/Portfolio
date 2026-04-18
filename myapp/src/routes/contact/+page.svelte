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
	<title>Contact Addy!</title>
	<meta
		name="Contact Addy!"
		content="This is where people can find contact information for Addy Tennies"
	/>
</svelte:head>

<div class="pointer-events-none justify-center items-center flex text-center grow-0 flex-col">
	<h1
		class=" inline-flex text-bold text-ctp-text m-1  flex-nowrap justify-center text-center text-[3rem] pointer-events-auto size-fit"
	>
		If you want to find me, I'm the most active on these accounts:
	</h1>

	<div bind:this={container} class="inline-flex flex-wrap items-center justify-center text-center">
		<div class=" pointer-events-auto bg-ctp-surface1 text-ctp-sky rounded-xl px-6 py-3 text-center *:backdrop-blur-xl">
			<div class="text-left text-[4rem]">
				<a href="https://bsky.app/profile/addy10s.xyz" target="_blank">
					<i class="fa-brands fa-bluesky px-4"> </i>
					addy10s.xyz
				</a>
				<br />

				<a href="https://github.com/addy10s" target="_blank">
					<i class="fa-brands fa-github px-4"> </i>
					Addy10s
				</a>
				<br />

				<a href="mailto:Addy@Addy10s.xyz" target="_blank">
					<i class="fa-solid fa-envelope px-4"></i>
					Addy@Addy10s.xyz
				</a>
				<br />

				<a href="https://steamcommunity.com/id/no-1-XML-Lover" target="_blank">
					<i class="fa-brands fa-steam px-4"> </i>
					No. 1 XML Lover
				</a>

				<br />
			</div>
		</div>
	</div>
</div>
