<h1 align="center" title="Vite Helper">
  Simple Trello
</h1>

<h2 align="center">Simple Trello makes easy implementation of trello api in your project.</h2>

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)
[![npm version](https://img.shields.io/npm/v/simple-trello.svg?style=flat-square)](https://www.npmjs.com/package/simple-trello)
[![npm downloads](https://img.shields.io/npm/dm/simple-trello.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog&from=2015-08-01) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section --> [![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)](#contributors-) <!-- ALL-CONTRIBUTORS-BADGE:END -->

<h4 align="center">
 <a href="#-how-use">:rocket: How use</a> •
 <a href="#️-tools">🛠️ Tools</a> •
 <a href="#-contributing">:pencil: Contributing</a> •
 <a href="#-thanks">:adult: Thanks</a> •
 <a href="#-license">:page_facing_up: License</a>
</h4>

<br>

# :rocket: How use

Instalation:

```bash
npm install simple-trello
#or
yarn add simple-trello
```

# 🛠️ Tools

For start using the `simple-trello` you need to create a trello api key and token. You can create it [here](https://trello.com/power-ups/admin).

First step is create a instance of `SimpleTrello` class passing your key and token.

```javascript
// import libary
import { SimpleTrello } from 'simple-trello';

// create instance
const simpleTrello = new SimpleTrello({
  key: "your-key",
  token: "your-token",
});
```

after that you can use the methods to interact with trello api.

## Create card

```javascript
// create new card
const card = await simpleTrello.createCard({ listId, title, description });
```

## Get boards
  
```javascript
// get all boards
const boards = await simpleTrello.getBoards();
```

## Get lists

```javascript
// get all lists from board
const lists = await simpleTrello.getLists({ boardId });
```

## Get cards

```javascript
// get all cards from list
const cards = await simpleTrello.getCards({ listId });
```

# 🧪 Tests

To run the tests you need to create a `.env` file in the root of the project with the following content:

```env
API_KEY=your-key
API_TOKEN=your-token
LIST_ID=your-list-id
BOARD_ID=your-board-id
```

After that you can run the tests with the following command:

```bash
npm run test
#or
yarn test
```

# 📝 Contributing

Your contribution to the `simple-trello` is essential for the evolution of the project, you can do it as follows:

- Open an [issue](https://github.com/wesleyara/simple-trello/issues) to clear doubts, report bugs or give ideas
- Open a [pull request](https://github.com/wesleyara/simple-trello/pulls) to give ideas for code improvement, implementation of new features and bug fixes

These are just some of the ways you can contribute to the project read the [CONTRIBUTING](https://github.com/wesleyara/simple-trello/blob/main/.github/CONTRIBUTING.md) for more information

# 🧑 Authors

<table>
  <tr>
    <td align="center"><a href="https://wesleyaraujo.dev/"><img src="https://avatars.githubusercontent.com/u/89321125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Araújo</b></sub></a><br /></td>
  </tr>
</table>

## ✨ Contributors

<table>
  <tr>
  </tr>
</table>

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# 📄 License

simple-trello is a open source project licensed as [MIT](LICENSE).