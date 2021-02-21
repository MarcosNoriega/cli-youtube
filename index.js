const { inquirer } = require('./service');
const { youtubeLib, metaData, inquireLib } = require('./libs');

(async () => {
    const answers = await inquireLib.toAsk();
    youtubeLib.donwloadVideo(answers.link, answers.formate);
})();
