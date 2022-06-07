const axios = require('axios').default;
const { InternalServerError, NotFoundError } = require('../errors');

let jokeService = {

    // Returns a random joke
    getRandomJoke: async () => {
        let response;
        try {
          response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        } catch (error) {
          throw new InternalServerError();
        }

        if(!response.data.joke){
            throw new NotFoundError("Joke not found");
        }

        return response.data.joke;
      }
};

module.exports = jokeService;