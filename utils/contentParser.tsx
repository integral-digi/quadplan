// A simple parser for our ::mini-markup:: syntax
export const parseMiniMarkup = (text: string): string => {
	let html = text;

	// Headings
	html = html.replace(
		/::heading::([^\n]+)/g,
		(_match, content) =>
			`<h2 class="text-xl lg:text-3xl font-bold py-2">${content.trim()}</h2>`
	);

	// Italic
	html = html.replace(
		/::italic::([^\n]+)/g,
		(_match, content) =>
			`<em class="italic text-gray-300">${content.trim()}</em>`
	);

	// Bold
	html = html.replace(
		/::bold::([^\n:]+)/g,
		(_match, content) =>
			`<strong class="font-bold text-white">${content.trim()}</strong>`
	);

	// Blockquotes
	html = html.replace(
		/::blockquote::(.+?)(?=\n|$)/g,
		(_match, content) =>
			`<blockquote class="border-l-4 border-gray-400 pl-4 italic text-neutral-400 my-6">${content.trim()}</blockquote>`
	);

	// Lists
	html = html.replace(
		/::list::([\s\S]+?)(?=\n{2,}|$)/g,
		(_match, listBlock) => {
			const items: string = listBlock
				.split('\n')
				.map((line: string) => line.replace(/^- /, '').trim())
				.filter((line: string) => line)
				.map((item: string) => `<li class="ml-6 mb-2">${item}</li>`)
				.join('');
			return `<ul class="list-disc list-inside mb-6">${items}</ul>`;
		}
	);

	// Paragraphs
	html = html
		.split(/\n{2,}/)
		.map(chunk => {
			const trimmed = chunk.trim();
			if (/^<(h2|ul|blockquote|p|em|strong)/.test(trimmed)) {
				return trimmed;
			}
			return `<p class="py-4 text-lg text-white">${trimmed}</p>`;
		})
		.join('');

	return html;
}