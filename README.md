# Get Movie - API
Let's search your favorite movie!
https://pablogomezlhp.github.io/2CodeProject/index.html

This API site was set up for The Code Institute as my second milestone project (Interactive FrontEnd Development Milestone Project), which focuses on interactivity with Javascript (DOM) and jQuery, plus HTML5, CSS and Bootstrap 4. Enjoy!
## UX
The idea was to create a simple and easily accessible page. For this it was necessary to initially design for mobile devices so that we can discard what was not really necessary.

## User Stories
As a user of this site, I would like to see details regarding the release year, company responsible for the production of the movie and also access to the movie site if possible. So the best way was to have all access only on one page, with a clear view and easy to understand. In the search field I chose to list all movies according to the input entered, so it is not necessary to know the correct / full name of the movie. I chose to create a clean and easily accessible website.









### Desktop & Ipad

<img width="601" alt="Screenshot 2019-10-17 at 20 37 59" src="https://user-images.githubusercontent.com/51464234/67042367-a2419d00-f11f-11e9-8d8f-d27deffa5b2d.png">


<img width="601" alt="Screenshot 2019-10-17 at 20 38 12" src="https://user-images.githubusercontent.com/51464234/67042369-a2419d00-f11f-11e9-8d28-e3b09aca41f5.png">





### Mobile

<img width="490" alt="Screenshot 2019-10-17 at 20 38 28" src="https://user-images.githubusercontent.com/51464234/67042370-a2419d00-f11f-11e9-8498-7ef1ca1a7346.png">
  

## Features
### Existing features
The home page features archiving data through local storage, so the latest search is saved and made available without the customer having to type again. It also has an alert that tells you if there are data that relate to the text you entered.
After the movie is selected the site loads a new page that shows the original title of the movie, shows the duration, the company responsible for the production of the movie. It shows a brief introduction to the history of the movie and also has an icon that leads to the IMDB website.
The page also provides an official website of the company responsible for the production of the film.

### Features left to implement
This site was created to be my second project. I believe I was able to consume the API cleanly and efficiently, but one feature that can be added in the future is the availability of official trailers. trailers are not available in the TMDB API so it would be necessary to pull from another server.
Technologies used in this project:
HTML5:
https://en.wikipedia.org/wiki/HTML CSS3:
https://en.wikipedia.org/wiki/Cascading_Style_Sheets Bootstrap 4:
https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework) Javascript:
https://en.wikipedia.org/wiki/JavaScript jQuery
https://en.wikipedia.org/wiki/JQuery d3.js
TMDB api https://www.themoviedb.org/documentation/api
Fontawesome https://fontawesome.com
GoogleFonts https://fonts.google.com
## User Testing
The following test cases have been performed to test functionality:
     -	Alert pop-up
* Expected Behavior = Informs that the name entered has no data available for reading
Form input movie name 
* Expected Behavior = All movies having the entered word are listed in the field below
Click on Movie Details 
* Expected Behavior = Page Reloads with Movie Info 
hover over IMDB icon  
* Expected Behavior = Hover is enabled by changing the color icon. 
Click on IMDB icon 
* Expected Behavior = Website loads IMDB page for movie 
 Click on the "Visit Movie Site" link 
* Expected Behavior = Movie Site Page (If Existing) Will Load 
 Pass Clicking on the "Go back" link on the header 
 Expected Behavior = Site Returns Home


HTML validated via https://validator.w3.org/ - Pass CSS validated via https://jigsaw.w3.org/css-validator/ - Pass Deployment
For this project, I have used Atom to deployed my project and Github Pages to host the application.
Below are the steps I have taken to achieve this:
Navigate to "settings"; Scroll down to "GitHub Pages" section (see image below); Selected "master branch" and deployed. Deployment
## Github Pages Link
https://github.com/pablogomezlhp/TheOMDB_API
Credits https://www.themoviedb.org/documentation/api
Copyright 2019 - Pablo Patrick


