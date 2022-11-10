import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { useNavigate } from "react-router-dom";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import { generateRequestToken } from "../api/tmdb-api";

const GenerateSession = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('generateToken', generateRequestToken);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const token = data.results;

  return (
    <>
    <HomePage token={token}/>
    </>
  );
};

const HomePage = (props, token) => {
  const navigate = useNavigate();

  navigate(`https://api.themoviedb.org/3/authenticate/${token}?redirect_to=http://localhost:3000/home`);

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};

export default GenerateSession;