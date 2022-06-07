const { BadRequestError } = require('../errors');
const vowels = ['a', 'e', 'i', 'o', 'u'];
const specialCharacters = ['-', '.', ',', '!', '?', ':', ';', ' ', '/', '\n', '\\', '"', '\''];

const Rovarspraket = {

    // Translate a string to rovarspraket
    normal: function(str, jokeOftheDay = false) {

        if(!str || typeof str !== 'string' || str.length === 0) {
            throw new BadRequestError('No string provided');
        }
        
        let result = '';

        for (let i = 0; i < str.length; i++) {

            if (vowels.includes(str[i]) || specialCharacters.includes(str[i])) {
                result += str[i];
            } else if( str[i] === ' ') {
                result += ' ';
            } else {
                result += str[i] + "o" + str[i];
            }
        }

        return result;
    },

    // Translate a string to rovarspraket
    rovarspraket: function(str) {

        if(!str || typeof str !== 'string' || str.length === 0) {
            throw new BadRequestError('No string provided');
        }

        let result = '';

        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i]) || specialCharacters.includes(str[i])) {
                result += str[i];
            } else {
                if(str[i] === str[i + 2] && str[i + 1] === "o") {
                    result += str[i];
                    i += 2;
                } else {
                    throw new BadRequestError();
                }
            }
        }

        return result;
    },

};

module.exports = Rovarspraket;