import axios from 'axios';

var helpers = {
    getTopUsers: (listType = 'recent') =>
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/' + listType)
};

module.exports = helpers;