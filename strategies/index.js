const lib = require('../libs');

const downloadPlaylist = require('./downloadPlaylist')(lib);
const downloadVideo = require('./downloadVideo')(lib);

const downloadStrategies = {
    downloadPlaylist,
    downloadVideo
};

const api = require('./api');

const selectStrategy = ({downloadPlaylist, downloadVideo}) => (strategy) => {
    
    const strategies = {
        playlist: downloadPlaylist,
        video : downloadVideo
    }

    const selectedStrategy = strategies[strategy];
    return api(selectedStrategy);
};

module.exports = selectStrategy(downloadStrategies);

