import { test } from 'qunit';
import moduleForAcceptance from 'benson/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts/index');

test('visiting /posts/index', function(assert) {
  visit('/posts/index');

  andThen(function() {
    assert.equal(currentURL(), '/posts/index');
  });
});
