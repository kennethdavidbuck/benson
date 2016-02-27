import DS from 'ember-data';

const {attr, hasMany} = DS;

export default DS.Model.extend({

	/**
	 *
	 */
	title: attr('string'),

	/**
	 * @property posts
	 */
	posts: hasMany('post')
});
