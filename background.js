'use strict';

chrome.tabs.getSelected(null, function(tab) {
	var tablink = tab.url;
});

chrome.alarms.onAlarm.addListener(function() {
	chrome.browserAction.setBadgeText({text: ''});
	chrome.notifications.create({
		type: 		'basic',
		iconUrl: 	'peter_griffin.png',
		title: 		'Notification Timer',
		message: 	'Would you like to bookmark this page?',
		buttons: [
			{title: 'Yes'}
		],
		priority: 0});
});

chrome.notifications.onButtonClicked.addListener(function() {
	chrome.storage.sync.get(['minutes'], function(item) {
		chrome.browserAction.setBadgeText({text: 'ON'});
		chrome.alarms.create({delayInMinutes: item.minutes});
	});
});





/*
chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({color: '#ff69b4'}, function() {
		console.log("The color is pink.");
	});
});
*/

