const fetch = require('node-fetch');

class Page {
	constructor() {
		return this;
	}
	async random(format) {
		const something = await fetch(`https://en.wikipedia.org/api/rest_v1/page/random/${format}`).then(response => response.json());
	}
}
module.exports = Page;