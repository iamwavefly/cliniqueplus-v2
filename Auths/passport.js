const auth_passport = (req, res, next) => {
    if(req.isAuthenticated()) {
        next()
    } else {
        req.flash("err_msg","Please login to access this resources!");
        res.redirect("/auth/login")
    }
}

module.exports = auth_passport