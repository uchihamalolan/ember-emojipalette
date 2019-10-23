import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { later, debounce } from '@ember/runloop';

import { emojidex } from 'ember-emojipalette/utils/emojidex';
import { categoryIcons } from 'ember-emojipalette/utils/category-icons';

export default Component.extend({
  layout,
  closeOnEsc: true,
  closeOnBackdropClick: false,
  searchDebounce: 500,

  // Event Handlers
  handleKeyDown(e) {
    let code = e.keyCode || e.which;
    if (code === 27 && this.get('closeOnEsc')) {
      this.get('onClose')();
    }
  },
  handleClick(e) {
    if (this.get('closeOnBackdropClick') &&
      (e.target === this.element || !e.target.closest('.emojidex-palette-wrapper'))
    ) {
      this.get('onClose')();
    }
  },

  // Lifecycle Hooks
  init() {
    this._super(...arguments);
    this.set(
      'keyDownHandler',
      this.get('handleKeyDown').bind(this)
    );
    this.set(
      'clickHandler',
      this.get('handleClick').bind(this)
    );
  },
  didInsertElement() {
    this._super(...arguments);
    if (this.get('emojiVersion')) {
      emojidex.setFilteredEmojiData(this.get('emojiVersion'));
    }
    later(() => {
      document.addEventListener('keydown', this.get('keyDownHandler'));
      document.addEventListener('click', this.get('clickHandler'));
    }, 1);
  },
  willDestroyElement() {
    this._super(...arguments);
    document.removeEventListener('keyDown', this.get('keyDownHandler'));
    document.removeEventListener('click', this.get('clickHandler'));
  },

  // Component Properties
  categoryNames: emojidex.getCategoryNames(),
  categorySVG: categoryIcons,
  searchTerm: '',
  searchPlaceholder: 'search for emoji',

  // Computed Properties
  emojis: computed(function () {
    return this.get('emojiVersion')
      ? emojidex.getFilteredEmojiList(this.get('emojiVersion'))
      : emojidex.emojilist;
  }),
  emojiList: computed('searchResults', 'currentListType', function () {
    return (this.get('searchEnabled') && this.get('isSearchResult'))
      ? this.get('searchResults')
      : (this.get('isCompleteList'))
        ? this.get('emojis')
        : this.get('emojis')[this.get('currentListType')];
  }),
  isCompleteList: computed.alias('hideCategories'),
  isSearchResult: computed.notEmpty('searchResults'),
  currentListType: computed(function () {
    return this.get('isCompleteList') ? 'all' : 'people';
  }),
  allowedCategories: computed(function () {
    const excludedCategories = this.get('excludedCategories');
    const categoryList = Object.keys(this.get('categoryNames'));
    return (excludedCategories)
      ? categoryList.filter(category => !this.excludedCategories.includes(category))
      : categoryList;
  }),

  // functions
  searchEmojis() {
    const searchTerm = this.get('searchTerm');
    if (searchTerm.trim() === "") {
      this.set('searchResults', null);
      return;
    }
    const searchResults = emojidex.searchEmojis(searchTerm);
    if (searchResults.length !== 0) {
      this.set('searchResults', searchResults);
    } else {
      this.set('searchResults', 'none');
    }
  },


  // Actions
  actions: {
    searchEmojis() {
      debounce(this, this.searchEmojis, this.searchDebounce);
    },
    changeCategory(category) {
      this.set('currentListType', category);
    },
    selectEmoji(emoji) {
      this.set('selectedEmoji', emoji);
    }
  }
});
