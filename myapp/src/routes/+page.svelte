<script lang="ts">
	function newWord(): string {
		let possibleWords: string[] = ['Improfessional', 'Hobbyist', 'Newbie', 'Young'];
		let chosenWordArray = Math.floor(Math.random() * 4);
		let chosenWord = possibleWords[chosenWordArray];
		return chosenWord;
	}

	// let x = $state(0);
	// let y = $state(0);

	// function updateDisplay(event: { pageX: number; pageY: number }) {
	// 	x = event.pageX;
	// 	y = event.pageY;
	// }
</script>

<svelte:head>
	<title>Addy's Portfolio!</title>
	<meta name="Addy's Portfolio!" content="This is the main section of my portfolio!" />
</svelte:head>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- <div class="px-25 py-15" onmousemove={updateDisplay} > -->
<div class="px-25 py-15">

	<h1 class="text-ctp-text text-[6rem] font-bold">Addy/Adrian Tennies</h1>

	<p class="text-ctp-subtext1 px-5 py-3 text-[3rem] font-semibold">
		{newWord()} Software Developer
	</p>
	<p class="text-ctp-subtext1 px-10 text-[1.5rem]">Click the buttons on top to learn more!</p>
	<!-- <p class="text-ctp-subtext1 px-10 text-[1.5rem]">
		Mouse Position: X: {x}
		Y: {y} 
	</p> -->
</div>
