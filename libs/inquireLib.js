const { questions } = require('./questions');

module.exports = ({inquirer}) => ({
    toAsk: async() => {
        const answers = await inquirer.prompt(questions)

        return answers;
    }
})