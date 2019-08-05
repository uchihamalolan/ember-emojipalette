import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { emojidex }  from 'ember-emojipalette/utils/emojidex';

export default Component.extend({
  layout,
  // searchEnabled
  // emoji
  // render emoji palette
  emojilist: emojidex.emojilist,
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
