/**
 * Created by kennethbuck on 2016-03-13.
 */
import Ember from 'ember';

/*global window*/

const {makeArray} = Ember;

export default Ember.Service.extend({

	page(options) {
		if(!!window.ga && typeof window.ga === 'function') {
			window.ga.apply(window.ga, ['send', 'pageView'].concat(makeArray(options)));
		}
	}
});
