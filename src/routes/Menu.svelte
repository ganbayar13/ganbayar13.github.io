<script>
	import { currentHash } from './../stores';
	let current;

	currentHash.subscribe((value) => {
		current = value;
	});
	let items = [
		{
			title: 'About',
			subtitle: 'Basic informations about me',
			url: 'about'
		},
		{
			title: 'Skills',
			subtitle: 'What do I know?',
			url: 'skills'
		},
		{
			title: 'Achievements',
			subtitle: 'My successes',
			url: 'achievements'
		},
		{
			title: 'Contact',
			subtitle: 'Contact me or follow on socials',
			url: 'contact'
		}
	];

	/**
	 * @param {{ preventDefault: () => void; currentTarget: any; }} event
	 */
	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			// @ts-ignore
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<ul class="menu">
	{#each items as item, index}
		<li class="menu-item">
			<a
				href="#{item.url}"
				class="menu-item-link"
				class:active={index === current}
				on:click={handleAnchorClick}
			>
				<div>
					<p class="title"><span class="hidden md:inline">{index + 1}. </span>{item.title}</p>
					<p class="subtitle">{item.subtitle}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul.menu {
		@apply w-full list-none flex justify-between;
		@screen md {
			@apply block px-0;
		}
		& > li.menu-item {
			@apply relative w-full;
			& > a.menu-item-link {
				@apply block py-3 px-5 w-full rounded-t-xl text-center text-white;
				@screen md {
					@apply py-4 rounded-none rounded-l-2xl text-left;
				}
				& > div {
					@apply relative pt-3;
					@screen md {
						@apply pt-0 pl-5;
					}
					&::after {
						@apply block absolute top-0 right-0 left-0 h-1 rounded-full bg-transparent;
						content: '';
						@screen md {
							@apply right-auto bottom-0 h-auto w-1.5;
						}
					}
					& > .title {
						@apply text-sm uppercase font-bold;
						@screen md {
							@apply text-lg;
						}
					}
					& > .subtitle {
						@apply text-sm truncate hidden text-white/50;
						@screen md {
							@apply block;
						}
					}
				}
				&:hover {
					@apply bg-white/10;
					& > div::after {
						@apply bg-white;
					}
				}

				&.active {
					@apply text-black bg-white;
					&::before,
					&::after {
						@apply block absolute w-5 h-5;
						content: '';
					}
					&::before {
						@apply -left-5 bottom-0 rotate-90;
						background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M0 0 Q20 0 20 20 L20 0Z" /></svg>');
					}
					&::after {
						@apply -right-5 bottom-0 rotate-90;
						background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M0 20 Q20 20 20 0 L20 20Z" /></svg>');
					}
					& > div {
						& > .subtitle {
							@apply text-black/75;
						}
						&::after {
							@apply bg-orange-500 bg-gradient-to-r from-orange-500 to-yellow-500;
						}
					}

					@screen md {
						&::before {
							@apply left-auto -bottom-5 right-0 rotate-0;
						}
						&::after {
							@apply left-auto -top-5 right-0 rotate-0;
						}
						& > div::after {
							@apply bg-gradient-to-t;
						}
					}
				}
			}
			&:first-child > a.menu-item-link::before {
				@apply hidden;
				@screen md {
					@apply block;
				}
			}
			&:last-child > a.menu-item-link::after {
				@apply hidden;
				@screen md {
					@apply block;
				}
			}
		}
	}
</style>
