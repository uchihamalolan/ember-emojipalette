import Component from '@ember/component';
import { emojilist } from '@uchihamalolan/emojidex';

export default Component.extend({
  // searchEnabled
  // emoji
  // render emoji palette
  categories: Object.keys('emojilist'),
  currentCategory: 'people',
  currentEmojiList: computed('currentCategory', function() {
    return emojilist.currentCategory;
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
