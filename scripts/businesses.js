function displayBusinesses(){
  db.collection("businesses")
  //.where("fields.geo_local_area", "in", ["Downtown"])   //Amazing New Query "in"
  .orderBy('name')
  .get()
  .then(function(snap){                                   //get collection
      snap.forEach(function(doc){  
          var id = doc.id;                   
          var name = doc.data().name;              //get the name, create DOM with id
          $("#businesses-go-here").append("<p id='" + id + "'> " + name + "</p>")
          // <p id = ${doc.id}>${name}</p>
          addBusinessListener(id);
      })
  })
}
displayBusinesses();

function addBusinessListener(id) {
  document.getElementById(id)
      .addEventListener("click", function () {
          console.log(id + "was clicked!")
          //window.location.href="details.html";
          window.location.href="bizsearch.html?id=" + id;
      });
}