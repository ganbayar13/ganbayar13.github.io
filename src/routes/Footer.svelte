<script>
	let now = new Date(),
		year;
	year = now.getFullYear();
</script>

<footer class="footer bg-black text-white p-5 text-sm">
	<div class="lg:container lg:mx-auto">
		<div class="sm:flex sm:justify-between">
			<div>
				Built with <a href="https://svelte.dev/" target="_blank" class="font-bold underline"
					>Svelte</a
				>,
				<a href="https://tailwindcss.com/" target="_blank" class="font-bold underline"
					>Tailwind CSS</a
				>,
				<a href="https://pages.github.com/" target="_blank" class="font-bold underline"
					>Github Pages</a
				> and more...
			</div>
			<div class="sm:order-first">Copyright © {year}. Made with <span title="love">❤️</span></div>
		</div>
	</div>
</footer>
