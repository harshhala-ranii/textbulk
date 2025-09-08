const { sendMessageWithTyping } = require('./sendMessage');
const { getNextMessage } = require('./template');
const { loadContacts } = require('./contact');
const { randomDelay, wait } = require('./utils');
const { buildMessage } = require('./messageBuilder');

async function bulkSend(client) {
  const contacts = await loadContacts();

  for (const contact of contacts) {
    const chatId = contact.phone.replace(/[^0-9]/g, '') + '@c.us';
    const template = getNextMessage(); // sequential rotation
    const message = buildMessage(template, contact);

    console.log('----------------------------------------');
    console.log(`Preparing to send message to:`);
    console.log(`Name: ${contact.candidateFirstNameFormatted}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.candidateEmail}`);
    console.log(`Company: ${contact.company}`);
    console.log(`Recruiter: ${contact.recruiterName}`);
    console.log(`Chat ID: ${chatId}`);
    console.log('Message Preview:');
    console.log(message);
    console.log('----------------------------------------');

    await sendMessageWithTyping(client, chatId, message);
    console.log(`✅ Sent to ${contact.candidateFirstNameFormatted}`);

    const delay = randomDelay(300000, 300000); // 5 min
    console.log(`Waiting for ${Math.round(delay / 1000)} seconds before next message...`);
    await new Promise(r => setTimeout(r, delay));
  }
}

module.exports = { bulkSend };