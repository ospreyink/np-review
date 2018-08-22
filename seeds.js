var mongoose = require('mongoose'),
    Park = require('park.js');
    
var data = [
    {
      name: "Golden Spike",
      description: "Golden Spike National Historic Site shares the stories of the people and settings that define the completion of the first Transcontinental Railroad.",
      image: "https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/8170DF2B-1DD8-B71B-0BAE531B96261C09.jpg?width=307&quality=90&mode=crop"
    },
    {
      name: "Zion National Park",
      description: "Home to Zion Canyon, this vast national park offers trails, climbing, camping & more.",
      image: "https://lh3.googleusercontent.com/proxy/KnVof8mcnCn344CE9MStJ-5bXmO20N1iYzggI30lbmBa_aX4xQhmDvC4m60Ik_SS0zP_OB5OZ7-mZzy93XKW6E8SGR8F0Jy2W-c3zMlQTY-1q1DiJm1aAbPolN7aAUJ8v9D2n_LlOykQeQzblI6cZ3nCm0g=w719-h360-k-no"
    },
    {
      name:  "Fort Vancouver",
      description: "Located on the north bank of the Columbia River, in sight of snowy mountain peaks and a vibrant urban landscape, this park has a rich cultural past. From a frontier fur trading post, to a powerful military legacy, the magic of flight, and the origin of the American Pacific Northwest, history is shared at four unique sites. Discover stories of transition, settlement, conflict, and community.",
      image: "https://pixabay.com/get/eb34b70c2ff61c22d2524518b7444795ea76e5d004b0144291f8c97ba0e4b7_340.jpg"
    },
    {
      name:  "African Burial Ground",
      description: "Lorem ipsum dolor sit amet, nunc faucibus eget fringilla wisi etiam rutrum, nec donec venenatis eleifend nam ac, urna mauris in vitae, curabitur convallis sit suscipit lorem velit ultricies, curabitur id.",
      image: "https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4e97e07ee3d21cac104496f4c971a7e4b1bd_340.jpg"
    },
    {
      name:  "Appalachian",
      description: "A conubia euismod tristique natoque pede. Leo sollicitudin vel, quis ante eu at vitae sed quisque, vel aliquet amet sociis facilisi, interdum tortor etiam sed eget amet gravida. ",
      image: "https://pixabay.com/get/ec30b1092fe90021d85a5854ee4d459fe270e7c818b412459df7c77aafee_340.png"
    }
];

function seedDB(){
  // Remove all entries
  Park.remove({}, function(err){
    if(err){
      console.log("Error removing parks.");
      console.log(err);
    } else {
      console.log("Success! Parks deleted.");
    }
  });
  
  // Generate data
  Park.create(
      {
      name: "Golden Spike",
      description: "Golden Spike National Historic Site shares the stories of the people and settings that define the completion of the first Transcontinental Railroad.",
      image: "https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/8170DF2B-1DD8-B71B-0BAE531B96261C09.jpg?width=307&quality=90&mode=crop"
    },
    {
      name: "Zion National Park",
      description: "Home to Zion Canyon, this vast national park offers trails, climbing, camping & more.",
      image: "https://lh3.googleusercontent.com/proxy/KnVof8mcnCn344CE9MStJ-5bXmO20N1iYzggI30lbmBa_aX4xQhmDvC4m60Ik_SS0zP_OB5OZ7-mZzy93XKW6E8SGR8F0Jy2W-c3zMlQTY-1q1DiJm1aAbPolN7aAUJ8v9D2n_LlOykQeQzblI6cZ3nCm0g=w719-h360-k-no"
    },
    {
      name:  "Fort Vancouver",
      description: "Located on the north bank of the Columbia River, in sight of snowy mountain peaks and a vibrant urban landscape, this park has a rich cultural past. From a frontier fur trading post, to a powerful military legacy, the magic of flight, and the origin of the American Pacific Northwest, history is shared at four unique sites. Discover stories of transition, settlement, conflict, and community.",
      image: "https://pixabay.com/get/eb34b70c2ff61c22d2524518b7444795ea76e5d004b0144291f8c97ba0e4b7_340.jpg"
    },
    {
      name:  "African Burial Ground",
      description: "Lorem ipsum dolor sit amet, nunc faucibus eget fringilla wisi etiam rutrum, nec donec venenatis eleifend nam ac, urna mauris in vitae, curabitur convallis sit suscipit lorem velit ultricies, curabitur id.",
      image: "https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4e97e07ee3d21cac104496f4c971a7e4b1bd_340.jpg"
    },
    {
      name:  "Appalachian",
      description: "A conubia euismod tristique natoque pede. Leo sollicitudin vel, quis ante eu at vitae sed quisque, vel aliquet amet sociis facilisi, interdum tortor etiam sed eget amet gravida. ",
      image: "https://pixabay.com/get/ec30b1092fe90021d85a5854ee4d459fe270e7c818b412459df7c77aafee_340.png"
    }, function(err, park){
      if(err){
        console.log(err);
      } else {
        console.log("Park generated.");
      }
    }
  );
  
  }

module.exports = seedDB;