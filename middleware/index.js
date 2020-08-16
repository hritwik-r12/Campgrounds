var Campground=require("../models/campground");
var Comment= require("../models/comment");
var User= require("../models/user");

//All the middleware goes here
var middlewareObj={};
middlewareObj.checkCampgroundOwnership= function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                console.log(err);
                req.flash("error", "Campground not found!");
                res.redirect("back");
            } else{
                //does user own the campground?
                //Campground.author.id : This is not a string. Its a mongoose object
                //req.user.id : This is a string
                if(foundCampground.author.id.equals(req.user.id)){
                   next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    }else {
        req.flash("error", "You need to be logged in to do that!");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership= function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                console.log(err);
                res.redirect("back");
            } else{
                //does user own the comment?
                //Comment.author.id : This is not a string. Its a mongoose object
                //req.user.id : This is a string
                if(foundComment.author.id.equals(req.user.id)){
                   next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    }else {
        req.flash("error","You need to be logged in to do that");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn= function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that!");
    res.redirect("/login");
};


module.exports= middlewareObj;