<script>
	import { currentHash } from './../stores';
	import { inview } from 'svelte-inview';
	import LinkedinButton from '$lib/buttons/linkedinButton.svelte';
	import FacebookButton from '$lib/buttons/facebookButton.svelte';
	import GithubButton from '$lib/buttons/githubButton.svelte';
	import TwitterButton from '$lib/buttons/twitterButton.svelte';
	import InstagramButton from '$lib/buttons/instagramButton.svelte';
	import SteamButton from '$lib/buttons/steamButton.svelte';
	import Divider from '../lib/divider.svelte';
	import RadarChart from '../lib/RadarChart.svelte';
	import moment from 'moment';
	import Timeline from '../lib/Timeline.svelte';
	import colors from 'tailwindcss/colors';
	import BarChart from '../lib/BarChart.svelte';
	import Timeline2 from '../lib/Timeline2.svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	const skills = [
		'HTML',
		'CSS',
		'Javascript',
		'Java',
		'PHP',
		'Kotlin',
		'Python',
		'Dart',
		'Ruby',
		'C++',
		'C#',
		'Basic',
		'Actionscript',
		'MySQL',
		'Postgres',
		'MongoDB',
		'SQLite',
		'Typescript',
		'Nodejs',
		'Sass',
		'Flutter',
		'Vue',
		'Angular',
		'Svelte',
		'React',
		'Ktor',
		'Django',
		'Ruby on Rails',
		'Firebase',
		'Strapi',
		'Vuetify',
		'Tailwind CSS',
		'Bootstrap CSS',
		'GIT',
		'Postman',
		'DBeaver',
		'PuTTY',
		'Figma',
		'Adobe XD',
		'Adobe Photoshop',
		'Visual Studio',
		'Visual Studio Code',
		'Android Studio',
		'Xcode'
	];

	const skillChartData = {
		labels: ['Front-end', 'Back-end', 'Design (UI & UX)', 'Databases', 'Mobile App', 'SEO'],
		datasets: [
			{
				label: 'Point',
				pointBackgroundColor: colors.gray[600],
				pointBorderColor: colors.gray[600],
				pointHoverBackgroundColor: [
					colors.blue[400],
					colors.purple[600],
					colors.red[500],
					colors.orange[400],
					colors.indigo[500],
					colors.green[500]
				],
				pointHoverBorderColor: [
					colors.blue[400],
					colors.purple[600],
					colors.red[500],
					colors.orange[400],
					colors.indigo[500],
					colors.green[500]
				],
				backgroundColor: [
					colors.blue[400],
					colors.purple[600],
					colors.red[500],
					colors.orange[400],
					colors.indigo[500],
					colors.green[500]
				],
				pointBorderWidth: 0,
				borderColor: colors.gray[400],
				borderWidth: 1,
				radius: 8,
				hoverRadius: 14,
				data: [9, 5, 7, 4, 5, 8],
				spanGaps: true
			}
		]
	};

	const skillChartOptions = {
		scales: {
			r: {
				min: 0,
				max: 10
				// ticks: {
				// 	callback: function (value, index, ticks) {
				// 		return value * 10 + '%';
				// 	}
				// }
			}
		},
		plugins: {
			legend: {
				display: false
			},
			title: {
				display: true,
				text: 'Coding'
			},
			tooltip: {
				mode: 'nearest'
			}
		}
	};

	const languageChartData = {
		labels: ['Reading', 'Writing', 'Speaking'],
		datasets: [
			{
				label: 'English',
				backgroundColor: colors.green[400],
				borderColor: colors.green[400],
				borderWidth: 0,
				data: [3, 2, 1]
			},
			{
				label: 'Türkçe',
				backgroundColor: colors.red[400],
				borderColor: colors.red[400],
				borderWidth: 0,
				data: [1, 1, 1]
			},
			{
				label: '日本語',
				backgroundColor: colors.blue[400],
				borderColor: colors.blue[400],
				borderWidth: 0,
				data: [1, 0, 0]
			},
			{
				label: 'Mongolian',
				backgroundColor: colors.orange[400],
				borderColor: colors.orange[400],
				borderWidth: 0,
				data: [4, 4, 4]
			}
		]
	};

	const languageChartOptions = {
		indexAxis: 'x',
		scales: {
			y: {
				max: 4,
				min: 0,
				ticks: {
					callback: function (value, index, ticks) {
						switch (value) {
							case 1:
								return 'Beginner';
							case 2:
								return 'Intermediate';
							case 3:
								return 'Advanced';
							case 4:
								return 'Native';
						}
					}
				}
			}
		},
		plugins: {
			legend: {
				display: true,
				position: 'bottom'
			},
			title: {
				display: true,
				text: 'Languages'
			},
			tooltip: {
				mode: 'index'
			}
		}
	};

	const inviewOptions = {
		rootMargin: '-30% 0px'
	};

	const age = moment().diff(data.birthday, 'year');

	const inView = (i) => currentHash.set(i);
</script>

<section id="about" use:inview={inviewOptions} on:enter={() => inView(0)}>
	<h2 class="text-4xl text-black font-black uppercase">About</h2>
	<p class="text-justify mt-3">
		Hey, my name is <b class="font-semibold">{data.firstname} {data.lastname}</b> and I use
		<b class="font-semibold">{data.username}</b> as my nickname across social medias. I enjoy creating things
		that live on the internet. My interest in web development started back in 2008 when I decided to
		try creating my own website on uCoz CMS — turns out hacking template taught me a alot about HTML,
		CSS and Javascript.
	</p>
	<p class="text-justify mt-3">
		Fast-forward to today, and I've had the privilege of working at an media agency, a start-up, and
		a international huge corporation. Currently, I am working as software engineer at
		<a href="https://mirai-technologies.com" target="_blank" class="underline font-semibold"
			>Mirai Technologies LLC</a
		>.
	</p>
	<p class="text-justify mt-3">
		Outside of work, I'm just a dad. In my spare time, I enjoy playing video games. Also, I like
		sports such as basketball, football, ping-pong, skiing, etc. Recently, I have become interested
		in photography.
	</p>
	<div class="my-5">
		<Divider text="Basic information" />
	</div>
	<div class="columns-2">
		<div>Fullname: <b class="font-semibold">Ganbayar Batkhishig</b></div>
		<div>Nationality: <b class="font-semibold">Mongolia</b></div>
		<div>Age: <b class="font-semibold">{age}</b></div>
		<div>Gender: <b class="font-semibold capitalize">{data.gender}</b></div>
		<div>Marital status: <b class="font-semibold">Married</b></div>
	</div>
</section>

<section id="skills" class="mt-20" use:inview={inviewOptions} on:enter={() => inView(1)}>
	<h2 class="text-4xl text-black font-black uppercase">Skills</h2>
	<p class="mt-3">
		There are some list of coding languages, frameworks and tools I know that I've used at least
		once before.
	</p>
	<div class="flex gap-2 flex-wrap mt-3">
		{#each skills as skill}
			<div class="bg-gray-300 px-2 py-1 rounded-md text-sm" title={skill}>{skill}</div>
		{/each}
	</div>

	<div class="mt-10">
		<Divider text="Work experiences" />
	</div>
	<div class=" mt-3 pl-3">
		<Timeline />
	</div>

	<div class="mt-10">
		<Divider text="Infographics" />
	</div>
	<p class="mt-3">
		I have worked on many projects in many companies. Based on my experience, I've rated my skills
		below on a scale of 0-10 as a chart.
	</p>
	<div><RadarChart data={skillChartData} options={skillChartOptions} /></div>
	<p class="mt-3">
		The chart below shows my language skills. Although my language skills are not very good, but I
		am constantly trying to improve.
	</p>
	<div><BarChart data={languageChartData} options={languageChartOptions} /></div>
</section>

<section id="achievements" class="mt-20" use:inview={inviewOptions} on:enter={() => inView(2)}>
	<h2 class="text-4xl text-black font-black uppercase">Achievements</h2>
	<p class="mt-3">A list of my best remembered achievements</p>
	<div class="mt-3 pl-3">
		<Timeline2 />
	</div>
</section>

<section id="contact" class="mt-20" use:inview={inviewOptions} on:enter={() => inView(3)}>
	<h2 class="text-4xl text-black font-black uppercase">Contact</h2>
	<p class="text-justify mt-3">
		Although I'm not currently looking for any new opportunities, my inbox is always open. Whether
		you have a question or just want to say hi, I'll try my best to get back to you!
	</p>
	<div class="my-6" />
	<div class="grid grid-cols-1 gap-5">
		<div>
			<div class="flex space-x-3 items-center">
				<div class="flex-none text-green-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6"
					>
						<path
							fill-rule="evenodd"
							d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="grow">
					<a href="tel:+976-9936-7702" class="underline font-semibold">+976 9936-7702</a>
				</div>
			</div>
		</div>
		<div>
			<div class="flex space-x-3 items-center">
				<div class="flex-none text-orange-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6"
					>
						<path
							d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
						/>
						<path
							d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
						/>
					</svg>
				</div>
				<div class="grow">
					<a href="mailto:ganbayar13@gmail.com" class="underline font-semibold"
						>ganbayar13@gmail.com</a
					>
				</div>
			</div>
		</div>
		<div>
			<div class="flex space-x-3 items-center">
				<div class="flex-none text-red-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6"
					>
						<path
							fill-rule="evenodd"
							d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="grow font-semibold">Somewhere in Ulaanbaatar, Mongolia</div>
			</div>
		</div>
	</div>

	<div class="mt-10">
		<Divider text="Social Networks" />
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
		<div>
			<GithubButton link={data.social.github} full />
		</div>
		<div>
			<LinkedinButton link={data.social.linkedin} full />
		</div>
		<div>
			<FacebookButton link={data.social.facebook} full />
		</div>
		<div>
			<TwitterButton link={data.social.twitter} full />
		</div>
		<div>
			<InstagramButton link={data.social.instagram} full />
		</div>
		<div>
			<SteamButton link={data.social.steam} full />
		</div>
	</div>
</section>
