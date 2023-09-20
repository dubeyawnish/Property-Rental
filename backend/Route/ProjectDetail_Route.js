const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const ProjectDetail = mongoose.model('ProjectDetail');


router.post('/projects', async (req, res) => {
  try {
    // Assuming the request body has an array of objects for 2BHK and 3BHK
    const { projectName, projectLocation,projectDirection, projectImg, projectType,showLocation, projectGroup,reraNo, startDate, status, totalApartment, launchDate, availability,builderName, oneBHK,
      oneFiveBHK,
      twoFiveBHK, twoBHK, mapLink, threeBHK, threeFiveBHK, fourBHK,fiveBHK,twoBHKVilla,threeBHKVilla,fourBHKVilla,fiveBHKVilla } = req.body;

    // Create a new Project instance
     //console.log("hello",threeBHKVilla);
    const newProject = new ProjectDetail({
      projectName,
      projectLocation,
      projectImg,
      projectType,
      reraNo,
      showLocation,
      projectDirection,
      projectGroup,
      mapLink,
      builderName,
      oneBHK,
      oneFiveBHK,
      twoFiveBHK,
      twoBHK,
      threeBHK,
      threeFiveBHK,
      twoBHKVilla,
      threeBHKVilla,
      fourBHKVilla,
      fiveBHKVilla,
      fourBHK,fiveBHK, startDate, status, totalApartment, launchDate, availability
    });

    // Save the new project to the database
    await newProject.save();
    res.status(201).json({ message: 'Project created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create the project' });
  }
});

// router.get('/getProjectByLocation', async (req, res) => {
//   try {
//     const allLocation = await ProjectDetail.find({}, 'showLocation');
//     const uniqueProjects = [];
//     const projectNames = [];

//     for (let i = 0; i < allLocation.length; i++) {
//       const location = allLocation[i].showLocation;

//       if (!projectNames.includes(location)) {
//         uniqueProjects.push(allLocation[i]);
//         projectNames.push(location);
//       }
//     }
//     // If there are errors, return Bad request and the errors
//     //console.log(allProject)
//     res.json(uniqueProjects)

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }

// })

// router.post('/getAllProjectByLocation', async (req, res) => {
//   const { location } = req.body;
//   try {
//     const proDetail = await ProjectDetail.find({ showLocation: location });
//     res.json(proDetail);


//   }
//   catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }

// })


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










router.get('/getAllBuilder', async (req, res) => {
  try {
    const allBuilder = await ProjectDetail.find({}, 'builderName propertyType ');
    const uniqueBuilders = [];
    const BuilderNames = [];

    for (let i = 0; i < allBuilder.length; i++) {
      const builderName = allBuilder[i].builderName;

      if (!BuilderNames.includes(builderName)) {
        uniqueBuilders.push(allBuilder[i]);
        BuilderNames.push(builderName);
      }
    }
    // If there are errors, return Bad request and the errors
    //console.log(allProject)
    res.json(uniqueBuilders)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

});





router.get('/getAllProjectByBuilders/:builderId', async (req, res) => {
  try {
    const { builderId } = req.params;
    //console.log(builderId);
    const project = await ProjectDetail.find({ _id: builderId });

    const Projects = await ProjectDetail.find({ builderName: project[0].builderName });

    const uniqueProjects = [];
    const projectNames = [];

    for (let i = 0; i < Projects.length; i++) {
      const { _id, projectName,projectImg ,projectType} = Projects[i]; // Destructure the required fields

      if (!projectNames.includes(projectName)) {
        uniqueProjects.push({ _id, projectName,projectImg,projectType }); // Construct a new object with only the required fields
        projectNames.push(projectName);
      }
    }

    res.json(uniqueProjects);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



router.get('/getProjectDetail/:projectId', async (req, res) => {
  const { projectId } = req.params;
  try {
    const proDetail = await ProjectDetail.findOne({ _id: projectId });
    res.json(proDetail);


  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})



router.get('/getAllProjects', async (req, res) => {
  try {
    const allProject = await ProjectDetail.find({}, 'projectName projectType projectImg projectDirection');
    const uniqueProjects = [];
    const projectNames = [];

    for (let i = 0; i < allProject.length; i++) {
      const projectName = allProject[i].projectName;

      if (!projectNames.includes(projectName)) {
        uniqueProjects.push(allProject[i]);
        projectNames.push(projectName);
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




router.get('/getAllLocation', async (req, res) => {
  try {
    const allLocation = await ProjectDetail.find({}, 'showLocation projectType projectDirection');
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


router.get('/getAllProjectsByLocation/:location', async (req, res) => {
  const { location } = req.params;
  try {
    const proDetail = await ProjectDetail.find({ showLocation: location} ,'projectName projectType projectImg' );

    res.json(proDetail);


  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})


module.exports = router;