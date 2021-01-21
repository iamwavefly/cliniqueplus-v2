const express = require("express")
const multer = require("multer")
const sharp = require("sharp")
const passport = require("passport")
const userSchema = require("../Models/User")
const passwordLocalMongoose = require("passport-local-mongoose")
const router = express.Router()
const auth_passport = require("../Auths/passport")

const storage = multer.memoryStorage()
const photo = multer({storage: storage})

router.get("/register", (req, res) => {
    res.render("register", {
        layout: false
    })
})
router.get("/login", (req, res) => {
    res.render("login", {
        layout: false
    })
})
function myAuth(req, res, next) {
    passport.authenticate('local', { 
      successRedirect: '/success', 
      failureRedirect: '/error', 
    })(req, res, next);
}
router.post("/register", photo.single("photo"), (req, res) => {
    sharp(req.file.buffer)
    .resize(200, 200, {
      fit: sharp.fit.cover
    })
    .webp({lossless: true})
    .toFile(`./public/users/${req.file.originalname}`, (err, data) => {
      if(err) throw err
      console.log(data);
    })
    try {
        userSchema.register({username: req.body.username, first_name: req.body.first_name,other_name: req.body.other_name,home_address: req.body.home_address,city: req.body.city,state: req.body.state,country: req.body.country,mobile_number: req.body.mobile_number,email: req.body.email, photo: req.file.originalname}, req.body.password, function(err, user) {
            if (err) {
                console.log(err);
            }
            passport.authenticate("local")(req, res, function() {
                req.flash("success_msg","Congratulations, your account has been created, you can now login!");
                res.redirect("/auth/login")
                console.log(user);
            })
        })
    } catch (error) {
        console.log(error);
    }
})
router.post("/login", async (req, res) => {
    try {
        await userSchema.findOne({username: req.body.username}, (error, user) => {
            if(error) console.log(error)
            console.log(user);
            if(user){
                res.render("login", {
                    user_auth: user,
                    layout: false
                })
            } else {
                req.flash("err_msg","Username not registered")
                res.redirect("/auth/login")
            }
        })
        
    } catch (error) {
        if(error) console.log(error)
    }
})
router.get("/dashboard", auth_passport, (req, res) => {
    res.render("main", {
        user: req.user
    })
})
router.get("/account-status", auth_passport, (req, res) => {
    res.render("status", {
        user: req.user
    })
})
router.get("/approval-center", auth_passport, (req, res) => {
    res.render("approval", {
        user: req.user
    })
})
router.get("/profile", (req, res) => {
    res.render("profile", {
        user: req.user
    })
})
module.exports = router