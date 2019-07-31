import Component from '@ember/component';

export default Component.extend({
  actions: {
    selectEmoji(emoji) {
      this.sendAction(emoji);
    }
  }
});
