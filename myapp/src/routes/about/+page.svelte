<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	const birthdate = new Date(1292639400 * 1000);

	let age = $state('getting');
	let intervalId: string | number | NodeJS.Timeout | undefined;

	function calculateAge(): string {
		const now = new Date();
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

<div class="text-ctp-subtext0 m-25 pointer-events-none ">
	<h1 class="text-ctp-text text-[3.5rem] font-bold pointer-events-auto size-fit">Hello, I'm Addy</h1>
	<!-- <h1></h1> -->
	<div class="text-[1.5rem] pointer-events-none *:pointer-events-auto *:bg-ctp-base *:size-fit">
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
	</div>

	<a href="https://Addy10s.xyz" target="_blank" rel="noopener noreferrer">
		<img src="/addy88x31.gif" alt="This is my 88x31" class="size-fit pointer-events-auto" />
	</a>
</div>
