# THIS PROJECT IS ARCHIVED.<br>PLEASE CHEKOUT [emojinx/ember-emoji-picker](https://github.com/emojinx/ember-emoji-picker)


# ember-emojipalette

To display an emoji palette for usage within your applications

view [demo](https://uchihamalolan.github.io/ember-emojipalette/) here.


## Installation

```bash
ember install ember-emojipalette
# or
npm install ember-emojipalette
```

## Usage

- just import the component `emoji-palette` within your ember application
- `selectedEmoji` is binded to a property of the component in your application.
```htmlbars
{{emoji-palette selectedEmoji=emoji}}
```
### Preferences
- This addon by default displays category and does not allow infinite scroll

- if you wish not to display categories and allow infinite scrolls pass `hideCategories=true` to the `emoji-palette` component. (by default it is set to `false`) 
```htmlbars
  {{ember-emojipalette selectedEmoji=emoji hideCategories=true}}
```

- search facility can be enabled or disabled using `searchEnabled` attribute (by default it is set to `false`)
```htmlbars
  {{ember-emojipalette selectedEmoji=emoji searchEnabled=true}}
```

- if you wish not to have certain categories at all, you can use `excludeCategories` key to specify them. Value should be an array of category keys that you do not want to show.
```htmlbars
  {{ember-emojipalette selectedEmoji=emoji excludeCategories=excludeCategories}}
```
```javascript
  excludeCategories = ['people', 'flag']
  /** List of category keys
   * people
   * nature
   * food
   * activity
   * travel
   * object
   * symbol
   * flag
   */ 
```

- Some emojis might not render in old OS systems. So you can choose not to display emojis of that particular version altogeather, if you choose to.
```htmlbars
  {{ember emojipalette selectedEmoji=emoji emojiVersion="9"}}
```
[here](https://unicode.org/emoji/charts/emoji-versions.html) you can find more about emoji versions

- You can enable close on backdrop click by `closeOnBackdropClick=true`.
- `onClose` action can be used to perform the actions before closing the palette
```htmlbars
  {{ember emojipalette 
      selectedEmoji=emoji
      emojiVersion="9"
      closeOnBackdropClick=true
      onClose=(action "closeAction")
  }}
```

## About

- This addon uses unicode for rendering emojis, instead of using spritesheets
- Advantages are:
  - less size or network requests (since no requirement of image assets)
  - sharper images on increasing or decreasing the size of emoji (as they're basically glyphs)
  - Less dependencies
- Disadvantages:
  - Renders slightly different on different OS and browsers
  - Some emojis that are rendered in latest version of OS might not render in older versions of the same OS
  
## Future
- Optional use of emoji images using iamcal/emoji-data/
  - pruning emoji-json to have only neede info
  - or just importing background image position data from that
  - using (html data attributes and using them in css to set background position), no js involved...

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
