const mongoose = require('mongoose');

const projectDetailSchema = new mongoose.Schema({
  projectName: {
    type: String,
  },
  projectImg :{
    type:String,
  },
  projectGroup:{
    type:String,
  },
  projectLocation :{
    type:String,
  },
 
  reraNo:{
    type:String,
  },
  showLocation:{
    type:String,
  },
  mapLink:{
    type:String,
  },
  startDate:{
    type:String,

  },
  status:{
    type:String,

  },
  projectType:{
    type:String,
  },
  totalApartment:{
    type:String,

  },
  launchDate:{
    type:String, 

  },
  availability:{
    type:String,

  },
  oneBHK: [],
  oneFiveBHK: [],
  twoFiveBHK: [],
  twoBHK: [],   
  threeBHK: [],
  threeFiveBHK:[],
  fourBHK: [], 
  twoBHKVilla: [],
  threeBHKVilla :[],
  fourBHKVilla :[],

 
});

const ProjectDetail = mongoose.model('ProjectDetail', projectDetailSchema);

module.exports = ProjectDetail;
