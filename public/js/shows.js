// console.log("hello");
document.addEventListener('DOMContentLoaded',function(){
    const carImage = document.getElementById('carimg');
    const carName = document.getElementById('carname');
    const pickupDate = document.getElementById('pickupDate');
    const pickupTime = document.getElementById('pickupTime');
    const dropDate = document.getElementById('dropDate');
    const dropTime = document.getElementById('dropTime');
    const carPrice = document.getElementById('carprice');
    const bookdata={
      name:carName.innerText,
      img:carImage.getAttribute('src'),
      pickupDate:pickupDate.innerText,
      pickupTime:pickupTime.innerText,
      dropDate:dropDate.innerText,
      dropTime:dropTime.innerText,
      price:carPrice.innerText.substring(1)
    }
    console.log(carImage.getAttribute('src'),carName.innerText,pickupDate.innerText,pickupTime.innerText,dropDate.innerText,dropTime.innerText,carPrice.innerText.substring(1));
})