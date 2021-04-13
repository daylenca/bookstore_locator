//Fetches business collection, appends a new div element on page for each business document
//Displays in alphabetical order.
function displayBusinesses(){
    db.collection("businesses")
    .orderBy('name')
    .get()
    .then(function(snap){                               
      snap.forEach(function(doc){  
          var id = doc.id;                   
          var name = doc.data().name;             
          $("#businesses-go-here").append("<p id='" + id + "'> " + name + "</p>");
          addBusinessListener(id);
      })
  })
}
displayBusinesses();

//Click listener for dynamically appended to redirect user to new url for that business.
function addBusinessListener(id) {
    document.getElementById(id)
      .addEventListener("click", function() {
          //window.location.href="details.html";
          window.location.href="bizsearch.html?id=" + id;
      });
}
