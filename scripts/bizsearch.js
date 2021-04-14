// Parses current page's URL to extract ID
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get('id')); // '123'
// extract id from url, assign to variable
var id = parsedUrl.searchParams.get('id');
console.log(id);

//Pulls business details using parsed URL ID from "businesses" collection
function getDetails() {
  const parsedUrl = new URL(window.location.href);
  console.log(parsedUrl.searchParams.get('id')); // '123'
  // extract id from url, assign to variable
  var id = parsedUrl.searchParams.get('id');
  console.log(id);
  // use this ID to read from firestore
  db.collection('businesses')
  .doc(id)
  .get()
  .then(function(doc){
      //Pulling photo array field in the specific business document
      var photoList = doc.data().photo;
      //Looping through the array to pull the image host links
      for(i = 0; i < photoList.length; i++) {
        var src = photoList[i];
        if (i == 0) {
        //Appends new container and the image link src attribute
        $(".carousel-inner").append("<div class='carousel-item active'></div>");
        $(".carousel-item").append("<img class='d-block w-100' alt='Third slide' src='" + src + "'>");
        } else {
          $(".carousel-inner").append("<div class='carousel-item' id='" + i + "'>" + "</div>");
          $("#" + i).append("<img class='d-block w-100' alt='Third slide' src='" + src + "'>");
        }

      }
      //Basic Biz info pull from business document.
      var name = doc.data().name;
      var address = doc.data().streetAddress;
      var city = doc.data().city; 
      var province = doc.data().province; 
      var pCode = doc.data().postalCode; 
      var phone = doc.data().phoneNumber; 
      var website = doc.data().website; 
      $('#bizName').text(name);
      $('#address').append('<p>' + address + '</p>');
      $('#address').append('<p>' + city + '</p>');
      $('#address').append('<p>' + province + '</p>');
      $('#address').append('<p>' + pCode + '</p>');
      $('#address').append('<p>' + phone + '</p>');
      var link = $("<a>");
                link.attr("href", website);
                link.text(website);
                link.addClass("link");
      $('#address').append(link);
  })
}
getDetails();

//////////////////
//Review Section//
//////////////////

//Form Functions//
function openForm() {
  document.getElementById('reviewForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('reviewForm').style.display = 'none';
}

//Listener for review submit button, triggers on click.
const postRev = document.querySelector('#postReview');
postRev.addEventListener('click', (e) => {
    addReview();
});

//Add review function, adds review to firebase from pop-up review form on bizsearch page.
const reviewForm = document.querySelector('#reviewAdd');
function addReview() {
    db.collection('reviews').add({
    bizID: id,
    userID: firebase.auth().currentUser.displayName,
    affordability: Number(reviewForm.affordability.value),
    customerService: Number(reviewForm.customerServ.value),
    knowledge: Number(reviewForm.knowledgeable.value),
    productSel: Number(reviewForm.productSelection.value),
    details: reviewForm.details.value,
    //Calculates review form totals
    ratingTotal: Number((Number(reviewForm.affordability.value) + Number(reviewForm.customerServ.value) + Number(reviewForm.knowledgeable.value)
    + Number(reviewForm.productSelection.value))),
    //Calculates rating average total
    avgRating: Number((Number(reviewForm.affordability.value) + Number(reviewForm.customerServ.value) + Number(reviewForm.knowledgeable.value)
        + Number(reviewForm.productSelection.value))/ 4),
    //Creates a timestamp object of the review
    postDate: firebase.firestore.Timestamp.now(),
  });
    //Updates rating total based on the recent, updates rating count, new biz rating total used for Average Rating calculation.
    const ratingTotal =  Number((Number(reviewForm.affordability.value) + Number(reviewForm.customerServ.value) + Number(reviewForm.knowledgeable.value)
    + Number(reviewForm.productSelection.value)))
    db.collection('businesses').doc(id).update({
    reviewCount: firebase.firestore.FieldValue.increment(1),
    ratingTotal: firebase.firestore.FieldValue.increment(ratingTotal)
  });
    alert("Review Submission Success! Thank you for your review :)");
}


//Fetches reviews for business by doc ID, displays them on page.
const otherReviews = document.querySelector("otherReviews");
function fetchReviews() {
  db.collection('reviews')
  .where('bizID', '==', id)
  .orderBy("postDate", "desc")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var afford = doc.data().affordability;
      var customerServ = doc.data().customerService;
      var knowledge = doc.data().knowledge;
      var productSel = doc.data().productSel;
      var details = doc.data().details;
      var timestamp = doc.data().postDate.toDate().toDateString();
      var user = doc.data().userID;
      $('#otherReviews').append("<div id='review'>" + "<div id='reviewHeader'>" + "<span id='username'>" + user + "</span>" + "<span id='timestamp'>" 
          + timestamp + "</span>" + "<div id='criteria'>" + "<div id='afford'>" + "Affordability " + afford + "</div>" + "<div id='customer'>" 
          + "Customer Service " + customerServ + "</div>" + "<div id='knowledge'>" + "Knowledge " + knowledge + "</div>"
          + "<div id='product'>" + "Product Selection " + productSel + "</div>" + "</div>" + "<div id='detailedRev'>" + "<span id='reviewText'>" + details + "</span>" + "</div>");
    });
  });
}
fetchReviews();

//Fetches scores from reviews collection by ID, calculates average then displays them on page.
function calcAvgBizRating() {
    db.collection("businesses").doc(id).get().then(function(doc) {
        var revCount = doc.data().reviewCount;
        var rateTotal = doc.data().ratingTotal;
        var averageRate = ((rateTotal/revCount)/4);
        $('#avgRating').append("<div id='average'>" + "<p>" + "Avg. Review Score: " + averageRate.toFixed(2) + "</p>" + "</div>");
      });
    }
calcAvgBizRating();