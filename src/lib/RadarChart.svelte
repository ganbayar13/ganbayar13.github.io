<script>
	import { Radar } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		PointElement,
		RadialLinearScale,
		LineElement
	} from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement);

	export let data, options;
</script>

<Radar {data} {options} />
