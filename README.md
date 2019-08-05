# ember-emojipalette

To display an emoji palette for usage within your applications

---

## Installation

```
ember install ember-emojipalette
```
---

## Usage

- just import the component `emoji-palette` within your ember application
- `selectedEmoji` is binded to a property of the component in your application.
```hbs
{{emoji-palette selectedEmoji=emoji}}
```

### Properties

if you want search options, pass `searchEnabled=true` to the component (false by default)
```hbs
{{emoji-palette selectedEmoji=emoji searchEnabled=true}}
```
---

## Installation

* `git clone git@github.com:uchihamalolan/ember-emojipalette.git`
* `cd ember-emojipalette`
* `npm install`

---

## Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

---

## Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

---

## Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

---

## License

This project is licensed under the [MIT License](LICENSE.md).
