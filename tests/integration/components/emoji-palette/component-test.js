import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | emoji-palette', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders all category icons', async function(assert) {
    this.set('emoji', '😀');
    await render(hbs`{{emoji-palette selectedEmoji=emoji}}`);
    assert.equal(this.element.querySelectorAll('.emojidex-category-holder img').length, 8);
  });
});
