# wikipedia.js
![](https://img.shields.io/npm/v/@jiltq/wikipedia.js.svg)
![](https://img.shields.io/npm/dt/@jiltq/wikipedia.js.svg)

## About
wikipedia.js is a lightweight [Node.js](https://nodejs.org) module that allows you to easily interact with the [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/#/)

- Object-oriented
- Utilizes ES6 features

## Installation
```sh-session
npm i @jiltq/wikipedia.js
yarn add @jiltq/wikipedia.js
pnpm add @jiltq/wikipedia.js
```

## Features

- Fetch page content in different formats
- Fetch aggregated daily featured content
- (COMING SOON) Fetch mobile-friendly page content
- Extensive documentation

## Example usage
To get a summary of the movie *Shrek*:

```js
const wiki = require('@jiltq/wikipedia.js');

(async () => {
    const page = new wiki.Page('Shrek');
    const summary = await page.summary();
    
    console.log(summary);
})();
```

## Example output

```js
{
    type: 'standard',
    title: 'Shrek',
    displaytitle: '<i>Shrek</i>',
    namespace: { id: 0, text: '' },
    wikibase_item: 'Q483815',
    titles: { canonical: 'Shrek', normalized: 'Shrek', display: '<i>Shrek</i>' },
    pageid: 18717177,
    thumbnail: {
        source: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Shrek.jpg/218px-Shrek.jpg',
        width: 218,
        height: 320
    },
    originalimage: {
        source: 'https://upload.wikimedia.org/wikipedia/en/3/39/Shrek.jpg',
        width: 220,
        height: 323
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1061043482',
    tid: '751c5fb0-691b-11ec-8473-cb088b6620a5',
    timestamp: '2021-12-19T08:17:45Z',
    description: '2001 animated film directed by Andrew Adamson and Vicky Jenson',
    description_source: 'local',
    content_urls: {
        desktop: {
            page: 'https://en.wikipedia.org/wiki/Shrek',
            revisions: 'https://en.wikipedia.org/wiki/Shrek?action=history',
            edit: 'https://en.wikipedia.org/wiki/Shrek?action=edit',
            talk: 'https://en.wikipedia.org/wiki/Talk:Shrek'
        },
        mobile: {
            page: 'https://en.m.wikipedia.org/wiki/Shrek',
            revisions: 'https://en.m.wikipedia.org/wiki/Special:History/Shrek',
            edit: 'https://en.m.wikipedia.org/wiki/Shrek?action=edit',
            talk: 'https://en.m.wikipedia.org/wiki/Talk:Shrek'
        }
    },
    extract: 'Shrek is a 2001 American computer-animated comedy film loosely based on the 1990 fairy tale picture book of the same name by William Steig. Directed by Andrew Adamson and Vicky Jenson in their directorial debuts, it stars Mike Myers, Eddie Murphy, Cameron Diaz, and John Lithgow as the voices of the lead characters. The film parodies other fairy tale adaptations, primarily aimed at animated Disney films. The story follows the titular Shrek (Myers), an ogre who finds his swamp overrun by fairy tale creatures who have been banished by the corrupt Lord Farquaad (Lithgow) aspiring to be king. Shrek makes a deal with Farquaad to regain control of his swamp in return for rescuing Princess Fiona (Diaz), whom Farquaad intends to marry. With the help of Donkey (Murphy), Shrek embarks on his quest but soon falls in love with the princess, who is hiding a secret that will change his life forever.',
    extract_html: '<p><i><b>Shrek</b></i> is a 2001 American computer-animated comedy film loosely based on the 1990 fairy tale picture book of the same name by William Steig. Directed by Andrew Adamson and Vicky Jenson in their directorial debuts, it stars Mike Myers, Eddie Murphy, Cameron Diaz, and John Lithgow as the voices of the lead characters. The film parodies other fairy tale adaptations, primarily aimed at animated Disney films. The story follows the titular Shrek (Myers), an ogre who finds his swamp overrun by fairy tale creatures who have been banished by the corrupt Lord Farquaad (Lithgow) aspiring to be king. Shrek makes a deal with Farquaad to regain control of his swamp in return for rescuing Princess Fiona (Diaz), whom Farquaad intends to marry. With the help of Donkey (Murphy), Shrek embarks on his quest but soon falls in love with the princess, who is hiding a secret that will change his life forever.</p>'
}
```