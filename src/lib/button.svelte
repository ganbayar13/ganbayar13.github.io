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
		class="{className} block focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 transition duration-300 ease-in-out"
	>
		<span class="inline-flex items-center text-white">
			<slot />
		</span>
	</a>
{/if}
