/** send the modification of settings to the database db*/

function updateSetting(){
	console.log("ok");
	var messagesRef = firebase.database().ref('profile');

	document.getElementById("ok_setting").addEventListener("click", function(){
		messagesRef.child("adminadmincom").set({
	    	username: document.getElementById('username').value,
	    	email: document.getElementById('email').value,
	    	firstname: document.getElementById('firstname').value,
	    	lastname: document.getElementById('lastname').value,
	    	gender: document.getElementById('gender').value,
	    	phone: document.getElementById('phone').value,
	    	group: document.getElementById('group').value,
	    });
	});

	window.location.href = 'profile.html';	
		
}

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