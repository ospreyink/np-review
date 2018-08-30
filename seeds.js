var mongoose = require("mongoose"),
    Park = require("./models/park");
    // Comment = require("./models/comment");
 
var data = [
  {
    name: "Golden Spike", 
    image: "/imgs/spike.png",
    description: "Golden Spike National Historic Site shares the stories of the people and settings that define the completion of the first Transcontinental Railroad."
  },
  {
    name: "Zion National Park", 
    image: "/imgs/zion.png",
    description: "Home to Zion Canyon, this vast national park offers trails, climbing, camping and more."
  },
  {
    name: "Alibates Flint Quarries", 
    image: "/imgs/quarry.png",
    description: "13,000 years ago this site was already well-known by mammoth hunters as a place to get the best stone for their tools."
  },
  {
    name: "Lewis & Clark", 
    image: "/imgs/lewisclark.png",
    description: "Between May 1804 and September 1806, 31 men, one woman, and a baby traveled from the plains of the Midwest to the shores of the Pacific Ocean. They called themselves the Corps of Discovery. In their search for a water route to the Pacific Ocean, they opened a window into the west for the young United States."
  },
  {
    name: "Lincoln Home", 
    image: "/imgs/lincoln.png",
    description: "Abraham Lincoln believed in the ideal that everyone in America should have the opportunity to improve his/her economic and social condition. Lincoln’s life was the embodiment of that idea."
  }
];

function seedDB(){
  // Delete parks
  Park.deleteMany({},function(err){
    if(err){
      console.log("Error: " + err);
    } else {
      console.log("Parks cleared from db.");
    }
    });
  
  // Create parks
  data.forEach(function(seed){
      Park.create(seed, function(err, park){
        if(err){
          console.log("Error: " + err);
        } else {
          console.log("Park added to db.");
        }
      });
    });
    
  }
 
module.exports = seedDB;