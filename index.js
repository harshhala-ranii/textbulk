// index.js
const client = require('./client');
const { bulkSend } = require('./bulkSend');

// When WhatsApp client is ready, start sending messages
client.on('ready', async () => {
  console.log('🚀 Starting bulk send...');
  try {
    await bulkSend(client);
    console.log('✅ Bulk sending finished!');
  } catch (err) {
    console.error('❌ Error in bulk sending:', err);
  } finally {
    // optional: exit after sending
    process.exit(0);
  }
});

// Initialize client (this loads session or shows QR if first time)
client.initialize();
