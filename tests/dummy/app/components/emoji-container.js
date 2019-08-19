import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  showEmojiPalette: true,
  excludedCategories: computed(function() {
    return ['flag'];
  }),
  actions: {
    toggleEmojiPalette() {
      this.toggleProperty('showEmojiPalette');
    }
  }
});
