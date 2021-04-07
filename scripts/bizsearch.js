const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get('id')); // '123'

// extract id from url, assign to variable
var id = parsedUrl.searchParams.get('id');
console.log(id);

function getDetails() {
  const parsedUrl = new URL(window.location.href);
  console.log(parsedUrl.searchParams.get('id')); // '123'

  // extract id from url, assign to variable
  var id = parsedUrl.searchParams.get('id');
  console.log(id);
  // use this ID to read from firestore
  db.collection('businesses')
  .doc(id)   //webcam ID that we extracted
  .get()
  .then(function(doc){   // display details!
      var name = doc.data().name;
      var address = doc.data().streetAddress;
      var city = doc.data().city; 
      var province = doc.data().province; 
      var pCode = doc.data().postalCode; 
      var phone = doc.data().phoneNumber; 
      var website = doc.data().website; 
      $('#details-go-here').append('<h1> ' + name + '</h1>');
      $('#details-go-here').append('<h1> ' + address + '</h1>');
      $('#details-go-here').append('<h1> ' + city + '</h1>');
      $('#details-go-here').append('<h1>' + province + '</h1>');
      $('#details-go-here').append('<h1>' + pCode + '</h1>');
      $('#details-go-here').append('<h1>' + phone + '</h1>');
      $('#details-go-here').append('<h1>' + website + '</h1>');
  })
}
getDetails();

function openForm() {
  document.getElementById('reviewForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('reviewForm').style.display = 'none';
}

const postRev = document.querySelector('#postReview');
postRev.addEventListener('click', (e) => {
    addReview();
    console.log("review sent.");
});

const reviewForm = document.querySelector('#reviewAdd');
function addReview() {
    db.collection('reviews').add({
    bizID: id,
    affordability: reviewForm.affordability.value,
    customerService: reviewForm.customerServ.value,
    knowledge: reviewForm.knowledgeable.value,
    productSel: reviewForm.productSelection.value
  })
}
