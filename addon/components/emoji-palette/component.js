import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { emojidex }  from 'ember-emojipalette/utils/emojidex';
import { categoryIcons } from 'ember-emojipalette/utils/category-icons';

export default Component.extend({
  layout,
  // searchEnabled
  // emoji
  emojis: emojidex.emojilist,
  categoryNames: emojidex.getCategoryNames(),
  categorySVG: categoryIcons,
  isCompleteList: computed.alias('hideCategories'),

  categories: computed(function() {
    const excludedCategories = this.get('excludedCategories');
    const categoryList = Object.keys(this.get('categoryNames'));
    return (excludedCategories)
      ? categoryList.filter(category => !this.excludedCategories.includes(category))
      : categoryList;
  }),
  currentCategory: computed(function() {
    return this.get('isCompleteList') ? 'all' : 'people' ;
  }),
  emojiList: computed('currentCategory',function() {
    return (this.get('isCompleteList'))
      ? this.get('emojis')
      : this.get('emojis')[this.get('currentCategory')];
  }),

  actions: {
    changeCategory(category) {
      this.set('currentCategory', category);
    },
    selectEmoji(emoji) {
      this.set('selectedEmoji', emoji);
    }
  }
});
