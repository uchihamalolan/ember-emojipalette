import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | emoji-palette', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders all category icons', async function(assert) {
    this.set('emoji', '😀');
    await render(hbs`{{emoji-palette selectedEmoji=emoji}}`);
    assert.equal(this.element.querySelectorAll('.emojidex-category-holder img').length, 8);
  });

  test('should not display categories if hideCategory is enabled', async function(assert) {
    await render(hbs`{{emoji-palette hideCategory=true selectedEmoji=emoji}}`);
    assert.equal(this.element.querySelectorAll('.emojidex-category-holder').length, 0, "should not display categories");
  });

  test('should set the emoji value when clicked', async function(assert) {
    this.set('emoji', '😀');
    await render(hbs`{{emoji-palette hideCategory=true selectedEmoji=emoji}}`);
    await click('.emojidex-list-item:nth-of-type(2)');
    assert.equal(this.get('emoji'), '😃');
  });
});
