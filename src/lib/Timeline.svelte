<script>
	const items = [
		{
			title: 'Mirai Technologies LLC',
			startDate: '2022/01',
			endDate: 'Today',
			description: 'Software Engineer',
			isCurrent: true
		},
		{
			title: '2nd Community Systems LLC',
			startDate: '2020/09',
			endDate: '2021/12',
			description: 'Software Engineer',
			isCurrent: false
		},
		{
			title: 'Ezpay LLC',
			startDate: '2020/01',
			endDate: '2020/6',
			description: 'Software Engineer',
			isCurrent: false
		},
		{
			title: 'GeniuneCPro LLC',
			startDate: '2018/09',
			endDate: '2019/12',
			description: 'Lead Programmer',
			isCurrent: false
		},
		{
			title: 'Interactive Systems LLC',
			startDate: '2014/06',
			endDate: '2016/12',
			description: 'Lead Programmer',
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
				{item.title}
				{#if item.isCurrent}<span
						class="bg-blue-100 text-blue-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3"
						>Current</span
					>{/if}
			</h3>
			<time class="block mb-2 text-sm font-normal leading-none text-gray-400"
				>{item.startDate} - {item.endDate}</time
			>
			<p class="text-base font-normal text-gray-500">
				{item.description}
			</p>
		</li>
	{/each}
</ol>
