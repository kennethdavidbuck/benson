import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:index', 'Unit | Controller | index', {
	// Specify the other units that are required for this test.
	// needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function (assert) {
	let controller = this.subject();
	assert.ok(controller);
});

test('groups posts into tiles', function (assert) {
	assert.expect(1);

	const post = {};

	const controller = this.subject({
		model: [post]
	});

	assert.deepEqual(controller.get('tiles'), [{size: 'large', post: post}]);
});
