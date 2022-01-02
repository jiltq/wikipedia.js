# Feed

The Feed class represents the content you see on the front page of Wikipedia.

## Methods

### [featured(yyyy, mm, dd)](https://en.wikipedia.org/api/rest_v1/#/Feed/aggregatedFeed)

Provides the aggregated feed content for the given date. The method returns the featured article of the day, most read articles for the previous day, news content and the featured image and video of the day.

Stability: **unstable**

- yyyy - Year
- mm - Month
- dd - Day

### [announcements()](https://en.wikipedia.org/api/rest_v1/#/Feed/get_feed_announcements)

Gets announcements for display in the official Wikipedia iOS and Android apps.

Stability: **experimental**

### [onThisDay(type, mm, dd)](https://en.wikipedia.org/api/rest_v1/#/Feed/onThisDay)

Provides events that historically happened on the provided day and month.

Stability: **experimental**

- type - Type of event, must be one of: 
- mm - Month
- dd - Day