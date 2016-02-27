import DS from 'ember-data';

const {attr, hasMany} = DS;

export default DS.Model.extend({

	/**
	 * @property title
	 */
	title: attr('string'),

	/**
	 * @property teaser
	 */
	teaser: attr('string'),

	/**
	 * @property body
	 */
	body: attr('string'),

	/**
	 * @property createdAt
	 */
	createdAt: attr('date'),

	/**
	 * @property updatedAt
	 */
	updateAt: attr('date'),

	/**
	 * @property categories
	 */
	categories: hasMany('category')
});
