<script>
	let now = new Date(),
		year;
	year = now.getFullYear();
</script>

<footer class="footer text-sm mt-24 text-gray-500">
	<div>
		<div>
			Built with <a href="https://svelte.dev/" target="_blank" class="font-bold underline">Svelte</a
			>,
			<a href="https://tailwindcss.com/" target="_blank" class="font-bold underline">Tailwind CSS</a
			> and more...
		</div>
		<div>
			Hosted on <a href="https://pages.github.com/" target="_blank" class="font-bold underline"
				>Github Pages</a
			>.
		</div>
		<div class="sm:order-first">Copyright ©{year}. Made with <span title="love">❤️</span>.</div>
	</div>
</footer>
