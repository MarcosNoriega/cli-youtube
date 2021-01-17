const youtube = (youtubedl ) => ({
    /**
     * 描述
     * @date 2021-01-17
     * @param {string} url
     * @param {string} formate
     */
    donwloadVideo: (url, formate) => {
        const video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',
        ['--format=18'],
        { cwd: __dirname })


        video.on('info', function(info) {
            console.log('Download started')
            console.log('filename: ' + info._filename)
            console.log('size: ' + info.size)

            video.pipe(fs.createWriteStream('myvideo.mp4'))
        })        
    },

    donwloadPlaylist: (url) => {
        const video = youtubedl(url)
      
        video.on('error', function error(err) {
          console.log('error 2:', err)
        })
      
        let size = 0
        video.on('info', function(info) {
          size = info.size
          let output = path.join(__dirname + '/', size + '.mp4')
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