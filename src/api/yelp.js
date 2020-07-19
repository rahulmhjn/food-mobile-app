import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer WOQbTDNHBLjDhhz0tjgvARorvBVFjRByJKGyJKNaYd2vGTUE5QxwWRAmB5pbvRht3xTO91fGXx-dj6XNuBcrbVFhYWEU7yDee6dMUQ3gnAFY5EEaFjwerkvMHkrlXnYx'
    }
});

