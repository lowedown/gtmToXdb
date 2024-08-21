xdbTracker = function () {
	function triggerGoal(id, data, apiKey) {
		sendToServer([{ "goalId": id, "data": data }], apiKey);
	}
	function triggerPageEvent(id, url, apiKey) {
		sendToServer([{ "pageId": id, "url": url }], apiKey);
	}
	function triggerCampaign(id, apiKey) {
		sendToServer([{ "campaignId": id }], apiKey);
	}
	function triggerEvent(id, apiKey) {
		sendToServer([{ "eventId": id }], apiKey);
	}
	function triggerOutcome(id, currencyCode, monetaryValue, apiKey) {
		sendToServer([{ "outcomeId": id, "currencyCode": currencyCode, "monetaryValue": monetaryValue }], apiKey);
	}
	function sendToServer(payload, apiKey) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", '/sitecore/api/jss/track/event?sc_apikey=' + apiKey, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		var data = JSON.stringify(payload);
		xhr.send(data);
	}
	return {
		triggerGoal: triggerGoal,
		triggerPageEvent: triggerPageEvent,
		triggerCampaign: triggerCampaign,
		triggerEvent: triggerEvent,
		triggerOutcome: triggerOutcome
	}
}();
