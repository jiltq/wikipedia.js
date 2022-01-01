const fetch = require('node-fetch');

/**
 * Represents a request to the Wikipedia API
 */
class Request {
	constructor(path) {
		this.path = path;
	}
	async fetch() {
		return await fetch(this.path).then(response => response.json());
	}
}
module.exports = Request;