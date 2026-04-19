<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	const birthdate = new Date(1292639400 * 1000);

	let age = $state('getting');
	let intervalId: string | number | NodeJS.Timeout | undefined;

	function calculateAge(): string {
		const now = new Date(); //current date
		let years = now.getFullYear() - birthdate.getFullYear();
		let months = now.getMonth() - birthdate.getMonth();

		if (months < 0) {
			months += 12;
			years--;
		}

		return `${years} years`;
	}

	onMount(() => {
		age = calculateAge(); // Initial calculation
		intervalId = setInterval(() => {
			age = calculateAge();
		}, 1000);
	});

	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<svelte:head>
	<title>About Addy!</title>
	<meta name="About Addy!" content="This is the about me section of my portfolio" />
</svelte:head>

<div class="text-ctp-subtext0 pointer-events-none m-15 lg:m-25">
	<h1
		class="text-ctp-text pointer-events-auto size-fit text-[7.5vw] font-bold md:text-[5.25vw] lg:text-[3.5vw]"
	>
		Hello, I'm Addy
	</h1>
	<!-- <h1></h1> -->
	<div
		class="pointer-events-none text-[5vw] *:pointer-events-auto *:size-fit *:backdrop-blur-xs md:text-[2.5vw] lg:text-[1.25vw]"
	>
		<p>
			I'm a Teen from Wisconsin, who's passionate about programming and Computer Science, I'm
			approximately {age} old.
		</p>

		<br />

		<p>
			I mainly use Rust, Python, HTML/CSS, and Typescript, and am working on learning Web
			Development frameworks such as Svelte and Tailwind
		</p>
		<br />

		<p>I love experimenting with Linux and similar systems, and use Fedora on my main machine.</p>
		<br />
		<h1>If you want to find me, I'm the most active on these accounts:</h1>
	</div>
	<div class="inline-flex flex-wrap items-center justify-center text-center">
		<div
			class=" text-ctp-sky pointer-events-none rounded-xs text-center *:*:pointer-events-auto *:*:backdrop-blur-xl"
		>
			<div class="text-left text-[5vw] md:text-[2.5vw] lg:text-[1.25vw]">
				<a href="https://bsky.app/profile/addy10s.xyz" target="_blank">
					<i class="fa-brands fa-bluesky px-2"> </i>
					addy10s.xyz
				</a>
				<br />

				<a href="https://github.com/addy10s" target="_blank">
					<i class="fa-brands fa-github px-2"> </i>
					Addy10s
				</a>
				<br />

				<a href="mailto:Addy@Addy10s.xyz" target="_blank">
					<i class="fa-solid fa-envelope px-2"></i>
					Addy@Addy10s.xyz
				</a>
				<br />

				<a href="https://steamcommunity.com/id/no-1-XML-Lover" target="_blank">
					<i class="fa-brands fa-steam px-2"> </i>
					No. 1 XML Lover
				</a>

				<br />
			</div>
		</div>
	</div>
</div>

<div class="pointer-events-none flex grow-0 flex-col items-center justify-center text-center"></div>
