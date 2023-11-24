const mongoose = require('mongoose');
const Car = require('./models/Car');

const cars = [
    {
      name: "Car 1",
      speed: 120,
      img: "https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2022,
      price: 50,
      rating: 4.5,
      location: "CityA",
      features: ["GPS", "Bluetooth", "Air Conditioning"],
      availability: 10
    },
    {
      name: "Car 2",
      speed: 130,
      img: "https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Diesel",
      seatingCapacity: 7,
      model: 2021,
      price: 60,
      rating: 4.2,
      location: "CityA",
      features: ["Backup Camera", "Leather Seats", "Sunroof"],
      availability: 8
    },
    {
      name: "Car 3",
      speed: 110,
      img: "https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg",
      type: "EV",
      transmission: "Automatic",
      fuel: "Diesel",
      seatingCapacity: 4,
      model: 2023,
      price: 70,
      rating: 4.8,
      location: "CityC",
      features: ["Convertible Top", "Premium Sound System"],
      availability: 12
    },
    {
      name: "Car 4",
      speed: 125,
      img: "https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg",
      type: "Sedan",
      transmission: "Manual",
      fuel: "Diesel",
      seatingCapacity: 5,
      model: 2020,
      price: 45,
      rating: 4.0,
      location: "CityD",
      features: ["Compact Size", "Fuel Efficient"],
      availability: 6
    },
    {
      name: "Car 5",
      speed: 140,
      img: "https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 7,
      model: 2022,
      price: 80,
      rating: 4.7,
      location: "CityE",
      features: ["Spacious Interior", "Entertainment System"],
      availability: 15
    },
    {
      name: "Car 6",
      speed: 115,
      img: "https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg",
      type: "Luxury",
      transmission: "Manual",
      fuel: "Diesel",
      seatingCapacity: 5,
      model: 2021,
      price: 65,
      rating: 4.2,
      location: "CityF",
      features: ["Off-Road Capability", "Towing Package"],
      availability: 9
    },
    {
      name: "Car 7",
      speed: 105,
      img: "https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Diesel",
      seatingCapacity: 5,
      model: 2023,
      price: 75,
      rating: 4.6,
      location: "CityG",
      features: ["Sporty Design", "Advanced Safety Features"],
      availability: 11
    },
    {
      name: "Car 8",
      speed: 130,
      img: "https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg",
      type: "EV",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 4,
      model: 2022,
      price: 90,
      rating: 4.9,
      location: "CityH",
      features: ["Zero Emissions", "High-Tech Interior"],
      availability: 7
    }
  ];
  



async function seedDB(){
  await Car.deleteMany({})
    .then(()=>{
        console.log("previous data deleted");
    })
    await Car.insertMany( cars);
    console.log('data seeded');
}


module.exports = seedDB;