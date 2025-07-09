/*
 * Taken and modified from http://www.quirksmode.org/js/cookies.html
 */
function createCookie(name,value,days) {
	if (days) {
		var d = new Date();
		d.setTime(d.getTime()+(days*86400000));
		var expires = "; expires="+d.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var ca = document.cookie.split(';');
	for( var i = 0; i < ca.length; i++ ) {
		var nameValue = ca[i].match(/^(\s+)?(\w+)=(.+)$/);

		if( nameValue && nameValue[2] == name ) {
			return {"name":nameValue[2], "value":nameValue[3]};
		}
	}

	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

