//import { emojidata } from './emojidata';
import { emojilist } from './emojilist';

export const emojidex = {
  //emojidata: emojidata,
  emojilist: emojilist,
  // _searchInSubcategory(searchTerm, emoji) {
  //   return emoji.subcategory.split(/[- ]/).filter( word => word.length > 1).includes(searchTerm);
  // },
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
