const client = require('./client');
const { bulkSend } = require('./bulkSend'); // <-- use destructuring

client.on('ready', async () => {
    await bulkSend(client);
});

client.initialize();