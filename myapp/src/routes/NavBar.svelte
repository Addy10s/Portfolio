<script lang="ts">
import { resolve } from '$app/paths';
</script>
<nav
	id="global-navbar"
	class="group bg-ctp-surface1 text-ctp-subtext1 *:text-shadow-ctp-base z-100 mx-auto table content-center space-x-0 rounded-xl px-2 py-1 text-center text-[4vw] shadow-2xl *:rounded-md *:px-3 *:py-1 *:align-middle lg:rounded-[3rem] lg:text-[3.5rem]"
>
	<a
		href={resolve("/")}
		class="group text-ctp-text align-middle text-[5vw] font-black text-nowrap lg:text-[6rem]"
	>
		<b> Addy Tennies </b></a
	>
	<br class="pointer-fine:lg:hidden" />

	<a
		href={resolve("/projects")}
		class=" text-nowrap opacity-100 transition-opacity duration-300 ease-out pointer-fine:lg:opacity-0 pointer-fine:lg:group-hover:opacity-100"
		><b> My Projects </b></a
	>

	<a
		href={resolve("/blog")}
		class="transition-opacity duration-300 ease-out group-hover:opacity-100 pointer-fine:lg:opacity-0"
		><b> Blog </b></a
	>
	<a
		href={resolve("/about")}
		class="transition-opacity duration-300 ease-out group-hover:opacity-100 pointer-fine:lg:opacity-0"
		><b> About </b></a
	>
	<a
		href={resolve("/88x31")}
		class="transition-opacity duration-300 ease-out group-hover:opacity-100 pointer-fine:lg:opacity-0"
		><b> 88x31s </b></a
	>
</nav>
