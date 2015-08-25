/*	Author: Yemi Kehinde
		wemoji
*/

// --------------------------------------------- //
// DEFINE GLOBAL LIBS                            //
// --------------------------------------------- //
window.jQuery = window.$ = require('../../../node_modules/jquery/dist/jquery.js');


// force compilation of global libs that don't return a value.
require("./helpers/log");
require("./libs/atomic");

// var _weather = require('./modules/WeatherAPI');

//initialise KO object
var KO = {};

KO.Config = {

	init : function () {
		console.debug('Kickoff is running');

		// Example module include
		KO.UI = require('./modules/UI');
		KO.UI.init();

		KO.WeatherAPI = require('./modules/WeatherAPI');
		KO.WeatherAPI.init();
	}
};


KO.Config.init();
