<script>
	import { jsPDF } from 'jspdf';
	function download() {
		const doc = new jsPDF();

		doc.text('Hello world!', 10, 10);
		doc.save('a4.pdf');
	}
</script>

<button type="button" on:click={download}> Download PDF </button>
