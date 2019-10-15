# dating-app

This app will help you find friend. THe goal of this app is to find friend with close interest for the user. The user will answer 10 questions and the app will use those 10 answer to find someone that closely matches the user's interests. After the user have been matched, they will be added to the list as well.

Heroku's deployment page: https://tranquil-earth-32180.herokuapp.com/

Inside **"app/data/friendList.js"** is the data for all of the users. Every new users' information will be added to this data set once they hit submit on the survey page.

Inside **"app/public/"** is where the public data are store. This folder contain *home.html* and *survey.html*. Home contain the layout for the initial page of the app. Survey contain the layout as well as post request to apiroutes.

Inside **"app/route/"** is where the routing for server.js take place. *htmlRoutes.js* contain the routing information to public folder. *apiRoutes.js* will take in post request from survey and perform the backend logic to get the best match friend.

*apiRoutes.js* backend logic will take in the parameter's of the user input and compare to each of the member in the *friendList* array and get the total score difference between them. For each of these comparison, the app will also compare the current lowest different in score. If there is someone with a lower difference in score as the for loop going through the friendList array, the current lowest score person's information will be replaced.

After going through the whole list, *apiRoutes.js* send back the best match person info in the form of a json and toggle the modal to display name and picture.