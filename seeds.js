// var mongoose=require("mongoose");
// var Campground=require("./models/campground");
// var Comment=require("./models/comment");


// var data=[
//     {name:"Cloud's Rest", 
//     image:"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     description:"Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner."
//     },
//     {name:"India Vangani", 
//     image:"https://r-cf.bstatic.com/images/hotel/max1024x768/226/226482348.jpg",
//     description:"Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner."
//     },
//     {name:"Beach Paradise", 
//     image:"https://www.gore-tex.com/sites/default/files/blog_images/beach-camping.jpg",
//     description:"Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner."
//     }
// ];
// function seedDB(){
//     //remove all the campground'
//     console.log(Campground)
//     Campground.remove({}, function(err){
//         if(err)
//         console.log(err);
//         else{
//         console.log("Removed Campgrounds");
//         }
//         //add a few campgrounds
//         data.forEach(function(seed){
//             Campground.create(seed, function(err, campground){
//                 if(err)
//                 console.log(err);
//                 else
//                 console.log("added a campground");
//                 //create a comment
//                 Comment.create(
//                     {text:"This place is so much fun. I wish to see more starry skies during my stay here",
//                     author:"Hritwik"
//                 }, function(err, comment){
//                     if(err)
//                     console.log(err);
//                     else{
//                     campground.comments.push(comment);
//                     campground.save();
//                     console.log("Created new comment");
//                     }
//                 });
//             });
//         });
//     });

//     //add a few comments
// }
// module.exports=seedDB;