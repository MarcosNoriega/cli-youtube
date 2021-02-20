const { inquirer } = require('./service');
const { youtubeLib, metaData } = require('./libs');

(async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'que quieres descargar',
            choices: ['video', 'playlist']
        },
        {
            type: 'list',
            name: 'formate',
            message: 'elige formato',
            choices: ['mp3', 'mp4']
        },
        {
            type: 'question',
            name: 'link',
            message: 'link de youtube'
        }
    ]);

    youtubeLib.donwloadVideo(answers.link, answers.formate);

    console.log(tags);
    
})();
