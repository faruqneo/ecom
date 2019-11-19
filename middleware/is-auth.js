module.exports = (req, res, next) => {
    //console.log(req.session.isLoggedIn);

    if (!req.session.isLoggedIn) {
        //console.log("cv")
        return res.redirect('/login');
    }
    next();
}