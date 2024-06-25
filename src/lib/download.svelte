<script>
	import { jsPDF } from 'jspdf';
	export let data;

	function download() {
		const doc = new jsPDF();
		doc.text(data.username, 10, 10);
		doc.save('ganbayar.pdf');
	}
</script>

<button
	type="button"
	class="bg-white opacity-25 cursor-default px-4 py-2 w-full rounded-full shadow-lg uppercase text-black font-bold truncate"
>
	<span>Download Resume</span>
</button>
