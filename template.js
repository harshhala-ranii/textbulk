// templates.js

const templates = [
  // Template 1: short + casual (3 parts, with link)
  [
    "Hey {candidateFirstName} 🙂",
    "{recruiterName} from {company} emailed you at {candidateEmail} via Weekday.",
    "Subject: {emailSubject}\nCheck it here: {conversationLink1}"
  ],

  // Template 2: polite + formal (2 parts, with link)
  [
    "Hello {candidateFirstName},",
    "{recruiterName} from {company} sent you an email at {candidateEmail}.\nSubject: {emailSubject}\nYou can view it here: {conversationLink2}"
  ],

  // Template 3: slightly urgent (3 parts, no link)
  [
    "Hi {candidateFirstName},",
    "This is {recruiterName} from {company}.",
    "Could you please check the email I sent to {candidateEmail} via Weekday?\nSubject: {emailSubject}"
  ],

  // Template 4: conversational (2 parts, with link)
  [
    "Hey {candidateFirstName}, {recruiterName} here from {company}.",
    "I dropped you an email at {candidateEmail}. Subject: {emailSubject}\nSee thread: {conversationLink3}"
  ],

  // Template 5: simple + direct (3 parts, no link)
  [
    "Hi {candidateFirstName},",
    "{recruiterName} from {company} shared a role with you over email ({candidateEmail}).",
    "Subject: {emailSubject}"
  ],

  // Template 6: casual reminder (2 parts, with link)
  [
    "Hey {candidateFirstName}, hope you’re doing well 👋",
    "{recruiterName} from {company} emailed you at {candidateEmail}. Subject: {emailSubject}\nCheck here: {conversationLink4}"
  ],

  // Template 7: short professional (3 parts, no link)
  [
    "Hello {candidateFirstName},",
    "You should have received an email from {recruiterName} ({company}) at {candidateEmail}.",
    "Subject: {emailSubject}"
  ],

  // Template 8: friendly (2 parts, with link)
  [
    "Hi {candidateFirstName}, this is {recruiterName} from {company}.",
    "I reached out to you via Weekday at {candidateEmail}.\nSubject: {emailSubject}\nConversation: {conversationLink5}"
  ],

  // Template 9: neutral tone (3 parts, no link)
  [
    "Hey {candidateFirstName}, just a reminder —",
    "{recruiterName} from {company} sent you an email on {candidateEmail}.",
    "Subject: {emailSubject}"
  ],

  // Template 10: polished & respectful (2 parts, with link)
  [
    "Hello {candidateFirstName}, I hope this finds you well.",
    "{recruiterName} from {company} contacted you at {candidateEmail} regarding an opportunity.\nEmail Subject: {emailSubject}\nView here: {conversationLink2}"
  ]
];

let templateIndex = 0;

/**
 * Returns the next template in rotation as an array of messages
 */
function getNextMessage() {
  const msgs = templates[templateIndex];
  templateIndex = (templateIndex + 1) % templates.length;
  return msgs;
}

module.exports = { getNextMessage, templates };
