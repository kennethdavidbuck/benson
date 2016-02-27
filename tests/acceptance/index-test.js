import { test } from 'qunit';
import moduleForAcceptance from 'benson/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function (assert) {
	assert.expect(2);

	server.createList('post', 5);

	visit('/');

	andThen(function () {
		assert.equal(currentURL(), '/');

		assert.strictEqual(find('.page-content article').length, 5, 'There should be 5 articles displayed');
	});
});
