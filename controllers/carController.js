const Car = require("../models/Car");

const cars = async(req,res)=>{
    let allCars = await Car.find();
    
}