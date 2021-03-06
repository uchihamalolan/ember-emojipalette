/* eslint-disable no-fallthrough */
import { emojidata } from './emojidata';
import { emojiListVersion } from './emojiListVersion';
import { emojilist } from './emojilist';

export const emojidex = {

  emojilist: emojilist,
  filteredEmojiData: {},

  getCategoryNames() {
    return {
      people: 'Smileys & People',
      nature: 'Animals & Nature',
      food: 'Food & Drinks',
      activity: 'Activity',
      travel: 'Travel & Places',
      object: 'Objects',
      symbol: 'Symbols',
      flag: 'Flags'
    };
  },

  getUnsupportedEmojis(version) {
    if (version === '12') return;
    let unsupportedEmojis = [];
    switch (version) {
      case '9':
        unsupportedEmojis = unsupportedEmojis.concat(...emojiListVersion.v10);
      case '10':
        unsupportedEmojis = unsupportedEmojis.concat(...emojiListVersion.v11);
      case '11':
        unsupportedEmojis = unsupportedEmojis.concat(...emojiListVersion.v12);
    }
    return unsupportedEmojis;
  },

  getFilteredEmojiList(version) {
    const unsupportedEmojis = this.getUnsupportedEmojis(version);
    let filteredEmojiList = {};
    Object.entries(emojilist).forEach(entry => {
      let category = entry[0];
      let emojis = entry[1];
      filteredEmojiList[category] = emojis.filter(emoji => !unsupportedEmojis.includes(emoji));
    });
    return filteredEmojiList;
  },

  setFilteredEmojiData(version) {
    this.filteredEmojiData = this.getFilteredEmojiData(version);
  },

  getFilteredEmojiData(version) {
    const unsupportedEmojis = this.getUnsupportedEmojis(version);
    let filteredEmojiData = {};
    Object.entries(emojidata).forEach(entry => {
      let category = entry[0];
      let emojis = entry[1];
      filteredEmojiData[category] = emojis.filter(
        emoji => !unsupportedEmojis.includes(emoji.emoji)
      );
    });
    return filteredEmojiData;
  },

  searchEmojis(searchTerm) {
    const emojidata = (this.filteredEmojiData) ? this.filteredEmojiData : emojidata;
    let searchResults = [];
    for (let category in emojidata) {
      let emojis = emojidata[category];
      searchResults.push(
        emojis.filter(emoji => {
          return (
            (emoji.keyTerms && emoji.keyTerms.includes(searchTerm)) ||
            (emoji.subcategory && this._findInSubcategory(searchTerm, emoji.subcategory))
          );
        }).map(emoji => emoji.emoji)
      );
    }
    return searchResults.flat();
  },

  _findInSubcategory(searchTerm, subcategory) {
    return subcategory.split(/[- ]/)
      .filter(word => word.length > 1)
      .includes(searchTerm);
  }
};
