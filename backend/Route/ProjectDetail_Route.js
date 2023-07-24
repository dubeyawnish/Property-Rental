const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const ProjectDetail = mongoose.model('ProjectDetail');


router.post('/projects', async (req, res) => {
    try {
      // Assuming the request body has an array of objects for 2BHK and 3BHK
      const { projectName,projectLocation,projectImg, twoBHK, mapLink,threeBHK, fourBHK } = req.body;
  
      // Create a new Project instance
      const newProject = new ProjectDetail({
        projectName,
        projectLocation,
        projectImg,
        mapLink,
        twoBHK,
        threeBHK,
        fourBHK,
      });
  
      // Save the new project to the database
      await newProject.save();
  
      res.status(201).json({ message: 'Project created successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to create the project' });
    }
  });






  

  module.exports = router;