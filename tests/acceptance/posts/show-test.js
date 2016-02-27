import { test } from 'qunit';
import moduleForAcceptance from 'benson/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts/:id');

test('visiting /posts/:id', function (assert) {
	server.createList('post', 5);

	visit('/posts/1');

	andThen(function () {
		assert.equal(currentURL(), '/posts/1');
	});
});
