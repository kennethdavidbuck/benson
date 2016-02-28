export default function (server) {

	// Seed your development database using your factories. This
	// data will not be loaded in your tests.

	//var categories = server.createList('category', 5);
  //
	//server.createList('post', 5).forEach(function (post, index) {
	//	post.categories = [categories[index]]
	//});

	server.create('post', {
		title: 'My First Post',
		teaser: '<p>A Teaser</p>',
		body: '<p>Hello World!</p>'
	});
}
