const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const ProjectDetail = mongoose.model('ProjectDetail');


router.post('/projects', async (req, res) => {
  try {
    // Assuming the request body has an array of objects for 2BHK and 3BHK
    const { projectName, projectLocation, projectImg, projectType,showLocation, projectGroup,reraNo, startDate, status, totalApartment, launchDate, availability, oneBHK,
      oneFiveBHK,
      twoFiveBHK, twoBHK, mapLink, threeBHK, threeFiveBHK, fourBHK,twoBHKVilla,threeBHKVilla,fourBHKVilla } = req.body;

    // Create a new Project instance
     //console.log("hello",threeBHKVilla);
    const newProject = new ProjectDetail({
      projectName,
      projectLocation,
      projectImg,
      projectType,
      reraNo,
      showLocation,
      projectGroup,
      mapLink,
      oneBHK,
      oneFiveBHK,
      twoFiveBHK,
      twoBHK,
      threeBHK,
      threeFiveBHK,
      twoBHKVilla,
      threeBHKVilla,
      fourBHKVilla,
      fourBHK, startDate, status, totalApartment, launchDate, availability
    });

    // Save the new project to the database
    await newProject.save();
    res.status(201).json({ message: 'Project created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create the project' });
  }
});

router.get('/getProjectByLocation', async (req, res) => {
  try {
    const allLocation = await ProjectDetail.find({}, 'showLocation');
    const uniqueProjects = [];
    const projectNames = [];

    for (let i = 0; i < allLocation.length; i++) {
      const location = allLocation[i].showLocation;

      if (!projectNames.includes(location)) {
        uniqueProjects.push(allLocation[i]);
        projectNames.push(location);
      }
    }
    // If there are errors, return Bad request and the errors
    //console.log(allProject)
    res.json(uniqueProjects)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

router.post('/getAllProjectByLocation', async (req, res) => {
  const { location } = req.body;
  try {
    const proDetail = await ProjectDetail.find({ showLocation: location });
    res.json(proDetail);


  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})


router.post('/getProjectDetail', async (req, res) => {
  const { projectName } = req.body;
  try {
    const proDetail = await ProjectDetail.findOne({ projectName: projectName });
    res.json(proDetail);


  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})


router.delete('/deleteProjectDetails', async (req, res) => {
  const { projectName } = req.body;

  if (!projectName) {
    return res.status(400).json({ error: "Project name not provided." });
  }

  try {
    const result = await ProjectDetail.deleteOne({ projectName });

    if (result.deletedCount > 0) {
      return res.status(200).json({ message: "Project details deleted successfully." });
    } else {
      return res.status(404).json({ error: "Project not found." });
    }
  } catch (error) {
    console.error('Error deleting project:', error);
    return res.status(500).json({ error: "An error occurred while deleting the project." });
  }
});


router.put('/updateProjectDetail', async (req, res) => {
  const { projectName, threeBHK } = req.body;

  if (!projectName) {
    return res.status(400).json({ error: "Project name and/or new details not provided." });
  }

  try {
    const project = await ProjectDetail.findOne({ projectName });

    if (!project) {
      return res.status(404).json({ error: "Project not found." });
    }

    if (threeBHK) {
      project.threeBHK = threeBHK;
    }
    await project.save();

    return res.status(200).json({ message: "Project details updated successfully." });
  }
  catch (error) {
    console.error('Error updating project:', error);
    return res.status(500).json({ error: "An error occurred while updating the project." });
  }
});


module.exports = router;