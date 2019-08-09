import { emojidata } from './emojidata';
import { emojilist } from './emojilist';

export const emojidex = {
  emojidata: emojidata,
  emojilist: emojilist,
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
  }
}
