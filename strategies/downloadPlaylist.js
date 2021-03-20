module.exports = ({ youtubeLib }) => ({

    /**
     * Strategy to download playlists from YouTube
     * @param {string} url
     * @param {string} formate
     */
    download: async (url, formate) => {
        await youtubeLib.donwloadPlaylist(url, formate)
    }
});