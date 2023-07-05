const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const Property = mongoose.model('Property');


router.post('/propertySignup', (req , res) => {

    const { ownerName, mobileNumbers, emailAddresses, villaApartmentNumber, projectName, location, yearOfCompletion, expectedRentPrice, expectedSalePrice, monthlyMaintenance, builtUpArea, plotSize, bedrooms, bathrooms, balconies, carParks, mainDoorDirection, studyRoom, maidsRoom, maidsToilet, privatePool, privateGarden,  privateTerrace, homeTheatreRoom, mediaRoom, modularKitchen, airConditioner, bed, chimney, curtains, diningTable, dishwasher, dryer, geyser, hob, mattress, microwave, oven, refrigerator, sofaSet, solarHeater, tv, wardrobe, washingMachine, waterPurifier, granite, italianMarble, kotaStone, marble, tiles, wood, additionalInformation } = req.body;


    const property = new Property({ ownerName, mobileNumbers, emailAddresses, villaApartmentNumber, projectName, location, yearOfCompletion, expectedRentPrice, expectedSalePrice, monthlyMaintenance, builtUpArea, plotSize, bedrooms, bathrooms, balconies, carParks, mainDoorDirection, studyRoom, maidsRoom, maidsToilet, privatePool, privateGarden,  privateTerrace, homeTheatreRoom, mediaRoom, modularKitchen, airConditioner, bed, chimney, curtains, diningTable, dishwasher, dryer, geyser, hob, mattress, microwave, oven, refrigerator, sofaSet, solarHeater, tv, wardrobe, washingMachine, waterPurifier, granite, italianMarble, kotaStone, marble, tiles, wood, additionalInformation });

    property.save()
        .then((newData) => {
            res.status(201).json({ result: "Data listed successfully"})
        })
        .catch((error) => {
            console.log(error)
            return res.status(400).json({ error: "Data not added" })
        })
})
module.exports = router;