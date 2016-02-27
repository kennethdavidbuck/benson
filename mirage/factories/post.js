/*
 This is an example factory definition.

 Create more files in this directory to define additional factories.
 */
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
	title: faker.lorem.sentence,
	teaser: faker.lorem.sentence,
	body: faker.lorem.paragraphs,
	createdAt: faker.date.past,
	updatedAt: faker.date.recent

	// name: 'Pete',                         // strings
	// age: 20,                              // numbers
	// tall: true,                           // booleans

	// email: function(i) {                  // and functions
	//   return 'person' + i + '@test.com';
	// },

	// firstName: faker.name.firstName,       // using faker
	// lastName: faker.name.firstName,
	// zipCode: faker.address.zipCode
});
