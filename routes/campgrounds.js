var express=require("express");
var  router=express.Router();
var Campground=require("../models/campground");
var middleware= require("../middleware"); //../middleware/index is not required since index.js is a special name and it automatically looks for it

//EDIT CAMPGROUND ROUTE
router.get("/campgrounds/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
     Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
            console.log(err);
            }
            res.render("campgrounds/edit", {campground: foundCampground});
          });
    });


//INDEX ROUTE- show all campgrounds from db
router.get("/campgrounds", function(req,res){
    //get all campgrounds from db
    Campground.find({}, function(err, allCampgrounds){
        if(err)
        console.log(err);
        else{
            res.render("campgrounds/index", {campgrounds:allCampgrounds});
        }
    });

});

//NEW ROUTE-show form to create new campgrounds
router.get("/campgrounds/new", middleware.isLoggedIn, function(req,res){
   
       res.render("campgrounds/new");  
});



//CREATE ROUTE-add new campground to DB
router.post("/campgrounds", middleware.isLoggedIn, function(req,res){
      var name=req.body.name;
      var image=req.body.image;
      var desc=req.body.description;
      var author={
          id: req.user._id,
          username: req.user.username
      }
      var newCampground={name:name, image:image, description:desc, author:author};   
    //   campgrounds.push(newCampground);
    // we don't have an array to push. create a new campground and save it to the database
    Campground.create(newCampground, function(err,  newlyCreated){
        if(err)
        console.log(err);
        else{
            // redirect back to /campgrounds if it doesn't work
            res.redirect("/campgrounds"); 
        }
    })
});



//SHOW ROUTE-shows more info about one campground
router.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            //render show template with that campground 
            res.render("campgrounds/show", {campground:foundCampground});
        }
    });
});


        
//UPDATE CAMPGROUND ROUTE
router.put("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res){
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else{
            res.redirect("/campgrounds/"+ req.params.id);
        }
    })
    //redirect somewhere(usually the show page)
});


//DESTROY CAMPGROUND ROUTE
router.delete("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req,params.id, function(err){
         if(err){
             console.log(err);
             res.redirect("/campgrounds");
         }else{
             res.redirect("/campgrounds");
         }
    });
});



module.exports= router;