# Tweeter

Tweeter is a simple single-page clone of Twitter which features HTML, CSS, JS, jQuery and AJAX front-end, as well as Node, Express and MongoDB back-end.

## Screenshots

The main page, where all the interesting stuff happens
![Main Page](https://github.com/kaichesterni/tweetr/blob/master/screenshots/main.png?raw=true)

The tweet composer, which can be toggled using the compose button
![Composer](https://github.com/kaichesterni/tweetr/blob/master/screenshots/compose.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at `localhost:8080`.
4. Go to `localhost:8080` in your browser.

## Features

Tweeter features some of the main features on Twitter. Users can use the composer to create 140-character-long tweets, which are displayed on the wall, along with their date of creation, and can be viewed by everyone. Upon hovering, tweets will be highlighted and share buttons are shown (flag, share, and like). As of the most recent update of Tweeter, there is no user login feature, which means placeholder usernames and user handles are generated for each tweet, and the share buttons currently do nothing. These features and more will be added in upcoming updates.

## Dependencies

- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [Chance](https://www.npmjs.com/package/chance)
- [Express JS](http://expressjs.com/)
- [MD5](https://www.npmjs.com/package/md5)
- [MongoDB](https://www.mongodb.com/)
- [Node JS](https://nodejs.org/)
