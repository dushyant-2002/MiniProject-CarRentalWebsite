const mongoose = require('mongoose');
const Car = require('./models/Car');

const cars = [
    {
      name: "Maruti Suzuki Ertiga 2015",
      speed: 180,
      img: "https://zoomcar-assets.zoomcar.com/381803/HostCarImage/host_car_image_381803259ed983-0e0a-4b0f-8fa3-242aa3607579.jpg20230914-42-18a7x09",
      type: "SUV",
      transmission: "Manual",
      fuel: "Diesel",
      seatingCapacity: 7,
      model: 2015,
      price: 170,
      rating: 4.5,
      location: "Cityh",
      features: ["GPS", "Bluetooth", "Air Conditioning"],
      isBooked: false
      
    },
    {
      name: "Tata Tigor XZ 2022",
      speed: 180,
      img: "https://zoomcar-assets.zoomcar.com/46063/HostCarImage/host_car_image_46063f28d3cf2-a08e-46b0-b593-6fcb06a8c55d.jpg20230115-24-5w1hwd",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2022,
      price: 180,
      rating: 4.2,
      location: "Cityh",
      features: ["Backup Camera", "Leather Seats", "Sunroof"],
      isBooked: false
      },
    {
      name: "Hyundai Verna 2017",
      speed: 220,
      img: "https://zoomcar-assets.zoomcar.com/280563/HostCarImage/host_car_image_2805637102539c-fcb5-4dde-9f32-05729a16eddc.jpg20230605-39-9asld7",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2017,
      price: 231,
      rating: 4.8,
      location: "Cityh",
      features: ["Convertible Top", "Premium Sound System"],
      isBooked: false
      
    },
    {
      name: "Hyundai Grand i10 2017",
      speed: 180,
      img: "https://zoomcar-assets.zoomcar.com/3669/HostCarImage/open-uri20230130-15615-z2t20328d67b61-49aa-4e84-94ef-54018a86e585",
      type: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2017,
      price: 210,
      rating: 4.0,
      location: "Cityh",
      features: ["Compact Size", "Fuel Efficient"],
      isBooked: false
        },
    {
      name: "Hyundai Creta 2018",
      speed: 180,
      img: "https://zoomcar-assets.zoomcar.com/96983/HostCarImage/96983_host_car_image_96983599319cc-ac7f-49dd-8304-1c5bd39c3a95db5c9240-3f17-4a55-bfba-36c7e9ac33e2.jpg",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2018,
      price: 253,
      rating: 4.7,
      location: "Cityh",
      features: ["Spacious Interior", "Entertainment System"],
      isBooked: false
      
    },
    {
      name: "Maruti Suzuki Swift Dzire 2021",
      speed: 180,
      img: "https://zoomcar-assets.zoomcar.com/239228/HostCarImage/host_car_image_239228fed7a505-d813-470c-8dc1-588529487184.jpg20230421-68-zz10sh",
      type: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2021,
      price: 160,
      rating: 4.2,
      location: "Cityh",
      features: ["Off-Road Capability", "Towing Package"],
      isBooked: false
        },
    {
      name: "Toyota Glanza 2020",
      speed: 220,
      img: "https://zoomcar-assets.zoomcar.com/94586/HostCarImage/host_car_image_9458639e5629f-ed2e-4251-9538-bd7d61e42c36.jpg20230130-48-1gjo1k5",
      type: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2020,
      price: 380,
      rating: 4.6,
      location: "Cityh",
      features: ["Sporty Design", "Advanced Safety Features"],
      isBooked: false
      
    },
    {
      name: "Maruti Suzuki BALENO 2019",
      speed: 180,
      img: "https://zoomcar-assets.zoomcar.com/280151/HostCarImage/host_car_image_2801517e0ae7a5-47a7-43ca-b124-7eba1dbd1f25.jpg20230605-52-2gwtte",
      type: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2019,
      price: 315,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },
    {
      name: "Renault Duster 2014",
      speed: 180,
      img: "https://zoomcar-assets.zoomcar.com/13451/HostCarImage/open-uri20230130-15617-1sz9abud27dae90-b391-487d-ad1b-fc93d46c5901",
      type: "SUV",
      transmission: "Manual",
      fuel: "Diesel",
      seatingCapacity: 5,
      model: 2014,
      price: 225,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },
    {
      name: "Ford Ecosport 2017",
      speed: 220,
      img: "https://zoomcar-assets.zoomcar.com/271166/HostCarImage/host_car_image_271166979dbf3b-68d9-43e2-9dbb-1823bb6e70a1.jpg20230524-26-9w9d2y",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2017,
      price: 443,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },
    {
      name: "Hyundai I20 2018",
      speed: 200,
      img: "https://zoomcar-assets.zoomcar.com/270960/HostCarImage/host_car_image_270960da4822f7-9bfc-4677-8e82-dfec7886188f.jpg20230524-76-k1vju0",
      type: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2018,
      price: 377,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },
    {
      name: "Mahindra XUV500 2018",
      speed: 200,
      img: "https://zoomcar-assets.zoomcar.com/316573/HostCarImage/host_car_image_3165739aaf0359-7d72-47b2-a424-a2a2bbe4ea37.jpg20231013-29-gi69my",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Diesel",
      seatingCapacity: 5,
      model: 2018,
      price: 635,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },
    {
      name: "Mercedes Benz GLC 300 2021",
      speed: 240,
      img: "https://zoomcar-assets.zoomcar.com/453457/HostCarImage/host_car_image_4534571857ef55-2828-4f69-b89f-0c2204cb1884.jpg20231106-51-xwlzy6",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2021,
      price: 520,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },
    {
      name: "BMW 520D 2020",
      speed: 240,
      img: "https://zoomcar-assets.zoomcar.com/photographs/original/b40835c5cd646322404791aef275c7e7098ebc06.png?1663871395",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Diesel",
      seatingCapacity: 5,
      model: 2020,
      price: 3216,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },
    {
      name: "Maruti Suzuki Fronx 2023",
      speed: 200,
      img: "https://zoomcar-assets.zoomcar.com/photographs/original/d44f75130a551ac4039f3adb73d82d3f242565b6.jpg?1685524308",
      type: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2023,
      price: 434,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },

    {
      name: "Toyota Innova 2019",
      speed: 200,
      img: "https://zoomcar-assets.zoomcar.com/photographs/original/96a687752e78103ccd4b67d860c34dc5a54049a8.png?1663876897",
      type: "SUV",
      transmission: "Manual",
      fuel: "Diesel",
      seatingCapacity: 8,
      model: 2019,
      price:1172,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },

    {
      name: "Hyundai Exter 2023",
      speed: 200,
      img: "https://zoomcar-assets.zoomcar.com/418436/HostCarImage/host_car_image_418436022f14fd-17b7-4a2e-af3f-d4cd132869f2.jpg20231013-42-bm6cko",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2023,
      price:550,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },

    {
      name: "Renault Triber 2023",
      speed: 200,
      img: "https://zoomcar-assets.zoomcar.com/400093/HostCarImage/host_car_image_400093650d637f-d746-4d5d-b94f-bb073a18fb72.jpg20230930-32-1jxrpxn",
      type: "SUV",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 7,
      model: 2023,
      price:447,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },

    {
      name: "Skoda Rapid 2023",
      speed: 220,
      img: "https://zoomcar-assets.zoomcar.com/460621/HostCarImage/host_car_image_460621982f4371-3c98-4433-852c-7bf83fc2239d.jpg20231113-28-4m8w7f",
      type: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2023,
      price:500,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },

    {
      name: "Toyota Urban Cruiser 2022",
      speed: 200,
      img: "https://zoomcar-assets.zoomcar.com/225243/HostCarImage/host_car_image_225243be3de950-91b1-48e7-bd32-bc14e8c09894.jpg20230410-39-iz9mk3",
      type: "SUV",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2022,
      price:467,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },

    {
      name: "Honda Jazz 2015",
      speed: 180,
      img: "https://zoomcar-assets.zoomcar.com/423519/HostCarImage/host_car_image_423519e28d37a8-d632-4ca0-a90c-c6eb6de6ebc2.jpg20231016-55-zon57e",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2015,
      price:310,
      rating: 4.9,
      location: "Cityh",
      features: ["Zero Emissions", "High-Tech Interior"],
      isBooked: false
        },
    {
      name: "Audi A4 2019",
      speed: 220,
      img: "https://imgd.aeplcdn.com/664x374/cw/ec/22613/Audi-A4-Right-Front-Three-Quarter-165484.jpg?wm=0&q=80",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 4,
      model: 2019,
      price: 3000,
      rating: 4.7,
      location: "Cityh",
      features: ["Advanced Safety", "Premium Sound System"],
      isBooked: false
        },
    {
      name: "Toyota Camry 2021",
      speed: 200,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Camry/10926/1690544712715/front-left-side-47.jpg?tr=w-456",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Hybrid",
      seatingCapacity: 5,
      model: 2021,
      price: 2800,
      rating: 4.5,
      location: "Cityh",
      features: ["Fuel Efficiency", "Smart Connectivity"],
      isBooked: false
        },
    {
      name: "Mercedes-Benz C300 2022",
      speed: 250,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/C-Class/10858/1690452480264/front-left-side-47.jpg?tr=w-456",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Gasoline",
      seatingCapacity: 4,
      model: 2022,
      price: 3500,
      rating: 4.8,
      location: "Cityh",
      features: ["Prestigious Design", "Intelligent Drive"],
      isBooked: false
        },
    {
      name: "Ford Mustang GT 2020",
      speed: 270,
      img: "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80",
      type: "Sports",
      transmission: "Manual",
      fuel: "Petrol",
      seatingCapacity: 2,
      model: 2020,
      price: 4000,
      rating: 4.6,
      location: "Cityh",
      features: ["Muscle Car Power", "Iconic Design"],
      isBooked: false
        },
    {
      name: "Honda Civic 2021",
      speed: 190,
      img: "https://imgd.aeplcdn.com/664x374/ec/9734/img/l/Honda-Civic-Rear-view-15003.jpg?v=201711021421&q=80",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2021,
      price: 2500,
      rating: 4.4,
      location: "Cityh",
      features: ["Modern Design", "Fuel Efficiency"],
      isBooked: false
        },

    {
      name: "Tesla Model S 2023",
      speed: 250,
      img: "https://hips.hearstapps.com/hmg-prod/images/2023-tesla-model-s-exterior-654d3a5e814cc.png?crop=0.590xw:0.517xh;0.212xw,0.228xh&resize=1200:*",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2023,
      price: 6000,
      rating: 4.9,
      location: "Cityh",
      features: ["Autopilot", "Long Range"],
      isBooked: false
        },
    {
      name: "Chevrolet Suburban 2022",
      speed: 180,
      img: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/suvs/suburban/masthead/2024-suburban-masthead-01.png?imwidth=1200",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Gasoline",
      seatingCapacity: 8,
      model: 2022,
      price: 3500,
      rating: 4.5,
      location: "Cityh",
      features: ["Spacious Interior", "Towing Capacity"],
      isBooked: false
        },
    {
      name: "Nissan Altima 2020",
      speed: 200,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZmgUaQn8zFaue-A4O9sIZCiAQ5cmt1m4VWzPCvaFlqheT9Som7Qc&usqp=CAE&s",
      type: "Sedan",
      transmission: "CVT",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2020,
      price: 2800,
      rating: 4.2,
      location: "Cityh",
      features: ["Comfortable Ride", "Advanced Safety"],
      isBooked: false
        },
    {
      name: "Porsche 911 Carrera 4S 2021",
      speed: 280,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/10990/1690869580714/front-left-side-47.jpg?tr=w-456",
      type: "Sports",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 2,
      model: 2021,
      price: 5000,
      rating: 4.8,
      location: "Cityh",
      features: ["Precision Engineering", "Convertible Top"],
      isBooked: false
        },
    {
      name: "Volkswagen Tiguan 2023",
      speed: 210,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Virtus/10624/1689938817194/front-left-side-47.jpg?impolicy=resize&imwidth=480",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Diesel",
      seatingCapacity: 5,
      model: 2023,
      price: 3200,
      rating: 4.6,
      location: "Cityh",
      features: ["All-Wheel Drive", "Advanced Tech"],
      isBooked: false
        },

    {
      name: "Lamborghini Huracan 2022",
      speed: 325,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Urus/10636/1690010693541/front-left-side-47.jpg?impolicy=resize&imwidth=480",
      type: "Exotic",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 2,
      model: 2022,
      price: 10000,
      rating: 4.9,
      location: "Cityh",
      features: ["Supercar Performance", "Head-Turning Design"],
      isBooked: false
        },
    {
      name: "Hyundai Kona Electric 2023",
      speed: 170,
      img: "https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/64075619a6656.jpg",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2023,
      price: 4500,
      rating: 4.7,
      location: "Cityh",
      features: ["Zero Emissions", "Smart Infotainment"],
      isBooked: false
        },
    {
      name: "Maserati Levante 2021",
      speed: 260,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maserati/Levante/7547/1582365134672/front-left-side-47.jpg?impolicy=resize&imwidth=480",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 5,
      model: 2021,
      price: 7500,
      rating: 4.8,
      location: "Cityh",
      features: ["Luxury Interior", "Dynamic Performance"],
      isBooked: false
        },
    {
      name: "Subaru Outback 2022",
      speed: 200,
      img: "https://hips.hearstapps.com/hmg-prod/images/2022-subaru-outback-wilderness-107-1617043965.jpg?crop=0.707xw:0.596xh;0.218xw,0.101xh&resize=1200:*",
      type: "Crossover",
      transmission: "CVT",
      fuel: "Gasoline",
      seatingCapacity: 5,
      model: 2022,
      price: 3200,
      rating: 4.5,
      location: "Cityh",
      features: ["All-Wheel Drive", "Off-Road Capability"],
      isBooked: false
        },
    {
      name: "Jaguar F-Type 2021",
      speed: 275,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Jaguar/F-TYPE/10648/1690012183949/front-left-side-47.jpg?tr=w-456",
      type: "Sports",
      transmission: "Automatic",
      fuel: "Petrol",
      seatingCapacity: 2,
      model: 2021,
      price: 5500,
      rating: 4.6,
      location: "Cityh",
      features: ["Distinctive Design", "Dynamic Performance"],
      isBooked: false
        },

    {
      name: "Tesla Model 3",
      speed: 220,
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/37138/model-3-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2022,
      price: 48000,
      rating: 4.9,
      location: "Cityh",
      features: ["Long Range", "Autopilot"],
      isBooked: false
        },
    {
      name: "Nissan Leaf",
      speed: 150,
      img: "https://imgd.aeplcdn.com/664x374/cw/ec/40522/Nissan-Leaf-EV-Right-Front-Three-Quarter-169812.jpg?wm=0&q=80",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2021,
      price: 35000,
      rating: 4.5,
      location: "Cityh",
      features: ["Zero Emissions", "Regenerative Braking"],
      isBooked: false
        },
    {
      name: "Chevrolet Bolt EV",
      speed: 200,
      img: "https://hips.hearstapps.com/hmg-prod/images/2022-chevrolet-bolt-ev-101-1613168160.jpg?crop=0.857xw:0.724xh;0.0261xw,0.125xh&resize=1200:*",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2023,
      price: 40000,
      rating: 4.7,
      location: "Cityh",
      features: ["Eco-Friendly", "Modern Interior"],
      isBooked: false
        },
    {
      name: "Audi e-tron",
      speed: 210,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/e-tron/6591/1677914324939/front-left-side-47.jpg?tr=w-456",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2022,
      price: 60000,
      rating: 4.8,
      location: "Cityh",
      features: ["Quattro All-Wheel Drive", "Virtual Cockpit"],
      isBooked: false
        },
    {
      name: "BMW i3",
      speed: 160,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/BMW-i3/1540/1554467107207/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 4,
      model: 2021,
      price: 45000,
      rating: 4.6,
      location: "Cityh",
      features: ["Sustainable Materials", "Urban Mobility"],
      isBooked: false
        },
    {
      name: "Hyundai Kona Electric",
      speed: 180,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Kona/6228/1658735368758/front-left-side-47.jpg?tr=w-456",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2022,
      price: 38000,
      rating: 4.5,
      location: "Cityh",
      features: ["Regenerative Braking", "SmartSense Safety"],
      isBooked: false
        },
    {
      name: "Kia Soul EV",
      speed: 170,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg?impolicy=resize&imwidth=480",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2023,
      price: 36000,
      rating: 4.4,
      location: "Cityh",
      features: ["Distinctive Design", "UVO Intelligence"],
      isBooked: false
        },
    {
      name: "Ford Mustang Mach-E",
      speed: 210,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Mustang-Mach-E/8599/1631273636169/front-left-side-47.jpg?tr=w-456",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2021,
      price: 55000,
      rating: 4.7,
      location: "Cityh",
      features: ["Sleek Design", "Next-Gen SYNC"],
      isBooked: false
        },
    {
      name: "Rivian R1T",
      speed: 250,
      img: "https://hips.hearstapps.com/hmg-prod/images/2022-rivian-r1t-first-edition-urbano-103-1643302430.jpg?crop=0.418xw:0.353xh;0.423xw,0.351xh&resize=1200:*",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 5,
      model: 2023,
      price: 75000,
      rating: 4.9,
      location: "Cityh",
      features: ["Adventure-Ready", "Electric Adventure"],
      isBooked: false
        },
    {
      name: "Porsche Taycan",
      speed: 260,
      img: "https://images10.gaadi.com/usedcar_image/3638468/original/processed_img2899467__usedcar_img_5267_257331698221017_1698221065.JPG?imwidth=420",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric",
      seatingCapacity: 4,
      model: 2022,
      price: 90000,
      rating: 4.8,
      location: "Cityh",
      features: ["Performance Excellence", "Porsche Connect"],
      isBooked: false
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