const services = require('../service');
const youtubeLib = require('./youtubeLib')(services);
const metaData = require('./metaData')(services);
const inquireLib = require('./inquireLib')(services);

module.exports = {
    youtubeLib,
    metaData,
    inquireLib
}