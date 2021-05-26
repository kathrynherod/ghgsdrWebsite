# GHGSDR Adoptable Dogs

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ghgsdr`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

App is automatically deployed from github when main branch updated

## Working with the Petstablished API

Trying to develop locally using this API was a nightmare. After reading through countless stackOverflow articles, finally stumbled upon [this one.](https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors)

I created a heroku app with cors-anywhere installed, and used that as my proxy for the endpoint. It ended up looking like this:

* `https://<myApp>.herokuapp.com/https://petstablished.com/api/v2/public/pets?public_key=<myKey>&<myQueryParams>`

The payload coming back is a Uint8Array, and Ember handles that for me, but [here's a quick link](https://stackoverflow.com/questions/16725822/javascript-how-do-i-convert-uint8array-data-to-a-js-object) for how to handle conversion to JS object.


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
