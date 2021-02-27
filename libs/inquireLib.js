const { questions } = require('./questions');

module.exports = ({inquirer}) => ({
    /**
     * execute the questions of CLI
     * @returns {any}
     */
    toAsk: async() => {
        const answers = await inquirer.prompt(questions)

        return answers;
    }
})