const fetch = require('node-fetch');
const RestRequest = require('./RestRequest.js');

/**
 * Represents a Wikipedia page
 */
module.exports = class Page {
	constructor(title) {
		this.title = title.replace(' ', '_');
	}
	/**
	 * Returns the revision metadata for the given title. If a revision ID is provided, metadata for that revision is returned, otherwise the latest revision ID is assumed.
	 * @param {number} [revision=null] The revision id
	 * @returns
	 */
	async revisionMetadata(revision = null) {
		const request = new RestRequest(`page/title/${this.title}${revision ? `/${revision}` : ''}`);
		return await request.fetch();
	}
	/**
	 * Get HTML for a specific title/revision & optionally timeuuid.
	 * @param {number} [revision=null] The revision id
	 * @returns
	 */
	async html(revision = null) {
		const request = new RestRequest(`page/html/${this.title}${revision ? `/${revision}` : ''}`);
		return await request.fetch();
	}
	/**
	 * 
	 * @param {*} revision 
	 * @param {*} tid 
	 */
	async parsoidMetadata(revision, tid) {

	}
	/**
	 * Get the linter errors for a specific title/revision.
	 * @param {number} [revision=null] The revision id
	 * @returns
	 */
	async linterErrors(revision = null) {
		const request = new RestRequest(`page/lint/${this.title}${revision ? `/${revision}` : ''}`);
		return await request.fetch();
	}
	/**
	 * Fetch the segmented content of a page
	 * @param {number} [revision=null] The revision id
	 * @returns
	 */
	async segments(revision = null) {
		const request = new RestRequest(`page/lint/${this.title}${revision ? `/${revision}` : ''}`);
		return await request.fetch();
	}
	async summary() {
		const request = new RestRequest(`page/summary/${this.title}`);
		return await request.fetch();
	}
	async related() {
		const request = new RestRequest(`page/related/${this.title}`);
		return await request.fetch();
	}
};