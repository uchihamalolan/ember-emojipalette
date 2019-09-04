import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { later } from '@ember/runloop';

import { emojidex }  from 'ember-emojipalette/utils/emojidex';
import { categoryIcons } from 'ember-emojipalette/utils/category-icons';

export default Component.extend({
  layout,
  closeOnEsc: true,
  closeOnBackdropClick: false,

  // Event Handlers
  handleKeyDown(e) {
    let code = e.keyCode || e.which;
    if (code === 27 && this.get('closeOnEsc')) {
      this.get('onClose')();
    }
  },
  handleClick(e) {
    if ( this.get('closeOnBackdropClick') && 
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
  emojidex: emojidex,
  emojis: computed(function() {
    return this.get('emojiVersion')
      ? emojidex.filteredEmojiList(this.get('emojiVersion'))
      : emojidex.emojilist;
  }),
  categoryNames: emojidex.getCategoryNames(),
  categorySVG: categoryIcons,
  searchTerm: '',
  searchPlaceholder: 'search for emoji',

  // Computed Properties
  isCompleteList: computed.alias('hideCategories'),
  isSearchResult: computed.notEmpty('searchResults'),
  currentListType: computed(function() {
    return this.get('isCompleteList') ? 'all' : 'people' ;
  }),
  allowedCategories: computed(function() {
    const excludedCategories = this.get('excludedCategories');
    const categoryList = Object.keys(this.get('categoryNames'));
    return (excludedCategories)
      ? categoryList.filter(category => !this.excludedCategories.includes(category))
      : categoryList;
  }),
  emojiList: computed('searchResults', 'currentListType',function() {
    return (this.get('searchEnabled') && this.get('isSearchResult'))
      ? this.get('searchResults')
      : (this.get('isCompleteList'))
        ? this.get('emojis')
        : this.get('emojis')[this.get('currentListType')];
  }),

  // Actions
  actions: {
    searchEmojis() {
      const searchTerm = this.get('searchTerm');
      if (searchTerm.trim() === "") return;
      const searchResults = this.get('emojidex').searchEmojis(searchTerm);
      if(searchResults) {
        this.set('searchResults', searchResults);
      } else {
        this.set('searchResults', 'none');
      }
    },
    changeCategory(category) {
      this.set('currentListType', category);
    },
    selectEmoji(emoji) {
      this.set('selectedEmoji', emoji);
    }
  }
});
