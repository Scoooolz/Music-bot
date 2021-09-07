module.exports = {
    emojis: {
        off: ':x:',
        error: ':warning:',
        queue: ':bar_chart:',
        music: ':musical_note:',
        success: ':white_check_mark:',
    },

    discord: {
        token: process.env.TOKEN,
        prefix: process.env.PREFIX,
        activity: process.env.STATUS_NAME,
        activitytype: process.env.STATUS_TYPE,
        activitytypeurl: process.env.STATUS_TYPE_URL,
        profiletype: process.env.PROFILE_TYPE
    },

    filters: ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding'],
};