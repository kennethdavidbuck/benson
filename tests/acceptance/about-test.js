import { test } from 'qunit';
import moduleForAcceptance from 'benson/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about');

test('visiting /about', function (assert) {
	visit('/about');

	andThen(function () {
		assert.equal(currentURL(), '/about');
	});
});
