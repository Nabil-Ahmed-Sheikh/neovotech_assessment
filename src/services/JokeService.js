const axios = require('axios').default;
const { InternalServerError, NotFoundError } = require('../errors');
const config = require('../config/config');

let jokeService = {

    // Retrieve a random joke from the API
    getRandomJoke: async () => {
        let response;
        try {
          response = await axios.get(config.jokeapi);
        } catch (error) {
          throw new InternalServerError();
        }

        if(!response.data.joke){
            throw new NotFoundError('Joke not found');
        }

        return response.data.joke;
      }
};

module.exports = jokeService;