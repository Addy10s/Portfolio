<script lang="ts">
	function newWord(): string {
		let possibleWords: string[] = ['Improfessional', 'Hobbyist', 'Newbie', 'Young'];
		let chosenWordArray = Math.floor(Math.random() * 4);
		let chosenWord = possibleWords[chosenWordArray];
		return chosenWord;
	}
</script>

<svelte:head>
	<title>Addy's Portfolio!</title>
	<meta name="Addy's Portfolio!" content="This is the main section of my portfolio!" />
</svelte:head>

<div class="pointer-events-none px-20 py-10 *:pointer-events-auto *:size-fit lg:px-25 lg:py-15">
	<h1 class="text-ctp-text text-[9vw] font-bold text-nowrap lg:text-[5vw]">Addy Tennies</h1>

	<p class="text-ctp-subtext1 px-5 py-3 text-[4vw] font-semibold lg:text-[2.5vw]">
		{newWord()} Software Developer
	</p>
	<p class="text-ctp-subtext1 px-10 text-[3.5vw] text-nowrap lg:text-[1.5vw]">
		Click the buttons on top to learn more!
	</p>

	<p class="collapse lg:pointer-fine:visible text-ctp-subtext1 px-15 text-[1vw]">
		Hover over the top bar to see the buttons
	</p>

</div>
