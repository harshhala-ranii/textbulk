function buildMessage(template, contact) {
  return template
    .replace('{candidateFirstName}', contact.candidateFirstNameFormatted)
    .replace('{recruiterName}', contact.recruiterName)
    .replace('{company}', contact.company)
    .replace('{candidateEmail}', contact.candidateEmail)
    .replace('{emailSubject}', contact.emailSubject)
    .replace('{conversationLink1}', contact.conversation.replace('/conversation', '/conversation'))
    .replace('{conversationLink2}', contact.conversation.replace('/conversation', '/thread'))
    .replace('{conversationLink3}', contact.conversation.replace('/conversation', '/threads'))
    .replace('{conversationLink4}', contact.conversation.replace('/conversation', '/chat'))
    .replace('{conversationLink5}', contact.conversation.replace('/conversation', '/chats'));
}
module.exports = { buildMessage };