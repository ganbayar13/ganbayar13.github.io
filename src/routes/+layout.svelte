<script>
	import '../app.css';
	import Download from '../lib/download.svelte';

	import Footer from './Footer.svelte';
	import Menu from './Menu.svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	const fullname = data.firstname + ' ' + data.lastname;
</script>

<svelte:head>
	<title>ganbayar13</title>
	<meta name="description" content="Official website of Ganbayar Batkhishig." />
</svelte:head>

<div class="body">
	<div class="container">
		<aside class="side">
			<div class="w-full flex flex-col space-y-10 md:sticky md:top-32">
				<div class="pl-10 flex flex-col items-center space-y-2">
					<div class="group image rounded-full w-32 h-32 overflow-hidden border-2 border-white">
						<img
							src="https://avatars.githubusercontent.com/u/8615067?s=128&v=4"
							class="object-cover w-full h-full rounded-full  transition-all"
							alt="profile"
						/>
					</div>

					<div class="w-full uppercase text-2xl text-white text-center leading-5 truncate">
						<span class="font-bold">{data.firstname}</span>&nbsp;<span class="font-light"
							>{data.lastname}</span
						><br /><span class="text-white/50 text-sm lowercase">@{data.username}</span>
					</div>
				</div>
				<div class="pl-10 w-full hidden md:block">
					<hr class="border-white/20 border-dashed" />
				</div>
				<div>
					<Menu />
				</div>
				<div class="pl-10 w-full hidden md:block">
					<hr class="border-white/20 border-dashed" />
				</div>
				<div class="px-10 w-full hidden md:block">
					<Download data={data} />
				</div>
			</div>
		</aside>
		<main class="main">
			<div class="card">
				<div class="content selection:text-white selection:bg-black">
					<slot />
				</div>
			</div>
		</main>
	</div>
</div>

<style lang="scss">
	div.body {
		@apply relative flex flex-grow bg-gray-300;
		&::before {
			content: '';
			@apply absolute block;
			@apply top-0 right-0 left-0 h-96;
			// @apply bg-gradient-to-b from-cyan-600 to-purple-700;
			@apply bg-black;
		}
		& > .container {
			@apply mx-auto z-10 flex flex-col max-w-4xl px-4 pb-5;
		}
		@screen md {
			&::before {
				@apply right-auto h-auto bottom-0 w-1/2 bg-fixed;
			}
			& > .container {
				@apply flex-row px-5 pb-0;
			}
		}
	}
	.main {
		@apply bg-gray-300 w-full relative;
		@screen md {
			@apply w-3/5 py-32 min-h-screen;
		}
	}
	.side {
		@apply w-full pt-10;
		@screen md {
			@apply pt-32 pb-10 w-2/5;
			@apply min-h-screen;
		}
	}
	.card {
		@apply px-5 py-10 bg-white rounded-b-3xl;
		@screen md {
			@apply rounded-b-none rounded-r-3xl h-full;
			min-height: 36rem;
		}
	}
</style>
