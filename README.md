# Assignment 1 - ReactJS app.

Name: Rebecca Troy

## Overview.

This repository contains the code for the Movies ReactJS Web App as part of CA1 in the 
module Web App Development 2. This App interacts with the TMDB API to gather and display
various data related to movies.

### Features.

This section details the features that have been added to the application as part of
CA1, as well as the pre-existing features that have been modified.

+ Trending Movies Page
+ Filter Card for trending movies page with additional option to filter by trending
'this week' or 'today'
+ Cast List for every movie
+ Filter Card for cast list page - search cast by name or character
+ Crew List for every movie
+ Filter Card for crew list page - search crew by name or job
+ Person Details Page (for cast / crew members)
+ Must-Watch feature now fully functional with cache, with 'Must-Watch' movies page similar
to 'Favorites'
+ 'Sort By' filter on all movies, cast, and crew list pages
+ Pagination on all list pages
+ Responsive UI on all pages
+ Session generation and authentication on index page load
+ New MUI Components rating, carousel, autocomplete

## Setup requirements.

No additional steps are required to run this app locally. Follow the below commands from
within the repo directory to start the app:
```
npm install
npm start
```

## API endpoints.

This section lists the additional TMDB endpoints used with a description
and pathname(s) for each one.

+ Trending movies by week or day = /trending/today, /trending/week
+ Movie credits, divided into people within the cast array and people within the crew
array = /movie/:id/cast, /movie/:id/crew
+ Person Details = /person/:id
+ Generate Request token = /

## Routing.

This section lists the new routes supported by the app and states the
associated page.

+ /movies/mustwatch - displays all upcoming movies that user has flagged as 'must watch'.
+ /person/:id - detail view of a particular person.
+ /movies/:id/cast - displays the cast of a particular movie
+ /movies/:id/crew - displays the crew of a particular movie
+ /movies/trending/week - displays the movies trending this week
+ /movies/trending/today - displays the movies trending today

## Independent learning (If relevant).

This section details the technologies and techniques adopted for this CA that have been
researched independently, along with the relevant source code filesnames and any online
resources used as guides.

### Pagination

Pagination is implemented for every list page on the web app. This means the pages only
display a limited amount of items, as the items are divided into pages that can be navigated
between.

The changes can be seen in the following source code:

+ src/components/movieList/index.js
+ src/components/templateMovieListPage/index.js
+ src/components/castList/index.js
+ src/components/crewList/index.js
+ src/components/templateCastListPage/index.js
+ src/components/templateCrewListPage/index.js

As well as this, custom styling rules for the pagination can be seen here:

+ src/components/movieList/index.css

To implement this feature, I referenced [the following guide.](https://github.com/AdeleD/react-paginate#readme)

### Sorting

Sorting is also implemented on every list page of the web app as part of the filter cards.

The changes can be seen in the following source code:

+ src/components/filterMoviesCard/index.js
+ src/components/templateMovieListPage/index.js
+ src/components/filterCastCard/index.js
+ src/components/templateCastListPage/index.js
+ src/components/filterCrewCard/index.js
+ src/components/templateCrewListPage/index.js
+ src/components/filterTrendingMoviesCard.js/index.js

I learned about sorting through [the following documentation.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### New MUI Components

I encorporated several new MUI components not covered in lectures/labs, namely 'rating',
'autocomplete', and 'carousel'.

I implemented the rating component with the help of [the following documentation.](https://mui.com/material-ui/react-rating/)
The change can be seen in the following file:

+ src/components/reviewForm/index.js

I implemented the autocomplete component with the help of [the following documentation.](https://mui.com/material-ui/react-autocomplete/)
The changes can be seen in the following files:

+ src/components/filterMoviesCard/index.js
+ src/components/filterTrendingMoviesCard.js/index.js
+ src/components/templateMovieListPage/index.js

Finally, I implemented the carousel component with the help of [the following article.](https://www.javatpoint.com/carousel-in-react)
The change can be seen in the following file:

+ src/components/templateMoviePage/index.js

### Sessions

I attempted to implement session generation and authentication. Currently, the
web application generates and authenticates a request token on page load, though this
isn't reflected in the front end.

I researched session generation and authentication from the [API documentation.](https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id)

The changes can be seen in the following files:

+ src/api/tmdb-api.js
+ src/pages/homePage.js