var express = require("express");

var app = express()
var PORT = process.env.PORT || 8080

var friendList = require("./app/data/friendList")

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//create function then call it
require("./app/route/apiRoutes")(app);
require("./app/route/htmlRoutes")(app)

app.post("/api/friends", function (req, res) {
    var newUser = req.body;
    var newUserScore = newUser.scores; //array of new user score

    var listScore = []; //store all the calculated score here to sort later

    //Set current best score to compare against other. initial value as 100 to guarantee the first user in the list will be chosen
    var currentBestScore = 100;

    for (var i = 0; i < friendList.length; i++) {
        var score = friendList[i].scores; //this is an array of score from current user
        console.log(score)
        console.log(newUser.scores)
        console.log(`-------------------`)


        //get the difference in score between new user and each existing member
        var diffScore = 0; //initialize difference in score
        for (var k = 0; k < score.length; k++) {
            // console.log(score[k], newUserScore[k])

            diffScore += parseInt(Math.abs(parseInt(score[k]) - parseInt(newUserScore[k])))
            console.log(diffScore)
        }
        // console.log(diffScore)
        // console.log(`------------------------------`)
        listScore.push(diffScore)
        console.log(listScore)

        if (currentBestScore > listScore[i]) {
            var matchName = friendList[i].name
            var picture = friendList[i].photo
            var bestMatch = friendList[i]
            currentBestScore = listScore[i]
        }

        console.log(`Match Name: ${matchName}`)
        console.log(`URL: ${picture}`)
    }
    // console.log(`================================`)
    // console.log(friendList)
    // console.log(`--------------------------------`)
    // console.log(newUser)
    // console.log(`--------------------------------`)
    // console.log(listScore)

    // var sortedScore = bubbleSort(listScore)
    // console.log(sortedScore)

    friendList.push(newUser)
    res.json(bestMatch);
})

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)
})