/* eslint-disable no-fallthrough */
// import { emojidata } from './emojidata';
import { emojilist } from './emojilist';
import { emojiListVersion } from './emojiListVersion';

export const emojidex = {
  // emojidata: emojidata,
  emojilist: emojilist,
  emojiListVersion: emojiListVersion,
  getCategoryNames() {
    return {
      people: "Smileys & People",
      nature: "Animals & Nature",
      food: "Food & Drinks",
      activity: "Activity",
      travel: "Travel & Places",
      object: "Objects",
      symbol: "Symbols",
      flag: "Flags"
    }
  },
  getUnsupportedEmojis(version) {
    if (version === '11') return;
    let unsupportedEmojis = [];
    switch (version) {
      case '9': unsupportedEmojis = unsupportedEmojis.concat(...emojiListVersion.v10);
      case '10': unsupportedEmojis = unsupportedEmojis.concat(...emojiListVersion.v11);
    }
    return unsupportedEmojis;
  },
  filteredEmojiList(version) {
    const unsupportedEmojis = this.getUnsupportedEmojis(version);
    let filteredEmojiList = {};
    Object.entries(this.emojilist).forEach(entry => {
      let category = entry[0];
      let emojis = entry[1];
      filteredEmojiList[category] = emojis.filter(emoji => !unsupportedEmojis.includes(emoji));
    });
    return filteredEmojiList;
  }
  // _searchInSubcategory(searchTerm, emoji) {
  //   return emoji.subcategory.split(/[- ]/).filter( word => word.length > 1).includes(searchTerm);
  // },
  // searchEmojis(searchTerm) {
  //   let searchResults = [];
  //   for(let category in emojidata) {
  //     let emojis = emojidata[category];
  //     searchResults.push(
  //       emojis.filter((emoji) => {
  //           return (emoji.keyTerms && emoji.keyTerms.includes(searchTerm))
  //           ||  (emoji.subcategory && this._searchInSubcategory(searchTerm, emoji))
  //       }).map((emoji) => {
  //         return emoji.char;
  //       })
  //     );
  //   }
  //   return searchResults.flat();
  // }
}
