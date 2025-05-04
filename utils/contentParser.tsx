export const parseMiniMarkup = (text: string): string => {
	let html = text;

	// Headings
	html = html.replace(
		/::heading::([^\n]+)/g,
		(_match, content) =>
			`<h2 class="text-xl lg:text-3xl font-bold py-4">${content.trim()}</h2>`
	);

	// Italic
	html = html.replace(
		/::italic::([^\n]+)/g,
		(_match, content) =>
			`<em class="italic text-lg text-gray-300">${content.trim()}</em>`
	);

	// Bold
	html = html.replace(
		/::bold::([^\n:]+)/g,
		(_match, content) =>
			`<strong class="font-bold text-lg text-white">${content.trim()}</strong>`
	);

	// Blockquotes
	html = html.replace(
		/::blockquote::(.+?)(?=\n|$)/g,
		(_match, content) =>
			`<blockquote class="border-l-4 border-gray-400 pl-4 italic text-lg text-neutral-400 my-6">${content.trim()}</blockquote>`
	);

	// Lists
	html = html.replace(
		/::list::([\s\S]+?)(?=\n{2,}|$)/g,
		(_match, listBlock) => {
			const items: string = listBlock
				.trim()
				.split('\n')
				.map((line: string) => line.replace(/^- /, '').trim())
				.filter((line: string) => line.length > 0)
				.map((item: string) => `<li class="pl-2 mb-2 text-white text-lg">${item}</li>`)
				.join('');
			return `<ul class="list-disc list-outside pl-6 mb-6">${items}</ul>`;
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
			return `<p class="py-6 text-lg text-white">${trimmed}</p>`;
		})
		.join('');

	return html;
};
