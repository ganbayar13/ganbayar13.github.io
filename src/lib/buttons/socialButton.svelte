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
		class="{className} group text-white/80 hover:text-white/100 block focus:ring-4 focus:outline-none font-medium rounded-lg py-3 px-4 transition duration-300 ease-in-out overflow-hidden"
	>
		<div class="inline-flex align-middle items-start w-full divide-x divide-white/20 sm:group-hover:divide-white/0 transition-colors">
			<div
				class="icon mr-4 sm:group-hover:scale-[4] sm:group-hover:-rotate-45 sm:group-hover:opacity-20 sm:transition"
			>
				<slot name="icon" />
			</div>
			<div
				class="text sm:group-hover:-translate-x-4 sm:group-hover:scale-125  sm:transition-transform pl-4"
			>
				<slot name="text" />
			</div>
		</div>
	</a>
{/if}
