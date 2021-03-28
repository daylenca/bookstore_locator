var target = document.getElementById("businessListings");


function displayBusinesses(){
  var size = 1;
  for(let i = 0; i <= size; i++) {
    var button = document.createElement("BUTTON");
    var buttonInfo = document.createElement("div");
    buttonInfo.setAttribute('class', "content");
    buttonInfo.innerHTML = "<p id='bizInfo'>Test</p>";
    button.innerHTML = "<span id='name'>Open Collapsible</span>";
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'collapsible');
    target.appendChild(button);
    target.appendChild(buttonInfo);
  }
  db.collection("businesses").get()
    .then(function(snapshot){
        snapshot.forEach(function(doc){
          var n = doc.data().name;
          console.log(n);
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