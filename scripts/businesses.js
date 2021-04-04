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

function addBusinessListener(id) {
    document.getElementById(id)
      .addEventListener("click", function() {
          console.log(id + "was clicked!");
          //window.location.href="details.html";
          window.location.href="bizsearch.html?id=" + id;
      });
}
