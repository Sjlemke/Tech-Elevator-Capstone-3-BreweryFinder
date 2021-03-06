import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:8080"
});

export default {

      getBeersByBrewery(breweryId) {
        return http.get(`/breweries/${breweryId}/beerlist`);
      },

      getBeerInfo(beerId) {
        return http.get(`/beers/${beerId}`);
      },

      addBeer(newBeer) {
        return http.post('/beers/maintenance/addBeer', newBeer);
      },

      updateBeerStatus(newStatus) {
        return http.post('/beers/maintenance/updateBeerStatus', newStatus);
      },

      deleteBeer(beerId) {
          return http.post(`/beers/maintenance/deleteBeer/${beerId}`)
      },

      getBeerReviewsById(beerId) {
        return http.get(`/reviews/${beerId}`)
    },
    
      addBeerReview(review) {
      return http.post('/reviews/maintenance/addReview', review)
  },

      getAverageStarsById(beerId) {
        return http.get(`/reviews/${beerId}/averageStars`)
    }

  }