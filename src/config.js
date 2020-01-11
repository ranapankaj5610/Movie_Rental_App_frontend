
const dev={
    VIDLY_API_URL:"http://localhost:3900/api"
}

const production={
    VIDLY_API_URL:"https://movie-rental-backend.herokuapp.com/api"
}

const config = process.env.REACT_APP_STAGE === 'production'
  ? production
  : dev;

  export default {
   
    ...config
  };