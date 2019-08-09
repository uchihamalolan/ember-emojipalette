import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { emojidex }  from 'ember-emojipalette/utils/emojidex';
import { categoryIcons } from 'ember-emojipalette/utils/category-icons';

export default Component.extend({
  layout,
  // searchEnabled
  // emoji
  emojilist: emojidex.emojilist,
  categorySVG: categoryIcons,
  categoryNames: emojidex.getCategoryNames(),
  currentCategory: computed(function() {
    return this.get('hideCategory') ? 'all' : 'people' ;
  }),
  currentEmojiList: computed('currentCategory',function() {
    return (this.get('currentCategory') === 'all' )
          ? this.get('emojilist')
          : this.get('emojilist')[this.get('currentCategory')]
  }),
  isCompleteList: computed('currentCategory', function() {
    return (this.get('currentCategory') === 'all') ? true : false;
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
