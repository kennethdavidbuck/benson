import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({

	/**
	 * @property title
	 */
	title: attr('string'),

	/**
	 * @property body
	 */
	body: attr('string')
});
