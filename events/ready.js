module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setActivity(client.config.discord.activity, { type: client.config.discord.activitytype, url: client.config.discord.activitytypeurl });
    client.user.setStatus(`${client.config.discord.profiletype}`)
};