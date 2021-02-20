module.exports = ({ NodeID3 }) => ({
    writer: (tags) => {
        const success = NodeID3.write(tags, filepath);

        NodeID3.write(tags, file, function(err) {  })

        return success;
    }
});