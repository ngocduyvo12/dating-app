var friendList = require("../data/friendList")


module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

    app.get("/api/list", function(req, res){
        res.json(friendList)
    })

}