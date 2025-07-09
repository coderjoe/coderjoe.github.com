function hideShowButtons() {
   var people = $('#step2 > div');
   if( people.length > 1 ) {
      $('#step2 input[name="remove"]').show();
   } else {
      $('#step2 input[name="remove"]').hide();
   }

   var addBtns = $('#step2 input[name="add"]');
   addBtns.hide();
   $(addBtns.get( addBtns.length - 1 )).show();
}

function addPerson(name, rating) {
   var people = $('#step2 > div');
   var last = $(people.get(people.length-1));
   var cloneCopy = last.clone(true);

   //Hide the add button and show the remove button if necessary
   last.find('input[name="add"]').hide();
   last.after(cloneCopy);

   last.removeClass();
   cloneCopy.find('select').val(rating);
   cloneCopy.find('input[type="text"]').val(name).focus();

   hideShowButtons();
}

function validate() {
   var noErrors = true;

   //color the text box
   $('input[type="text"]').removeClass();
   $('input[value=""]').addClass('error');

   //Set the error message
   $('span.error').text('');

   $('#step1 input[type="text"]').each( function( i,e ) {
	 var elem = $(e);
	 var num = Number( elem.val() );
	 if( ! num ) {
	    noErrors = false;
	    var error = elem.siblings('span.error');
	    error.text( 'On earth we spend numeric values.' );
	 }
   });

   $('#step2 input[type="text"]').each( function(i,e) {
	 var elem = $(e)
	 if( elem.val() == '' ) {
	    noErrors = false;
	    var error = elem.siblings('span.error');
	    error.text( 'I\'m sorry. I didn\'t get your name.' );
	 }
   });

   return noErrors;
}

function remove( e ) {
   var elem = $(this);
   elem.parent().remove();
   hideShowButtons();
}

function buildData() {
   var success = true;

   var json = '{ "budget": ' + $('#step1 input[type="text"]').val() +', "people":{';
   var ratingSum = 0;
   var peopleObj = new Object();

   var peopleElem = document.getElementsByName('names');
   for( var i = 0; i < peopleElem.length; i++ ) {
      var escName = escape( peopleElem[i].value );
      var rating = $(peopleElem[i]).siblings('select').val();
      if( peopleObj[ escName ] == null ) {
	 peopleObj[ escName ] = rating;

	 if( i > 0 ) {
	    json += ',';
	 }
	 json += '"'+escName+'":'+rating+'';
	 ratingSum += Number(rating);
      } else {
	 success = false;
	 $(peopleElem[i]).addClass('error');
	 var error = $(peopleElem[i]).siblings('span.error');
	 error.text( 'Please list each person only once. ' + error.text() );
      }
   }

   json += '}, "rating":'+ratingSum+'}';

   return success ? json : null;
}

function submit( json ) {
   var escJson = escape(json);
   createCookie('q',escJson,364);
   document.location = './budget-result.html';
}

function preParseCookie() {
   var c = readCookie('q');
   if( c ) {
      var json = unescape(c['value']);
      var data = eval('('+json+')');

      //set the budget
      $('input[name="budget"]').val(data['budget']);

      //Roll out the names
      var peopleObj = data['people'];
      var first = true;
      for( name in peopleObj ) {
	 if( first ) {
	    $('#step2 input[type="text"]').val(name);
	    $('#step2 select').val(peopleObj[name]);
	    first = false;
	 } else {
	    addPerson( name, peopleObj[name] );
	 }
      }
   }
}


$(function($){
      preParseCookie();
      $('#step2 input[name="add"]').bind( 'click', function(){addPerson('',10);} );
      $('#step2 input[name="remove"]').bind( 'click', remove );
      $('#step3 input[type="button"]').bind( 'click', function() {
	 var json = null;
	 if( validate() && (json = buildData() ) ) {
	    submit(json);
	 }
      });
});
