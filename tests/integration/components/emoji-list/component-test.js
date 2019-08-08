import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import emojidex from 'dummy/utils/emojidex';

module('Integration | Component | emoji-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders complete emojilist', async function(assert) {
    this.set('emojiList', emojidex.emojidex.emojilist.people);
    this.set('category', 'people');
    await render(hbs`{{emoji-list emojiList=emojiList category=category}}`);
    assert.equal(this.element.querySelectorAll('.emojidex-emoji-list .emojidex-list-item').length, 350);
  });
});
