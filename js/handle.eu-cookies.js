/**
 * Not inspired for comments today :)
 * 
 * @author Tomislav Horvatiček
 * @version 1.0.0.0
 */
 
function EUCookies(){
	//Change language here
	this.lang = "en";

	//Change link here
	this.link = undefined;
	
	// Configure path to cookies_eu.js file
	this.EUCookies_cookies_eu_Path = "http://localhost:8080/EUCookieJS/EUCookieJS/js/cookies_eu.js";
	
	// Configure path to link containing EUCookies.script.html & EUCookies.scriptnolink.html
	this.EUCookiesHtmlPath = "http://localhost:8080/EUCookieJS/EUCookieJS/";
	
	// Cookie name
	this.COOKIE_NAME = "cookie_eu_consented";
	
	// File names
	this.EUCookies_script_html = "EUCookies.script.html";
	this.EUCookies_scriptnolink_html = "EUCookies.scriptnolink.html";

	// Translations
	this.LEARN_MORE = {"en" : "Learn more", "hr" : "Više"};
	this.MAIN_TEXT = {"en" : "Cookies help us deliver our services. By using our services, you agree to our use of cookies.", "hr" : "Kolači nam omogućavaju bolji rad. Slobodno ih dostavite. :)"};
	this.OK_TEXT = {"en" : "OK", "hr" : "U redu."};
}

EUCookies.prototype.Install  = function(){
		self = this;
		cookie = $.cookie(this.COOKIE_NAME);
		
		if (cookie == undefined || cookie != "true"){			
			$.get(this.EUCookiesHtmlPath + ( (this.link == undefined) ? this.EUCookies_scriptnolink_html : this.EUCookies_script_html), function(data){
				if (self.link != null){
					data = data.replace(/{learnmore}/g, self.LEARN_MORE[self.lang]);
					data = data.replace(/{link}/g, self.link);
				}
				
				data = data.replace(/{text}/g, self.MAIN_TEXT[self.lang]);
				data = data.replace(/{ok}/g, self.OK_TEXT[self.lang]);
				
				$("body").append($(data));
				
				$.ajax({
				  url: self.EUCookies_cookies_eu_Path,
				  dataType: "script"
				});
			});
		}
}

// Create instance
var EuCookiesInstance = new EUCookies();
EuCookiesInstance.Install();