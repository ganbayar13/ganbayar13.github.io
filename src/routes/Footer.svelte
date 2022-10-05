<script>
	let now = new Date(), year;
	year = now.getFullYear();
</script>

<footer>
	<div class="footer bg-black text-white p-5 text-sm">
		<div class="sm:flex sm:justify-between">
			<div>Copyright © {year}. Made with ❤️</div>
			<div />
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
		</div>
	</div>
</footer>
