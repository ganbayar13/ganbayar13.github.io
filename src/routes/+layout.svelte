<script>
	import '../app.css';
	import Button from '$lib/button.svelte';
	export const ssr = false;
</script>

<main class="main bg-gradient-to-b from-purple-300 to-purple-600 grid place-items-center h-screen">
	<div
		class="card bg-white flex flex-col items-center justify-center p-4 pt-8 shadow-xl rounded-2xl w-96"
	>
		<div class="image mx-auto rounded-full w-32 h-32 bg-gray-200 overflow-hidden">
			<img src="/images/me.jfif" class="object-cover w-full h-full" alt="profile" />
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
		<div class="w-full text-sm text-gray-500 mt-8">
			<p>Follow me on</p>
		</div>

		<div class="w-full mt-2">
			<Button
				text="Github"
				icon="github"
				link="https://github.com/ganbayar13"
				color="#24292F"
				full="true"
			/>
		</div>
		<div class="w-full mt-2">
			<Button
				text="Facebook"
				icon="facebook"
				link="https://fb.com/ganbayar13"
				color="#3b5998"
				full="true"
			/>
		</div>
		<div class="w-full mt-2">
			<Button
				text="Twitter"
				icon="twitter"
				link="https://twitter.com/ganbayar13_"
				color="#1da1f2"
				full="true"
			/>
		</div>
	</div>
</main>
