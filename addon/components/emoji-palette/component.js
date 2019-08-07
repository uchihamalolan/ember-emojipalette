import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { emojidex }  from 'ember-emojipalette/utils/emojidex';
import { categoryIcons } from 'ember-emojipalette/utils/category-icons';

export default Component.extend({
  layout,
  // searchEnabled
  // emoji
  // render emoji palette
  emojilist: emojidex.emojilist,
  categorySVG: categoryIcons,
  currentCategory: 'people',
  currentEmojiList: computed('currentCategory',function() {
    return this.get('emojilist')[this.get('currentCategory')];
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
