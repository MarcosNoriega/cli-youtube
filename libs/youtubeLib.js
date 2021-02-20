module.exports = ({ youtubedl, fs, path }) => ({
    /**
     * this method downloads a video from youtube
     * @param {string} url
     * @param {string} formate [mp3, mp4]
     */
    donwloadVideo: (url, formate) => {
        const video = youtubedl(url,
        ['--format=18'],
        { cwd: __dirname })

        let size = 0;
        let tags = {};
        video.on('info', function(info) {
            console.log('Download started')
            console.log('filename: ' + info._filename)
            console.log('size: ' + info.size)

            size = info.size;
            tags = info;
            video.pipe(fs.createWriteStream(path.join(__dirname, `../Musica/${info.title}.${formate}`)))
        })
        
        let pos = 0
        video.on('data', function data(chunk) {
          pos += chunk.length
          if (size) {
            let percent = (pos / size * 100).toFixed(2)
            process.stdout.cursorTo(0)
            process.stdout.clearLine(1)
            process.stdout.write(percent + '%')
          }
        })
    },

    /**
     * this method downloads a playlist from youtube
     * @param {any} url
     * @returns {any}
     */
    donwloadPlaylist: (url) => {
        const video = youtubedl(url)
      
        video.on('error', function error(err) {
          console.log('error 2:', err)
        })
      
        let size = 0
        video.on('info', function(info) {
          size = info.size
          let output = path.join(__dirname + '../Musica/' + size + '.mp4')
          video.pipe(fs.createWriteStream(output))
        })
      
        let pos = 0
        video.on('data', function data(chunk) {
          pos += chunk.length
          if (size) {
            let percent = (pos / size * 100).toFixed(2)
            process.stdout.cursorTo(0)
            process.stdout.clearLine(1)
            process.stdout.write(percent + '%')
          }
        })
      
        video.on('next', donwloadPlaylist)
      }
      
})