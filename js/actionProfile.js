var messagesRef = firebase.database().ref('profile');
var profile;

/** updating the profile information */
messagesRef .on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
	    var childData = childSnapshot.val();
	    var key = childSnapshot.key;
		profile = {
			email : childData.email,
			firstname : childData.firstname,
			gender : childData.gender,
			group : childData.group,
			lastname : childData.lastname,
			phone : childData.phone,
			username : childData.username
		};

 	});
 	document.getElementById('username_profile').innerHTML = profile.username;
    document.getElementById('email_profile').innerHTML = profile.email;
    document.getElementById('first_profile').innerHTML = profile.firstname;
    document.getElementById('last_profile').innerHTML = profile.lastname;
    document.getElementById('gender_profile').innerHTML = profile.gender;
    document.getElementById('phone_profile').innerHTML = profile.phone;
    document.getElementById('group_profile').innerHTML = profile.group;

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
