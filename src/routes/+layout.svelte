<script>
	import '../app.css';
	import LinkedinButton from '$lib/buttons/linkedinButton.svelte';
	import FacebookButton from '$lib/buttons/facebookButton.svelte';
	import GithubButton from '$lib/buttons/githubButton.svelte';
	import TwitterButton from '$lib/buttons/twitterButton.svelte';
	import InstagramButton from '$lib/buttons/instagramButton.svelte';
	import SteamButton from '$lib/buttons/steamButton.svelte';
	import Footer from './Footer.svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	const fullname = data.firstname + ' ' + data.lastname;
</script>

<svelte:head>
	<title>{fullname}</title>
	<meta name="description" content="Official website of Ganbayar Batkhishig." />
</svelte:head>

<main
	class="main grid place-items-start sm:place-items-center p-5 sm:p-0 flex-grow"
>
	<div
		class="card bg-white flex flex-col items-center justify-center p-4 pt-8 shadow-xl rounded-2xl sm:w-96 w-full"
	>
		<div class="image mx-auto rounded-full w-32 h-32 bg-gray-200 overflow-hidden">
			<img
				src="https://avatars.githubusercontent.com/u/8615067?s=128&v=4"
				class="object-cover w-full h-full"
				alt="profile"
			/>
		</div>
		<div class="name text-gray-800 text-2xl font-medium mt-4">
			<p>{fullname}</p>
		</div>
		<div class="username text-gray-500">
			<p>@{data.username}</p>
		</div>
		<div class="description text-gray-700 mt-4">
			<p>Front-end developer 🤓</p>
		</div>
		<div class="w-full max-w-md space-y-8">
			<!-- <div>
				<slot />
			</div> -->
		</div>
		<div class="w-full text-sm text-gray-500 mt-8">
			<p>Follow me on</p>
		</div>
		<div class="w-full mt-2">
			<GithubButton link={data.social.github} full />
		</div>
		<div class="w-full mt-2">
			<LinkedinButton link={data.social.linkedin} full />
		</div>
		<div class="w-full mt-2">
			<FacebookButton link={data.social.facebook} full />
		</div>
		<div class="w-full mt-2">
			<TwitterButton link={data.social.twitter} full />
		</div>
		<div class="w-full mt-2">
			<InstagramButton link={data.social.instagram} full />
		</div>
		<div class="w-full mt-2">
			<SteamButton link={data.social.steam} full />
		</div>
	</div>
</main>
<Footer />
