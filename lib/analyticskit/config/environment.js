/**
 * Created by kennethbuck on 2016-03-13.
 */
'use strict';

module.exports = function(/* environment, appConfig */) {
	return {
		analyticskit: {

			enabled: false,

			google: {
				trackingId: null,
				enabled: false
			}
		}
	};
};
