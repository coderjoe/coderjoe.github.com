function parseForm() {
   var c = readCookie('q');
   if( c ) {
      var json = unescape(c['value']);
      var data = eval('('+json+')');

      return data;
   }

   return null;
}

function buildResults( data ) {
   var people = data['people'];
   var budget = data['budget'];
   var totalRating = data['rating'];

   var baseValue = budget/totalRating;
   var totalBudget = 0;

   for( name in people ) {
      var tr = document.createElement('tr');
      var tdName = document.createElement('td');
      tdName.appendChild( document.createTextNode(name));
      var tdVal = document.createElement('td');
      tdVal.appendChild( document.createTextNode('$' + Math.round(people[name] * baseValue )));
      tr.appendChild(tdName);
      tr.appendChild(tdVal);

      $('table tbody').append(tr);

      totalBudget += Math.round(people[name]*baseValue);
   }

   var tfooter = document.createElement('tfoot');
   var trfoot = document.createElement('tr');
   var tdTotal = document.createElement('td');
   tdTotal.appendChild( document.createTextNode('Total') );

   var tdTotalVal = document.createElement('td');
   tdTotalVal.appendChild(document.createTextNode( '$' + totalBudget ));

   tfooter.appendChild(trfoot);
   trfoot.appendChild(tdTotal);
   trfoot.appendChild(tdTotalVal);
   $('table').append(tfooter);

   $('#loading').hide();
   $('#results').show();
}

$(function($){
      var data = parseForm();

      if( data != null ) {
	 buildResults( data );
      }
});
