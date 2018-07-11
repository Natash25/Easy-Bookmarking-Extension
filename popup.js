'use strict';

function setAlarm(event) {
	let minutes = parseFloat(event.target.value);
	chrome.browserAction.setBadgeText({text: 'ON'});
	chrome.alarms.create({delayInMinutes: minutes});
	chrome.storage.sync.set({minutes: minutes});
	window.close();
}

function clearAlarm() {
	chrome.browserAction.setBadgeText({text: ''});
	chrome.alarms.clearAll();
	window.close();
}
document.getElementById('sampleSecond').addEventListener('click', setAlarm);
document.getElementById('1 min').addEventListener('click', setAlarm);
document.getElementById('3 min').addEventListener('click', setAlarm);
document.getElementById('5 min').addEventListener('click', setAlarm);
document.getElementById('10 min').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);