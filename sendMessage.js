async function sendMessageWithTyping(client, number, message) {
  const chatId = number.includes('@c.us') ? number : `${number}@c.us`;

  // try to fetch chat (may fail for some libs or if jid format is off)
  let chat = null;
  try {
    chat = await client.getChatById(chatId);
    console.log('✅ getChatById succeeded for', chatId);
  } catch (err) {
    console.warn('⚠️ getChatById failed (falling back). Error:', err && err.message);
    chat = null;
  }

  // helper: attempt to start typing using whatever API exists
  async function startTyping() {
    try {
      if (chat && typeof chat.sendStateTyping === 'function') {
        await chat.sendStateTyping();
        console.log('→ used chat.sendStateTyping()');
        return 'chat.sendStateTyping';
      }
      if (typeof client.sendTyping === 'function') {
        await client.sendTyping(chatId);
        console.log('→ used client.sendTyping()');
        return 'client.sendTyping';
      }
      if (typeof client.sendPresenceUpdate === 'function') {
        // Baileys-style API: 'composing' shows typing
        await client.sendPresenceUpdate('composing', chatId);
        console.log('→ used client.sendPresenceUpdate("composing")');
        return 'client.sendPresenceUpdate(composing)';
      }
      if (typeof client.startTyping === 'function') {
        await client.startTyping(chatId);
        console.log('→ used client.startTyping()');
        return 'client.startTyping';
      }
      console.warn('No known typing method found on client/chat.');
      return null;
    } catch (err) {
      console.error('startTyping error:', err && err.message);
      return null;
    }
  }

  // helper: attempt to stop typing in whichever way corresponds
  async function stopTyping(method) {
    try {
      if (method === 'chat.sendStateTyping' && chat && typeof chat.clearState === 'function') {
        await chat.clearState();
        console.log('→ cleared via chat.clearState()');
        return;
      }
      if (typeof client.sendPresenceUpdate === 'function') {
        await client.sendPresenceUpdate('paused', chatId);
        console.log('→ cleared via client.sendPresenceUpdate("paused")');
        return;
      }
      if (typeof client.stopTyping === 'function') {
        await client.stopTyping(chatId);
        console.log('→ cleared via client.stopTyping()');
        return;
      }
      // no-op fallback
      console.log('No typing-clear method available; continuing to send the message');
    } catch (err) {
      console.error('stopTyping error:', err && err.message);
    }
  }

  // start typing (or attempt to)
  const usedMethod = await startTyping();

  // fixed 10 seconds typing as you requested
  await new Promise(resolve => setTimeout(resolve, 10000));

  // stop typing
  await stopTyping(usedMethod);

  // send the message (prefer chat.sendMessage if available)
  try {
    if (chat && typeof chat.sendMessage === 'function') {
      await chat.sendMessage(message);
    } else {
      await client.sendMessage(chatId, message);
    }
    console.log(`📩 Sent to ${number}: ${message}`);
  } catch (err) {
    console.error('sendMessage failed:', err && err.message);
    throw err;
  }
}

module.exports = { sendMessageWithTyping };
