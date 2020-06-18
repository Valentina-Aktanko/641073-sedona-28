let showFormButton = document.querySelector('#show-form-button');
let searchForm = document.querySelector('.search-form');
let arrivalDate = searchForm.querySelector('#arrival-date');
let departureDate = searchForm.querySelector('#departure-date');
let numberOfAdults = searchForm.querySelector('#number-of-adults');
let numberOfChildren = searchForm.querySelector('#number-of-children');

let isStorageSupport = true;
let storageAdults = '';
let storageChildren = '';

// hiding the form after initializing the script
searchForm.classList.add('search-form--hide');

// check if storage is working
try {
  storageAdults = localStorage.getItem('numberOfAdults');
  storageChildren = localStorage.getItem('numberOfChildren');
} catch (err) {
  isStorageSupport = false;
}

//click handler on the button to show/hide the form
showFormButton.addEventListener('click', function () {
  searchForm.classList.toggle('search-form--hide');
  searchForm.classList.remove('search-form--error');

  if (storageAdults && storageChildren) {
    numberOfAdults.value = storageAdults;
    numberOfChildren.value = storageChildren;
  }
});

// submit handler on the form
searchForm.addEventListener('submit', function (event) {
  if (!arrivalDate.value || !departureDate.value || !numberOfAdults.value || !numberOfChildren.value) {
    event.preventDefault();
    searchForm.classList.add('search-form--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('numberOfAdults', numberOfAdults.value);
      localStorage.setItem('numberOfChildren', numberOfChildren.value);
    }
  }
});

// click handler ESC
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (!searchForm.classList.contains('search-form--hide')) {
      event.preventDefault();
      searchForm.classList.add('search-form--hide');
      searchForm.classList.remove('search-form--error');
    }
  }
});
