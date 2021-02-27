module.exports = ({ NodeID3 }) => ({
    /**
     * it write tags in a audio file 
     * @param {object} tags
     * @param {string} filepath
     * @returns {boolean}
     */
    writer: (tags, filepath) => {
        const success = NodeID3.write(tags, filepath);
        // async
        // NodeID3.write(tags, file, function(err) {  });

        return success;
    },

    /**
     * it update tags in a audio file 
     * @param {any} tags
     * @param {string} filepath
     * @returns {any}
     */
    update: (tags, filepath) => {
        const success = NodeID3.update(tags, filepath);

        return success;
    }
});