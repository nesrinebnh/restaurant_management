var messagesRef = firebase.database().ref('food');
var profile ;

/** extracting the product information*/
var apiResult = [];
messagesRef .on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      var key = childSnapshot.key;
    profile = {
      description : childData.description,
      title : childData.title,
      url : childData.url,
      price : childData.price,
    };
    apiResult.push(profile);

  });
  console.log("size "+apiResult.length);
  const container = document.getElementById('accordion');

  apiResult.forEach((result, idx) => {

    console.log(idx);
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';

    // Construct card content
    const content = `
        <div class="card" style="width:300px">
          <div class="card-header" id="heading-${idx}">
            <img src="${result.url}" width="100%" height="200" alt="Image preview...">
          </div>

          <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
            <div class="card-body">

              <h5>${result.title}</h5>
              <p>${result.description}</p>
              <p>${result.price}</p>
            </div>
          </div>
        </div>
    `;

    // Append newyly created card element to the container
    container.innerHTML += content;
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