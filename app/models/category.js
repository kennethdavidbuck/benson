import DS from 'ember-data';

const {hasMany} = DS;

export default DS.Model.extend({

	/**
	 * @property posts
	 */
	posts: hasMany('post')
});
