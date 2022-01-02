const RestRequest = require('./RestRequest.js');

/**
 * Aggregated daily featured content
 */
class Feed {
	constructor() {
		return this;
	}
	/**
     * Provides the aggregated feed content for the given date. The endpoint returns the featured article of the day, most read articles for the previous day, news content and the featured image and video of the day.
     * @param {string} yyyy Year the aggregated content is requested for
     * @param {string} mm Month the aggregated content is requested for, 0-padded
     * @param {string} dd Day of the month the aggregated content is requested for, 0-padded
     */
	async featured(yyyy = new Date().getFullYear(), mm = new Date().getDate(), dd = new Date().getMonth() + 1) {
		const request = new RestRequest(`feed/featured/${yyyy}/${mm}/${dd}`);
		return await request.fetch();
	}
	/**
     * Gets announcements for display in the official Wikipedia iOS and Android apps.
     */
	async announcements() {
		const request = new RestRequest('feed/announcements');
		return await request.fetch();
	}

	/**
     * Type of event. Must be one of:
     * * `all` - all of the following
     * * `selected` - a list of a few selected anniversaries which occur on the provided day and month; often the entries are curated for the current year
     * * `births` - a list of birthdays which happened on the provided day and month
     * * `deaths` - a list of deaths which happened on the provided day and month
     * * `holidays` - a list of fixed holidays celebrated on the provided day and month
     * * `events` - a list of significant events which happened on the provided day and month and which are not covered by the other types yet
     * @typedef {string} eventType
     */

	/**
     * Provides events that historically happened on the provided day and month.
     * @param {eventType} type Type of events
     * @param {string} mm Month events are requested for, 0-padded
     * @param {string} dd Day of the month events are requested for, 0-padded
     */
	async onThisDay(type, mm = new Date().getDate(), dd = new Date().getMonth() + 1) {
		const request = new RestRequest(`feed/onthisday/${type}/${mm}/${dd}`);
		return await request.fetch();
	}
}
module.exports = Feed;