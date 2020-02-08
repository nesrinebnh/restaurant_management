/** update number of product */

var messagesRef = firebase.database().ref('food');
messagesRef .on('value', function(snapshot) {
    document.getElementById('num1').innerHTML = snapshot.numChildren();
});

/** update number of stores */
messagesRef = firebase.database().ref('stores');
messagesRef .on('value', function(snapshot) {
    document.getElementById('num2').innerHTML = snapshot.numChildren();
});

/** update number of orders */
messagesRef = firebase.database().ref('order');
messagesRef .on('value', function(snapshot) {
    document.getElementById('num3').innerHTML = snapshot.numChildren();
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

function moreInfoProduct(){
	window.location.href = 'manageProduct.html';
}

function moreInfoStore(){
	window.location.href = 'stores.html';
}

function moreInfoOrder(){
	window.location.href = 'manageOrder.html';
}

