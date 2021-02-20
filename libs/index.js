const services = require('../service');
const youtubeLib = require('./youtubeLib')(services);
const metaData = require('./metaData')(services);

module.exports = {
    youtubeLib,
    metaData
}