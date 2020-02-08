var messagesRef  ;

/** action event for add button in company_info.html*/
function addCompanyInfo(){
	messagesRef = firebase.database().ref('company');
	document.getElementById("save_company_info").addEventListener("click", function(){
		console.log("ok, save btn");
		var companyName = document.getElementById("company_name").value;
		var chargeAmount = document.getElementById("charge_amount").value;
		var vatCharge = document.getElementById("vat_charge").value;
		var address = document.getElementById("address").value;
		var phone = document.getElementById("phone").value;
		var city = document.getElementById("city").value;
		var message = document.getElementById("message").value;
		/* check for invalid input*/
		if(companyName == ""){
			alert("no valide name");	
		} else if(chargeAmount == ""){
			alert("no valide charge amount");
		}else if(vatCharge == ""){
			alert("no valide vat charge");
		}else if(address == ""){
			alert("no valide address");
		}else if(phone == ""){
			alert("no valide phone");
		}else if(city == 1){
			alert("no capteur city");
		}else if(message == ""){
			alert("no valide message");
		}else{
			messagesRef.child(companyName.replace(' ','')).set({
		    	name: companyName,
		    	charge: chargeAmount,
		    	vat: vatCharge,
		    	address: address,
		    	phone: phone,
		    	city: city,
		    	message: message,
		    });
			window.location.href = 'company_info.html';	
		}
	});
}

/** cancel button in company_info.hml*/
function cancelCompanyInfo(){
	messagesRef = firebase.database().ref('profile');

	window.location.href = 'company_info.html';	

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