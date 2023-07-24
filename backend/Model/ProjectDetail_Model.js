const mongoose = require('mongoose');

const projectDetailSchema = new mongoose.Schema({
  projectName: {
    type: String,
  },
  projectImg :{
    type:String,
  },
  projectLocation :{
    type:String,
  },
  mapLink:{
    type:String,
  },



  twoBHK: [],   // Changed from 2BHK to twoBHK
  threeBHK: [], // Changed from 3BHK to threeBHK
  fourBHK: [],  // Changed from 4BHK to fourBHK
});

const ProjectDetail = mongoose.model('ProjectDetail', projectDetailSchema);

module.exports = ProjectDetail;
