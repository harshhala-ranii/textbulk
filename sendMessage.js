async function sendMessageWithTyping(client, number, message) {
  const chatId = number.includes('@c.us') ? number : `${number}@c.us`;

  let chat = null;
  try {
    chat = await client.getChatById(chatId);
    console.log('✅ getChatById succeeded for', chatId);
  } catch (err) {
    console.warn('⚠️ getChatById failed (falling back). Error:', err?.message);
  }

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
      console.error('startTyping error:', err?.message);
      return null;
    }
  }

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
      console.log('No typing-clear method available; continuing to send the message');
    } catch (err) {
      console.error('stopTyping error:', err?.message);
    }
  }

  // try typing
  const usedMethod = await startTyping();
  if (usedMethod) {
    await new Promise(resolve => setTimeout(resolve, 10000));
    await stopTyping(usedMethod);
  }

  // send message
  try {
    if (chat && typeof chat.sendMessage === 'function') {
      await chat.sendMessage(message);
    } else {
      await client.sendMessage(chatId, message);
    }
    console.log(`📩 Sent to ${number}: ${message}`);
  } catch (err) {
    console.error(`❌ Failed to send to ${number}:`, err?.message);
    // don't throw, just exit so bulk loop continues
    return;
  }
}

module.exports = { sendMessageWithTyping };
