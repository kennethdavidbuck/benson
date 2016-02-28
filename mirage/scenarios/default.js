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
		teaser: `<p>
			Kenneth is a recovering <a href="http://www.joelonsoftware.com/articles/fog0000000018.html"
			target="_blank">architect astronaut</a>,
			based out of Toronto, Ontario. Back on earth, he spends his recovery time playing foosball, drinking
			coffee, and browsing hacker news.
			</p>
			<p>
			He finished his first degree in Archaeology in 2008 only to realize
			how much he loved computers. He knew he had "no choice" but to head back to school
			for a second degree in Computer Science. He has been helplessly addicted
			to software and programming ever since.
			</p>`,
		body: `<p>
			Kenneth is a recovering <a href="http://www.joelonsoftware.com/articles/fog0000000018.html"
			target="_blank">architect astronaut</a>,
			based out of Toronto, Ontario. Back on earth, he spends his recovery time playing foosball, drinking
			coffee, and browsing hacker news.
			</p>

			<p>
			He finished his first degree in Archaeology in 2008 only to realize
			how much he loved computers. He knew he had "no choice" but to head back to school
			for a second degree in Computer Science. He has been helplessly addicted
			to software and programming ever since.
			</p>

			<p>
			While in school he paired up with his former archaeology department to produce different works
			including <a href="http://www.arcticiq.com" target="_blank">ArcticIQ</a>, a web based application geared
			towards
			the preservation and transmission of Inuit word meaning, and <a href="http://www.fortconger.ca"
			target="_blank">Fort Conger</a>,
			a maquette that was successful in securing funding through VMC Canada. He also enjoyed plenty of time
			at <a href="http://www.aquanode.com" target="_blank">Aquanode</a>, a small Calgary based dev shop.
			</p>

			<p>
			In 2013, he leaped straight out of university and directly into
			<a href="https://www.bridezillahq.com" target="_blank">Bridezillahq</a>, a startup geared towards
			disrupting the wedding market.
			He spent 14th months there as CTO before deciding that the wedding game wasn't his style. He is now on
			the lookout
			for his next big adventure. You can reach him at <a href="mailto:kenneth@kennethbuck.ca">kenneth@kennethbuck.ca</a>
			for opportunities and inquiries.
			</p>`
	});
}
