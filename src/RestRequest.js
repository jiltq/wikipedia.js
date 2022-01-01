const rest_api_url = 'https://en.wikipedia.org/api/rest_v1/';
const Request = require('./Request');

/**
 * Represents a request to the Wikipedia REST API
 * @extends {Request}
 */
class RestRequest extends Request {
	constructor(path) {
		super(`${rest_api_url}${path}`);
	}
}
module.exports = RestRequest;