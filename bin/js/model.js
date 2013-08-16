var Model = (function () {
	var self = this;
	var pub = {};

	var NAMESPACE = "com.arbitrary.hover.url_shortener";
	var data = {};
	var bSetup = false;

	pub.getInstance = function() { 
		if(!bSetup) setup();

		return pub;
	}

	function setup() {
		if(bSetup) return;

		bSetup = true;
		pub.load();
	}

	function getLocalStorageObject() {
		return localStorage[NAMESPACE];
	}

	pub.save = function() {
		var dataStr = JSON.stringify(data);
		localStorage[NAMESPACE] = dataStr;
	}

	pub.saveOption = function(key,value) {
		data[key] = value;
		pub.save();
	}

	pub.load = function() {
		var obj = localStorage[NAMESPACE];
		data = JSON.parse(obj) || {};
	}

	pub.loadOption = function(key) {
		if(data === null || !data) return false;

		return data[key];
	}

	return pub;
})();