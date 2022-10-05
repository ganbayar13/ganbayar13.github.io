<script>
	import '../app.css';
	import FacebookButton from '$lib/facebookButton.svelte';
	import GithubButton from '$lib/githubButton.svelte';
	import TwitterButton from '$lib/twitterButton.svelte';
	export const ssr = false;
</script>

<main class="main bg-gradient-to-b from-yellow-300 to-yellow-600 grid place-items-center h-screen">
	<div
		class="card bg-white flex flex-col items-center justify-center p-4 pt-8 shadow-xl rounded-2xl w-96"
	>
		<div class="image mx-auto rounded-full w-32 h-32 bg-gray-200 overflow-hidden">
			<img src="https://avatars.githubusercontent.com/u/8615067?s=128&v=4" class="object-cover w-full h-full" alt="profile" />
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
			<GithubButton link="https://github.com/ganbayar13" full />
		</div>
		<div class="w-full mt-2">
			<FacebookButton link="https://fb.com/ganbayar13" full />
		</div>
		<div class="w-full mt-2">
			<TwitterButton link="https://twitter.com/ganbayar13_" full />
		</div>
	</div>
</main>
