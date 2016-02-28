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

test('clicking a post presents posts page with full post', function (assert) {
	assert.expect(2);

	server.createList('post', 5);

	visit('/');

	andThen(function () {
		click('.page-content article:first a');
	});

	andThen(function () {
		assert.equal(currentURL(), '/posts/1', 'should be in posts show route');

		assert.strictEqual(find('.page-content article').length, 1, 'should have one article on the page');
	});
});

test('displays categories when present', function (assert) {
	assert.expect(1);

	var post = server.create('post');
	post.categories = [server.create('category')];

	visit('/');

	andThen(function () {
		assert.strictEqual(find('.page-content article .tag.info').length, 1, 'article should display 1 category');
	});
});

test('does not display tags container when article has no tags', function (assert) {
	assert.expect(1);

	server.create('post');

	visit('/');

	andThen(function () {
		assert.strictEqual(find('.page-content article .tags').length, 0, 'tags container should not be displayed');
	});
});
