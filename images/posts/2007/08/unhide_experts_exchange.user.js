// Unhide Experts Exchange
//
// --------------------------------------------------------------------
//
// This script takes the results of an experts exchange view and keeps you from having to
// log in or register by unscrambling the text and removing the png mask
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Unhide Experts Exchange
// @namespace     http://www.coderjoe.net
// @description   A script to remove the scrambling of answers on experts exchange.
// @include       http://*.experts-exchange.com*
// ==/UserScript==

var UnhideEE = new Object();

UnhideEE.rot13 = function( chr ) {
	var charCode = chr.charCodeAt(0);
	var caps = false;
	var pos = 0;
	
	if( chr.match(/[A-Z]/) ) {
		caps = true;
		pos =  charCode - 'A'.charCodeAt(0);
	} else if( chr.match(/[a-z]/) ) {
		caps = false;
		pos =  charCode - 'a'.charCodeAt(0);
	} else {
		return chr;
	}
	
	pos = (pos + 13) % 26;
	
	if( caps ) {
		return String.fromCharCode('A'.charCodeAt(0) + pos);
	}
		
	return String.fromCharCode('a'.charCodeAt(0) + pos);
}

UnhideEE.rot13String = function( str ) {
	var retVal = '';
	var inCode = false;
	
	/*
	 * Experts Exchange doesn't rot13 the html character codes (stuff between & and ;)
	 * so we don't want to go ahead and remove those.
	 * rot13 only the things that aren't html character codes
	 */
	for( var i = 0; i < str.length; i++ ) {
		if( inCode ) {
			if( str.charAt(i) == ';' ) {
				inCode = false;
			}
		} else {
			if( str.charAt(i) == '&' ) {
				inCode = true;
			} else {
				retVal = retVal + UnhideEE.rot13(str[i]);
			}
		}
	}
	
	return retVal;
}

UnhideEE.removeMouseOver = function( div ) {
	if( div && div.className && div.className.match(/hasMouseOver/i) ) {
		div.className = '';
	}
}

UnhideEE.mouseOverOutReplacementEvent = function( event ) {	
	event.stopPropagation();
	event.preventDefault();
}

UnhideEE.removeBlur = function( div ) {
	if( div && div.className && div.className.match(/blur/) ) {
		div.className = '';
	}
}

UnhideEE.unEncryptComments = function( div ) {
	//unencrypt the answer bodies

	//the comment body can have <br/> unencrypted in it.
	//so lets make it so rot13 will return the correct thing for <br/>
	div.innerHTML = div.innerHTML.replace( /<br\/?>/g, UnhideEE.rot13String( '<br/>' ) );

	//Now rot13 everything
	if( div && div.className && div.className.match('answerBody') ) {
		div.innerHTML = UnhideEE.rot13String( div.innerHTML );
	}
}

UnhideEE.processDivs = function() {
	var divArray = document.getElementsByTagName('DIV');
	
	for( var i = 0; i < divArray.length; i++ ) {
		UnhideEE.removeMouseOver( divArray[i] );
		UnhideEE.removeBlur(divArray[i]);
		UnhideEE.unEncryptComments(divArray[i]);
	}
}

window.addEventListener(
    'load', 
    function() { UnhideEE.processDivs(); },
    true);
	
window.addEventListener(
	'mouseover',
	UnhideEE.mouseOverOutReplacementEvent,
	true);
	
window.addEventListener(
	'mouseout',
	UnhideEE.mouseOverOutReplacementEvent,
	true);
