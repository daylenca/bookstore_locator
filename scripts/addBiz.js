// Writes inputs from Add Business form to Businesses collection in Firebase.
const businessForm = document.querySelector('#addBusinessForm');
  businessForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('businesses').add({
      name: businessForm.inputBusinessName.value,
      streetAddress: businessForm.inputAddress.value,
      city: businessForm.inputCity.value,
      province: businessForm.inputProvince.value,
      postalCode: businessForm.inputPostalCode.value,
      phoneNumber: businessForm.inputPhoneNumber.value,
      website: businessForm.inputWebsite.value,
      reviewCount: Number(0),
      
    });
    alert("Business information has been sent! Thank you for your submission.");
  })
