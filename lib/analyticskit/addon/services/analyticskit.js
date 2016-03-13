/**
 * Created by kennethbuck on 2016-03-13.
 */
import Ember from 'ember';

/*global window*/

export default Ember.Service.extend({

	page(options) {
		if(!!window.ga && typeof window.ga === 'function') {

			const args = ['send', 'pageView'];

			if(options) {
				args.push(options);
			}

			window.ga.apply(window.ga, args);
		}
	}
});
