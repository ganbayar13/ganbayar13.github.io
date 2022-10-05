<script>
	import { jsPDF } from 'jspdf';

	/** @type {import('./$types').PageData} */
	export let data;

	function download() {
		const doc = new jsPDF();
		doc.text(data.username, 10, 10);
		doc.save('ganbayar.pdf');
	}
</script>

<button type="button" on:click={download}> Download PDF </button>
