var friendList = require("../data/friendList")


module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

    app.get("/api/list", function (req, res) {
        res.json(friendList)
    })


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

                //calculate the difference in score between user and existing user
                diffScore += parseInt(Math.abs(parseInt(score[k]) - parseInt(newUserScore[k])))
                console.log(diffScore)
            }

            //push score difference into list score array
            listScore.push(diffScore)
            console.log(listScore)

            //if there's a new user with better scoring then replace current best score
            if (currentBestScore > listScore[i]) {
                var matchName = friendList[i].name
                var picture = friendList[i].photo
                var bestMatch = friendList[i]
                currentBestScore = listScore[i]
            }

            console.log(`Match Name: ${matchName}`)
            console.log(`URL: ${picture}`)
        }

        //push user's score into the list
        friendList.push(newUser)
        res.json(bestMatch);
    })

}