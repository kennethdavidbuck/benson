import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

	namespace: 'api',

	shouldReloadAll() {
		return false;
	},

	shouldBackgroundReloadRecord() {
		return true;
	}
});
