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
	 */
	async revisionMetadata(revision = null) {
		const request = new RestRequest(`page/title/${this.title}${revision ? `/${revision}` : ''}`);
		return await request.fetch();
	}
	/**
	 * Get HTML for a specific title/revision & optionally timeuuid.
	 * @param {number} [revision=null] The revision id
	 */
	async html(revision = null) {
		const request = new RestRequest(`page/html/${this.title}${revision ? `/${revision}` : ''}`);
		return await request.fetch();
	}
	/**
	 * Get data-parsoid metadata for a specific title/revision/tid.
	 * @param {number} revision The revision id
	 * @param {string} tid The revision's time id
	 */
	async parsoidMetadata(revision, tid) {
		const request = new RestRequest(`page/data-parsoid/${this.title}/${revision}/${tid}`);
		return await request.fetch();
	}
	/**
	 * Get the linter errors for a specific title/revision.
	 * @param {number} [revision=null] The revision id
	 */
	async linterErrors(revision = null) {
		const request = new RestRequest(`page/lint/${this.title}${revision ? `/${revision}` : ''}`);
		return await request.fetch();
	}
	/**
	 * Fetch the segmented content of a page
	 * @param {number} [revision=null] The revision id
	 */
	async segments(revision = null) {
		const request = new RestRequest(`page/lint/${this.title}${revision ? `/${revision}` : ''}`);
		return await request.fetch();
	}
	async summary() {
		const request = new RestRequest(`page/summary/${this.title}`);
		return await request.fetch();
	}
	async mediaFiles(revision = null) {
		const request = new RestRequest(`page/media-list/${this.title}${revision ? `/${revision}` : ''}`);
		return await request.fetch();
	}
	/**
	 * 
	 * @returns 
	 */
	async related() {
		const request = new RestRequest(`page/related/${this.title}`);
		return await request.fetch();
	}
	/**
	 * Renders the page content as PDF. Format and type are optional parameters and the default values are "a4" for format and "desktop" for type.
	 * @param {string} [format='a4'] PDF format
	 * @param {string} [type='desktop'] PDF type
	 */
	async pdf(format = 'a4', type = 'desktop') {
		const request = new RestRequest(`page/pdf/${this.title}/${format}/${type}`);
		return await request.fetch();
	}
};