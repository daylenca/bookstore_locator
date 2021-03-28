const businessForm = document.querySelector('#addBusinessForm');
  businessForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('businesses').add({
      name: businessForm.inputBusinessName.value,
      address: businessForm.inputAddress.value,
      city: businessForm.inputCity.value,
      province: businessForm.inputProvince.value,
      postalCode: businessForm.inputPostalCode.value,
      phoneNumber: businessForm.inputPhoneNumber.value,
    });
  })