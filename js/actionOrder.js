var messagesRef = firebase.database().ref('order');


/** update the order table in order.html*/

oTable = $('#myTable').dataTable();
var data;
var obj = [];
console.log("start");
messagesRef .on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
	    var childData = childSnapshot.val();
	    var key = childSnapshot.key;
		
	    console.log(childData.status);
	    var data = [
		 childData.product,
		 childData.qty,
		 childData.rate,
		 childData.amount,
		 childData.gross,
		 childData.vat,
		 childData.discount,
		 childData.net
		];

		$.fn.dataTable.ext.errMode = 'none';

	    $('#myTable').on( 'error.dt', function ( e, settings, techNote, message ) {
	    	console.log( 'An error has been reported by DataTables: ', message );
	    } ) ;

		oTable.fnAddData(data);
 	});
});

/** logout method */
function logout() {
  document.getElementById("logout").addEventListener("click",function(){
	
		firebase.auth().signOut().then(function() {
			window.location.href = 'login.html';
		}).catch(function(error) {
		// An error happened.
		});

	});
} 