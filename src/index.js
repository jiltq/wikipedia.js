exports.RestRequest = require('./RestRequest.js');
exports.Page = require('./Page');
exports.Feed = require('./Feed');

/**
 * Returns a random Wikipedia page
 */
exports.randomPage = async function() {
	const request = new exports.RestRequest('page/random/title');
	const response = await request.fetch();

	return new exports.Page(response.items[0].title);
};