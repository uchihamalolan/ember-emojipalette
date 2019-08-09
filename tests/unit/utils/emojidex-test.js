import emojidex from 'dummy/utils/emojidex';
import { module, test } from 'qunit';

module('Unit | Utility | emojidex', function(/* hooks */) {

  test('it provides emojidata object', function(assert) {
    let result = emojidex.emojidex;
    assert.equal(result.emojidata.people[0].char, '😀');
  });
  test('it provides emojilist value', function(assert) {
    let result = emojidex.emojidex;
    assert.equal(result.emojilist.people[0], '😀');
  });
  test('it returns category names on calling getCategoryNames()', function(assert) {
    let result = emojidex.emojidex;
    assert.equal(result.getCategoryNames().flag, 'Flags');
  })
});
