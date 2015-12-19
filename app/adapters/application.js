import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

	/**
   *
   * @returns {boolean}
   * @override
   */
  shouldReloadAll() {
    return true;
  }
});
