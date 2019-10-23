import emojidata from 'dummy/utils/emojidata';
import { module, test } from 'qunit';

module('Unit | Utility | emojidata', function(/* hooks */) {

  test('it provides emojidata object', function(assert) {
    let result = emojidata;
    assert.equal(result.emojidata.people[0].emoji, '😀');
  });
});
