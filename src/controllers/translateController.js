const Rovarspraket = require('../services/Rovarspraket');
const JokeService = require('../services/JokeService');

const translate = {
    normal: (req, res) => {

        let translation= Rovarspraket.normal(req.body.text);
        
        res.status(200).json({
            success: true,
            message: 'Successfully translated',
            translation
        });
        
    },

    rovarspraket: (req, res) => {

        let translation = Rovarspraket.rovarspraket(req.body.text);
        
        res.status(200).json({
            success: true,
            message: 'Successfully translated',
            translation
        });
        
    },

    translateJokeOfTheDay: async (req, res) => {
        let joke = await JokeService.getRandomJoke();

        let translation = Rovarspraket.normal(joke);
        
        res.status(200).json({
            success: true,
            message: 'Successfully retrieved and translated a joke',
            joke,
            translation
        });
    }
};

module.exports = translate;