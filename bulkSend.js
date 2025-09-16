
const { sendMessageWithTyping } = require('./sendMessage');
const { getNextMessage } = require('./template');
const { loadContacts } = require('./contact');   
const { randomDelay } = require('./utils');
const { buildMessage } = require('./messageBuilder');


async function bulkSend(client) {
  const contacts = await loadContacts();

  for (const contact of contacts) {
    const chatId = contact.phone.replace(/[^0-9]/g, '') + '@c.us';
    const template = getNextMessage(); // returns array of parts
    console.log('Contact:', contact);
    const messages = buildMessage(template, contact); // array of strings

    console.log('----------------------------------------');
    console.log(`Preparing to send message to: ${contact.candidateFirstName}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.candidateEmail}`);
    console.log(`Company: ${contact.company}`);
    console.log(`Recruiter: ${contact.recruiterName}`);
    console.log(`Chat ID: ${chatId}`);
    console.log('Message Preview:', messages);
    console.log('----------------------------------------');


    for (const msg of messages) {
      await sendMessageWithTyping(client, chatId, msg);

      // random small pause between parts (e.g. 2–3 sec)
      const gap = randomDelay(2000, 3000);
      console.log(`⏳ Waiting ${Math.round(gap / 1000)}s before next part...`);
      await new Promise(r => setTimeout(r, gap));
    }

    console.log(`✅ Completed all parts for ${contact.candidateFirstName}.`);

    // long cooldown before next candidate (5 min)
    const delay = randomDelay(700000, 900000);
    console.log(`⏳ Waiting ${Math.round(delay / (1000 * 60))} min before next candidate...`);
    await new Promise(r => setTimeout(r, delay));
  }
}

module.exports = { bulkSend };
