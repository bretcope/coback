"use strict";

module.exports = function ()
{
	var _cb = null;
	var _finalArgs = null;

	function callback ()
	{
		if (_cb)
		{
			_cb.apply(this, arguments);
		}
		else
		{
			_finalArgs = new Array(arguments.length);
			for (var i = 0; i < arguments.length; i++)
				_finalArgs[i] = arguments[i];
		}
	}

	callback.result = function (cb)
	{
		if (_finalArgs)
			cb.apply(this, _finalArgs);
		else
			_cb = cb;
	};

	return callback;
};
