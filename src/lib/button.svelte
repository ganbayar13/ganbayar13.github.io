<script>
	export let type = 'link';
	export let link = '#';
	export let full = false;
	export let className;
</script>

{#if type === 'button' || type === 'submit'}
	<button {type}>
		<slot />
	</button>
{:else}
	<a
		href={link}
		target="_blank"
		class:w-full={full}
		class="{className} group text-white/80 hover:text-white/100 inline-flex focus:ring-4 focus:outline-none font-medium rounded-lg py-2.5 px-4 transition duration-300 ease-in-out overflow-hidden"
	>
		<span class="icon sm:group-hover:scale-[4] sm:group-hover:-rotate-45 sm:group-hover:opacity-20 sm:transition">
			<slot name="icon" />
		</span>
		<span class="border-r border-white/10 mx-4 -my-1 sm:group-hover:opacity-0 sm:transition-opacity" />
		<span class="text sm:group-hover:-translate-x-4 sm:group-hover:scale-125  sm:transition-transform">
			<slot name="text" />
		</span>
	</a>
{/if}
