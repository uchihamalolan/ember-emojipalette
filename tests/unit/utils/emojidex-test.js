import emojidex from 'dummy/utils/emojidex';
import { module, test } from 'qunit';

module('Unit | Utility | emojidex', function(/* hooks */) {

  test('it provides emojilist value', function(assert) {
    let result = emojidex.emojidex;
    assert.equal(result.emojilist.people[0], '😀');
  });
  test('it returns category names on calling getCategoryNames()', function(assert) {
    let result = emojidex.emojidex;
    assert.equal(result.getCategoryNames().flag, 'Flags');
  });
  test('it returns emojis on searching through keyWord', function (assert) {
    let result = emojidex.emojidex;
    assert.notEqual(result.searchEmojis('smile').length, 0);
  });
});
