<script>
	import '../app.css';
	export const ssr = false;
</script>

<main class="main bg-yellow-400 grid place-items-center h-screen">
	<div
		class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-1/4"
	>
		<div class="image mx-auto py-2 w-32">
			<img src="/images/me.jfif" class="rounded-full" alt="profile" />
		</div>
		<div class="name text-gray-800 text-2xl font-medium mt-4">
			<p>Ganbayar Batkhishig</p>
		</div>
		<div class="username text-gray-500">
			<p>@ganbayar13</p>
		</div>
		<div class="description text-gray-700 mt-4">
			<p>Front-end developer 🤓</p>
		</div>
		<div class="w-full max-w-md space-y-8">
			<div>
				<!-- <slot /> -->
			</div>
		</div>
		<div class="w-full mt-8">
			<button type="button" class="bg-blue-500 py-2 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
				<span>Follow</span>
			</button>
		</div>
	</div>
</main>
