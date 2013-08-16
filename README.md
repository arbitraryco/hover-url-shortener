Hover URL Shortener
=================
We wanted to make shorten URLs with a custom domain name out there but didn't feel comfortable with the options. Lots of things services offered analytics we didn't care for or required a fee to do custom shortening.

We're big fans of [Hover](http://hover.com) and one of their great services is free URL Forwarding, which we've been using via our custom domain, [rbtry.co](http://rbtry.co). However, creating short URLs is a manual process - generating hashes and then manually adding them to a Hover page can be time consuming.

So we thought we'd write our own.

Note that this takes advantage of an entirely **undocumented** Hover API and is subject to be shut down at any point in time. We don't offer any support. This is simply a tool we've found handy and wanted to share.

Setting Up
=================
* Go to [chrome://extensions/](chrome://extensions/).
* Drag the CRX file in this repository into the window.
* Once installed, go to the options page. Add your domain in.
* Sign into Hover (if you aren't already), then click the link under domain ID. A JSON feed will appear. Locate the ID for the corresponding domain in the JSON feed. Save that into your options.
* Refresh the page to insure everything saved correctly.

Now you can safely shorten URLs!

Version History
=================
#### 1.0.0
- Initial version.