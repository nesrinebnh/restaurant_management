var messagesRef = firebase.database().ref('stores');

/** updating store table in stores.html*/


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
		 childData.storename,
		 childData.status
		];

		$.fn.dataTable.ext.errMode = 'none';

	    $('#myTable').on( 'error.dt', function ( e, settings, techNote, message ) {
	    	console.log( 'An error has been reported by DataTables: ', message );
	    } ) ;

		oTable.fnAddData(data);
 	});
});

/**adding store action*/

function Add(){
 	console.log("ok");
 	var name = document.getElementById("storeName").value;
 	var status = document.getElementById("storeStatus").value;

 	if(name == ""){
		alert("no valide name");	
	} else if(status == ""){
		alert("no valide status");
	}else{
		if(status.localeCompare("active")==0) status = "inactive";
		else status = "active";
		messagesRef = firebase.database().ref('stores');
	 	messagesRef.child(name).set({
	    	storename: name,
	    	status: status,
    	});
    	window.location.href = 'stores.html';
	}
};

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
