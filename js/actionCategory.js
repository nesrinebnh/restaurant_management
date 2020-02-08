var messagesRef = firebase.database().ref('category');

/** update the table information in category.html*/
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


/** add category */
function Add(){
 	console.log("ok");
 	var name = document.getElementById("storeName").value;
 	var status = document.getElementById("storeStatus");
 	var adminType = status.options[status.selectedIndex].text;
 	console.log(adminType);
 	if(name == ""){
		alert("no valide name");	
	} else if(status == ""){
		alert("no valide status");
	}else{

		if(adminType.localeCompare("Active")==0) adminType = "active";
		else adminType = "inactive";
		messagesRef = firebase.database().ref('category');
	 	messagesRef.child(name).set({
	    	storename: name,
	    	status: adminType,
    	});
    	window.location.href = 'category.html';
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
