<script>
	const items = [
		{
			company: 'Mirai Technologies LLC',
			startDate: '2022/01',
			endDate: 'Today',
			position: 'Software Engineer',
			description:
				"The company established in 2022 with the investment of Shinmei Corporation of Japan. The company's field of activity is outsourcing AI development.",
			isCurrent: true,
			website: 'https://mirai-technologies.com/'
		},
		{
			company: '2nd Community Systems LLC',
			startDate: '2020/09',
			endDate: '2021/12',
			position: 'Software Engineer',
			description:
				'It is Mongolian outsourcing company with the investment of 2nd Community LLC of Japan.',
			isCurrent: false,
			website: 'https://www.corp.2nd-community.com/'
		},
		{
			company: 'Ezpay LLC',
			startDate: '2020/01',
			endDate: '2020/06',
			position: 'Front-end Developer',
			description: 'Ezpay LLC is a company sells POS(point of sell) devices in Mongolia.',
			isCurrent: false,
			website: 'https://ezpay.mn/'
		},
		{
			company: 'GeniuneCPro LLC',
			startDate: '2018/09',
			endDate: '2019/12',
			position: 'Lead Programmer',
			description: 'The company develops software.',
			isCurrent: false
		},
		{
			company: 'Interactive Systems LLC',
			startDate: '2014/06',
			endDate: '2017/12',
			position: 'Software Engineer',
			description: 'The company develops embedded system.',
			isCurrent: false
		}
	];
</script>

<ol class="relative border-l border-gray-200 ">
	{#each items as item, i}
		<li class="ml-6 {i + 1 !== items.length && 'mb-10'}">
			<span
				class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white"
			>
				<svg
					aria-hidden="true"
					class="w-3 h-3 text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
						clip-rule="evenodd"
					/></svg
				>
			</span>
			<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
				{item.position} at {item.company}
				{#if item.isCurrent}<span
						class="bg-blue-100 text-blue-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3"
						>Current</span
					>{/if}
			</h3>
			<time class="block mb-2 text-sm font-normal leading-none text-gray-400"
				>{item.startDate} - {item.endDate}</time
			>
			<p class="ext-base font-normal text-gray-500">
				{item.description}
			</p>
			{#if item.website}
				<a
					target="_blank"
					href={item.website}
					class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 mt-4"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-3 h-3 mr-1"
					>
						<path
							d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
						/>
						<path
							d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
						/>
					</svg>Website
				</a>
			{/if}
		</li>
	{/each}
</ol>
