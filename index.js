const { inquireLib } = require('./libs');
const strategies = require('./strategies');

(async () => {
    const answers = await inquireLib.toAsk();
    let selectedStrategy = strategies(answers.type);
    selectedStrategy.downloadYoutube(answers.link, answers.formate);
})();
