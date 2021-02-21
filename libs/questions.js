const questions = [
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
]

module.exports = {
    questions
};