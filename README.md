# What's this?

Small JS utility for displaying a user warning about using of cookies on the site (tested with Chrome, but should work on any other browser and Internet Explorer). Ported from .NET to PHP to JS: https://github.com/hudo/EUCookiesNET (this text is also from there :) thanx guy! Inspired by https://github.com/infinum/cookies_eu (that's were css and js scripts come from, thanx guys)!

# Installation

Install via adding CSS, JS and HTML files.

First include JS and CSS files in header, bottom of the body or in the Bundle config:

    <link href="~/css/cookies_eu.css" rel="stylesheet" />
    <script src="~/js/jquery-2.0.3.js"></script>
    <script src="~/js/jquery.cookie.js"></script>
    <script src="~/js/handle.eu-cookies.js"></script>
    
Configure in handle.eu-cookies.js file (in js folder)
  - EUCookies_cookies_eu_Path - Path to cookies_eu.js file (automaticaly loaded)
  - EUCookiesHtmlPath - Path to folder containig .html files (EUCookies.script.html, EUCookies.scriptnolink.html)

To see it in action check example.html

that's it!


## Localization

Project contains localized arrays in handle.eu-cookies.js, currently for English language. Please feel free to contribute with your language in array!
