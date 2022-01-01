const fetch = require('node-fetch');

const notErrorTypes = ['standard', 'disambiguation'];

/**
 * Represents a request to the Wikipedia API
 */
class Request {
	constructor(path) {
		this.path = path;
	}
	async fetch() {
		const result = await fetch(this.path).then(response => response.json());
		if (!notErrorTypes.includes(result.type)) throw new Error(`${result.detail} (${this.path})`);
		return result;
	}
}
module.exports = Request;