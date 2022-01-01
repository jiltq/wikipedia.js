const fetch = require('node-fetch');

class Page {
	constructor(name) {
		this.title = name;
		return this;
	}
	async fetch() {
		const { items } = await fetch(`https://en.wikipedia.org/api/rest_v1/page/title/${name}`).then(response => response.json());
		const [ revision ] = items;
		this.title = revision.title;

		const metadata = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${this.title}`).then(response => response.json());

		this.description = metadata.description;
		this.summary = metadata.extract;
		this.thumbnail = metadata.thumbnail;
	}
}
module.exports = Page;