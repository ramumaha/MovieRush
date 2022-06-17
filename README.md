# movie_review
  A robust system where the user can view the details of the latest movies,add to wishlist,add reviews.
  The user need not sign in just to view the movies.
  To access the other perks like adding movies to watchlist and writing a review the user needs to be signed in.
  The users information are safely stored ,the password being encypted before storage.
  The search feature can let ypu tp  search the movies from any part of the website.
        The top 10 searches that matches the keyword is displayed.
   
**Long description:**

**Registered users:**
    Once registered,the website automatically loads to the home page.
**Profile**
        1.The user can view the profile where the user name and the email id are visible.
        2.The user has the option of signing out.If the user closes the window without signing out,the site remembers the details for 2 weeks.Any time after that,the user has to login again.
 **Watchlist**
        Only the registered user can access the watchlist option.The watchlist stores all the bookmarked movies.There is option of removing the movies once added.
        The registered user can view the contents of the watchlist in the home page too.
**Review**
The registered users have the option of offering reviews to the movies.The review is a form which asks details regarding review title,descriptions and rating.Once submitted the page automatically refreshes and the newly added review is displayed on the screen.

**Both registered and unregistered users
    Search**
        There is a search bar present in the navigation bar,The users can search for the desired movie and the top 10 results that match the search are displayed.
   ** Movie details **
        Once the desired movie is chosen,the user is redirected to the custom page of the movie.Details such as movie name,date,country,director etc., are displayed.The drop down near view all the information details about the plot of the movie.The rating and the cast is also displayed in the right.
    The reviews given by all the users for the specific movie are loaded by the side.

**Back-end**
    Express - mongo
    Bcrypt- 3rd part npm encrypting package used to store the password in encrypted format
    Express-session - 3rd party npm package used to specify the details of the active session for the user.
    Cors - For cross origin site access
    Passport-jwt -3rd party npm package to implement protection for routing. jwtFromRequest used to get the  authentication header information which is cross checked to verify the validity of the user login.Once valid the protected route is accessed by the user else access is denied.

    

