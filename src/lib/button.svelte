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
		class="{className} group text-white/70 hover:text-white/100 inline-flex focus:ring-4 focus:outline-none font-medium rounded-lg py-2.5 px-4 transition duration-300 ease-in-out overflow-hidden"
	>
		<span class="icon group-hover:scale-150 group-hover:rotate-6 transition">
			<slot name="icon" />
		</span>
		<span class="border-r border-white/10 mx-4 -my-1 group-hover:opacity-0 transition-opacity" />
		<span class="text group-hover:-translate-x-4 transition-transform">
			<slot name="text" />
		</span>
	</a>
{/if}
