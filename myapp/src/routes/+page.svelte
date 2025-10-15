<script lang="ts">
	function newWord(): string {
		let possibleWords: string[] = ['Improfessional', 'Hobbyist', 'Newbie', 'Young'];
		let chosenWordArray = Math.floor(Math.random() * 4);
		let chosenWord = possibleWords[chosenWordArray];
		return chosenWord;
	}
</script>

<svelte:head>
	<title>Adrian's Portfolio!</title>
	<meta name="Adrian's Portfolio!" content="This is the main section of my portfolio!" />
</svelte:head>

<div class="px-25 py-15">
	<h1 class="text-ctp-text text-[6rem] font-bold">Adrian Tennies</h1>

	<p class="text-ctp-subtext1 px-5 py-3 text-[3rem] font-semibold">
		{newWord()} Software Developer
	</p>
	<p class="text-ctp-subtext1 px-10 text-[1.5rem]">Click the buttons on top to learn more!</p>
</div>
