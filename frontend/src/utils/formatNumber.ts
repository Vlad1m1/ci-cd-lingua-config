export function formatNumber(num: number): string {
	if (Math.abs(num) < 1000) {
		return num.toString();
	}
	
	const suffixes = ["", "k", "M", "B", "T"];
	const i = Math.floor(Math.log10(Math.abs(num)) / 3);
	const shortValue = (num / Math.pow(1000, i)).toFixed(i > 0 ? 1 : 0);
	
	return parseFloat(shortValue).toString() + suffixes[i];
}
