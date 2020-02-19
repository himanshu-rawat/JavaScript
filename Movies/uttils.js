/*
    Debouncing an input
    Waiting for some time to pass after 
    the last event to actually do something
*/

function debounce(func, delay) {
	let timeoutId;
	return function(...args) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
}
