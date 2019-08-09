# ember-emojipalette

To display an emoji palette for usage within your applications

view [demo](https://uchihamalolan.github.io/ember-emojipalette/) here.


## Installation

```bash
ember install ember-emojipalette
```

## Usage

- just import the component `emoji-palette` within your ember application
- `selectedEmoji` is binded to a property of the component in your application.
```htmlbars
{{emoji-palette selectedEmoji=emoji}}
```
### Preferences
- This addon by default displays category and does not allow infinite scroll
- if you wish not to display categories and allow infinite scrolls pass `hideCategory=true` to the `emoji-palette` component
Eg: 
```htmlbars
  {{ember-emojipalette selectedEmoji=emoji hideCategory=true}}
```

## About

- This addon uses unicode for rendering emojis, instead of using spritesheets
- Advantages are:
  - less size or network requests (since no requirement of image assets)
  - sharper images on increasing or decreasing the size of emoji (as they're basically glyphs)
  - Less dependencies
- Disadvantages:
  - Renders slightly different on different OS and browsers

## Installation

* `git clone git@github.com:uchihamalolan/ember-emojipalette.git`
* `cd ember-emojipalette`
* `npm install`

## Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

## Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## License

This project is licensed under the [MIT License](LICENSE.md).
