module.exports = ({ youtubeLib }) => ({

    /**
     * Strategy to download videos from YouTube
     * @param {string} url
     * @param {string} formate
     */
    donwload: async (url, formate) => {
        await youtubeLib.donwloadVideo(url, formate)
    }
});