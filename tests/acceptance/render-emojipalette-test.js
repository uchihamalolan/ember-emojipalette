import { module, test } from 'qunit';
import { render, visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Acceptance | render emojipalette', function(hooks) {
  setupApplicationTest(hooks);

  test('should change emoji-list on clicking categories', async function(assert) {
    await visit('/');
    await click('.category-icon-nature');
    assert.equal(this.element.querySelectorAll('.emojidex-nature-list').length, 1, "should diplay nature emojis");
  });
});
