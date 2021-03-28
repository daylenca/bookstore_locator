var target = document.querySelector("#businessListings");


function displayBusinesses(){
  var size = 1;
  for(let i = 0; i <= size; i++) {
    target.innerHTML = "<button type='button'class='collapsible'><span id='name'>Open Collapsible</span></button><div class='content'><p id='bizInfo'><p></div>";
  }
  db.collection("businesses").get()
    .then(function(snap){
        snap.forEach(function(doc){
          var n = doc.data().name;
          var city = doc.data().city;
          var prov = doc.data().province;
          var phone = doc.data().phoneNumber;
          document.getElementById("name").innerHTML = n;
          var info = city + prov + phone;
          document.getElementById("bizInfo").innerHTML = info;
        })
    })
}
displayBusinesses();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}