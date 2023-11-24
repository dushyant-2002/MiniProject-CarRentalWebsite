let sortby;
let cars;
let type;
let seats;
let fuel;
let transmission;
let place;


//extracting location from current url
function getQueryParams(url) {
    var queryParams = {};
    var queryString = url.split('?')[1];
  
    if (queryString) {
      var pairs = queryString.split('&');
  
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        var key = decodeURIComponent(pair[0]);
        var value = pair.length > 1 ? decodeURIComponent(pair[1]) : null;
  
        // If the key already exists, make it an array
        if (queryParams[key]) {
          if (!Array.isArray(queryParams[key])) {
            queryParams[key] = [queryParams[key]];
          }
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
    }
  
    return queryParams;
  }
  
  // Example usage:
  console.log(window.location.href);
const URL = window.location.href;
const queryParams = getQueryParams(URL);
place = queryParams.location;
let {pickupDate,pickupTime,dropDate,dropTime} = queryParams;
console.log(place);
console.log(pickupDate);
console.log(pickupTime);
console.log(dropDate);
console.log(dropTime);

// fetching cars with given location
axios.get(`/getcars/${place}`)
        .then((res) => {
            cars = res.data;
            filter(cars);
            // console.log(cars);
        })
        .catch((err) => {
            console.log(err);
        });

//reload on reset button
const reset = document.querySelector("#reset");
reset.addEventListener('submit',(e)=>{
    e.preventDefault();
    location.reload();
})
function res(cars){
    if (sortby == "High to low") {
        cars.sort((car1, car2) => car2.price - car1.price);
        filter(cars);
        // console.log(cars);

    }
    if(sortby == "Low to High"){
        cars.sort((car1, car2) => car1.price - car2.price);
        filter(cars);
    }
    if(sortby == "Best Rated"){
        cars.sort((car1, car2) => car2.rating - car1.rating);
        filter(cars);
    }
    if(type){
        cars = cars.filter(car => car.type === type);
    }
    if(seats){
        cars = cars.filter(car => car.seatingCapacity == seats[0]);
    }
    if(fuel){
        cars = cars.filter(car => car.fuel == fuel);
    }
    if(transmission){
        cars = cars.filter(car => car.transmission == transmission);
    }
    filter(cars);

}
function filter(cars){
    const carGrid = document.querySelector(".car-grid");
    s="";
    cars.forEach((car)=>{
        s += `<div class="car-item">
        <img class="car-image" src="${car.img}" alt="${car.name}">
        <div class="car-details">
          <!-- Car Name -->
          <div style="width: 100% ; font-size: 1rem;"><strong>${car.name}</strong>
          </div> 
      
          <!-- Speedometer -->
          <div class="detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
              <!-- Speed value from the database -->
              <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
              <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
            </svg>
            ${car.speed}km/h
          </div>
      
          <!-- Star Rating -->
          <div class="detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
            <br>
            ${car.rating}
          </div>
      
          <!-- Transmission Type -->
          <div class="detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
              <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
            </svg>
            ${car.transmission}
          </div>
      
          <!-- Fuel Type -->
          <div class="detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fuel-pump" viewBox="0 0 16 16">
              <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5Z"/>
              <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8V2Z"/>
            </svg>
            ${car.fuel}
          </div>
      
          <!-- Price per hour -->
          <div class="detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
            </svg>
            <br>
            ${car.price}/hr
          </div>
        </div>
        <a href="/show/?id=${car._id}&location=${place}&pickupDate=${pickupDate}&pickupTime=${pickupTime}&dropDate=${dropDate}&dropTime=${dropTime}"><button class="nav-button full-width bookbtn"><strong>Book Now</strong></button></a>
      </div>
      `;
    })
    carGrid.innerHTML = s;
}
// const btn = document.querySelectorAll(".bookbtn");
// console.log(btn);
// btn.forEach(item => {
//   item.addEventListener('click',()=>{
//     console.log("sfsf");
//     // console.log(e);
//   })  
// });


document.addEventListener("DOMContentLoaded", function () {
    // Get all sort items
    const sortItems = document.querySelectorAll('.sort-items');

    // Add click event listener to each sort item
    sortItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'selected' class from all sort items
            sortItems.forEach(function (element) {
                element.classList.remove('selected');
            });

            console.log(item.innerText);
            sortby = item.innerText;
            // Add 'selected' class to the clicked sort item
            item.classList.add('selected');
            res(cars);

            // Perform logic based on sortby value here
            
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get all sort items
    const carType = document.querySelectorAll('.car-types-items');

    // Add click event listener to each sort item
    carType.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'selected' class from all sort items
            carType.forEach(function (element) {
                element.classList.remove('selected');
            });

            console.log(item.innerText);
            // Add 'selected' class to the clicked sort item
            item.classList.add('selected');
            type = item.innerText;
            res(cars);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all seater items
    const seaterItems = document.querySelectorAll('.seater-items');

    // Add click event listener to each seater item
    seaterItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove 'selected' class from all seater items
            seaterItems.forEach(function(element) {
                element.classList.remove('selected');
            });

            console.log(item.innerText);
            // Add 'selected' class to the clicked seater item
            item.classList.add('selected');
            seats = item.innerText;
            res(cars);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all fuel items
    const fuelItems = document.querySelectorAll('.fuel-items');

    // Add click event listener to each fuel item
    fuelItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove 'selected' class from all fuel items
            fuelItems.forEach(function(element) {
                element.classList.remove('selected');
            });

            console.log(item.innerText);
            // Add 'selected' class to the clicked fuel item
            item.classList.add('selected');
            fuel = item.innerText;
            res(cars);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all transmission items
    const transmissionItems = document.querySelectorAll('.transmission-items');

    // Add click event listener to each transmission item
    transmissionItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove 'selected' class from all transmission items
            transmissionItems.forEach(function(element) {
                element.classList.remove('selected');
            });

            console.log(item.innerText);
            // Add 'selected' class to the clicked transmission item
            item.classList.add('selected');
            transmission = item.innerText;
            res(cars);
        });
    });
});

    

  
