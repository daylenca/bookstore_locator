function displayBusiness(){
  db.collection("businesses")
  .get()
  .then(function(snap) {
    snap.forEach(function(doc) {
      console.log(doc.data());
      console.log(doc.data().name);
      var nameB = doc.data().name;
      $("#businessListings").append(nameB);
    })
  })
}
displayBusiness();
