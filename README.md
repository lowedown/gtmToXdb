# Trigger Sitecore XDB Goals and Events using Google Tag Manager
Code and instructions for triggering Sitecore XDB Goals, Campaigns, Outcomes and Events through Google Tag Manager.

Currently, this only works if you are using Headless and have the Sitecore Headless Tracking Service enabled. See the [docs](https://doc.sitecore.com/xp/en/developers/hd/latest/sitecore-headless-development/tracking-service.html#setup) for details.

## Sitecore setup for JSS

Integrate the `track.jss.min.js` file into your build. It can for example be placed in a folder under `/sitecore modules/web/jsstracker/`

## GTM Setup

### Include track script using a tag

Create a Custom HTML tag in Google Tag Manager that triggers on each page view. HTML:

````
<script>
  var script = document.createElement('script');
  script.defer = true;
  script.src = "/sitecore modules/web/jsstracker/track.jss.min.js";
  document.getElementsByTagName('head')[0].appendChild(script);
</script>
````

## Import tag template

Import the [Trigger Sitecore Event](/gtm/Trigger%20Sitecore%20Event.tpl) tag template into Google Tag Manager.

## Create a tag for each event you want to send to XDB

Use the custom `Trigger Sitecore Event` template.

![Tag Creation](/img/create-tag.jpg "Tag Creation")

Configure the Sitecore Event as needed

* Event Type: Choose from Goal, Campaign, Event and more
* ID: GUID of the Event / Goal / Campaign you want to trigger (make sure it's deployed)
* Event data: Optional data to send with a goal if needed
* API Key: The JSS/Headless API Key

![Tag Configuration](/img/configure-tag.jpg "Tag configuration")

After configuring the trigger, this event should now be fired. You can check the network tab on DevTools for calls to `/sitecore/api/jss/track/event`

