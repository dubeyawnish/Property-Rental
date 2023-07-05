const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const Plot = mongoose.model('Plot');


router.post('/plotSignup', (req , res) => {

    const { ownerName, mobileNumbers, emailAddresses,plotNumber, projectName ,location ,direction,expectedSalePrice,plotSize,plotDimensions,khataType,additionalInformation  } = req.body;


    const plot = new Plot({ ownerName, mobileNumbers, emailAddresses,plotNumber, projectName ,location ,direction,expectedSalePrice,plotSize,plotDimensions,khataType,additionalInformation  });

    plot.save()
        .then((newData) => {
            res.status(201).json({ result: "Data listed successfully"})
        })
        .catch((error) => {
            console.log(error)
            return res.status(400).json({ error: "Data not added" })
        })
    })


module.exports = router;